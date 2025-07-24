$(document).ready(function() {
    setInterval(function() {
      $("#refresh").load(window.location.href + " refresh", function() { console.log("loaded") });
    }, 1000);
  });