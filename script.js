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

const input = (type, name, label) => {
   return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}">
        </div>
    `
}

const form = `
    <form id="form">
        ${ input("text", "firstName", "Keresztneved") }
        ${ input("file", "profilePicture", "Profilképed") }
        ${ input("email", "personalEmail", "Email címed") }
        ${ input("radio", "newsLetter", "Szeretnél-e hírlevelet kapni?") }
        ${ input("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?") }
    </form>
`;

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", form);
}

window.addEventListener("load", loadEvent);