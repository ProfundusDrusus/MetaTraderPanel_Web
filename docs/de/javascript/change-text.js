

var sub_texts = new Array();
sub_texts.push("But we are - MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore!");
sub_texts.push("Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro legentur");



var texts = new Array();
texts.push("IHR BROKER IST NICHT IHR FREUND. ER IST IHR HANDELS-PARTNER");
texts.push("WARUM VERRATEN SIE IM IHR STOP LOSS?");
texts.push("WARUM VERRATEN SIE IM IHREN TARGET POINT?");
texts.push("EIN NEUER BRANCHENSTANDARD  FÜR PRIVATKUNDEN IM CFD-HANDEL");
texts.push("BLITZSCHNELL, MODERNSTE TECHNOLOGIE UND SCHLANKER CODE");


var point = 0;
var point1 = 0;

function changeHeaderText(){
  $('#refresh-headertext').html(texts[point]);
  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  }
  $('#refresh-subtext').html(sub_texts[point1]);
  if(point1 < sub_texts.length - 1){
    point1 ++;
  }else{
    point1 = 0;
  }
  setTimeout(changeHeaderText, 5000)
}

changeHeaderText();  


