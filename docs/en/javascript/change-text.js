

var sub_texts = new Array();
sub_texts.push("But we are - MetaTrader-Panel was designed with the one idea in mind making CFD trading a fair deal.");
sub_texts.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore!");
sub_texts.push("Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro legentur");

var texts = new Array();
texts.push("YOUR BROKER IS NOT YOUR FRIEND. HE IS YOUR COUNTERPART");
texts.push("WHY YOUR BROKER KNOWS YOUR STOP LOSS");
texts.push("A NEW STANDARD IN CFD RETAIL TRADING");
texts.push("WHY YOUR BROKER KNOWS YOUR TARGET POINT");
texts.push("LIGHTNING FAST, STATE OF THE ART AND LIGHTWEIGHT");



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

 