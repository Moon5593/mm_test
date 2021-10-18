# Image cycle
    Simple Image cycle application build with native html, css and javascript.
    The header comprises of two div's on top of each other. One is header background which holds header image and second is buttons which holds next and previous buttons.
    The header background is cropped to fit and is also centered to avoid any unnecessary stretching in bigger screens. The screen wrapper is restricted to 300 x 250px. This resolution is responsive too.
    The last div holds the images and they are visible as per the delay set in tweenlite.

    The CSS file holds all the appropriate stylings. The header is transparent and is clearly visible only at the hover interaction by user. The transparency is achieved by using opacity property.

    The JS file contains methods to show images as per user interaction with next or previous. The file also contains tweenlite code for animation.

    Assets has all the images which were necessary for building this application.

## Libraries used
    The only library used is GSAP tweenlite for animating image cycle. The tweenlite is loaded via CDN in html file.