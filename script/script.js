let edad = document.getElementById('edad');
let nombre = document.getElementById('nom');
let sex = 0;
let button = document.querySelector('#btn');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let arreglo =[];
let imc = 0;
function Calcular() {
    const arreg = []

    const alt = altura/100;
    imc = parseFloat(peso/(alt*alt)).toFixed(2);

    console.log(imc)
    
}

button.addEventListener('click', e => {
    nombre = document.getElementById('nom').value;
    edad = document.getElementById('edad').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    
    if(sex === 0){
       
        alert('Debe seleccionar su SEXO')
       
    } else if(nombre == ""){
        alert('Debe ingresar su NOMBRE')
    } else if (edad == "" || edad <= 0 || edad >= 130) {
        alert('El valor de su EDAD ingresado es invalido')
    }else if (peso == "" || peso <= 0){
        alert('El valor de su PESO ingresado es invalido')
    } else if (altura == "" || altura <= 0){
        alert('El valor de su ALTURA ingresado es invalido')
    }else{
    Ocultar();
     Calcular();
     console.log(crearRegistro)
    crearRegistro(sex, nombre, edad, altura, peso, imc);
     guardarDatos();

    document.querySelector(".resultado").textContent= imc;
    let rangMax = imc*0.4;
    let rangMin = imc*0.185;
    let rang = imc;
    if (rangMax > 40) {
        rang = 40;
    }else if(rangMin < 18.5){
        rang = 18.5;
    }

    }
})

function Ocultar() {
    document.querySelector(".res").style.display="block";
    document.querySelector(".calContainer").style.display="none";

}

function Volver() {
   document.querySelector(".res").style.display="none";
    document.querySelector(".calContainer").style.display="block";

}
function limpiar2() {
    document.querySelector("#rango").value= "";
    document.getElementById('nom').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    document.querySelector("#femC").style.display="none";
    document.querySelector("#masC").style.display="none";
    document.querySelector("#femG").style.display="block";
    document.querySelector("#masG").style.display="block";
 }
volver.addEventListener('click', e => {
    Volver();
    limpiar2()
})
femG.addEventListener('click', e => {
    document.querySelector("#femC").style.display="block";
    document.querySelector("#femG").style.display="none";
    document.querySelector("#masC").style.display="none";
    document.querySelector("#masG").style.display="block";
    sex = "femenino";
    console.log(sex)
})
femC.addEventListener('click', e => {
    document.querySelector("#femC").style.display="none";
    document.querySelector("#femG").style.display="block";
    sex = 0;
    console.log(sex)
})
masG.addEventListener('click', e => {
    document.querySelector("#masC").style.display="block";
    document.querySelector("#masG").style.display="none";
    document.querySelector("#femC").style.display="none";
    document.querySelector("#femG").style.display="block";
    sex = "Masculino";
    console.log(sex)
})
masC.addEventListener('click', e => {
    document.querySelector("#masC").style.display="none";
    document.querySelector("#masG").style.display="block";
    sex = 0;
    console.log(sex)
})
// formulario
const crearRegistro = (sex, nom, edad, altura, peso, imc) => {
    
    let registro = {
        sexo: sex,
        nombre: nom,
        edad: edad,
        altura: altura,
        peso: peso,
        imc: imc
    }

if (registro.length > 3){
    registro.shift()
    arreglo.push(registro);
}
    arreglo.push(registro);

    if (arreglo.length >= 16) {
        arreglo.splice(16, 1)
      }
}

const guardarDatos = () => {
    localStorage.setItem('Registro',JSON.stringify(arreglo));
   
}
const templatenew = document.getElementById('template-card').content;
const fragment1 = document.createDocumentFragment();
const items1 = document.getElementById('items');

const listarDatos = () => {
   
    arreg = JSON.parse(localStorage.getItem('Registro'));
    arreg.forEach(element => {
        const {sexo, nombre, edad, altura, peso, imc} = element; 
        templatenew.getElementById('nomT').textContent = nombre;
        templatenew.getElementById('edadT').textContent = edad;
        templatenew.getElementById('sexT').textContent = sexo;
        templatenew.getElementById('pesoT').textContent = peso;
        templatenew.getElementById('alturaT').textContent = altura; 
        templatenew.getElementById('imcT').textContent = imc; 
        const clone = templatenew.cloneNode(true);

        fragment1.appendChild(clone)
     })
     items1.appendChild(fragment1);
 }
 li.addEventListener('click', e => {
    limpiar()
    listarDatos()
})
 function limpiar(){
    document.querySelectorAll("table tbody tr").forEach(function(e){e.remove()})
 }
 ini.addEventListener('click', e => {
    Volver()
    limpiar2()
})
