
let paragBt1 = document.getElementById("paragBt1");
let paragBt2 = document.getElementById("paragBt2");
let paragBt3 = document.getElementById("paragBt3");

let parag1 = document.getElementById("parag1");
let parag2 = document.getElementById("parag2");
let parag3 = document.getElementById("parag3");
let parag4 = document.getElementById("parag4");
let fooTer = document.getElementById("footer");
let sidebarLeft = document.getElementById("sidebarLeft");
let sidebarRight = document.getElementById("sidebarRight");

let paraGraph1 = document.getElementById("paraGraph1");
let bt1 = document.getElementById("bt1");

function setClock(){
    let dateInfo = new Date (); 
    let hour = modifyNumber(dateInfo.getHours ());
    let min = modifyNumber(dateInfo.getMinutes ());
    let sec = modifyNumber(dateInfo.getSeconds ());
    let year = dateInfo.getFullYear();
    let month = dateInfo.getMonth() + 1;
    let date = dateInfo.getDate();

    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + "." + month + "." + date + " /";
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}
onload = function(){
    setClock();
    setInterval(setClock,1000);
}  

document.addEventListener('scroll', onScroll, { passive: true });
function onScroll () {
    const scrollposition = pageYOffset;
    const nav = document.querySelector('nav');

    if (200<=scrollposition){
        document.getElementById('workbar').style.top = '0';
    }
    else{
        document.getElementById('workbar').style.top = '-100px';
    }
} 

function switchParagR () {
    if(parag1.style.display == 'grid') {
        showparag2 ();
        return 0;
    }

    if(parag2.style.display == "block") {
        showparag3 ();
        return 0;
    }
}

function switchParagL () {
    if(parag1.style.display == 'grid') {
        showparag2 ();
        return 0;
    }

    if(parag2.style.display == "block") {
        showparag3 ();
        return 0;
    }
}



function showparag1 () {
    paragBt1.style.opacity=('1');
    paragBt2.style.opacity=('0.3');
    paragBt3.style.opacity=('0.3');
    /* ParaGraph 1 STYLE*/
    parag1.style.display="grid";
    parag1.style.gridTemplateColumns="repeat(2, 1fr)";
    parag1.style.gridTemplateRows="repeat(4, minmax(1fr, auto))";
    parag1.style.gap="50px 40px";

    parag2.style.display="none";
    parag3.style.display="none";
    parag4.style.display="none";
    fooTer.style.display="block";
    /* SideBar */
    sidebarLeft.style.display="fixed";
    sidebarRight.style.display="fixed";
    sidebarLeft.style.opacity = ('0.2');
    sidebarRight.style.opacity = ('1');
}

function showparag2 () {
    paragBt1.style.opacity=('0.3');
    paragBt2.style.opacity=('1');
    paragBt3.style.opacity=('0.3');
    parag1.style.display="none";
    parag2.style.display="block";
    parag3.style.display="none";
    parag4.style.display="none";
    fooTer.style.display="block";
    sidebarLeft.style.display="fixed";
    sidebarRight.style.display="fixed";
    sidebarLeft.style.opacity = ('1');
    sidebarRight.style.opacity = ('1');
}

function showparag3 () {
    paragBt1.style.opacity=('0.3');
    paragBt2.style.opacity=('0.3');
    paragBt3.style.opacity=('1');
    parag1.style.display="none";
    parag2.style.display="none";
    parag3.style.display="block";
    parag4.style.display="none";
    fooTer.style.display="block";
    sidebarLeft.style.display="fixed";
    sidebarRight.style.opacity = ('0.2');
    sidebarLeft.style.opacity = ('1');
}