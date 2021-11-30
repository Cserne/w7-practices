/*
Függvények létrehozásának 3 módja (amit változóban hozok létre, az csak miután elkészült, érhető el, a "sima" előbb is elérhető):

function functionName() {

}

const functionName = function () {

}

const functionName = () => {

}
*/

const input = `
    <input type="text">
`;

const form = `
    <form id="form">
        ${input("text")}
    </form>
`;

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", form);
}

window.addEventListener("load", loadEvent);