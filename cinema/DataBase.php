<?php

class DataBase{
    private $host = 'localhost';
    private $dbname = 'cinema';
    private $user = 'root';
    private $password = 123;
    private $pdo;

    public function _construct(){
        $this->pdo = new PDO('mysql;host={$this->host}, dbname={$this->dbname}', $this->user, $this->password);
    }
}

?>