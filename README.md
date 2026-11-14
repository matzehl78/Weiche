# Weiche

Ein Logik-Puzzle für Mobile im Stil eines Stellwerks: Stelle Weichen und Flipflops so, dass jedes Paket auf dem Gleis seiner Farbe landet. Jedes Level ist allein mit Logik lösbar.

**Status:** Prototyp v0.1 für die Validierungsphase (spielbar im Browser).

## Spielen

Online: https://matzehl78.github.io/Weiche/ (wird bei jeder Änderung an `web/` automatisch aktualisiert)

Lokal: `web/index.html` im Browser öffnen. Es braucht keinen Build und keinen Server.

## Spielelemente

| Element | Form | Verhalten |
|---|---|---|
| Weiche (W) | rund | Bleibt während der Fahrt so, wie du sie stellst. |
| Flipflop (T) | eckig | Wechselt nach jedem Paket die Richtung. Du stellst nur die Startrichtung ein. |
| Gleis (GL) | farbiges Feld | Ziel für Pakete derselben Farbe und Form. |

## Inhalt des Prototyps

- 20 Level, prozedural erzeugt mit festem Seed. Ein Solver prüft, dass jedes Level genau eine Lösung hat.
- Tagesrätsel mit Seed aus dem Datum und teilbarem Emoji-Ergebnis.
- Tipps, Tempo 1–3×, Sterne-Wertung. Der Fortschritt wird im Browser gespeichert (localStorage).
- Formen zusätzlich zu Farben, damit auch Menschen mit Farbschwäche spielen können.

## Projektstruktur

```
web/index.html         Spielbarer Prototyp (eine Datei, ohne Abhängigkeiten außer Google Fonts)
docs/marktanalyse.md   Markt-, Wettbewerbs- und Umsatzanalyse, Entscheidungsmatrix, Roadmap
```

## Nächste Schritte

1. Validierung über 4 Wochen (Kriterien in `docs/marktanalyse.md`, Abschnitt 6)
2. Bei „Go": Umbau auf Phaser 4 + Vite + Capacitor 8, Android-Build über GitHub Actions
3. Geschlossener Test mit 12 Testern über 14 Tage, danach Release im Google Play Store
