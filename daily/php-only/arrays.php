<?php

//Create array
$weather = array(
    "rain",
    "sunshine",
    "clouds",
    "hail",
    "sleet",
    "snow",
    "wind"
);

echo "<p> We've seen all kinds of weather this month. At the beginning of the month, ";
echo "we had $weather[5] and $weather[6]. Then came $weather[1] with a few $weather[2] ";
echo "and some $weather[0]. At least we didn't get any $weather[3] or $weather[4].</p>";


//create array
$cities = array(
    "Tokyo",
    "Mexico City",
    "New York City",
    "Mumbai",
    "Seoul",
    "Shanghai",
    "Lagos",
    "Buenos Aires",
    "Cairo",
    "London"
);

foreach ($cities as $city){
    echo "$city,";
}

sort($cities);

echo "\n<ul>\n";
foreach ($cities as $city){
    echo "<li>$city</li>\n";
}

//add cities
array_push($cities, "Las Angeles", "Calcutta", "Osaka", "Beijing");

sort($cities);

foreach ($cities as $city){
    echo "<li>$city</li>\n";
}



public function hello(){
    echo "Hello, World";
}
hello();

?>