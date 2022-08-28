function counting(element, deadline, duration) {
    let counts = setInterval(updated, duration); 
    let upto = 0;
    function updated() {
        var count = document.getElementById(element);
        count.innerHTML =++ upto;
        if (upto === deadline){
                clearInterval(counts);
        }
    }
}

window.onscroll = myFunction;
function myFunction() {
    if (document.documentElement.scrollTop >= 1612) {
        counting('counter1', 55, 100)
        counting('counter2', 45,100)
        counting('counter3', 302, 50)
    }
}

function openSideBar() {
    document.getElementById("side-nav").style.left = 0;
}

function closeSideBar() {
    document.getElementById("side-nav").style.left = "-300px";
}