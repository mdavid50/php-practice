<?php

$num = 1;

//create a loop to echo abc 9 times
while ($num<=9){
    echo "abc ";
    // increase num by 1
    $num ++;
}
echo "\n";
echo "\n";


$num = 0;

//create a loop to echo xyz 9 times
do {
    $num ++;
    echo "xyz ";
}
while ($num<9);

echo "\n";
echo "\n";

//create a for loop to echo num
for ($num=1; $num<=9; $num++){
    echo "$num ";
}
echo "\n";
echo "\n";

// create a for loop returning items a - g
for ($x='A'; $x<='G'; $x ++){
    echo "<li> Item $x</li>\n";
}

?>