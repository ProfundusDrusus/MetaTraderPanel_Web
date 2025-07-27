var sub_texts = new Array();

sub_texts.push("We asked ourselves exactly this question. Then we decided to simply built a tick chart you can actually trade from.");
sub_texts.push("No more stop loss fishing. MetaTrader-Panel uses a stealth mode and your stop loss is invisible to your counterpart.");
sub_texts.push("Do not worry. You're not on your own. MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts.push("Experience is all that matters in trading. With almost 100 years in coding and 50 years in professional trading we know what we are doing.");
sub_texts.push("In CFD trading your broker is also your counterpart. Telling your broker your target point allows your counterpart a head start.");
sub_texts.push("Experience is all that matters in trading. With almost 100 years in coding and 50 years in professional trading we know what we are doing.");

var texts = new Array();
texts.push("WHY MT5 DOES NOT OFFER A REASONABLE TICK-CHART?");
texts.push("WHY DOES YOUR BROKER KNOW ABOUT YOUR STOP LOSS?");
texts.push("YOUR BROKER IS NOT YOUR FRIEND. HE IS YOUR COUNTERPART");
texts.push("A NEW INDUSTRY STANDARD IN CFD RETAIL TRADING HAS BEEN SET");
texts.push("WHY YOUR COUNTERPART KNOWS ABOUT YOUR TARGET POINT?");
texts.push("SMART CODE, LIGHTNING FAST AND STATE OF THE ART");

var images = [],
   x = -1;
images[0] = "assets/700x600.png";
images[1] = "assets/700x600_2.png";
images[2] = "assets/700x600_3.png";

var point = -1;
var point1 = -1;
var loop = 0;

function changeHeaderText() {

   if (point == 0) {

      $("#banner-content").fadeOut("slow", function () {
         x = (x === images.length - 1) ? 0 : x + 1;
         document.getElementById("pic-box").src = images[x];
         $(this).fadeIn("slow");
      });
   }
   
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