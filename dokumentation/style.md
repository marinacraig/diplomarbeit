#Styleanpassungen von Design Vorgaben von Stephanie Batliner bzw. Webprofessionals
##Bilder
Da unklar ist, ob die Bilder öffentlich verwendet werden dürfen, habe ich 
welche zur freien Verfügung herunter geladen. Entgegen der Styleangaben sind es 
Stockfotos.

##Schriften 
Adelle und Proxima Nova:  
Diese Schriften können nicht via google fonts bzw. kostenlos 
eingebunden werden.  
**kostenlose Alternativen:**  
Bitter statt Adelle
Sie kommt vor allem bei Überschriften, d.h. grösseren 
Schrift- grössen zum Einsatz.  
Encode Sans Semi Expanded statt Proxima Nova
Sie ist modern, klar und geometrisch. Die Schrift wird 
hauptsächlich für Fliesstext, Labels, Buttons genutzt.  
Zudem ist keine passende Schrift oder Logoteile für
 Festival Lovers in der Navigation vorhanden. Dort 
 wird eine weitere Google Font
verwendet.  
###Titel
Zwar sind h1-h3 im Styleguide definiert, aber sie werden nicht 
webgerecht umgesetzt. 
Irgendwie scheinen alle Titel h1 zu sein. 
Nach dem vergeblichen Versuch mit "class xy" gibt es 
nun Richtige h1, h2 und h3, da dies den Web-Vorgaben entspricht.

##Header und Footer  
Flexbox wurde im Header und
Footer verwendet. Daher konnten nicht alle px-Abstände 
zu 100 % eingehalten werden. Festival-Lovers liegt daher nicht exakt 
übereinander.  
Laut Styleguide ist Header-Schrift bold (s. 6), bei Navigationsbeschreibung
 jedoch nicht. Ich habe mich für bold entschieden.  
 Das Drop-Down vom Login hat laut Bildern einen Abstand. Damit man auch mit der Maus
 die Eingabefelder auswählen kann, wurde dieser entfernt.  
 Des weiteren wurde 1mal ein Login definiert, welches für alle Devices gilt. 
 Aufgrund des Buttons bzw. einheitlicher Button Gestaltung unterscheidet sich 
 dieser von der Vorgabe. Dies hat entsprechend auch Konsequenzen für den Login 
 im Zusammenhang mit der Ticketbestellung.
 
##Buttons  
Unterstrichener Button wechselt beim Hover die Farbe, 
wirkt so einheitlicher.  
Auf der Hauptseite bei Entdeckungen fehlt auf dem Mobile Bild 
der Button für mehr Samples. Ich habe den Button dennoch eingebunden,
 da es auf mich sonst wie vergessen wirkt.  
In Nicht-Chrome Browsern kann man die Buttons als solche erkennen. 
Eine Umwandlung in Divs oder Links kommt aus Zeitgründen nicht in Frage, zudem
merkt man so, dass etwas passiert (sollte) wenn man draufklickt.  

##Hauptseite  
###news und magazin  
Laut Layout sollte beides mit Maisonry umgesetzt werden. Aus 
Zeitgründen wurde jedoch nur der news-Teil entsprechend umgesetzt.  
 
##Festivalübersicht  
Die Texte sind vom padding / margin her anders als im Styleguide, diese sind 
schlicht zu breit für die jeweiligen Breakpoints. 
Damit es auf allen Viewports einigermassen anständig aussieht wurde am Ende 
grid gewählt.  
Zusatz: Switcher bei klick auf Kachel / Liste eingefügt (Farbwechsel fehlt)  

##Festival
###Sponsoring
Scheint laut Styleguide ein Div bestimmter Höhe und Breite 
mit Text und Logo zu sein. Zudem ist das "merken" darüber links-bündig.
Da mir dies nicht gefällt und ich von einem Versehen ausgehe ist es 
eingemittet und eine Hintergrundfarbe gewählt.  
Zudem scheint bei der Desktop Version dieser Teil dauernd mitzuscrollen. 
Alternativ wäre ein anderer Einzug auf der Rechten Seite vorstellbar, was 
mir allerdings nicht gefällt. Da dies nicht ganz klar ist, und mich lieber 
auf andere Task fokussieren möchte, lasse ich es so stehen. 

###maps
Funktionierte bis vor dem 06.08.2018 noch mit einem Hack. Am 08.08.2018 
habe ich festgestellt, dass Google diese Möglichkeit geschlossen hat. 
Ab sofort ist eine entsprechende Umsetzung nur noch mit einer Kreditkarte, 
welche keine Prepaid sein darf, möglich. 
Mit Key von Rolf teilweise "nur für developing" sichtbar.

###weitere Festivalseiten  
Weitere Einzelübersichten sind zwar zur Farbansicht vorhanden, jedoch evtl. nicht vollständig. 
(entweder fehlen Elemente, Links oder Klassenanpassungen) 
 
##Bestellvorgang
Wie bereits beim Header erwähnt, hat jene Login-Entscheidung 
Einfluss auf den Bestellvorgang. Da man auch als Gast bestellen 
kann, gibt es eine weitere Möglichkeit.  
Weiter ist im Zusammenhang 
mit der Zahlung unlogisch, wieso dort 2 verschiedene Screens 
(bezahlen und bezahlt ohne weiter) vorgegeben sind. Dies ergibt 
so keinen Sinn.  
Die Kreditkartenbilder stammen von den offiziellen Seiten der Logoinhaber 
und weichen daher von der Screen-Vorgabe ab.


 [zurück zum Inhaltsverzeichnis](../README.md)  