<?php

//Kopie von Unterricht


/*class User {

    private $email;
    private $password;
    private $username;
    private $id;

    public function __construct($email = false)
    {


        if ($email) {


            $statement = DB::get()->prepare('
                  SELECT
                    *
                  FROM
                    user
                  WHERE
                    email = :email');

            $statement->execute([':email' => $email]);
            $user = $statement->fetch();

            $this->setEmail($user['email']);
            $this->setPassword($user['password']);
            $this->setName($user['username']);
            $this->setId($user['id']);
        }
    }

    public function getName()
    {
        return $this->username;
    }

    public function setName($username)
    {
        $this->name = $username;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getId() {
        return $this->id;
    }
    public function setId($id) {
        $this->id = $id;
    }

    public function create() {
        $statement = DB::get()->prepare('
           INSERT INTO user 
            (email,
             password, 
             username, 
             id)   
          VALUES
            (:email,
             :password, 
             :username, 
             :id)'
        );
        $statement->execute([
                ':email' => $this->getEmail(),
                ':password' => $this->getPassword(),
                ':username' => $this->getName(),
                ':id'=> $this->getId()]
        );
    }

    //hier zum Beispiel gemerkte Festivals holen
}*/


