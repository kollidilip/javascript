
// addition

var a = 10; // right to left associativity
var b = 20;
var c = 2;
var res = a+b+c; // adding 2 variables // here left to right associativity for the operator + 
// so the first varaible type is carried out to +
var res1 = "dilip"+a+c // left to right associativity
var res2 = a + b + "dilip" + c
document.write("<br>sum of variables")
document.write("<br>"+res+"</br>")

document.write("<br>left to right associativity")
document.write("<br>"+res1+"</br>")

document.write("<br>right to left precedence")
document.write("<br>"+res2+"</br>")
