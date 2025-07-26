var sub_texts = new Array();
sub_texts.push("But we are - MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore!");
sub_texts.push("Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro legentur");

var texts = new Array();
texts.push("DEIN BROKER IST NICHT DEIN FREUND. ER IST DEIN HANDELS-PARTNER");
texts.push("WARUM VERRÄTST DU DEINEM BROKER DEIN STOP LOSS?");
texts.push("EIN NEUER STANDARD FÜR PRIVATKUNDEN IM CFD-HANDEL");
texts.push("WARUM KENNT DEIN BROKER DEINEN TARGET POINT?");
texts.push("INTELLIGENTER CODE, BLITZSCHNELL UND NEUESTE TECHNOLOGIE");

var images = [],
   x = -1;
images[0] = "assets/700x600.png";
images[1] = "assets/700x600_2.png";
images[2] = "assets/700x600_3.png";

var point = 0;
var point1 = 0;
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

   setTimeout(changeHeaderText, 10000)
}

changeHeaderText();