#!/usr/bin/env node
/* Nimmt die Kurzvideos aus docs/kurzvideos.md automatisch auf (1080x1920, MP4).
   Voraussetzung: python3 tools/build.py, Playwright mit Chromium, ffmpeg.
   Aufruf: node tools/clips.js [Ausgabeordner] [Clip-Nummern, z. B. 1,4,7] */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const URL = 'file://' + path.join(ROOT, 'dist', 'index.html');
const OUT = path.resolve(process.argv[2] || path.join(ROOT, 'clips'));
const ONLY = process.argv[3] ? process.argv[3].split(',').map(Number) : null;
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'clips-'));
const sleep = ms => new Promise(r => setTimeout(r, ms));

const ZOOM = 2; // Seite wird doppelt so groß gezeichnet, damit 1080x1920 scharf gefüllt ist
const CSS = `
html{zoom:${ZOOM}}
#app{height:calc(100% - 270px)!important;margin-top:150px!important}
.tip{display:none!important}
#cap{position:fixed;top:0;left:0;right:0;height:150px;display:flex;align-items:flex-end;justify-content:center;padding:0 22px 12px;
  text-align:center;font:700 38px/1.05 'Barlow Condensed',sans-serif;letter-spacing:.02em;color:#fff;text-wrap:balance;z-index:50}
#capb{position:fixed;bottom:0;left:0;right:0;height:120px;display:flex;align-items:flex-start;justify-content:center;padding-top:12px;
  font:600 15px 'Barlow',sans-serif;color:#8fa0a6;letter-spacing:.14em;text-transform:uppercase;z-index:50}
.tap{position:fixed;width:60px;height:60px;margin:-30px 0 0 -30px;border-radius:50%;border:3px solid #fff1cf;background:rgba(255,241,207,.18);
  pointer-events:none;z-index:60;animation:tap .5s ease-out forwards}
@keyframes tap{from{transform:scale(.3);opacity:1}to{transform:scale(1.25);opacity:0}}
#cover{position:fixed;inset:0;background:#1b2225;z-index:100}`;

class Scene {
  constructor(page) { this.p = page; this.cur = null; this.L = null; this.speed = 1; }
  async caption(text) { await this.p.evaluate(t => { document.querySelector('#cap').textContent = t; }, text); }
  async reveal() { await this.p.evaluate(() => { const c = document.querySelector('#cover'); c && c.remove(); }); this.t1 = Date.now(); }
  async setSpeed(n) { while (this.speed !== n) { await this.p.evaluate(() => document.querySelector('#btnSpeed').click()); this.speed = this.speed === 3 ? 1 : this.speed + 1; } }
  async toMenu() { await this.p.evaluate(() => { if (!document.querySelector('#game').hidden) document.querySelector('#btnBack').click(); }); }
  async level(i, visible) {
    await this.toMenu();
    if (visible) { await sleep(500); await this.click('#btnLevels'); await sleep(700); await this.click(`.tile:nth-child(${i})`); }
    else await this.p.evaluate(i => { document.querySelector('#btnLevels').click(); document.querySelector(`.tile:nth-child(${i})`).click(); }, i);
    await this.read(`__weiche.levelData(${i})`);
  }
  async daily() {
    await this.toMenu(); await this.p.evaluate(() => document.querySelector('#btnDaily').click());
    await this.read(`__weiche.dailyData((d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'))(new Date()))`);
  }
  async read(expr) {
    this.L = await this.p.evaluate(`(()=>{const L=${expr},W=__weiche;
      const colors=s=>W.simulate(L.T,s,L.n).out.map(li=>L.T.nodes[li].color);
      const good=s=>{const c=colors(s);let k=0;while(k<L.n&&c[k]===L.target[k])k++;return k};
      // Alle falschen Stellungen, sortiert danach, wie spät der Fehler auftritt (spät zuerst)
      const k=L.internals.length,all=[];
      for(let m=0;m<(1<<k);m++){const s=new Array(L.T.nodes.length).fill(0);L.internals.forEach((ii,b)=>s[ii]=(m>>b)&1);const g=good(s);
        if(g<L.n)all.push({good:g,s,tDiff:L.internals.some(ii=>L.T.nodes[ii].kind==='T'&&s[ii]!==L.sols[0][ii]),d:L.internals.filter(ii=>s[ii]!==L.sols[0][ii]).length})}
      all.sort((a,b)=>b.good-a.good||a.d-b.d);
      const flips=all.slice(0,8).concat(all.slice(-2));
      return {internals:L.internals,start:L.start,sol:L.sols[0],n:L.n,flips}})()`);
    this.cur = this.L.start.slice();
  }
  async click(sel) {
    const b = await this.p.locator(sel).first().boundingBox();
    await this.p.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
  }
  async set(target, pause = 420) {
    for (const i of this.L.internals) if (this.cur[i] !== target[i]) {
      await this.click(`#boardSvg [data-node="${i}"] .body`); this.cur[i] = target[i]; await sleep(pause);
    }
  }
  async run() {
    await this.click('#btnStart');
    await this.p.waitForFunction(() => !document.querySelector('#overlay').hidden || document.querySelector('#status').classList.contains('bad'), null, { timeout: 60000 });
    return this.p.evaluate(() => !document.querySelector('#overlay').hidden);
  }
}

const CLIPS = [
  [1, 'Schaffst du das im ersten Versuch?', async s => { await s.level(7); await s.setSpeed(2); await s.reveal(); await sleep(2800); await s.set(s.L.sol); await sleep(300); await s.run(); await sleep(1800); }],
  [2, 'Wohin fährt das letzte Paket?', async s => { await s.level(9); await s.setSpeed(2); await s.set(s.L.sol, 0); await s.reveal(); await sleep(1800); await s.run(); await sleep(1800); }],
  [3, 'Nur 1 von 10 sieht den Fehler', async s => { await s.level(18); await s.setSpeed(2); await s.set(s.L.flips[0].s, 0); await s.reveal(); await sleep(2800); await s.run(); await sleep(2000); }],
  [4, 'Ich war so sicher …', async s => { await s.level(20); await s.setSpeed(2); await s.set(s.L.flips[0].s, 0); await s.reveal(); await sleep(1200); await s.run(); await sleep(2000); }],
  [5, 'Level 20 hat mich 9 Versuche gekostet', async s => {
    await s.level(20); await s.setSpeed(3); const f = s.L.flips; await s.set(f[f.length - 1].s, 0); await s.reveal(); await sleep(900);
    await s.run(); await sleep(700); await s.set(f[5].s, 260); await s.run(); await sleep(700);
    await s.set(f[0].s, 260); await s.run(); await sleep(700); await s.set(s.L.sol, 260); await s.run(); await sleep(2000); }],
  [6, 'Dieser eine Flipflop ruiniert alles', async s => { await s.level(20); await s.setSpeed(2); const f = s.L.flips.slice(1).find(x => x.tDiff) || s.L.flips[1]; // nicht dieselbe Stellung wie Clip 4
    await s.set(f.s, 0); await s.reveal(); await sleep(1500); await s.run(); await sleep(2000); }],
  [7, 'Ich baue ein Spiel, ohne programmieren zu können', async s => {
    await s.level(1); await s.setSpeed(2); await s.reveal(); await sleep(900); await s.set(s.L.sol); await s.run(); await sleep(1200);
    await s.setSpeed(3); await s.level(20, true); await sleep(900); await s.set(s.L.sol, 230); await s.run(); await sleep(2000); }],
  [8, 'Tag 1 meines Spiels: Was fehlt?', async s => { await s.level(5); await s.setSpeed(2); await s.reveal(); await sleep(1200); await s.set(s.L.sol); await s.run(); await sleep(1800); }],
  [9, 'Ich programmiere Steuerungen. Jetzt als Spiel.', async s => { await s.level(8); await s.setSpeed(2); await s.reveal(); await sleep(1200); await s.set(s.L.sol); await s.run(); await sleep(1800); }],
  [10, 'Level 1', async s => {
    await s.level(1); await s.setSpeed(2); await s.set(s.L.sol, 0); await s.reveal(); await sleep(900); await s.run(); await sleep(900);
    await s.level(20); await s.caption('Level 20'); await s.setSpeed(3); await sleep(1500); await s.set(s.L.sol, 230); await s.run(); await sleep(2000); }],
  [11, 'Das Tagesrätsel von heute', async s => { await s.daily(); await s.setSpeed(2); await s.reveal(); await sleep(1500); await s.set(s.L.sol); await s.run(); await sleep(2800); }],
  [12, 'Sag mir, was ich falsch mache', async s => {
    await s.level(18); await s.setSpeed(2); const f = s.L.flips; await s.set(f[0].s, 0); await s.reveal(); await sleep(1200);
    await s.run(); await sleep(1300); await s.set(f[Math.min(1, f.length - 1)].s, 450); await s.run(); await sleep(2200); }],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const [nr, text, fn] of CLIPS) {
    if (ONLY && !ONLY.includes(nr)) continue;
    const ctx = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1, locale: 'de-DE',
      recordVideo: { dir: TMP, size: { width: 1080, height: 1920 } } });
    await ctx.route('**goatcounter**', r => r.abort());
    await ctx.addInitScript(() => { try { if (!localStorage.getItem('weiche.v1')) localStorage.setItem('weiche.v1', JSON.stringify({ unlocked: 20, stars: {}, daily: {} })); } catch (e) {} });
    const t0 = Date.now();
    const page = await ctx.newPage();
    await page.goto(URL);
    await page.addStyleTag({ content: CSS });
    await page.evaluate(([text, z]) => {
      for (const [id, t] of [['cover', ''], ['cap', text], ['capb', 'Link im Profil']]) { const d = document.createElement('div'); d.id = id; d.textContent = t; document.body.appendChild(d); }
      addEventListener('mousedown', e => { const d = document.createElement('div'); d.className = 'tap'; d.style.left = e.clientX / z + 'px'; d.style.top = e.clientY / z + 'px'; document.body.appendChild(d); setTimeout(() => d.remove(), 600); }, true);
    }, [text, ZOOM]);
    await page.evaluate(() => document.fonts.ready);
    const s = new Scene(page);
    await fn(s);
    if (process.env.DEBUG) console.log('  Fehler tritt auf nach richtigen Paketen:', s.L.flips.slice(0, 3).map(f => f.good).join(', '), 'von', s.L.n);
    const lead = ((s.t1 - t0) / 1000 + 0.15).toFixed(2);
    const video = page.video();
    await ctx.close();
    const src = await video.path(), dst = path.join(OUT, `clip-${String(nr).padStart(2, '0')}.mp4`);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', lead, '-i', src, '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-shortest',
      '-vf', 'scale=1080:1920:flags=lanczos,fps=30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', dst]);
    const dur = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', dst]).toString().trim();
    console.log(`clip-${String(nr).padStart(2, '0')}.mp4  ${Number(dur).toFixed(1)} s  ${(fs.statSync(dst).size / 1e6).toFixed(1)} MB  „${text}"`);
  }
  await browser.close();
  fs.rmSync(TMP, { recursive: true, force: true });
})();
