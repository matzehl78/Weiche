#!/usr/bin/env python3
"""Baut die Webseite: src/*.html (Seiten-Fragmente) + static/ -> dist/

Die Fragmente in src/ laden die Schriften von Google Fonts, damit sie als
claude.ai-Vorschau funktionieren. Für die öffentliche Seite ersetzt dieses
Skript das durch die lokal gehosteten Schriften aus static/fonts/.
"""
import pathlib, shutil

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
PAGES = [("weiche.html", "index.html", ""), ("50hertz.html", "50hertz/index.html", "../")]
HEAD = """<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}</style>
"""
SKIP = ("fonts.googleapis.com", "fonts.gstatic.com", "claude:viewport-fit-sides")

shutil.rmtree(DIST, ignore_errors=True)
shutil.copytree(ROOT / "static", DIST)
for src, out, rel in PAGES:
    text = (ROOT / "src" / src).read_text(encoding="utf-8")
    cut = text.index("</style>") + len("</style>")
    head = "\n".join(l for l in text[:cut].split("\n") if not any(k in l for k in SKIP))
    head = head.replace("<style>", f'<link rel="stylesheet" href="{rel}fonts.css">\n<style>', 1)
    target = DIST / out
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(f"{HEAD}{head}\n</head>\n<body>{text[cut:]}</body>\n</html>\n", encoding="utf-8")
    print("gebaut:", target.relative_to(ROOT))
