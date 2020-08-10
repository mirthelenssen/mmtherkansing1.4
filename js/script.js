// var geklikt = false;
// // var player = videojs('trailer1');

// $("#afspelen").click(function () {
//     console.log('click');
//     event.preventDefault();

//     if (geklikt == false) {
//         $('#trailer1').play();
//         geklikt = true;
//         $("#afspelen").css({ 

//         });

//     } else {
//         $('#trailer1').pause();
//         geklikt = false;
//         $("#afspelen").css({

//          });
//     }
//     console.log(geklikt);
// });
var geklikt = false;
var player = ("trailer1");

$( document ).ready(function() {
    $("#afspelen").click(function(event){
        console.log('click');
        event.preventDefault();
        if (geklikt == false) {
                    player.play();
                    geklikt = true;
                    $("#afspelen").css({ 
            
                    });
            
                } else {
                    player.pause();
                    geklikt = false;
                    $("#afspelen").css({
            
                     });
                }
    });
});



$( function() {
    $( "#tabs" ).tabs();
  } );


     