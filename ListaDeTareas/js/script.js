function agregarTarea(){
    //Obtenemos el valor del campo de la tarea 
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacío
    if (nuevaTareaTexto === ""){
        alert("Ingrese un valor");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () { nuevaTarea.remove(); }

    //Agregar botón de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";

}