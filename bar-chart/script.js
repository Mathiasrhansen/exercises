const list = document.querySelector("ul");

const columnArray = [];

setInterval(generateColumns, 1000);

function generateColumns() {
    columnArray.push(Math.round(Math.random() * 100));
    list.innerHTML = "";
    
    columnArray.forEach((height) => {
        const li = document.createElement("li");
        li.style.setProperty("--height", height);
        list.appendChild(li);
    });
    
    if (columnArray.length >= 21) {
        list.firstChild.remove();
        columnArray.shift();
    }
}