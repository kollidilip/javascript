/* arrays in JS */

// arrays are compound data types and it is also a type of object

var names = ["dilip","raghu","game"];

// another way of declaring arry is by calling the object of Array

var fruits = new Array("mango","banana","grapes");

// print the results

for (i=0; i<=names.length -1;i++)
{
    document.write(`names is ${names[i]} and he likes ${fruits[i]}<br>`)
}
