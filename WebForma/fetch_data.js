let name = localStorage.getItem("nameItem");
let mail = localStorage.getItem("mailItem");
let experience = localStorage.getItem("experienceItem");
let region = localStorage.getItem("regionItem");
let programmingIn = JSON.parse(localStorage.getItem("programmingItems"));

console.log(name + " | "+ mail +" | "+ experience +" | "+ region);
console.log(programmingIn);

for (val of Object.keys(programmingIn)){
    console.log("Value - programming: "+ val);
}

let parag = document.getElementById("show_data");
let nameText = document.createTextNode("Name: "+ name);
let mailText = document.createTextNode("Mail: "+ mail);
let lineElement = document.createElement("br");
parag.appendChild(nameText);
parag.appendChild(document.createElement("br"));
parag.appendChild(mailText);