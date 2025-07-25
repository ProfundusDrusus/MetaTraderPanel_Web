const IMAGES = ["Test7.jpg", "testx.jpg"];
const INTERVAL = 15000;

const changeImages = () => {
    let i = 0;
    const bannerElement = $("#banner-content");
    bannerElement.css("background-image", `url(assets/${IMAGES[i]})`);
    setInterval(() => {
        i = (i+1) % IMAGES.length;
        bannerElement.fadeOut("slow", function () {
            $(this)
                .css("background-image", "url(assets/" + IMAGES[i] + ")")
                .fadeIn("slow");
        });
    }, INTERVAL);

};

changeImages();