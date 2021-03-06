function validateForm()
{
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    var mblnumber = document.getElementById("mnumber")
    var email = document.getElementById("email")
    

    if (username.value.trim() == "" || password.value.trim() == "" || mblnumber.value.trim() == "" || email.value.trim() == "" )
    {
        if (username.value.trim() == "")
        {
            username.style.border = "solid 3px red";
            document.getElementById("ulabel").style.visibility = "visible";
        }
        if (password.value.trim() == "")
        {
            password.style.border = "solid 3px red";
            document.getElementById("plabel").style.visibility = "visible";
        }
        if (mblnumber.value.trim() == "")
        {
            mblnumber.style.border = "solid 3px red";
            document.getElementById("mbllabel").style.visibility = "visible";
        }
        if (email.value.trim() == "")
        {
            email.style.border = "solid 3px red";
            document.getElementById("emaillabel").style.visibility = "visible";
        }
        return false;
    }
    else
    {   
        var regex = /[DSP]00/i;
        // also can be created as below
        // regex = new RegExp("D00","i");
        if (!regex.test(username.value))
        {   
            username.style.border = "solid 3px red";
            //alert("invalid user name")
            document.getElementById("ulabel").innerHTML = "* please enter valid username";
            document.getElementById("ulabel").style.visibility = "visible";
            return false; 
        }
        
        var mregex = /^[7-9][\d]{9}$/;
        if (!mregex.test(mblnumber.value))
        {
            //alert()
            mblnumber.style.border = "solid 3px red";
            document.getElementById("mbllabel").innerHTML = "* please enter valid mobilenumber";
            document.getElementById("mbllabel").style.visibility = "visible";
            return false; 
        }
        
        var eregex = /([\w 0-9\.]+)(@)([\w]+)(\.[\w]{2,8})(\.[\w]{2,8})?$/
        if (!eregex.test(email.value))
        {
            //alert()
            email.style.border = "solid 3px red";
            document.getElementById("emaillabel").innerHTML = "* please enter valid email";
            document.getElementById("emaillabel").style.visibility = "visible";
            return false; 
        }        

        if (password.value.trim().length < 5)
        {           
            password.style.border = "solid 3px red";
            document.getElementById("plabel").innerHTML = "* please should be gratater than 5 chars";
            document.getElementById("plabel").style.visibility = "visible";
            return false;
        }   
        else
        {
            return true;
        }
        
    }
}