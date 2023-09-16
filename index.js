
//Réccupérer les données rentrées par l'utilisateur
const inputDay = document.querySelector('input[type="text"]');
let day = "";
let days ="";
let content;
inputDay.addEventListener("input", (e)=>{
    day = e.target.value;
    console.log(day);
    days = (jour - day);
    console.log(days);
   content = document.querySelector(".content3");
   content.innerHTML = content.innerHTML.replace(/--/g, `${days}`);
})

const inputMonth = document.getElementById("month");
let month = "";
let months ="";
inputMonth.addEventListener("input", (e) =>{
   month = e.target.value;
   months = mois - month;
   
})

const inputYear = document.getElementById("year");
let year = "";
let years ="";
inputYear.addEventListener("input", (e)=>{
year = e.target.value;
years = annee - year;

})

const display = document.querySelector('input[type="image"]');
display.addEventListener("click", (e) => {
    e.preventDefault();
 console.log(day + "/" + month + "/" + year);

})


// Obtenir la date d'aujourdh'ui

const date = new Date();
let jour = date.getDate();
let mois = date.getMonth()+1;
let annee = date.getFullYear();

console.log(jour + "/" + mois + "/" + annee);







//Les inputs vides => message d'erreur
//informations invalides => message d'erreur
//date invalide => messgae d'erreur
