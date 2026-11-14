# Kurzvideo-Konzepte für „Weiche"

12 Clips für TikTok, YouTube Shorts und Instagram Reels. Ziel der Testphase: herausfinden, welcher Einstieg (Hook) Menschen zum Weiterschauen und zum Klick auf das Spiel bringt.

Spiel-Link für Profil und Kommentare: https://matzehl78.github.io/Weiche/

## Grundregeln

| Regel | Umsetzung |
|---|---|
| Länge | 10–20 Sekunden, Hochformat 9:16 |
| Einstieg | In den ersten 2 Sekunden bewegt sich schon ein Paket. Kein Logo, kein Intro. |
| Text | Eine Zeile oben im Bild, groß, maximal 8 Wörter |
| Ende | Clip endet kurz vor oder genau mit der Auflösung, damit er als Schleife läuft |
| Ton | Originalton der Bildschirmaufnahme oder ruhige, lizenzfreie Musik aus der Plattform-Bibliothek |
| Aufnahme | Automatisch mit `node tools/clips.js` (1080×1920, MP4, ohne Ton) oder als Bildschirmaufnahme am Handy mit Tempo 2× |
| Einer für alle | Denselben Clip auf allen drei Plattformen hochladen |

## Die drei Hook-Typen im Test

| Typ | Idee | Beispieltext |
|---|---|---|
| A – Herausforderung | Zuschauer soll mitdenken | „Schaffst du das im ersten Versuch?" |
| B – Scheitern | Ein Fehler erzeugt Kommentare | „Ich war so sicher …" |
| C – Entstehung | Solo-Entwickler-Geschichte | „Ich baue ein Spiel ohne programmieren zu können" |

## Die 12 Clips

| Nr. | Hook | Titel im Bild | Was man sieht | Level |
|---|---|---|---|---|
| 1 | A | „Schaffst du das im ersten Versuch?" | Level kurz zeigen, 3 Sekunden Standbild zum Nachdenken, dann Start und Auflösung | 7 |
| 2 | A | „Wohin fährt das letzte Paket?" | Start drücken, kurz vor dem letzten Paket einfrieren, dann auflösen | 9 |
| 3 | A | „Nur 1 von 10 sieht den Fehler" | Falsche Stellung zeigen, Start, das Paket landet falsch | 18 |
| 4 | B | „Ich war so sicher …" | Selbstbewusst starten, das vorletzte Paket landet falsch, roter Rahmen | 20 |
| 5 | B | „Level 20 hat mich 9 Versuche gekostet" | Schneller Zusammenschnitt von Fehlversuchen, am Ende die Lösung | 20 |
| 6 | B | „Dieser eine Flipflop ruiniert alles" | Nahaufnahme: Flipflop schaltet um, Paket fährt falsch | 20 |
| 7 | C | „Ich baue ein Spiel ohne programmieren zu können" | Level 1 → Level 20 im Schnelldurchlauf, dazu 2 Sätze Text | 1, 20 |
| 8 | C | „Tag 1 meines Spiels: Was fehlt?" | 10 Sekunden Gameplay, Frage an die Zuschauer | 5 |
| 9 | C | „Ich programmiere Steuerungen. Jetzt als Spiel." | Gameplay mit leuchtender Fahrstraße, Bezug zur Steuerungstechnik | 8 |
| 10 | A | „Level 1 gegen Level 20" | Geteilter Vergleich: erst das einfache, dann das große Level | 1, 20 |
| 11 | A | „Das Tagesrätsel von heute" | Tagesrätsel lösen, am Ende das Emoji-Ergebnis zeigen | Tagesrätsel |
| 12 | B | „Sag mir, was ich falsch mache" | Zwei Fehlversuche hintereinander, Clip endet ohne Lösung | 18 |

Für die Clips mit Fehlversuch eignen sich nur Level 18 und 20: In allen anderen Leveln scheitert eine falsche Stellung schon beim ersten oder zweiten Paket.

Clip 12 endet bewusst ohne Auflösung. Solche Clips bekommen oft die meisten Kommentare, weil Zuschauer die Lösung schreiben wollen.

## Zeitplan (3 Wochen, etwa 2 Stunden pro Woche)

| Woche | Clips | Ziel |
|---|---|---|
| 1 | 1, 4, 7, 2 | Je ein Clip pro Hook-Typ, dazu ein zweiter vom Typ A |
| 2 | 5, 8, 3, 11 | Den schwächsten Typ der ersten Woche weglassen oder abwandeln |
| 3 | Die 4 übrigen, angepasst an den besten Hook-Typ | Den Gewinner bestätigen |

Posten: Dienstag, Donnerstag, Samstag und Sonntag, jeweils am frühen Abend.

## Auswertung

Pro Clip notieren: Aufrufe nach 48 Stunden, durchschnittliche Wiedergabedauer, Kommentare, gespeicherte und geteilte Beiträge.

| Kennzahl | Go | No-Go |
|---|---|---|
| Bester Clip | mehr als 10.000 Aufrufe | alle unter 1.000 |
| Durchschnittliche Wiedergabedauer | mindestens 60 % der Cliplänge | unter 40 % |
| Gespeichert und geteilt pro 1.000 Aufrufe | mehr als 10 | unter 3 |
| Neue Besucher im Spiel (GoatCounter, `visit/first`) an Clip-Tagen | sichtbarer Anstieg | kein Unterschied |

Die Schwellen sind Schätzungen aus der Marktanalyse (`marktanalyse.md`, Abschnitt 6). Neue Konten starten mit geringer Reichweite, deshalb zählt der Vergleich der Clips untereinander mehr als die absoluten Zahlen.

## Bezahlter Test (optional, 200 €)

Die 3 besten organischen Clips als Anzeige schalten (TikTok Spark Ads, Zielländer Deutschland und ein englischsprachiges Land), Ziel-Link ist das Spiel. Messen: Klickrate (Go ab 1,0 %) und Kosten pro Klick (Go bis 0,25 €). Vor dem bezahlten Test müssen die Datenschutzangaben vollständig sein.

## Vor dem ersten öffentlichen Clip

- [ ] Verantwortliche Person und Kontakt in `static/datenschutz.html` eintragen
- [ ] Für englischsprachige Zuschauer: Spieltexte von „Weiche" auf Englisch anbieten
- [ ] Eigenes Konto für das Spiel anlegen, Link zum Spiel ins Profil
