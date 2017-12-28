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

echo "\n";
echo "\n";

for ($x=1; $x<=12; $x++){
    $result = $x * $x;
    echo "$x * $x = $result\n";
}

echo "\n";
echo "\n";

//Generate an HTML table
echo "<table border=\"1\">";

//Generate table data showing the numbers 1-7 multiplied by each other,
//starting with the rows.
for ($row=1; $row<=7; $row++){
    echo "<tr>\n";
    //Generate each entry in the row to create the columns.
    for ($col=1; $col<=7; $col++){
        //First, do the math.
        $x=$col * $row;
        //Then send the value to the table with the table data tags.
        echo "<td>$x</td>\n";
    }
    echo "</tr>";
}
echo "</table>";
?>