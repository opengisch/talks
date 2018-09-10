---?image=assets/images/frisch-gestrichen.jpg&size=40%
@title[QGIS 3]

@css[title-top-center](Neu in QGIS 3)

Note:

Willkommen.
Nur zur Info: Das heisst neues in QGIS 3, wir sehen was in QGIS 3.0 und 3.2
möglich ist. Und in weiteren Releases von QGIS 3 möglich sein wird.

---
@title[Wer bin ich?]
# Wer bin <span class="green">ich</span>?

![mkuhn](assets/images/mbernasocchi.jpeg)

Note:

Biografie:

* Während der ersten Codezeile QGIS war ich an der Ausbildung zum
  Applikationsentwickler (Abschluss zwischen den Releases 0.4 Baby und 0.5
  Bandit)
* Während dem Release von QGIS 1.0 Kore habe ich gerade meine Bachelorarbeit in
  Geografie geschrieben
* Meinen ersten Commit habe ich für QGIS 1.8 gemacht
* Selbständig gemacht habe ich mich mit QGIS 2.0
* Während dem Release von QGIS 3 war ich in Buenos Aires auf der Rückreise von
  Patagonien

---
@title[opengis]

#### OPENGIS.ch


@div[left-50]

@ul
- Open Source GIS
- Entwicklung
- Systemarchitektur
- Beratung
- Schulung
@ulend

@divend

@div[right-50]

![opengis](assets/images/opengis.png)

@divend

Note:
- Existiert seit QGIS 2.6 Brighton
- Mehrere hochaktive QGIS Kernentwickler
- Vizepräsident QGIS Projekt

---
@title[Warum QGIS 3]

# Warum QGIS <span class="green">3</span>?

![qgis3](assets/images/qgis3.png)

---
@title[Charts]

@css[title-top-right](Man könnte jetzt Charts zeigen)

<br>

<canvas data-chart="line">
<!--
{
 "data": {
  "labels": ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
  "datasets": [
   {
    "data":[1,2,3,6,5,5,7,7,10,14,20,28,30,40,42],
    "label":"QGIS","borderColor":"rgba(4,138,14,1)", "backgroundColor":"rgba(4,138,14,.2)"
   },
   {
    "data":[38,57,56,63,68,68,76,80,79,85,87,86,77,80,76],
    "label":"Herkömmliches GIS","borderColor":"rgba(4,92,183,1)", "backgroundColor":"rgba(4,92,138,.2)"
   }
  ]
 },
 "options": { "responsive": "true" }
}
-->
</canvas>

---
@title[Charts]

@css[title-top-right](Die Schweizer Variante)

<br>

<canvas data-chart="line">
<!--
{
 "data": {
  "labels": ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
  "datasets": [
   {
    "data":[0,0,0,0,0,4,7,9,18,15,25,21,41,49,53],
    "label":"QGIS","borderColor":"rgba(4,138,14,1)", "backgroundColor":"rgba(4,138,14,.2)"
   },
   {
    "data":[0,13,17,30,26,19,53,38,38,50,41,62,43,47,50],
    "label":"Herkömmliches GIS","borderColor":"rgba(4,92,183,1)", "backgroundColor":"rgba(4,92,138,.2)"
   }
  ]
 },
 "options": { "responsive": "true" }
}
-->
</canvas>

---
@title[Weil es nötig war]

# Weil es <span class="green">nötig</span> war

@div[left-50]

![Ueberladen](assets/images/ueberladen.jpg)

@divend

@div[right-50]

@ul
- Qt 4 -> Qt 5
- Python 2 -> Python 3
- Aufräumarbeiten
@ulend

@divend

---
@title[Los]
# Und <span class="green">los</span> geht es

![](assets/images/start.jpg)

---
@title[Geschwindigkeit]
# Alles ist <span class="green">schneller</span>

![](assets/images/speed.png)

---
@title[Stabilität]
# Alles ist <span class="green">stabiler</span>

![](assets/images/hochseil.png)

---
@title[3D]

# 3D

![Video](https://vimeo.com/289046475)

---
@title[Mehrere Kartenfenster]

@css[title-top-center](Mehrere Kartenfenster)
![Video](https://vimeo.com/289046458)

---
@title[GeoPackage]

# Standardformat <span class="green">GeoPackage</span>

![](assets/images/verpacken.jpg)

---?image=assets/images/locator.gif&size=70%&position=bottom
@title[Locator]

@css[title-top-center](Integrierte <span class="green">Suche</span>)

---
@title[Server]

# Reorganisation <span class="green">Server</span>

@ul
`
rm -rf src/server
`

---
@title[Server]

# Reorganisation <span class="green">Server</span>

@div[left-50]

![server codesprint](assets/images/servercodesprint.jpg)

@divend

@div[right-50]

@ul
- Modularisierung
- Neuschreiben des Projektcodes
- Tests
- Performance Tests
- OGC Compliance Tests
@ulend

@divend

---?image=assets/images/report.png&size=40%&position=bottom
@title[Reports]

@css[title-top-center](Reports)

---
@title[Ausdrücke]

# Einige neue <span class="green">Ausdrücke</span>

[Einige neue Ausdrücke](http://changelog.qgis.org/en/qgis/version/3.0.0/#category-50)

---?image=assets/images/vertextool.gif&size=50%&position=bottom
@title[Datenerfassung - Digitalisieren]

@css[title-top-center](Datenerfassung / Digitalisieren)


---?image=assets/images/scharf.jpg&size=50%&position=bottom
@title[Retina Support]

@css[title-top-center](<span class="green">Retina/HiDPI</span> Unterstützung)

Note:
Damit die Bilder gestochen scharf sind

---?image=assets/images/saveasimage.png&size=40%&position=bottom
@title[Als Bild Speichern]

@css[title-top-center](Als Bild Speichern)

---
@title[Mesh Layers]

# Mesh Layers

![mesh layer](assets/images/mesh.gif)

---?image=assets/images/clusterrenderer.png&size=50%&position=bottom
@title[Point cluster renderer]

@css[title-top-center](Cluster Renderer für Punkte)

---
@title[Labelplatzierung]

# Label manuell platzieren

![label placement](assets/images/label-placement.png)

Note:

Labels platzieren ist schon lange möglich.

 * Nun geht es aber auch ohne Änderungen an der Datenstruktur
 * qgd Datei neben der QGIS Projektdatei: Auxiliary storage

---
@title[zip quo vadis]

# QGZ quo vadis

---

@title[Vollbildmodus]

# Vollbildmodus

Im Zentrum steht die Karte

---

@title[Vollbildmodus]

# Vollbildmodus

![fullscreen](assets/images/fullscreen.gif)

---

@title[Alpha]

## Alphakanal direkt in der Farbauswahl

![alpha](assets/images/alpha.png)

---

@title[Benutzeroberfläche - Konsistenz]

#### Benutzeroberfläche <span class="green">Konsistenz</span>

@div[left-50]

@ul
**Deckkraft <-> Alpha**

- Im Normalfall Deckkraft
- Skala in `%`, intern von 0-1

**Rotation**

- Immer im Uhrzeigersinn

**Skala**

- 1:25'000 oder 25'000
@ulend

@divend

---

@title[Live layers]

# Live layers

![live layers](assets/images/livelayer.gif)

---

@title[Notify von Postgres]

# PostgreSQL NOTIFY

![postgisnotify](assets/images/postgisnotify.gif)

---

@title[Trace with offset]

## Mit fixem Abstand verfolgen

![trace with offset](assets/images/tracewithoffset.gif)

---

@title[Verarbeitungswerkzeuge]

# Verarbeitungs-werkzeuge

## Generalüberholung

---

@title[Verarbeitungswerkzeuge]

# Verarbeitungs-werkzeuge

## Viele Algorithmen jetzt im Kern

---
@title[Verarbeitungswerkzeuge]

# Verarbeitungs-werkzeuge

## Parallelisierung

---?image=assets/images/featurefilter.png&size=50%&position=bottom

@title[Verarbeitungswerkzeuge]

@css[title-top-right](Verarbeitungswerkzeuge - Verbesserungen)


---

@title[Verarbeitungswerkzeuge - Modelle]

# Modelle Verarbeitungswerkzeuge

---

@title[Metadaten]

## Metadaten

### Weil ich es mir wert bin

![](assets/images/metadata.png)

---

@title[Live demo]

## Live demo

Note:
- Processing
  - Centroid auf Polygonen
  - Buffer auf Punkten
  - Layer entfernen
  - QGIS schliessen

- Suche
  - Swiss locator
  - "LK500"
  - "Bundesplatz 3"
  - "Olten"

---

@title[Migration]

# Migration

---

@title[Plugins]

# Plugins

---

@title[Projektes]

# Projekte

---

@title[Workflows]

# Workflows

---

@title[Fragen]

# Fragen?

---

# Quellen

- [QGIS Changelog 3.0](https://qgis.org/en/site/forusers/visualchangelog30/)
- [QGIS Changelog 3.2](http://changelog.qgis.org/en/qgis/version/3.2.0/)
- [Kurt Menke, Bird's Eye View](https://www.birdseyeviewgis.com/blog/2018/2/22/my-favorite-features-of-qgis-30to-date)
- [GisGeography](https://gisgeography.com/qgis-3/)

---

# Danke

- Entwickler
- Dokumentationsteam
- Sponsoren
- Anwendergruppen
- Engagierte Personen
- Und so viele weitere!!
