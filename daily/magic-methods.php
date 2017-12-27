<?php
//create a class of User
class User {
	//set properties of user
	private $firstName;
	private $lastName;

	// construct the class
	public function __construct ($firstName, $lastName) {
		$this ->firstName = $firstName;
		$this ->lastName = $lastName;
	}

public function getFullName() {
return $this ->firstName . " " .  $this->lastName;
}
}

// create an object of user 1 and set its properties
$user1 = new User("John", "Doe");

//return user 1 full name
echo $user1 -> getFullName();
