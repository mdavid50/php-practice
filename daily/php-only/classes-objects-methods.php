<?php
class User {
    private $firstName;
    private $lastName;

    function hello(){
        return "hello";
    }
}

$user1 = new User();
$user1->firstName = "John";
$user1->lastName = "Doe";

echo $user1->firstName . " " . $user1->lastName;

$hello = $user1->hello();

echo $hello . ", " . $user1->firstName . " " . $user1->lastName;