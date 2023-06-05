function Salir() {
    if (window.close) {
        window.close();
        var Contenedor = document.querySelector(".Contenedor");
        var InfoSalio = document.getElementById("InfoSalio");
        if (Contenedor.style.transform === "") {
            InfoSalio.style.display = "block";
            Contenedor.style.display = "none";
            alert("Debes cerrar el navegador manualmente por politicas de seguridad.");
        } else{
            alert("Debes cerrar el navegador manualmente por politicas de seguridad.");
        }
        
    } else {
        // Si no es compatible, mensaje de error
        alert("El navegador no permite cerrar la ventana automáticamente.");
    }
}