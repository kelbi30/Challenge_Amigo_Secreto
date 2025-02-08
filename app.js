let amigos = [];

function agregarAmigo() {
    let nombre=document.getElementById("nombreAmigo").value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        
    } else {
        amigos.push(nombre);
        document.getElementById("nombreAmigo").value= ""; 
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML="El amigo sorteado es:"+ amigoSecreto;
}
