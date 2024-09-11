let hoverBlock = document.querySelector(".hover-block"); 

var info = hoverBlock.getBoundingClientRect()

document.querySelector(".navbar").addEventListener("mousemove", (e) => {
    var windowheight = window.innerWidth
    let mouseX = e.clientX

    if (info.left > (windowheight * 0.25) && info.left < (windowheight * 0.75)){
        hoverBlock.style.transform = `translate(${(mouseX - windowheight)}px)`;
    }

});