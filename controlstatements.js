
document.write("conrol flow IF-ELse Example<br>")
document.write("<br> find if a number is even or odd <br>")
var x = 6;
if (x % 2 == 0)
{
    document.write( x  +" is even")
}
else{
    document.write( x + " is Odd")
}

document.write("<br> find if a number is +ve, -ve or 0 <br>")
var x = 5;
if (x > 0)
{
    document.write( x  +" is positive")
}
else if (x<0){
    document.write( x + " is negative")
}
else{
    document.write( x + " is zero")
}
document.write("<br> find if a number is +ve and even<br>")

var x = -6;
if (x % 2 == 0 && x > 0)
{
    document.write( x  +" is even and positve")
}
else if(x % 2 == 0 && x < 0) {
    document.write( x + " is even and not positve")
}
else{
    document.write("not even and not positive")
}

document.write("<br><br>For Loop<br>")
document.write("<br> Print table of 5 using for loop<br>")

for (var i = 0;i<=10;i++)
{
    var res = i*5;
    document.write(" 5 * " + i +" is :" + res+"<br>" )
}

document.write("<br><br>While Loop<br>")
document.write("<br> Print first five Oddnumbers <br>")

var x =1
while(x < 10)
{
    document.write(x+"<br>")
    x = x+2
}

document.write("<br><br>do While Loop<br>")
document.write("<br> Print your name <br>")
var x =1
do{
    document.write(x +" : dilip<br>")
    x++
}while(x < 10);
