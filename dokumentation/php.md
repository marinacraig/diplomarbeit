#PHP-Teil

mysql: kenne nichts anderes, will einfach mal schauen wie weit ich komme    
DB: zeigt auf _localhost_, mir ist klar, dass login und pw mist sind
DB-name: festival_lovers

alle php-files in php Ordner (via ..../dist/php)

Grund: ausprobieren  

1. Testlogin / registrieren:  
a. von DB: Test1 (=username), test@test1.com, test1 (=password) (-> kein hash)  
b. falls registrieren funktioniert: Test2 (=username), test@test2.com, test2 (=password)

2. Wo ist eigentlich der Logout? -> login.php

3. php files: sind Kopien von den HTML-files  
a. mache nichts kapputt  
b. Übergang html - php nicht klar  

4. wegen css (fehlender korrekter gulptask) via [http://marina.techfabrik.com/app/php/](http://marina.techfabrik.com/app/php/)
Seiten: siehe auf Server oder github
Dementsprechend falsche links in ...kaufen_bestaetigung.php

6. todo's: [https://docs.google.com/spreadsheets/d/1eV_7Tlo0QKG4BIn0B93sUNnICly4tzJ4m1kySTdQwCs/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1eV_7Tlo0QKG4BIn0B93sUNnICly4tzJ4m1kySTdQwCs/edit?usp=sharing)  

## Installation:
(https://getcomposer.org/download/)
im app/php Ordner:

php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

composer require nesbot/carbon


##zurücksetzen:  
php Ordner löschen  

## Export / Import  
Keine Ahnung



  


 [zurück zum Inhaltsverzeichnis](../README.md)    
 [Aufbau](aufbausite.md)  
 [Zusammenfassung & Fazit](dokumentation/zusammenfassung_fazit.md)

