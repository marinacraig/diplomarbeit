#Klassen
Welche Klassen gibt es, wo sind sie und wozu 
werden sie gebraucht? 

| class        |  wozu | html           | js  |
| :-------------:|  :-------------: | :-------------: | :-----: |
| overlay    | menu soll bei Klick <br>über die Ganze Seite | x|  |
| closebtn      | Button schliessen |   x |  |
| active | Musikfilter ist aktiv, Button <br>hat Farbe der Musik |  |  |
| countdown | wann es ist, bzw. Datum <br>oder in einem Monat <br>(index.html bei news) | x |  |
|  |  |  |  |
|  |  |  |  |



#Aufbau der Site
Begonnen wurde mit der Hauptseite. Dann folgte die Festivalübersichtsseite
und die Einzelansicht. Je Abschnitt wurden Klassen, und wenn nötig 
ID's, vergeben. Daraufhin wurden die jeweiligen Abschnitte in einem, selten 
in mehreren (z.B. zusätzlich button oder main) scss files gestyled. 
Im Rahmen des HTML - Checks wurden aus mehreren articles div, da 
articles jeweils einen Titel benötigen.  
Zu Beginn wurde stark auf 
Barrierefreiheit geachtet (auch Hintergrundbilder mit alt-Text). 
Irgendwo habe ich in diesem Zusammenhang gelesen, dass man svg's besser 
direkt in das HTML einbindet, da Screenreader mit diesen umgehen und 
 Blindengerecht ausgelesen werden können.  Vereinzelt sind svg's 
 am Ende doch noch via "background-image" eingebunden worden.   
 Farben: Die Farben würden eigentlich in das entsprechende scss gehören. Da diese einfacher
 in den jeweiligen files zu definieren sind, teilweise gleiche Kombinationen für andere
 Devices zum Einsatz kommen, sowie aus Zeitgründen, wurden diese teilweise doppelt definiert
 (Bsp. Ticketübersicht und Festivalübersicht).