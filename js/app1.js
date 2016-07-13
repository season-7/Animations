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
        $('#fact-container').toggleClass("transformStyle transformRotate");
    }, 5000)
})