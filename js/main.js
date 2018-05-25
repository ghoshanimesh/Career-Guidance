//Global
$(document).ready(function () {
    //Smooth Scroll
    $('.link-scroll').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top + 2
        }, 700);
        e.preventDefault();
    });

    //Navbar Toggle Button
    $('.navbar-toggler').on('click', function () {
        $('.navbar-toggler').toggleClass('active');
    });

});
//Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    merge:true,
    mouseDrag:true,
    autoplay:true,
    slideTransition: 'linear',
    autoplaySpeed: 1000,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        }
    }
});
// Custom map
// Custom map
function custom_map() {

    var var_location = new google.maps.LatLng(19.024559, 72.840971);

    var var_mapoptions = {
        center: var_location,
        zoom: 17,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#46bcec"
                    },
                    {
                        "saturation": -10
                    },
                    {
                        "lightness": -21
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#C3C3C3"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#A19FA0"
                    },
                    {
                        "saturation": -98
                    },
                    {
                        "lightness": -20
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#FFFFFF"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            }
        ]
    };

    var var_map = new google.maps.Map(document.getElementById("map-container-2"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Career Cell"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', custom_map);