<?php
//create class of user
class User {
	//set the properties of the class
	public $firstName;
	public $lastName;

	//create a method of hello to first name
	public function hello() {
		echo "hello," . $this -> firstName;
		return $this;
	}

	//create a method of registered
	public function register() {
		echo ">>registered";
		return $this;
	}

	//create a method of mail
	public function mail() {
		echo">> email sent";
	}
}

//add a user
$user1 = new User();
$user1-> firstName = "Jane";

    $user1->hello()->register()->mail();

