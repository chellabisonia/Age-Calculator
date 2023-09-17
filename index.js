
//Réccupérer les données rentrées par l'utilisateur
const inputDay = document.querySelector('input[type="text"]');
let day = "";
let days ="";
let contentDay;
inputDay.addEventListener("input", (e)=>{
    day = e.target.value;
    console.log(day);
    days = (jour - day);
    console.log(days);
   contentDay = document.querySelector(".content3");
   contentDay.innerHTML = days;
   // contentDay.innerHTML = contentDay.innerHTML.replace(/--/g, `${days}`);
})
const inputMonth = document.getElementById("month");
let month = "";
let months ="";
let contentMonth;
inputMonth.addEventListener("input", (e) =>{
   month = e.target.value;
   months = mois - month;
   console.log(months);
   contentMonth = document.querySelector(".content2");
   contentMonth.innerHTML = months; 
   // contentMonth.innerHTML = contentMonth.innerHTML.replace(/--/g, `${months}`);
   
})

const inputYear = document.getElementById("year");
let year = "";
let years ="";
let contentYear;
inputYear.addEventListener("input", (e)=>{
year = e.target.value;
years = annee - year;
console.log(years);
contentYear =document.querySelector(".content1");
contentYear.innerHTML= years ;
// contentYear.innerHTML = contentYear.innerHTML.replace(/--/g, `${years}`);
   
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
