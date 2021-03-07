var opacity = 0;
var intervalid = 0;
var intervalid = 0;
var wi = 100;
function hide()
{
    
    var img = document.getElementById("img1")
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"))
    if (opacity<=1 && opacity>0.1)
    {
        opacity= opacity - 0.1;
        img.style.opacity = opacity;
    }
    else
    {
        clearInterval(intervalid)
    }
    
}

function show()
{
    var img = document.getElementById("img1")
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"))
    if (opacity<0.9)
    {
        opacity= opacity + 0.1;
        img.style.opacity = opacity;
    }
    else
    {
        clearInterval(intervalid)
    }

}

function compress()
{
    
    //wi = Number(window.getComputedStyle("himg").getPropertyValue("width"));
    if (wi > 100)
    {
        document.getElementById("imgheart").style.width = wi;
        wi = wi - 2;

    }
    else{
        clearInterval(intervalid1);
    }
}

function expand()
{

    //wi = Number(window.getComputedStyle("himg").getPropertyValue("width"));

    if (wi < 200)
    {
        wi = wi + 2;
        document.getElementById("imgheart").style.width = wi;
    }
    else{
        clearInterval(intervalid1);
    }
}




function fadein()
{
    intervalid = window.setInterval(show,100)
}

function fadeout()
{
    intervalid = window.setInterval(hide,100)
}

function zoomin()
{
    intervalid1 = window.setInterval(expand,10)
}

function zoomout()
{
    intervalid1 = window.setInterval(compress,10)
}