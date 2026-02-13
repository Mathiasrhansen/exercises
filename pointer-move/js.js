window.addEventListener("mousemove", changeColorX);

function changeColorX(e) {
    const change = (e.clientX / window.innerWidth) * 100;

    document.querySelector("body").style.setProperty("--pointer", change + "%");
}
