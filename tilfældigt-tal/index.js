window.onload = showRandom();

function showRandom() {
    const tal = ("Random", Math.floor(Math.random()*100));
    
    console.log(tal);
    const container = document.querySelector(".number").textContent = tal;
}