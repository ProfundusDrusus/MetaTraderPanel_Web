
var sub_texts = new Array();

sub_texts.push("Das haben wir uns auch gefragt. Dann haben wir einfach einen Tick-Chart gebaut, aus dem man auch wirklich traden kann");
sub_texts.push("Schluss mit Stop-Loss Fischen. MetaTrader-Panel benutzt einen Stealth-Modus und dein Stop Loss ist für deinen Handels-Partner unsichtbar");
sub_texts.push("Keine Sorge, du bist nicht allein. MetaTrader-Panel wurde mit der Idee entwickelt, den CFD-Handel für Endkunden fairer zu machen.");
sub_texts.push("Erfahrung zählt. Unser Team vereint mehr als 120 Jahre professioneller Trading Erfahrung und wir wissen genau, was wir tun");
sub_texts.push("Im CFD-Handel ist dein Broker auch dein Handelspartner. Verrätst du ihm deinen Target Point gibst du ihm einen entscheidenden Vorsprung");
sub_texts.push("Alte Trading-Haudegen, die über jahrzehnte-lange Handels-Erfahrung verfügen, kombiniert mit jungen Talenten ist unser Geheimnis");
sub_texts.push("Natürlich nicht - wie denn auch? MetaTrader-Panel hat sein eigene Datenbank und kann das natürlich. Kein Problem für uns");

var texts = new Array();

texts.push("WARUM VERFÜGT MT5 ÜBER KEINEN GUTEN TICK-CHART?");
texts.push("WARUM VERRÄTST DU DEINEM BROKER DEIN STOP LOSS?");
texts.push("DEIN BROKER IST NICHT DEIN FREUND. ER IST DEIN HANDELS-PARTNER");
texts.push("EIN NEUER STANDARD FÜR PRIVATKUNDEN IM CFD-HANDEL");
texts.push("WARUM KENNT DEIN HANDELS-PARTNER DEINEN TARGET POINT?");
texts.push("INTELLIGENTER CODE, BLITZSCHNELL UND NEUESTE TECHNOLOGIE");
texts.push("KANN MT5 FIBONACCI LEVELS OHNE DATEN ZEICHNEN?");

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

   setTimeout(changeHeaderText, 10000)
}

changeHeaderText();