$(document).ready(function(){
		    $('#clok').click(function(){
		    	$('#show').slideDown('2000');
		    	$('#show').css('opacity','0.7');
		    	$('body').css('position','fixed').css('width','100%');
		    	$('#close').css('transform','rotateZ(360deg)').css('transitionDuration','1s');
		    	$('label').css('display','none');
		    	$('#clok').css('display','none');

		    });
		     $('#close').click(function(){
		    	$('#show').slideUp('2000');
		    	$('label').css('display','');
		    	$('#clok').css('display','');
		    	$('body').css('position','').css('width','');
		    });
			});
		
	
            /* nav properties goes here */
            window.onscroll=function(){
            	if (document.documentElement.scrollTop>50) {
            		let nav=document.querySelector('nav');
            		nav.style.backgroundColor="rgb(50,150,255)";
            		nav.style.position="fixed";
            		nav.style.color="black";
            		let link=document.querySelectorAll('.f-a');
            		for(var i=0;i<link.length;i++){
            			link[i].style.textShadow="0px 0px 0px red";
            		}


            	}
            		if (document.documentElement.scrollTop<40) {
            		let nav=document.querySelector('nav');
            		nav.style.backgroundColor="";
            		nav.style.position="";
            		nav.style.color="";

            	}
            }         /* smooth scroll to top */

           function rotate(){
		   window.scrollTo(0,0);
		   }