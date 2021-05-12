function checkButton() {   
    if(!(document.getElementById('f1').checked) && !(document.getElementById('f2').checked) && !(document.getElementById('f3').checked) && !(document.getElementById('f4').checked)) 
    {   
        alert("select an option 2") ; 
    }    
    else if(!(document.getElementById('c1').checked) && !(document.getElementById('c2').checked)) 
    {   
        alert("select an option 1") ;
    }   
    else if(!(document.getElementById('l1').checked) && !(document.getElementById('l2').checked)) 
    {   
        alert("select an option 2") ;
    } 
    else if(!(document.getElementById('s1').checked) && !(document.getElementById('s2').checked)) 
    {   
        alert("select an option 2") ;
    }   
    else if(!(document.getElementById('t1').checked) && !(document.getElementById('t2').checked)) 
    {   
        alert("select an option 2") ;
    }   
    else if(!(document.getElementById('cc1').checked) && !(document.getElementById('cc2').checked) && !(document.getElementById('cc3').checked)) 
    {   
        alert("select an option 2") ;
    }   
    else if(!(document.getElementById('sc1').checked) && !(document.getElementById('sc2').checked) && !(document.getElementById('sc3').checked)) 
    {   
        alert("select an option 2") ;
    }   
    else if(!(document.getElementById('d1').checked) && !(document.getElementById('d2').checked) && !(document.getElementById('d3').checked) && !(document.getElementById('d4').checked) && !(document.getElementById('d5').checked)) 
    {   
        alert("select an option 2") ;
    }   
    else
    {
        var c = document.getElementsByName('cough');
        var l = document.getElementsByName('lmotion');
        var s = document.getElementsByName('sore');
        var cough_value ;
        var lmotion_value ;
        var sore_value ;

        for(var i = 0; i < c.length; i++)
        {
            if(c[i].checked)
            {
                cough_value = c[i].value;
            }
        }
        for(var i = 0; i < l.length; i++)
        {
            if(l[i].checked)
            {
                lmotion_value = l[i].value;
            }
        }
        for(var i = 0; i < s.length; i++)
        {
            if(s[i].checked)
            {
                sore_value = s[i].value;
            }
        }
        if (cough_value == 'yes' && lmotion_value == 'yes' && sore_value == 'yes')
        {
            window.location.assign("page2.html") ;
        }
        else
        {
            window.location.assign("page1.html") ;
        }
    }
}   