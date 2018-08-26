#Aufbau der Site
Begonnen wurde mit der Hauptseite. Dann folgte die Festivalübersichtsseite
und die Einzelansicht. Je Abschnitt wurden Klassen, und wenn nötig 
ID's, vergeben. Daraufhin wurden die jeweiligen Abschnitte in einem, selten 
in mehreren (z.B. zusätzlich button oder main) scss files gestyled. 
Im Rahmen des HTML - Checks wurden aus mehreren articles div's, da 
articles jeweils einen Titel benötigen.   

Zu Beginn wurde stark auf 
Barrierefreiheit geachtet (auch Hintergrundbilder mit alt-Text). 
Irgendwo habe ich in diesem Zusammenhang gelesen, dass man svg's besser 
direkt in das HTML einbindet, da Screenreader mit diesen umgehen und 
 Blindengerecht ausgelesen werden können.  Vereinzelt sind svg's 
 am Ende doch noch via "background-image" eingebunden worden.
    
 Farben: Die Farben würden eigentlich in das entsprechende scss gehören. 
 Da diese jedoch teilweise einfacher
 in den jeweiligen files zu definieren sind, nicht gängig durchgezogen.
 
Identische paddings & margins: Diese sind leider etwas durcheinander geraten.
 Beim Versuch alle in ein File zusammenzutragen, wurde mehr zerstört als erreicht. 
 (Lesson learnt: Hier seperates files von Anfang an.) 
 
 Als CSS & HTML soweit ok war, wurden die JS Sachen gemacht. 
 Ausnahmen: maps und slider, diese wurden nach Einzelansicht gemacht.
 
 Bugfixes: Entweder sofort gefixt oder in Feinkonzept eingefügt.
 
 JS: counter, programm: Ich wollte noch ein js machen und habe mich für diese
 entschieden. Etwas unschön sind die diversen Wiederholungen. Momentan 
 bin ich einfach zufrieden, dass ich es überhaupt hinbekommen habe.
 
 PHP: Als Font-End soweit ok war, mehr JS nur mit Festival Class / DB sinnvoll wurde,
 angefangen mit PHP zu experimentieren. [php.md](php.md)
 
 ##für später
 **svg direkt im HTML**  
 g mit fill: fill löschen, beispielsweise class="icon  icon__music icon__music--country"
 einfügen  
 id: wenn gleiches icon mehrmals auf gleicher Seite, dann löschen  
 
 **js / scripts für gulp build**  
 alle js-files in festival_1.html verlinkt  
 Einzelne js haben id-Abfrage  
 Vorsichtig sein mit neuen / Reihenfolge  
 ggf js anders via "modules" zusammenfügen (gilt auch für **CSS**)  

**Weiterentwicklung**  
Ideen teilweise als Todo's oder Ideen für Weiterentwicklung im Code festgehalten

**inject HMTL**  
Nav und footer in seperaten files:
Via gulp-inject ist dies möglich (sollte auch mit Unterordner
 funktionieren), 
 jedoch nicht umgesetzt, da ich mich nicht zu Beginn mit gulp 
 auseinander setzen wollte.  
 
**php**  
Wenn dann in php.md festgehalten  

 
 
[Style Abweichungen](style.md)  
 [zurück zum Inhaltsverzeichnis](../README.md)  