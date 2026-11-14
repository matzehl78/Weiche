# Game-App als finanzielles Standbein – Marktanalyse & Entscheidung

Stand: 14.11.2026 · Grundlage: 10 Recherche-Agenten (2 Wellen), Websuche
Kennzeichnung: **[S]** = Schätzung/Annahme. Tracker-Zahlen (AppGoblin, Sensor Tower, AppMagic) sind Drittanbieter-Schätzungen.

---

## 0. Rahmenbedingungen

| Parameter | Wert |
|---|---|
| Entwickler | Solo, keine Programmier-/Grafik-Skills – Claude schreibt den Code |
| Plattform | Mobile, Android zuerst, iOS später |
| Budget | 2.000 € [Annahme] |
| Zeit | 10 h/Woche, Release ≤ 6 Monate [Annahme] |
| Ziel | 1.500 €/Monat nach 12 Monaten [Annahme] |
| Stack | Phaser 4 + Capacitor 8, Build über GitHub Actions |

---

## 1. Realitätscheck (wichtigstes Ergebnis)

| Kennzahl | Wert | Quelle |
|---|---|---|
| Ziel pro Tag | ≈ 50 € (≈ 57 $) | – |
| Benötigte DAU (realistisch, hybrid) | ≈ 1.500 | Rechenmodell [S] |
| Benötigte Installs | ≈ 5.600/Monat (~190/Tag), dauerhaft | Rechenmodell [S] |
| Organische Installs Indie ohne Marketing | 10–30/Tag | Postmortems (anekdotisch) |
| LTV pro Install | 0,16–0,31 $ [S] | Rechenmodell, Gegenprobe Postmortems |
| CPI Puzzle Android DE / US | 3,10 $ / 4,81 $ | AppsFlyer 2026 |
| Apps, die nie 1.000 $/Monat erreichen | > 80 % | RevenueCat 2025 |
| Indie-Mobile-Games ≥ 10.000 $/Monat | ~1 % | CAS.ai 2026 (Methodik unklar) |

**Folgerungen**
1. **Paid UA ist ausgeschlossen** – ein gekaufter Install kostet ~10× mehr, als er einbringt.
2. 1.500 €/Monat mit dem **ersten** Titel nach 12 Monaten ist ein **überdurchschnittliches** Ergebnis, kein Basisszenario.
3. Realistisch für Titel 1: **200–600 €/Monat** [S]. Das Ziel wird wahrscheinlicher mit **2–3 Titeln (Portfolio)**.
4. Hebel: hohe Retention (Puzzle/Idle), Hybrid-Monetarisierung, ASO, Daily-/Share-Mechanik, Featuring/Viralität.

---

## 2. Marktlage (Phase 1–2)

| Segment | Befund |
|---|---|
| Gesamtmarkt 2025 | Umsatz +0,2 %, Downloads rückläufig (Google Play −7,3 %) |
| Puzzle | 9,7 Mrd. Downloads, 10–14 Mrd. $ IAP; zweitstärkstes Genre |
| **Sort-Puzzle** | ~280 Mio. $ (+176 %), überholt „Blast" Anfang 2026 |
| Hybrid-Casual | IAP +20 % auf 4,2 Mrd. $; Hyper-Casual nur noch ~1 % Umsatz |
| Idle | Beste Retention (D1 35–50 %), Rewarded Ads passen natürlich |
| Daily-Puzzle | NYT 11,2 Mrd. Plays 2025; LinkedIn-Rätsel mit 84–86 % Wiederkehr; aber Klonflut |
| Deutscher Markt | Wenig Konkurrenz, aber geringe Zahlungsbereitschaft (Top-Wortspiel ≤ 3.200 $/Woche) |

**Häufigste Kritik bei Konkurrenten (alle Cluster):** Werbeflut, „Remove Ads" entfernt nicht alles, Pay-to-win/Progressionsmauern, Zufall statt Logik.
→ **Differenzierung für alle Konzepte: fair & werbearm, echter Einmalkauf, offline.**

---

## 3. Konzept-Trichter

21 Konzepte aus 4 Clustern → Top 3 vertieft:

| Konzept | Kern | Deep-Dive-Note (Ziel 1.500 €) |
|---|---|---|
| **Weiche** | Pakete über Weichen + Toggle-Flipflops ins Farbziel lenken; Solver garantiert Logik-Lösbarkeit | **4/10** (nach bestandener Validierung 5–6/10) |
| **50 Hertz** | Idle: Netzfrequenz mit Erzeugern/Speichern/Lastabwurf im Band halten | 3/10 (realistisch 200–600 €/Monat) |
| **Splitterfeld** | Hybrid-Casual: Glas-Hexagone in Kettenreaktionen zerspringen, Meta-Upgrades | 3/10 (nach Video-Test bis 5/10) |
| Wortschmiede | Deutsches Komposita-Tagesrätsel | nicht vertieft – Option Portfolio-Titel |

---

## 4. Entscheidungsmatrix

Gewichtung: Marktpotenzial 25 % · Konkurrenz 20 % · Aufwand 20 % · Skill-Fit (Claude + dein Fachwissen) 15 % · Monetarisierung 15 % · Motivation 5 % (unbekannt → neutral 3).
Skala 1–5, 5 = jeweils am günstigsten.

| Kriterium | Gewicht | Weiche | 50 Hertz | Splitterfeld | Wortschmiede |
|---|---|---|---|---|---|
| Marktpotenzial | 25 % | 4 | 2 | 4 | 2 |
| Konkurrenz (5 = wenig) | 20 % | 3 | 4 | 2 | 4 |
| Aufwand (5 = gering) | 20 % | 4 | 3 | 3 | 4 |
| Skill-Fit | 15 % | 5 | 5 | 2 | 2 |
| Monetarisierung | 15 % | 3 | 4 | 3 | 2 |
| Motivation | 5 % | 3 | 3 | 3 | 3 |
| **Gewichtet** | | **3,75** | **3,40** | **2,90** | **2,85** |

### Empfehlung
1. **Hauptprojekt: „Weiche"** – wachsendes Sort-Subgenre, unbesetzte Flipflop-Mechanik, Solver/Generator passt perfekt zu KI-Code und SPS-Logik, kein Server, Puzzle-Retention.
2. **Zweiter Titel: „50 Hertz"** – starke Retention, echter Fachwissen-USP, gut über r/incremental_games und Web-Portale testbar.
3. **„Splitterfeld" zurückstellen** – hängt fast komplett an Viralität, gesättigtes Genre, WebView-Performance-Risiko.

### Top-3-Risiken (Weiche)
| Risiko | Gegenmaßnahme |
|---|---|
| Zu wenig Sichtbarkeit (Weichen-Puzzles historisch klein, Railbound ~183 Tsd. Android) | „sort puzzle" im Titel, Daily-Rätsel mit Emoji-Teilen, 3 Shorts/Woche, Featuring-Bewerbung |
| Logik zu sperrig für Casual-Masse | Lange leichte Startphase, Flipflops erst ab Level 30, Hint-System |
| KI-Code schwer wartbar | Modulare Architektur, automatisierte Solver-Tests, strikter MVP-Scope |

---

## 5. Produktdefinition „Weiche" (MVP)

**Positionierung:** „Das Sort-Puzzle, das man durchdenkt statt durchprobiert."

1. Engine: Gleisgraph, Simulation, Weiche, Toggle-Flipflop
2. Solver + Generator, 300 vorab erzeugte Level (Brute-Force, ≤ 1.024 Zustände bei 10 Weichen)
3. 5 Mechaniken: Weiche, Flipflop, Farbfilter, Wartesignal, Doppelpaket
4. Undo + Hint (Hint per Rewarded Ad)
5. Daily-Rätsel (Datums-Seed) mit teilbarem Emoji-Ergebnis
6. Meta: Sterne + Kapitel-Bild, das sich füllt
7. AdMob (Interstitial ab Level 10, max. alle 3 Level, ≥ 90 s Abstand) + Rewarded + IAP „Remove Ads" 3,99 €
8. Analytics (Firebase), Haptik, Sound

Nach Launch: Events, Level-Editor, Skins, Streaks, Lokalisierung (EN, DE, PT-BR, ES, JA), iOS.

---

## 6. Validierung vor dem Bau (4 Wochen, ≤ 300 €)

| Woche | Maßnahme | Kosten |
|---|---|---|
| 1 | Claude baut Web-Prototyp (20 Level + Daily), Tracking, Hosting itch.io/GitHub Pages | 0–20 € |
| 1–3 | 12 Kurzvideos (TikTok/Shorts/Reels), 15 s, 3 Hook-Varianten | 0 € |
| 2–3 | Paid-Test der 3 besten Clips (DE/US/UK) auf die Web-Demo | 200 € |
| 2–4 | Playtests r/WebGames, r/puzzles, Discord; 5 Interviews | 0 € |
| 4 | Auswertung | – |

| Metrik | Go | No-Go |
|---|---|---|
| CTR Paid | ≥ 1,0 % | < 0,6 % |
| Kosten pro Klick | ≤ 0,25 € | > 0,50 € |
| Organische Videos | ≥ 1 Clip > 10.000 Views | alle < 1.000 |
| Level 10 erreicht | ≥ 40 % | < 20 % |
| Wiederkehr nächster Tag | ≥ 25 % | < 12 % |
| Daily geteilt | ≥ 3 % | < 1 % |

**Regel:** ≥ 4 von 6 im Go-Bereich → bauen. 2–3 → Thema/Hook ändern, erneut testen. Sonst → „50 Hertz" validieren.

Parallel (gleiche 4 Wochen, ~0 €): „50 Hertz"-Kern-Loop als Web-Prototyp auf itch.io + r/incremental_games „Feedback Friday".
Go-Schwellen 50 Hertz: Median-Session ≥ 8 min, Wiederkehr ≥ 25 %, ≥ 30 Upvotes.

---

## 7. Technik & Store (Phase 6)

| Thema | Ergebnis |
|---|---|
| Stack | Phaser 4 + Vite + Capacitor 8; AdMob: `@capacitor-community/admob` (inkl. UMP); IAP: `@capgo/native-purchases` oder RevenueCat |
| Build | GitHub Actions (kostenlos/sehr günstig); iOS später via Codemagic (kein Mac nötig) |
| Signierung | Play App Signing; **du sicherst Upload-Keystore + Passwort offline** |
| Google-Play-Konto | 25 $ einmalig, Ausweis + Telefon + Android-Gerät-Nachweis |
| **Pflichttest** | **12 Tester, 14 Tage ununterbrochen** im geschlossenen Test (neue persönliche Konten) |
| Ziel-API | Android 16 (API 36) |
| Zielgruppe | 13+ wählen (unter 13 → Familienrichtlinie, deutlich aufwendiger) |
| Zeit Prototyp → live | 6–10 Wochen |

### Rechtliches Deutschland
- **Gewerbeanmeldung** (15–65 €) + ELSTER-Fragebogen
- **Impressum** mit ladungsfähiger Anschrift (§ 5 DDG), Datenschutzerklärung (URL + in App)
- **DSGVO-Consent:** Google UMP (kostenlos, TCF v2.3)
- **DSA-Händlerstatus:** Adresse/Telefon werden öffentlich angezeigt – bei persönlichem Konto ggf. Privatadresse → Geschäftsadresse/Adressdienst prüfen. Frist laut Sekundärquelle 01.02.2027.
- **Steuern:** Kleinunternehmerregelung möglich (≤ 25.000 € Vorjahr), aber Reverse-Charge auf Google-Gebühr auch für Kleinunternehmer [S – Steuerberatung]; **W-8BEN** bei AdMob, sonst bis 24 % US-Quellensteuer.

### Aufgabenteilung
| Nur du | Claude |
|---|---|
| Konten (Play, AdMob, Apple), Ausweis, Bank, Steuern | Gesamter Code, Ads/IAP-Integration |
| 12 Tester organisieren | Build-Pipeline, Keystore erzeugen |
| Auf echtem Gerät testen, Spielspaß beurteilen | Store-Texte, Datenschutz-Entwürfe, Formular-Antworten |
| Keystore/Passwörter sichern | Fehlersuche anhand Logs/Screenshots |
| Rechtliche Entscheidungen, Uploads/Freigaben | Checklisten, ASO-Varianten, Clip-Konzepte |

---

## 8. Go-to-Market (Phase 7)

| Hebel | Umsetzung |
|---|---|
| ASO | Titel „Weiche: Sort Puzzle …" (30 Zeichen), Icon = eine abstrakte Form, Screenshot 1 entscheidet; Store-Listing-Experimente (Icon zuerst) |
| Android Vitals | Crash < 1,09 %, ANR < 0,47 % – sonst Sichtbarkeitsdrosselung |
| Pre-Registration | kostenlos; 50–60 % werden zu Installs; mit Belohnung +20 % |
| Kurzvideos | 3 Clips/Woche, Hook in 2 s, 70 % Gameplay / 30 % Devlog |
| Reddit | Feedback Friday (r/incremental_games), r/WebGames, r/puzzles – Regeln je Sub lesen |
| Discord | Community + Rekrutierung der 12 Pflicht-Tester |
| Web-Portale | Poki (100 % bei eigenem Traffic, 50/50 sonst, kuratiert), CrazyGames (offen, Revenue-Share) |
| Paid (≤ 600 €) | Nur Tests: TikTok Spark Ads 300 €, Google App Campaign 300 € – für CPI-/Retention-Daten |
| Lokalisierung | Store-Listing zuerst: EN → DE → PT-BR → ES → JA |
| Featuring | Bewerbung bei Google-Play-Indie-Programmen (2026 selbst prüfen) |

**Zeitanteil Marketing:** 2–3 h/Woche vor Launch, 5–6 h/Woche im Launch-Monat.

---

## 9. Budget (2.000 €)

| Posten | Betrag |
|---|---|
| Pflicht (Play-Konto, Gewerbe, Hosting) | ~100 € |
| Android-Testgerät (Low-End) | ~100 € |
| Validierung Weiche + 50 Hertz | ~300 € |
| Sound/Assets | ~150 € |
| Paid-Tests nach Launch | ~600 € |
| Steuerberatung (Ersteinrichtung) | ~400 € |
| Reserve (iOS 99 €, Lokalisierung, Unvorhergesehenes) | ~350 € |

Nicht enthalten: eigenes Claude-Abo.

---

## 10. Roadmap

| Zeitraum | Meilenstein |
|---|---|
| Woche 1–4 | Validierung Weiche + 50 Hertz (Web-Prototypen, Clips, Paid-Test). Parallel: Gewerbe, Play-/AdMob-Konto, Testgerät, Discord |
| Woche 5 | **Go/No-Go** |
| Woche 5–12 | MVP bauen, Pre-Registration live, 3 Clips/Woche, Tester sammeln |
| Woche 12–15 | Geschlossener Test (12 Tester, 14 Tage), Store-Listing, Lokalisierung |
| Woche 15–17 | Produktionszugang, **Launch Android** |
| Monat 5–8 | Updates alle 2–3 Wochen, Paid-Tests, Featuring-Bewerbung; Start Titel 2 |
| Monat 9–12 | iOS-Port des Gewinners, Titel 2 Launch; Bewertung gegen Ziel |

**Abbruchkriterium:** D1-Retention < 30 % drei Monate nach Launch → nicht weiter investieren, nächsten Titel bauen.

---

## Wichtigste Quellen
- GameAnalytics Benchmarks 2025: https://www.gameanalytics.com/reports/2025-mobile-gaming-benchmarks
- Naavik Puzzle-Subgenres: https://naavik.co/digest/how-niche-subgenres-are-reshaping-the-mobile-puzzle-market/
- Sensor Tower State of Gaming 2026: https://gamedevreports.substack.com/p/sensor-tower-state-of-gaming-2026
- AppMagic Markt 2025: https://gameworldobserver.com/2026/01/21/in-2025-the-revenue-of-the-mobile-gaming-market-grew-but-only-slightly-analysis
- Appodeal eCPM Q4/2024: https://appodeal.com/wp-content/uploads/2025/03/Quarterly_Mobile_eCPM_Report_-_Q4_2024.pdf
- AppsFlyer CPI 2026: https://www.appsflyer.com/?p=549948
- RevenueCat (Erfolgsverteilung): https://sherwood.news/tech/data-shows-most-new-apps-dont-just-fail-they-completely-bomb/
- Google Play Testpflicht: https://support.google.com/googleplay/android-developer/answer/14151465
- Android Vitals: https://developer.android.com/games/optimize/vitals
- AdMob/UMP Consent: https://developers.google.com/admob/android/privacy/gdpr
- Capacitor Ads: https://capacitorjs.com/docs/guides/ads
- Poki SDK: https://sdk.poki.com/
