let edad = document.getElementById('edad').value;
let nombre =document.getElementById('nom').value;
let sexo = 0;
let button = document.querySelector('#btn');
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;
let arreglo =[];
let imc = 0;


function Calcular(){

    const alt = altura/100;
    imc = parseFloat(peso/(alt*alt)).toFixed(2);

    console.log(imc)
}
console.log(btn.addEventListener)
button.addEventListener('click', e => {
    nombre = document.getElementById('nom').value;
    edad = document.getElementById('edad').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;

    if(sexo === 0){

        alert('Debe seleccionar su SEXO')
    
    }else if(nombre == ""){
        alert('Debe ingresra su Nombre')
    }else if (edad == "" || edad <= 0 || edad >= 130){
        alert('El valor ingresado de su Edad es invalido')
    }else if(peso == "" || peso <= 0){
        alert('El valor ingresado de su Peso es invalido')
    }else if(altura == "" || altura <= 0){
        alert(' El valor ingresado de Altura es invalido')
    } else{
        Ocultar();
        Calcular();
        console.log(crearRegistro)
        crearRegistro(sexo, nombre, edad, altura, peso, imc);
        guardarDatos();
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

volver.addEventListener('click', e => {
    Volver();

})
femG.addEventListener('click', e =>{
    document.querySelector('#femC').style.display="block";
    document.querySelector('#femG').style.display="none";
    document.querySelector('#masC').style.display="none";
    document.querySelector('#masG').style.display="block";
    sex = "femenino";
    console.log(sex)
})

femC.addEventListener('click', e => {
    document.querySelector("#femC").style.display="none";
    document.querySelector("femG").style.display="block";
    sex = 0;
    console.log(sex)
})
masG.addEventListener('click', e =>{
    document.querySelector("#masC").style.display="block";
    document.querySelector("#masG").style.display="none";
    document.querySelector("#femC").style.display="none";
    document.querySelector("#femG").style.display="block";
    sex = "masculino";
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
        sexo: sexo,
        nombre: nom,
        edad: edad,
        altura: altura,
        peso: peso,
        indice: imc
    }
console.log(registro)
    arreglo.push(registro);
 
}
listar.addEventListener('click', e => {
    listarDatos()
})
document.addEventListener('DOMContentLoaded', () => {
   
    listarDatos();
})
const guardarDatos = () => {
    localStorage.setItem('Registro',JSON.stringify(arreglo));
   
}
const templatenew = document.getElementById('template-card').content;
const fragment1 = document.createDocumentFragment();
const items1 = document.getElementById('items');

const listarDatos = () => {
   
    arreglo = JSON.parse(localStorage.getItem('Registro'));
    arreglo.forEach(element => {
        const {sexo, nombre, edad, altura,peso,indice} = element; 
        templatenew.getElementById('nomT').textContent = nombre;
        templatenew.getElementById('edadT').textContent = edad;
        templatenew.getElementById('sexT').textContent = sexo;
        templatenew.getElementById('pesoT').textContent = peso;
        templatenew.getElementById('alturaT').textContent = altura; 
        templatenew.getElementById('incT').textContent = indice; 
        const clone = templatenew.cloneNode(true);

        fragment1.appendChild(clone)
     })
     items1.appendChild(fragment1);
 }
 li.addEventListener('click', e => {
    limpiar()
})
 function limpiar(){
    document.querySelectorAll("table tbody tr").forEach(function(e){e.remove()})
 }
 console.log(limpiar())