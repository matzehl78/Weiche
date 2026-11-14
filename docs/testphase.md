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
2. Der Code steht in `src/weiche.html` und `src/50hertz.html` in der Zeile `const CONFIG={goatcounter:'weiche'};`. Aktuell eingetragen: `weiche` (Statistik aktiv).
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

## 3. Zweiter Prototyp: 50 Hertz

Link: https://matzehl78.github.io/Weiche/50hertz/ (Deutsch und Englisch, Umschalter oben rechts)

Gedacht für den Feedback-Test in englischsprachigen Communities, zum Beispiel im wöchentlichen „Feedback Friday" von r/incremental_games. Vor dem Posten die Regeln des jeweiligen Subreddits lesen.

| Ereignis | Bedeutung |
|---|---|
| `/ev/50hz/visit/first`, `/ev/50hz/visit/next-day` | Erster Besuch, Wiederkehr am Folgetag |
| `/ev/50hz/min-1` bis `/ev/50hz/min-30` | Spielzeit-Marken: 1, 3, 5, 8, 15 und 30 Minuten erreicht |
| `/ev/50hz/buy/autoGas` usw. | Ausbau gekauft |
| `/ev/50hz/blackout`, `/ev/50hz/shed` | Netzausfall, Lastabwurf benutzt |

| Kennzahl | Berechnung | Go | No-Go |
|---|---|---|---|
| Spielzeit | Anteil `min-8` an `visit/first` | ≥ 50 % | < 25 % |
| Wiederkehr am nächsten Tag | `visit/next-day` ÷ `visit/first` | ≥ 25 % | < 15 % |
| Resonanz | Upvotes und Kommentare im Feedback-Thread | ≥ 30 Upvotes, Wunsch nach Mobile-Version | kaum Reaktion, „zu kompliziert" |

## 4. Datenschutz

Die Datenschutzerklärung liegt unter https://matzehl78.github.io/Weiche/datenschutz.html und ist in beiden Spielen verlinkt. **Vor der öffentlichen Verbreitung** müssen in `static/datenschutz.html` Name, Anschrift und E-Mail der verantwortlichen Person eingetragen werden. Die Schriften werden lokal ausgeliefert, es gibt keine Verbindung zu Google Fonts.
