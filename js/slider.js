var i = 0;
var slides = [];
var time = 3000;
slides[0] = "./images/new.jpg";
slides[1] = "./images/two.jpg";

function slide(){

    document.image.src = slides[i];
    if(i < slides.length-1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("slide()",time);
}
slide();