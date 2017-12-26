<?php
//create a class of User
class User {

	// set property of first name to user
	private $firstName;

	//create a method to set first name
	public function setFirstName($str) {
		//set parameters of first name
		$this -> firstName = $str;
	}

	// create a get method for first name
	public function getFirstName() {
		return $this -> firstName;
	}
}

//create an object of user 1 and set its properties
$user1 = new User();
$user1 -> setFirstName("Joe");

//return user 1 first name
echo $user1 -> getFirstName();