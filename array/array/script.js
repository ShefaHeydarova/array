let marka = ["Bmw", "Mersedes", "Nissan"];

let model = [
  ["x6", "x7"],
  ["sclass", "190"],
  ["Sunny", "Juke", "Astra"],
];

let markaS = document.getElementById("marka");
let modelS = document.getElementById("model");


onload = function () {
  let ekran = ` <option value="" selected disabled > Masin sec </option>`;

  for (let i = 0; i < marka.length; i++) {
    ekran += `<option value="${i}" > ${marka[i]} </option>`;
  }

  markaS.innerHTML = ekran;
  
};

function sec(){
  let ekran = ` <option value="" selected disabled > Marka sec </option>`;
  
let value =markaS.value;
  for(let i=0; i<model[value].length; i++){
      ekran += `<option value="${i}" > ${model[value][i]} </option>`;
      
  }
  modelS.innerHTML = ekran;
}

function yazdir(){
  let markaV= markaS.value;

  document.getElementById("show").innerHTML = `Siz ${marka[markaV]}  markasinin ${model} modelini secdiniz;`
}
