
let secondHand = document.querySelector('.secondHand');



setInterval(function() {
	let thisTime = new Date();
	let minutes = thisTime.getMinutes();
	let newMinute = minutes/2;
	
	thisTime.toLocaleString();
	
      if (thisTime.getHours() == 00 || thisTime.getHours() == 12) {
        
 	  secondHand.style.transform = `rotate(${newMinute+90}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 01 || thisTime.getHours() == 13) {

 	  secondHand.style.transform = `rotate(${newMinute+120}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 02 || thisTime.getHours() ==14) {

 	  secondHand.style.transform = `rotate(${newMinute+150}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 03 || thisTime.getHours() ==15) {

 	  secondHand.style.transform = `rotate(${newMinute+180}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 04 || thisTime.getHours() ==16) {

 	  secondHand.style.transform = `rotate(${newMinute+210}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 05 || thisTime.getHours() ==17) {
       
 	  secondHand.style.transform = `rotate(${newMinute+240}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 06 ||  thisTime.getHours() ==18) {

 	  secondHand.style.transform = `rotate(${newMinute+270}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 07 || thisTime.getHours() ==19) {

 	  secondHand.style.transform = `rotate(${newMinute+300}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }
 	   else if (thisTime.getHours() == 08 || thisTime.getHours() == 20) {

 	  secondHand.style.transform = `rotate(${newMinute+330}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }


 	   else if (thisTime.getHours() == 09 || thisTime.getHours() == 21) {

 	  secondHand.style.transform = `rotate(${newMinute+360}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	   }


 	   else if (thisTime.getHours() == 10 || thisTime.getHours() == 22) {
 	  secondHand.style.transform = `rotate(${newMinute+390}deg)`;
	  secondHand.style.animationName = 'secondRotate';
 	   	}
 	   else if (thisTime.getHours() == 11 || thisTime.getHours() == 23) {
   
 	  secondHand.style.transform = `rotate(${newMinute+410}deg)`;
 	  secondHand.style.animationName = 'secondRotate';
 	 }
 	   
}, 1000)
