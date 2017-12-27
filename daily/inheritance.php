<?php
//create a class of User
class User {

    //add property of user name to User class
    private $userName;

    // make a setter method for user name
    public function setUserName($name) {
        $this -> userName = $name;
    }
    
    //make a get method for user name
    public function getUserName() {
        return $this ->userName;
    }
}

class Admin extends User {

    //create a method to express your roll
    public function expressYourRoll() {
        return strtolower(__CLASS__);
    }

    //create a method to say hello
    public function sayHello() {
        return "hello admin," . $this-> getUserName();
 }
}

$admin1 = new Admin;
$admin1 -> setUserName("belthazar");
echo $admin1 -> sayHello();