/*
Függvények létrehozásának 3 módja (amit változóban hozok létre, az csak miután elkészült, érhető el, a "sima" előbb is elérhető):

function functionName(parameter) {
    parameter === "argumentum as a string";
}

meghívása: functionName("argumentum as a string");

/////////////////////////////////////////////////////////
const argument = "argumentum as a string";

const functionName = function (parameter) {
    parameter === "argumentum as a string"
}

meghívása: functionName(argumentum);

/////////////////////////////////////////////////////////

const functionName = () => {

}

meghívása: functionName();
*/

const input = () => {
   return `
        <input type="text">
    `
}

const form = `
    <form id="form">
        ${ input("text") }
    </form>
`;

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", form);
}

window.addEventListener("load", loadEvent);