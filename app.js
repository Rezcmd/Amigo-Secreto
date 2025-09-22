// Sistema de gestión para sorteo de amigo secreto
const listaParticipantes = []; // Almacenamiento de participantes

const listaEnInterfaz = document.getElementById('listaAmigos'); // Elemento lista en DOM
const mostrarResultado = document.getElementById('resultado'); // Área de visualización de resultados

// Función para incluir nuevo participante
function incluirParticipante() {
    const entradaNombre = document.getElementById('amigo');
    const nombre = entradaNombre.value.trim();
    
    if (!nombre) {
        alert("Debe proporcionar un nombre válido");
        return;
    }
    
    // Añadir a la colección y actualizar interfaz
    listaParticipantes.push(nombre);
    actualizarListaVisual();
    
    // Restablecer campo de entrada
    entradaNombre.value = '';
    entradaNombre.focus();
}

// Actualizar la representación visual de la lista
function actualizarListaVisual() {
    // Limpiar contenido previo
    listaEnInterfaz.innerHTML = '';
    
    // Reconstruir lista con todos los participantes
    listaParticipantes.forEach(participante => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = participante;
        listaEnInterfaz.appendChild(elementoLista);
    });
}

// Realizar sorteo aleatorio
function realizarSorteo() {
    if (listaParticipantes.length < 2) {
        alert("Se requieren al menos 2 participantes");
        return;
    }
    
    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * listaParticipantes.length);
    const elegido = listaParticipantes[indiceAleatorio];
    
    // Presentar resultado
    mostrarResultado.textContent = `¡El amigo secreto es: ${elegido}!`;
}

// Asignar eventos a los botones (asumiendo que existen en el HTML)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button[onclick*="agregarAmigo"]').onclick = incluirParticipante;
    document.querySelector('button[onclick*="sortearAmigo"]').onclick = realizarSorteo;
});