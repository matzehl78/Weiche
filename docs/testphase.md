# Testphase – Anleitung

Ziel: in 4 Wochen entscheiden, ob „Weiche" gebaut wird (Go/No-Go-Schwellen in `marktanalyse.md`, Abschnitt 6).

Spiel-Link für Tester: https://matzehl78.github.io/Weiche/

## 1. Fragebogen (im Spiel eingebaut)

Tester erreichen ihn über **Menü → Feedback geben** oder nach Level 10 und Level 20.

| Nr. | Frage | Antwort |
|---|---|---|
| 1 | Wie viel Spaß macht dir das Spiel? | 1–5 |
| 2 | Wie verständlich war der Flipflop? | 1–5 |
| 3 | Wie findest du die Schwierigkeit? | zu leicht / genau richtig / zu schwer |
| 4 | Würdest du das Spiel als App installieren? | ja / vielleicht / nein |
| 5 | Was hat dich gestört oder was hat dir gefehlt? | Freitext |

Am Ende kopiert der Tester einen Textblock und schickt ihn dir (WhatsApp, Mail, Discord). Der Block enthält automatisch den Spielstand: gelöste Level, Sterne, Spieltage, Gerät sowie je Level Versuche, Fehlversuche und Tipps.

### Einladungstext für Tester

> Ich teste eine Spielidee: ein Logik-Puzzle mit Weichen. Magst du 10 Minuten spielen?
> https://matzehl78.github.io/Weiche/
> Wenn du magst, tippe danach im Menü auf „Feedback geben" und schick mir den kopierten Text zurück.

### Auswertung der Fragebögen

| Signal | Gut | Kritisch |
|---|---|---|
| Spaß (Frage 1), Durchschnitt | ≥ 3,8 | < 3,0 |
| Flipflop verständlich (Frage 2), Durchschnitt | ≥ 4,0 | < 3,0 → Einführung in Level 3 überarbeiten |
| „genau richtig" (Frage 3) | ≥ 60 % | „zu schwer" > 40 % → Kurve abflachen |
| „ja" bei Frage 4 | ≥ 40 % | < 20 % |
| Level 10 erreicht (aus Spielstand) | ≥ 40 % der Tester | < 20 % |
| Mehr als 1 Spieltag (aus Spielstand) | ≥ 25 % | < 12 % |

Level mit auffällig vielen Fehlversuchen oder Tipps im Spielstand sind Kandidaten für eine Überarbeitung.

## 2. Anonyme Nutzungsstatistik (optional, für Tester ohne Rückmeldung)

Das Spiel kann anonyme Ereignisse an [GoatCounter](https://www.goatcounter.com) senden: keine Cookies, keine personenbezogenen Daten, kostenlos für nicht-kommerzielle Nutzung. Solange kein Code eingetragen ist, sendet das Spiel **nichts**.

### Einrichten
1. Auf goatcounter.com ein Konto anlegen und einen Code wählen, z. B. `weiche` (ergibt `weiche.goatcounter.com`).
2. In `web/index.html` steht der Code in der Zeile `const CONFIG={goatcounter:'weiche'};`. Aktuell eingetragen: `weiche` (Statistik aktiv).
3. Änderung committen. GitHub Pages aktualisiert sich automatisch.

### Gesendete Ereignisse

| Ereignis | Bedeutung |
|---|---|
| `/ev/visit/first` | Erster Besuch eines Browsers |
| `/ev/visit/day-N` | N-ter Spieltag (2 bis 7) |
| `/ev/visit/next-day` | Wiederkehr genau am Tag nach dem ersten Besuch |
| `/ev/start/L07`, `/ev/start/daily` | Level bzw. Tagesrätsel geöffnet |
| `/ev/win/L07`, `/ev/win/daily` | gelöst |
| `/ev/perfect/L07` | im ersten Versuch ohne Tipp gelöst |
| `/ev/fail/L07` | Fehlversuch |
| `/ev/hint/L07` | Tipp benutzt |
| `/ev/share/daily` | Tagesrätsel-Ergebnis kopiert |
| `/ev/feedback/copied` | Fragebogen ausgefüllt und kopiert |

### Kennzahlen für Go/No-Go

| Kennzahl | Berechnung | Go | No-Go |
|---|---|---|---|
| Level 10 erreicht | `win/L10` ÷ `visit/first` | ≥ 40 % | < 20 % |
| Wiederkehr am nächsten Tag | `visit/next-day` ÷ `visit/first` | ≥ 25 % | < 12 % |
| Tagesrätsel geteilt | `share/daily` ÷ `win/daily` | ≥ 3 % | < 1 % |
| Abbruch-Level | größter Abfall zwischen `start/Lxx` und `win/Lxx` | – | Level überarbeiten |

Hinweis: Sobald die Statistik aktiv ist und der Link öffentlich verteilt wird, gehört ein kurzer Datenschutzhinweis auf die Seite. Im Spiel erscheint dann automatisch der Zusatz „anonyme Nutzungsstatistik ohne Cookies" im Menü.
