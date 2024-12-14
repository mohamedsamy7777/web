let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouva = document.querySelector('.nouva');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top= value*2.5 +'px';
    mountains3.style.top= value*1.5 +'px';
    mountains4.style.top= value*1.1 +'px';
    river.style.top=value+'px';
    boat6.style.top=value+'px';
    boat6.style.left=value*1.5+'px';
    nouva.style.fontSize= value +'px';
    if (scrollY>=90){
        nouva.style.fontSize= 90 +'px';
        nouva.style.position='fixed';
        if(scrollY>=508 ){
            nouva.style.display="none";
        }
        else{
            nouva.style.position='block';
        }

        

    }

}

