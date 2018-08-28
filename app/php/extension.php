<?php


//ich nehme einfach an, dass dies gebraucht wird... wieso?
if($_SERVER['REQUEST_METHOD'] == 'PATCH'){
    parse_str(file_get_contents("php://input", "r"), $_PATCH);
}

