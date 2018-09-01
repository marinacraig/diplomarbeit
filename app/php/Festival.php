<?php
ini_set("display_errors",true); // für Fehlerausgabe

require __DIR__ . '/vendor/autoload.php';
/*
 * Festival Class -> evtl. nur getter keine setter (Erfassen nur auf DB möglich) -> nein, dafür kein delete und updated (Zeit)
 *
 * Inhalte:
 * festival_name -> $name
 * festival_ort -> $ort
 * festival_kanton -> $kanton
 * festival_beginn -> $beginn (=Datum)
 * festival_ende -> $ende (=Datum)
 * festival_musikrichtung -> $musikrichtung
 * festival_id -> $id
 *
 * todo später:
 * Location: länge & Breite (maps)
 * Ticketsanzahl (wovon wieviele)
 * Ticketpreise
 */

//Kopie von Unterricht, angepasst

class Festival {
    //private variable: nicht wirklich nötig private - oder?
    private $user; //diesen auf Admin setzen?
    private $name;
    private $ort;
    private $kanton;
    private $beginn;
    private $ende;
    private $musikrichtung;
    private $id;
    private $gemerkt;

    //festival erstellen
    public function __construct($id = false) // dann beginnt er gar nicht erst auf der DB zu suchen
    {
        if($id){
            $statement = DB::get()->prepare('
              SELECT
                *
              FROM
                festival
              WHERE
                id = :id');
        }

        $statement->execute([':id' => $id]);
        $festival = $statement->fetch();

        $this->set_user($festival['user_id']);
        $this->set_name($festival['name']);
        $this->set_ort($festival['ort']);
        $this->set_kanton($festival['kanton']);
        $this->set_beginn(\Carbon\Carbon::parse($festival['beginn']));
        // wegen Formatierung mit Carbon::parse, oben ohne use Carbon\Carbon; wegen "autoload"
        $this->set_ende(\Carbon\Carbon::parse($festival['ende']));
        $this->set_musikrichtung($festival['musikrichtung']);
        $this->set_id($festival['id']);
        $this->set_gemerkt($festival['gemerkt']);
    }

    //Elemente: getters und setters

    // aus dem allTasks.php
    /*public function toArray(){
        $taskitem = Array();
        $taskitem['name'] = $task->get_name();
    }*/

    public function get_user() {
        return $this->user;
    }
    public function set_user($user) {
        $this->user = $user;
    }

    public function get_name() {
        return $this->name;
    }
    public function set_name($name) {
        $this->name = $name;
    }
    public function get_ort() {
        return $this->ort;
    }
    public function set_ort($ort) {
        $this->ort = $ort;
    }
    public function get_kanton() {
        return $this->kanton;
    }
    public function set_kanton($kanton) {
        $this->kanton = $kanton;
    }
    public function get_beginn() {
        return $this->beginn;
    }
    public function set_beginn($beginn) {
        $this->beginn = $beginn;
    }
    public function get_ende() {
        return $this->ende;
    }
    public function set_ende($ende) {
        $this->ende = $ende;
    }
    public function get_musikrichtung() {
        return $this->musikrichtung;
    }
    public function set_musikrichtung($musikrichtung) {
        $this->musikrichtung = $musikrichtung;
    }
    public function get_id() {
        return $this->id;
    }
    public function set_id($id) {
        $this->id = $id;
    }
    public function get_gemerkt() {
        return $this->gemerkt;
    }
    public function set_gemerkt($gemerkt) {
        $this->gemerkt = $gemerkt;
    }


    /*
     * Todo: Update function
     */


    public function create(){
        $statement = DB::get()->prepare('
              INSERT INTO festival
                (user_id,
                name,
                ort,
                kanton,
                beginn,
                ende,
                musikrichtung,
                gemerkt)
              VALUES 
                (:user_id,
                :name,
                :ort,
                :kanton,
                :beginn,
                :ende,
                :musikrichtung,
                :gemerkt)
                ');

        $statement->execute([
            ':user_id' => $this->getUser(),
            ':name' => $this->get_name(),
            ':ort' => $this->get_ort(),
            ':kanton' => $this->get_kanton(),
            ':beginn' => $this->get_beginn(),
            ':ende' => $this->get_ende(),
            ':musikrichtung' => $this->get_musikrichtung(),
            ':gemerkt' => $this->get_gemerkt(),
        ]);

        //$festival = new festival();
        //$festival->setName('Mein neues festival');
        //$festival->create();
    }




/*

    public function getTasks()
    {
        $statement = DB::get()->prepare('
              SELECT
                id
              FROM
                task
              WHERE
                user_id = :id');

        $statement->execute([':id' => $this->getId()]);

        $tasks = [];

        foreach($statement->fetchAll() as $task){
            $tasks[] = new Task($task['id']);
        }

        return $tasks;
    }*/
}

