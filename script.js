var min = 0
var sec = 0
var msec = 0

document.getElementById('start').onclick = function(){                  //сам секундомер
    init();
    document.getElementById('NewS').style.display = "block";
    document.getElementById('start').style.display = "none";
    document.getElementById('stop').style.display = "block";
    document.getElementById('null').style.display = "block";
};
document.getElementById('stop').onclick = function(){ 
    document.getElementById('start').style.display = "block";
    document.getElementById('stop').style.display = "none";
    stop();
}
function init(){
timer = setInterval(secondmetter, 10);

}

function secondmetter(){
    msec++;
    if(msec > 99){
        sec++;
        msec=0;
    }
    if(sec > 59){
        min++;
        sec = 0;
    } else if(min > 59){
        min = 0;
    }
    if(msec < 10) {
        if(sec < 10){
            if(min < 10){
                document.getElementById('timer').innerHTML = '0' + min + ':0' + sec + ':0' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':0' + sec + ':0' + msec;
            }
        } else {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec + ':0' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec + ':0' + msec;
            }
        }
    } else {
        if(sec < 10) {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':0' + sec + ':' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':0' + sec + ':' + msec;
            }
        } else {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec + ':' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec + ':' + msec;
            }
        }
    }
}

function stop(){
    clearInterval(timer);
}

document.getElementById('null').onclick = function(){ 
    msec = 0;
    sec = 0;
    min = 0;
    document.getElementById('timer').innerHTML ='0' + min + ':' + '0' + sec + ':' + '0' + msec;
}
var i= 1;
var ulSpisok = document.getElementById('menu-list');
document.getElementById('NewS').onclick = function(){                  //функция новый круг
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    newSpan.innerHTML = "Circle - " + i + ' - ' + document.getElementById('timer').innerHTML;
    ulSpisok.appendChild(newLi).append(newSpan);
    i++;
};