function checkButton() {   

    if( document.getElementById('n1').value == "")
    {
        alert("Enter your name") ;
    }
    else if( document.getElementById('a1').value == "")
    {
        alert("Enter your age") ;
    }
    else if(!(document.getElementById('g1').checked) && !(document.getElementById('g2').checked) && !(document.getElementById('g3').checked)) 
    {   
        alert("Select an option") ; 
    }    
    else if(!(document.getElementById('f1').checked) && !(document.getElementById('f2').checked) && !(document.getElementById('f3').checked)) 
    {   
        alert("Select an option") ; 
    }    
    else if(!(document.getElementById('c1').checked) && !(document.getElementById('c2').checked)) 
    {   
        alert("Select an option") ;
    }   
    else if(!(document.getElementById('l1').checked) && !(document.getElementById('l2').checked)) 
    {   
        alert("Select an option") ;
    } 
    else if(!(document.getElementById('s1').checked) && !(document.getElementById('s2').checked)) 
    {   
        alert("Select an option") ;
    }   
    else if(!(document.getElementById('b1').checked) && !(document.getElementById('b2').checked)) 
    {   
        alert("Select an option") ;
    }   
    else if(!(document.getElementById('t1').checked) && !(document.getElementById('t2').checked)) 
    {   
        alert("Select an option") ;
    }   
    else if(!(document.getElementById('cc1').checked) && !(document.getElementById('cc2').checked) && !(document.getElementById('cc3').checked)) 
    {   
        alert("Select an option") ;
    }   
    else if(!(document.getElementById('sc1').checked) && !(document.getElementById('sc2').checked) && !(document.getElementById('sc3').checked)) 
    {   
        alert("Select an option") ;
    }   
    else if(!(document.getElementById('d1').checked) && !(document.getElementById('d2').checked) && !(document.getElementById('d3').checked) && !(document.getElementById('d4').checked) && !(document.getElementById('d5').checked)) 
    {   
        alert("Select atleast one option") ;
    }   
    else
    {
        var f = document.getElementsByName('fever');
        var c = document.getElementsByName('cough');
        var l = document.getElementsByName('lmotion');
        var s = document.getElementsByName('sore');
        var b = document.getElementsByName('breath');

        var count=0 ;

        count = 0 ;
        for(var i = 0; i < f.length; i++)
        {
            if(f[i].checked)
            {
                if(f[i].value == 'high')
                {
                    count = count + 1;
                }
            }
        }

        for(var i = 0; i < c.length; i++)
        {
            if(c[i].checked)
            {
                if(c[i].value == 'yes')
                {
                    count = count + 1;
                }
            }
        }
        for(var i = 0; i < l.length; i++)
        {
            if(l[i].checked)
            {
                if(l[i].value == 'yes')
                {
                    count = count + 1;
                }
            }
        }
        for(var i = 0; i < b.length; i++)
        {
            if(b[i].checked)
            {
                if(b[i].value == 'yes')
                {
                    count = count + 1;
                }
            }
        }
        for(var i = 0; i < s.length; i++)
        {
            if(s[i].checked)
            {
                if(s[i].value == 'yes')
                {
                    count = count + 1;
                }
            }
        }
        if (count >= 3)
        {
            window.location.assign("positive.html") ;
        }
        else
        {
            window.location.assign("negative.html") ;
        }
    }
}   
