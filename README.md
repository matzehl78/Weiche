# Weiche und 50 Hertz

Zwei Spiele-Prototypen für die Validierungsphase. Beide laufen im Browser, ohne Installation.

| Spiel | Link | Idee |
|---|---|---|
| **Weiche** (v0.3) | https://matzehl78.github.io/Weiche/ | Logik-Puzzle im Stil eines Stellwerks: Weichen und Flipflops so stellen, dass jedes Paket auf dem Gleis seiner Farbe landet. |
| **50 Hertz** (v0.1) | https://matzehl78.github.io/Weiche/50hertz/ | Idle-Spiel: die Netzfrequenz mit Kraftwerken, Speichern und Lastabwurf im Band halten und das Netz ausbauen. Deutsch und Englisch. |

## Weiche

| Element | Form | Verhalten |
|---|---|---|
| Weiche (W) | rund | Bleibt während der Fahrt so, wie du sie stellst. |
| Flipflop (T) | eckig | Wechselt nach jedem Paket die Richtung. Du stellst nur die Startrichtung ein. |
| Gleis (GL) | farbiges Feld | Ziel für Pakete derselben Farbe und Form. |

- 20 Level, prozedural erzeugt mit festem Seed. Ein Solver prüft, dass jedes Level genau eine Lösung hat.
- Tagesrätsel mit Seed aus dem Datum und teilbarem Emoji-Ergebnis.
- Tipps, Tempo 1–3×, Sterne-Wertung, Fragebogen mit 5 Fragen.

## 50 Hertz

- Ein Spieltag dauert 4 Minuten. Last, Wind und Sonne ändern sich über den Tag.
- Gas regelt schnell und ist teuer, Kohle ist günstig und träge. Wind und Solar sind kostenlos und schwanken.
- Geld gibt es nur im Band von 49,8 bis 50,2 Hz. Über 1 Hz Abweichung fällt das Netz aus.
- Der Sekundärregler automatisiert das Nachregeln. Ab dann läuft das Netz auch ohne Eingriffe.

## Projektstruktur

```
src/weiche.html        Spiel „Weiche" (Seiten-Fragment)
src/50hertz.html       Spiel „50 Hertz" (Seiten-Fragment)
static/                Schriften (lokal gehostet) und Datenschutzseite
tools/build.py         Baut aus src/ und static/ die fertige Seite in dist/
docs/marktanalyse.md   Markt-, Wettbewerbs- und Umsatzanalyse, Entscheidungsmatrix, Roadmap
docs/testphase.md      Fragebogen, Statistik und Go/No-Go-Kennzahlen
docs/kurzvideos.md     12 Kurzvideo-Konzepte mit Zeitplan und Auswertung
```

## Lokal bauen

```bash
python3 tools/build.py
```

Danach `dist/index.html` im Browser öffnen. Bei jeder Änderung an `src/`, `static/` oder `tools/` baut und veröffentlicht GitHub Actions die Seite automatisch.

## Statistik und Datenschutz

Beide Spiele senden anonyme Ereignisse an GoatCounter (keine Cookies, keine personenbezogenen Daten). Der Code steht jeweils in der Zeile `const CONFIG={goatcounter:'weiche'};`. Die Datenschutzerklärung liegt in `static/datenschutz.html`.

## Nächste Schritte

1. Validierung über 4 Wochen (Kriterien in `docs/marktanalyse.md`, Abschnitt 6)
2. Bei „Go": Umbau auf Phaser 4 + Vite + Capacitor 8, Android-Build über GitHub Actions
3. Geschlossener Test mit 12 Testern über 14 Tage, danach Release im Google Play Store
