
var ttmq1 = new Array();
ttmq1.push("This is such a wonderful tool shared with generosity. Thank you! Wonderful job. I aim at going full version, using this one for training.");
ttmq1.push("Ich mag dieses Panel, es hat viele Probleme auf einmal gelöst. Alles ist an einem Ort, ich bin sehr zufrieden.");
ttmq1.push("Ein Muss für jeden Trader, der seinen Alltag vereinfachen möchte. Die Möglichkeit, Orders visuell zu platzieren ist sehr praktisch.");

var ttmf1 = new Array();
ttmf1.push("John Doe, UK");
ttmf1.push("Peter Steiner, GER");
ttmf1.push("Jussuf Habock, GR");



var ttmsCnt = 0;

function changeTestimonials() {
	
	$("#ttmq-1").fadeOut("slow", function () {
         $(this).html(ttmq1[ttmsCnt]);
		 document.getElementById("ttmf-1").innerHTML= ttmf1[ttmsCnt];
         $(this).fadeIn("slow");
      });
	$("#ttm-2").fadeOut("slow", function () {
         
         $(this).fadeIn("slow");
      });
	$("#ttm-3").fadeOut("slow", function () {
         
         $(this).fadeIn("slow");
      });
	  
	if (ttmsCnt < ttmq1.length - 1) {
	  ttmsCnt++;
	} else {
	  ttmsCnt = 0;
	}

	setTimeout(changeTestimonials, 10000)	
}

var sub_texts = new Array();
sub_texts.push("Schluss mit Stop-Loss Fischen. MetaTrader-Panel benutzt einen Stealth-Modus und dein Stop Loss ist für deinen Broker unsichtbar");
sub_texts.push("Erfolgreich traden ist schwierig genug. Du solltest dich nicht mit banalen Dingen ablenken. Wir helfen dein Trading besser zu machen.");
sub_texts.push("Das haben wir uns auch gefragt. Dann haben wir einfach einen Tick-Chart gebaut, aus dem man auch wirklich traden kann");
sub_texts.push("Keine Sorge, du bist nicht allein. MetaTrader-Panel wurde mit der Idee entwickelt, den CFD-Handel für Endkunden fairer zu machen.");
sub_texts.push("Erfahrung zählt. Unser Team vereint mehr als 120 Jahre professioneller Trading Erfahrung und wir wissen genau, was wir tun");
sub_texts.push("Im CFD-Handel ist dein Broker auch dein Handelspartner. Verrätst du ihm deinen Target Point gibst du ihm einen entscheidenden Vorsprung");
sub_texts.push("Profi-Trader mit jahrzehntelanger Handelserfahrung kombiniert mit jungen, erfolgshungrigen Talenten, das ist unser Geheimnis.");
sub_texts.push("Natürlich nicht - wie denn auch? MetaTrader-Panel verfügt über eine eigene Datenbank und kann das. Kein Problem für uns");

var texts = new Array();
texts.push("WARUM VERRÄTST DU DEINEM BROKER DEIN STOP LOSS?");
texts.push("DU TRADEST UND WIR KÜMMERN UNS UM DEN REST");
texts.push("WARUM VERFÜGT MT5 ÜBER KEINEN GUTEN TICK-CHART?");
texts.push("DEIN BROKER IST NICHT DEIN FREUND. ER IST DEIN HANDELS-PARTNER");
texts.push("KONZENTRATION AUF DAS WESENTLICHE IST ENTSCHEIDEND");
texts.push("WARUM KENNT DEIN HANDELS-PARTNER DEINEN TARGET POINT?");
texts.push("INTELLIGENTER CODE, BLITZSCHNELL UND NEUESTE TECHNOLOGIE");
texts.push("KANN MT5 FIBONACCI LEVELS OHNE DATEN ZEICHNEN?");

var images = [];
images[0] = "assets/Panel_07x600.png";
images[1] = "assets/Panel_07x600.png";
images[1] = "assets/TickPanel_01.png";
images[2] = "assets/Panel_04x600.png";
images[3] = "assets/TickPanel_01.png";
images[4] = "assets/Panel_07x600.png";
images[5] = "assets/Panel_04x600.png";
images[6] = "assets/Panel_08x600.png";
images[7] = "assets/Panel_08x600.png";

var links = [];
links[0] = "features/position-props";
links[1] = "features/tick-chart";
links[2] = "features/fibonacci";
links[3] = "features/fibonacci";
links[4] = "features/position-props";
links[5] = "features/fibonacci";
links[6] = "features/fibonacci";
links[7] = "features/fibonacci";

var point = 0;
var point1 = 0;



function changeHeaderText() {
	
	

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
         $(this).html(sub_texts[point1]);
         $(this).fadeIn("slow");
      });
	  

	  
	if (point < texts.length - 1) {
	  point++;
	} else {
	  point = 0;
	}
	
	if (point1 < sub_texts.length - 1) {
      point1++;
	} else {
      point1 = 0;
	}
	
	setTimeout(changeHeaderText, 12000)
	
}

changeHeaderText();

changeTestimonials();