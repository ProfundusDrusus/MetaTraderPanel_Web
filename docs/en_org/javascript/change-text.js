var sub_texts = new Array();
sub_texts.push("No more stop loss fishing. MetaTrader-Panel is running in stealth mode and your stop loss is invisible to your counterpart.");
sub_texts.push("We asked ourselves exactly the same question. Then we simply built a tick chart that you can actually trade from.");
sub_texts.push("Do not worry. You're not on your own. MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts.push("Experience is all that matters in trading. With almost 100 years in coding and 50 years in professional trading we know what we are doing.");
sub_texts.push("In CFD trading your broker is also your counterpart. Telling your broker your target point allows your counterpart a head start.");
sub_texts.push("Combining veteran traders with decades of trading experience with young and hungry talents eager to achieve success. That's our secret.");
sub_texts.push("Of course MT5 can not — how could it? MetaTrader Panel maintains its own database and can do that. No problem for us.");

var texts = new Array();
texts.push("WHY DOES YOUR BROKER KNOW ABOUT YOUR STOP LOSS?");
texts.push("WHY MT5 DOES NOT OFFER A REASONABLE TICK-CHART?");
texts.push("YOUR BROKER IS NOT YOUR FRIEND. HE IS YOUR COUNTERPART");
texts.push("A NEW INDUSTRY STANDARD IN CFD RETAIL TRADING HAS BEEN SET");
texts.push("WHY YOUR COUNTERPART KNOWS ABOUT YOUR TARGET POINT?");
texts.push("SMART CODE, LIGHTNING FAST AND STATE OF THE ART");
texts.push("CAN MT5 DRAW FIBONACCI LEVELS WITHOU  DATA?");

var images = [];
images[0] = "assets/Panel_07x600.png";
images[1] = "assets/TickPanel_01.png";
images[2] = "assets/Panel_04x600.png";
images[3] = "assets/TickPanel_01.png";
images[4] = "assets/Panel_07x600.png";
images[5] = "assets/Panel_04x600.png";
images[6] = "assets/Panel_08x600.png";

var point = 0;
var point1 = 0;


function changeHeaderText() {

   $("#banner-content").fadeOut("slow", function () {
         document.getElementById("pic-box").src = images[point];
         $(this).fadeIn("slow");
      });
	  
   
   $("#refresh-headertext").fadeOut("slow", function () {
         $(this).html(texts[point]);
         $(this).fadeIn("slow");
      });
	  
   if (point < texts.length - 1) {
      point++;
   } else {
      point = 0;
   }
   $("#refresh-subtext").fadeOut("slow", function () {
         $(this).html(sub_texts[point1]);
         $(this).fadeIn("slow");
      });
   if (point1 < sub_texts.length - 1) {
      point1++;
   } else {
      point1 = 0;
   }

   setTimeout(changeHeaderText, 15000)
}

changeHeaderText();