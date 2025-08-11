var ttmq3 = new Array();
ttmq3.push("Sehr freundlicher, kompetententer und vor allem schneller Support.<br><br><br>Mary Steiner, Österreich");
ttmq3.push("Ich war überrascht wie ertragreich die Signale sind, die ich bekomme. Die Gebühr empfinde ich als äußerst günstig.<br><br>Sven Geizkragen,  Norderstedt"); 
ttmq3.push("Jeannie hat echt die geilsten Titten weit und breit, ich bin sehr zufrieden.<br><br>><br>Johan Notgeil, GER");

var ttmq2 = new Array();
ttmq2.push("Ein Muss für jeden Trader, der seinen Alltag vereinfachen möchte. Die Möglichkeit, Orders visuell zu platzieren ist sehr praktisch.<br><br>Jussuf Habock, GR");
ttmq2.push("Kein Schnick-Schnack sondern nur die Funktionen die ich wirklich brauche. Ich möchte nicht mehr tauschen.<br><br>Gerhard Schreck, GER"); 
ttmq2.push("Die Möglichkeit direkt aus dem Tick Chart zu Positionen zu öffnen oder zu schließen hat meine Gewinn Marge deutlich verbessert.<br><br>Peter Talentlos, KiTa"); 


var ttmq1 = new Array();
ttmq1.push("This is such a wonderful tool shared with generosity. Thank you! Wonderful job. I aim at going full version, using this one for training.<br><br>Farhad Douzduzani, GER");
ttmq1.push("Ich mag dieses Panel, es hat viele Probleme auf einmal gelöst. Alles ist an einem Ort, ich bin sehr zufrieden.<br><br>Peter Steiner, GER");
ttmq1.push("Ein Muss für jeden Trader, der seinen Alltag vereinfachen möchte. Die Möglichkeit, Orders visuell zu platzieren ist sehr praktisch.<br><br>Jussuf Habock, GR");




var ttmsCnt = 0;

function changeTestimonials1() {
	
	$("#ttm1").fadeOut("slow", function () {
         $(this).html(ttmq1[ttmsCnt]);
         $(this).fadeIn("slow");
      });
	  
	if (ttmsCnt < ttmq1.length - 1) {
	  ttmsCnt++;
	} else {
	  ttmsCnt = 0;
	}

	setTimeout(changeTestimonials1, 10000)	
}
function changeTestimonials2() {
  
	/* change testimonial 2*/
    $("#ttm2").fadeOut("slow", function () {
         $(this).html(ttmq2[ttmsCnt]);
         $(this).fadeIn("slow");
      });

	setTimeout(changeTestimonials2, 11000)
}
	
function changeTestimonials3() {
  
	/* change testimonial 2*/
    $("#ttm3").fadeOut("slow", function () {
         $(this).html(ttmq3[ttmsCnt]);
         $(this).fadeIn("slow");
      });

	setTimeout(changeTestimonials3, 12000)
}


var texts = new Array();
texts[0]=("WARUM VERRÄTST DU DEINEM BROKER DEIN STOP LOSS?");
texts[1]=("WARUM VERFÜGT MT5 ÜBER KEINEN GUTEN TICK-CHART?");
texts[2]=("DEIN BROKER IST NICHT DEIN FREUND. ER IST DEIN HANDELS-PARTNER");
texts[3]=("KONZENTRATION AUF DAS WESENTLICHE IST ENTSCHEIDEND");
texts[4]=("WARUM KENNT DEIN HANDELS-PARTNER DEINEN TARGET POINT?");
texts[5]=("INTELLIGENTER CODE, BLITZSCHNELL UND NEUESTE TECHNOLOGIE");
texts[6]=("KANN MT5 FIBONACCI LEVELS OHNE DATEN ZEICHNEN?");
texts[7]=("DU TRADEST UND WIR KÜMMERN UNS UM DEN REST");


var sub_texts = new Array();
sub_texts[0]=("Schluss mit Stop-Loss Fischen. MetaTrader-Panel benutzt einen Stealth-Modus und dein Stop Loss ist für deinen Broker unsichtbar");
sub_texts[1]=("Das haben wir uns auch gefragt. Dann haben wir einfach einen Tick-Chart gebaut, aus dem man auch wirklich traden kann");
sub_texts[2]=("Keine Sorge, du bist nicht allein. MetaTrader-Panel wurde mit der Idee entwickelt, den CFD-Handel für Endkunden fairer zu machen.");
sub_texts[3]=("Erfahrung zählt. Unser Team vereint mehr als 120 Jahre professioneller Trading Erfahrung und wir wissen genau, was wir tun");
sub_texts[4]=("Dein Broker ist auch dein Handelspartner. Verrätst du ihm deinen Target Point gibst du ihm einen entscheidenden Vorsprung");
sub_texts[5]=("Profi-Trader mit jahrzehntelanger Handelserfahrung kombiniert mit jungen, erfolgshungrigen Talenten, das ist unser Geheimnis.");
sub_texts[6]=("Natürlich nicht - wie denn auch? MetaTrader-Panel verfügt über eine eigene Datenbank und kann das. Kein Problem für uns");
sub_texts[7]=("Erfolgreich traden ist schwierig genug. Du solltest dich nicht mit banalen Dingen ablenken. Mit uns wird dein Trading erfolgreicher.");


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
changeTestimonials2();
changeTestimonials3();