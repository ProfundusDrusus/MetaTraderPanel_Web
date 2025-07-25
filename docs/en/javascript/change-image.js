
	  
	var images = ["Test7.jpg","testx.jpg"];
    function changeImage2() {
        var i = 0;
        $("#banner-content").css("background-image", "url(assets/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#banner-content").fadeOut("slow", function () {
                $(this).css("background-image", "url(assets/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 15000);
    }	  
	
	changeImage2();