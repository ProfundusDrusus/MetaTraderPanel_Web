var ttmq3 = new Array();
ttmq3.push("Very friendly, competent, and above all fast support.<br><br><br>Mary Steiner, Österreich");
ttmq3.push("I was surprised at how profitable the signals are. I find the fee extremely reasonable..<br><br>Sven Geizkragen,  Norderstedt"); 
ttmq3.push("Jeannie hat echt die geilsten Titten weit und breit, ich bin sehr zufrieden.<br><br>><br>Johan Notgeil, GER");

var ttmq2 = new Array();
ttmq2.push("A must-have for any trader who wants to simplify their daily routine. The ability to place orders visually is very convenient.<br><br>Jussuf Habock, GR");
ttmq2.push("No frills, just the features I really need. I don't want to swap anymore..<br><br>Gerhard Schreck, GER"); 
ttmq2.push("The ability to open or close positions directly from the tick chart has significantly improved my profit margin..<br><br>Peter Talentlos, KiTa"); 


var ttmq1 = new Array();
ttmq1.push("This is such a wonderful tool shared with generosity. Thank you! Wonderful job. I aim at going full version, using this one for training.<br><br>Farhad Douzduzani, GER");
ttmq1.push("I like this panel; it solved many problems at once. Everything is in one place, I can recommend it.<br><br>Peter Steiner, GER");
ttmq1.push("A must-have for any trader who wants to simplify their daily routine. The ability to place orders visually is very convenient.<br><br>Jussuf Habock, GR");




var ttmsCnt = 0;

function changeTestimonials1() {
	
	$("#ttm1").fadeOut("slow", function () {
         $(this).html(ttmq1[ttmsCnt]);
         $(this).fadeIn("slow");
      });
	  
		/* change testimonial 2*/
    $("#ttm2").fadeOut("slow", function () {
         $(this).html(ttmq2[ttmsCnt]);
         $(this).fadeIn("slow");
      });

		/* change testimonial 3*/
    $("#ttm3").fadeOut("slow", function () {
         $(this).html(ttmq3[ttmsCnt]);
         $(this).fadeIn("slow");
      });
	  
	if (ttmsCnt < ttmq1.length - 1) {
	  ttmsCnt++;
	} else {
	  ttmsCnt = 0;
	}

	setTimeout(changeTestimonials1, 10000)	
}


var texts = new Array();
texts[0]=("WHY DOES YOUR BROKER KNOW ABOUT YOUR STOP LOSS?");
texts[1]=("WHY MT5 DOES NOT OFFER A REASONABLE TICK-CHART?");
texts[2]=("YOUR BROKER IS NOT YOUR FRIEND. HE IS YOUR COUNTERPART");
texts[3]=("FOCUSING ON THE ESSENTIALS IS MISSION CRITICAL");
texts[4]=("WHY YOUR BROKER KNOWS ABOUT YOUR TARGET POINT?");
texts[5]=("SMART CODE, LIGHTNING FAST AND STATE OF THE ART");
texts[6]=("CAN MT5 DRAW FIBONACCI LEVELS WITHOU  DATA?");
texts[7]=("YOU FOCUS ON TRADES, LET US TAKE CARE FOR THE REST");


var sub_texts = new Array();
sub_texts[0]=("No more stop loss fishing. MetaTrader-Panel is running in stealth mode and your stop loss is invisible to your counterpart.");
sub_texts[1]=("We asked ourselves exactly the same question. Then we simply built a tick chart you can actually trade from.");
sub_texts[2]=("Do not worry. You're not on your own. MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts[3]=("Experience is all that matters in trading. With almost 100 years in coding and 50 years in professional trading we know what we are doing.");
sub_texts[4]=("In CFD trading your broker is also your counterpart. Telling your broker your target point allows your counterpart a head start.");
sub_texts[5]=("Combining veteran traders with decades of trading experience with young and hungry talents eager to achieve success. That's our secret.");
sub_texts[6]=("Of course MT5 can not - how could it? MetaTrader Panel maintains its own database and can do that. No problem for us.");
sub_texts[7]=("Trading successfully is difficult enough. You shouldn't distract yourself with trivial things. We make yourt trading more successful.");


var images = [];
images[0] = "assets/Panel_07x600.png";
images[1] = "assets/TickPanel_01.png";
images[2] = "assets/Panel_07x600.png";
images[3] = "assets/TickPanel_01.png";
images[4] = "assets/Panel_07x600.png";
images[5] = "assets/Panel_04x600.png";
images[6] = "assets/Panel_08x600.png";
images[7] = "assets/Panel_04x600.png";

var links = [];
links[0] = "features/position-props";
links[1] = "features/tick-chart";
links[2] = "features/fibonacci";
links[3] = "features/fibonacci";
links[4] = "features/position-props";
links[5] = "features/fibonacci";
links[6] = "features/fibonacci";
links[7] = "features/fibonacci";

var point = -1;




function changeHeaderText() {
	
	if (point == -1) {
		point++;
      setTimeout(changeHeaderText, 12000);
	  return;
	} 
	else {
      setTimeout(changeHeaderText, 12000);
	}

	/* change picture*/
    $("#banner-content").fadeOut("slow", function () {
         document.getElementById("pic-box").src = images[point];
         $(this).fadeIn("slow");
      });

	/* change pic 2*/  
	$("#pic2-wrap").fadeOut("slow", function () {
         document.getElementById("pic2").src = images[point];
         $(this).fadeIn("slow");
      });
	  
	/* change button link*/  
	$("#learn-more").fadeOut("slow", function () {
         document.getElementById("learn-more").href = links[point], target="_blank";
         $(this).fadeIn("slow");
      });
	  
	/* change header text*/    
	$("#refresh-headertext").fadeOut("slow", function () {
         $(this).html(texts[point]);
         $(this).fadeIn("slow");
      });
	 
	/* change sub text*/   
	$("#refresh-subtext").fadeOut("slow", function () {
         $(this).html(sub_texts[point]);
         $(this).fadeIn("slow");
      });
	  

	if (point < texts.length - 1) {
	  point++;
	} else {
	  point = 0;
	}
	
}

changeHeaderText();
changeTestimonials1();
