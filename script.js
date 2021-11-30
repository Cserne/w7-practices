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

const inputElement = (type, name, label) => {
   return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}">
        </div>
    `
};

const formElement = `
    <form id="form">
        ${ inputElement("text", "firstName", "Keresztneved") }
        ${ inputElement("file", "profilePicture", "Profilképed") }
        ${ inputElement("email", "personalEmail", "Email címed") }
        ${ inputElement("radio", "newsLetter", "Szeretnél-e hírlevelet kapni?") }
        ${ inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?") }
        <button>Ok</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault(); //ez éri el, hogy az alapértelmezett submitje ne fusson le az eseménynek
    console.log(event);
    event.target.classList.add("submit"); //a target azért kell, hogy már ne kelljen getElementBYId-val kiszednem
}

const inputEvent = (event) => {
    console.log(event.target.value); //csak az input mezőknek van value-ja
    document.getElementById("inputValueContent").innerHTML = event.target.value;
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
    <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form"); //ez csak azért működik, mert létrehoztam előtte a formot
    form.addEventListener("submit", formSubmit);
    
    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent)
    }
}

window.addEventListener("load", loadEvent);