function fun4()
{
    var pp = document.getElementsByTagName("p");
    for (i=0;i < pp.length;i++)
    {
        if (i%2 ==0)
        pp[i].style.color = "red";     
        else
        pp[i].style.color = "green";   
    }
}