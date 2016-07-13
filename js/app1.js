var width, height;
var part1, part2, part3;

function setHeights(){
    width = window.innerWidth;
    height = window.innerHeight;
    
    part1 = document.getElementById('part1');
    part1.style.height = height+'px';
    
    part2 = document.getElementById('part2');
    part2.style.height = height+'px';
    
    part3 = document.getElementById('part3');
    part3.style.height = height * .75 + 'px';
}

setHeights();