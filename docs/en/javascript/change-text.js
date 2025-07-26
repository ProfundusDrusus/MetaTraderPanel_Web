var sub_texts = new Array();
sub_texts.push("But we are - MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore!");
sub_texts.push("Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro legentur");

var texts = new Array();
texts.push("YOUR BROKER IS NOT YOUR FRIEND. HE IS YOUR COUNTERPART");
texts.push("WHY YOUR BROKER KNOWS YOUR STOP LOSS");
texts.push("A NEW STANDARD IN CFD RETAIL TRADING");
texts.push("WHY YOUR BROKER KNOWS YOUR TARGET POINT");
texts.push("SLIM, LIGHTNING FAST AND STATE OF THE ART");

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

   $('#refresh-headertext').html(texts[point]);
   if (point < texts.length - 1) {
      point++;
   } else {
      point = 0;
   }
   $('#refresh-subtext').html(sub_texts[point1]);
   if (point1 < sub_texts.length - 1) {
      point1++;
   } else {
      point1 = 0;
   }

   setTimeout(changeHeaderText, 5000)
}

changeHeaderText();