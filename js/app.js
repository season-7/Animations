var width, height;
var part1, part2, fact_container1, fact_container2, fact_container3, part3;

function setHeights(){
    width = window.innerWidth;
    height = window.innerHeight;
    
    part1 = document.getElementById('part1');
    part1.style.minHeight = height+'px';
    
    part2 = document.getElementById('part2');
    part2.style.minHeight = height * .70+'px';
    
    fact_container1 = document.getElementById('fact-container1');
    //fact_container1.style.height = height * .65+'px';
    fact_container1.style.height = height * .65+'px';
    
    fact_container2 = document.getElementById('fact-container2');
    //fact_container2.style.height = height * .65+'px';
    fact_container2.style.height = height * .65+'px';
    
    fact_container3 = document.getElementById('fact-container3');
    //fact_container3.style.height = height * .65+'px';
    fact_container3.style.height = height * .65+'px';
    
    part3 = document.getElementById('part3');
    part3.style.height = height * .75 + 'px';
}

setHeights();

$(function() {            
    setInterval(function() {
        $('#fact-container1').toggleClass("transformStyle transformRotate");
    }, 12000)
})

$(function() {            
    setInterval(function() {
        $('#fact-container2').toggleClass("transformStyle transformRotate");
    }, 9000)
})

$(function() {            
    setInterval(function() {
        $('#fact-container3').toggleClass("transformStyle transformRotate");
    }, 5000)
})

var $bubbles = $('.bubbles');

function bubbles() {
    // Settings
    var min_bubble_count = 20, // Minimum number of bubbles
    max_bubble_count = 260, // Maximum number of bubbles
    min_bubble_size = 2, // Smallest possible bubble diameter (px)
    max_bubble_size = 8; // Maximum bubble blur amount (px)
  
    // Calculate a random number of bubbles based on our min/max
    var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
  
    // Create the bubbles
    for (var i = 0; i < bubbleCount; i++) {
        $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
    }
  
    // Now randomise the various bubble elements
    $bubbles.find('.bubble-container').each(function(){

        // Randomise the bubble positions (0 - 100%)
        var pos_rand = Math.floor(Math.random() * 101);

        // Randomise their size
        var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

        // Randomise the time they start rising (0-15s)
        var delay_rand = Math.floor(Math.random() * 16);

        // Randomise their speed (3-8s)
        var speed_rand = 3 + Math.floor(Math.random() * 19);

        // Random blur
        var blur_rand = Math.floor(Math.random() * 3);

        // Cache the this selector
        var $this = $(this);

        // Apply the new styles
        $this.css({
            'left' : pos_rand + '%',

            '-webkit-animation-duration' : speed_rand + 's',
            '-moz-animation-duration' : speed_rand + 's',
            '-ms-animation-duration' : speed_rand + 's',
            'animation-duration' : speed_rand + 's',

            '-webkit-animation-delay' : delay_rand + 's',
            '-moz-animation-delay' : delay_rand + 's',
            '-ms-animation-delay' : delay_rand + 's',
            'animation-delay' : delay_rand + 's',

            '-webkit-filter' : 'blur(' + blur_rand  + 'px)',
            '-moz-filter' : 'blur(' + blur_rand  + 'px)',
            '-ms-filter' : 'blur(' + blur_rand  + 'px)',
            'filter' : 'blur(' + blur_rand  + 'px)',
        });

        $this.children('.bubble').css({
            'width' : size_rand + 'px',
            'height' : size_rand + 'px'
        });
    });
}

// In case users value their laptop battery life
// Allow them to turn the bubbles off
$('.bubble-toggle').click(function(){
    if($bubbles.is(':empty')) {
        bubbles();
        $bubbles.show();
        $(this).text('Bubbles Off');
    } else {
        $bubbles.fadeOut(function(){
            $(this).empty();
        });
        
        $(this).text('Bubbles On');
    }

    return false;
});

bubbles();