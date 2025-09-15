// Array para almacenar los nombres de los amigos.
        let amigos = [];

        // Función para agregar un amigo a la lista y validar la entrada.
        function agregarAmigo() {
            let campoAmigo = document.getElementById('amigo');
            let nombre = campoAmigo.value;

            let mensajeDiv = document.getElementById('mensaje');
            if (mensajeDiv) {
                mensajeDiv.textContent = '';
            }

            if (!nombre || nombre.trim() === '') {
                if (mensajeDiv) {
                    mensajeDiv.textContent = "Por favor, inserte un nombre.";
                } else {
                    alert("Por favor, inserte un nombre.");
                }
                return;
            }

            if (!/^[A-ZÁÉÍÓÚÜÑ][a-zA-Záéíóúüñ\s-]*$/.test(nombre.trim())) {
                if (mensajeDiv) {
                    mensajeDiv.textContent = "Por favor, ingrese un nombre válido (sin números y que comience con mayúscula).";
                } else {
                    alert("Por favor, ingrese un nombre válido (sin números y que comience con mayúscula).");
                }
                return;
            }

            amigos.push(nombre);
            
            campoAmigo.value = '';
            
            mostrarAmigos();
        }

        // Función para mostrar la lista de amigos en el HTML.
        function mostrarAmigos() {
            let lista = document.getElementById('listaAmigos');
            
            lista.innerHTML = '';
            
            for (let i = 0; i < amigos.length; i++) {
                let li = document.createElement('li');
                li.textContent = amigos[i];
                lista.appendChild(li);
            }
        }

        // Función para realizar el sorteo de amigos.
        function sortearAmigo() {
            let resultado = document.getElementById('resultado');

            if (amigos.length === 0) {
                resultado.innerHTML = 'No hay amigos para sortear.';
                return;
            }

            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let nombreSorteado = amigos[indiceAleatorio];

            resultado.innerHTML = `El amigo secreto es: <span>${nombreSorteado}</span>`;
        }
        
        // Función para reiniciar el estado de la aplicación.
        function reiniciar() {
            amigos = [];
            
            document.getElementById('listaAmigos').innerHTML = '';
            
            document.getElementById('resultado').innerHTML = '';
            
            document.getElementById('amigo').value = '';
        }