
	  
	var images = ["Test7.jpg","Light_01.png","005.png"];
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
		
		let index = 0;
		const imgElement = document.querySelector('#pic2');

    }	  
	changeImage2();
	
	