const list = document.querySelector(".breadcrumbs");
const breadcrumbBtn = document.querySelector(".btn");

const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

breadcrumbBtn.addEventListener("click", generateBc);
let counter = 0;

function generateBc() {
    bc.forEach(element => {
        counter++;
        if (counter < 3) {
            console.log(counter);
            const li = document.createElement("li");
            list.appendChild(li);
            const a = document.createElement("a");
            a.innerHTML = element.name;
            a.href = element.name;
            li.appendChild(a);
        }

        else {
            const li = document.createElement("li");
            list.appendChild(li);
            const p = document.createElement("p");
            p.innerHTML = element.name;
            li.appendChild(p);
        }
    });
}