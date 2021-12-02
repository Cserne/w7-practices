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

const inputElement = (type, name, label, req = "") => {
   console.log(req);
    return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}" ${req}>
        </div>
    `
};

const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `
            <option>${option}</option>
        `;
    }
    return `
         <div>
             <label>${label}</label>
             <${type} name="${name}">
                ${optionElements}
             </${type}>
         </div>
     `
};
 
/*
const formElement = '<form id="form">' + inputElement("text", "firstName", "Keresztneved") + inputElement("file", "profilePicture", "Profilképed") + inputElement("email", "personalEmail", "Email címed") + inputElement("checkbox", "newsLetter", "Szeretnél-e hírlevelet kapni?") +  inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?") +  selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) + ' <button>Ok</button>' + '</form>'
*/

/*
const nameData = { //Ezeknek semmi köze a paraméterekhez, véletlen, hogy ugyanúgy hívják őket!!!
    type: "text",
    name: "firstName",
    label:"Keresztneved"
}
*/

const anotherFormFields = [
    {
        type: "text",
        name: "street",
        label: "Közterület neve"
    },
    {
        type: "text",
        name: "houseNumber",
        label: "Házszám"
    },
    {
        type: "number",
        name: "zipCode",
        label: "Irányítószám"
    },
    {
        type: "text",
        name: "city",
        label: "Település neve"
    }
]

const formFields = [
    {
        type: "text",
        name: "firstName",
        label:"Keresztneved"
    },
    {
        type: "file",
        name: "profilePicture",
        label:"Profilképed"
    },
    {
        type: "email",
        name: "personalEmail",
        label:"Email címed",
        required: "required"
    },
    {
        type: "checkbox",
        name: "newsLetter",
        label:"Szeretnél-e hírlevelet kapni?"
    },
    {
        type: "checkbox",
        name: "terms",
        label:"Elfogadod-e a felhasználási feltételeket?"
    }
]

const formElement = (ffs, id) => {
    let toForm = "";
    for (const ff of ffs) {
        toForm += inputElement(ff.type, ff.name, ff.label, ff.required)
    }
    return `
    <form id="${id}">
        ${toForm}
        ${ selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) }
        <button>Ok</button>
    </form>
`
}

/*
const formElement = `
    <form id="form">
        ${ inputElement(nameData.type, nameData.name, nameData.label) }
        ${ inputElement("file", "profilePicture", "Profilképed") }
        ${ inputElement("email", "personalEmail", "Email címed", "required") }
        ${ inputElement("checkbox", "newsLetter", "Szeretnél-e hírlevelet kapni?") }
        ${ inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?") }
        ${ selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) }
        <button>Ok</button>
    </form>
`;
*/

const formSubmit = (event) => {
    event.preventDefault(); //ez éri el, hogy az alapértelmezett submitje ne fusson le az eseménynek
    //console.log(event);
    const et = event.target;
    et.classList.add("submit"); //a target azért kell, hogy már ne kelljen getElementById-val kiszednem, az event.target a form element
    let etValue = et.querySelector(`select[name="where"]`).value;
    console.log(etValue);
}

const inputEvent = (event) => {
    //console.log(event.target.value); //csak az input mezőknek van value-ja
    //console.log(event.target.name);
    //console.log(event);
    const fName = document.querySelector(`input[name="firstName"]`);
    const tryForm = fName.closest("#form"); //a legközelebbi olyan parent, aminek az id-ja form
    console.log(tryForm);
    //console.log(fName);
    if (event.target.getAttribute("name") === "firstName") {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
    }
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement(formFields, "form"));
    root.insertAdjacentHTML("beforeend", formElement(anotherFormFields, "form2"));
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