function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores del formulario
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Aquí puedes realizar lo que quieras con los datos, como enviarlos a un servidor o guardarlos en una base de datos
    console.log("Nombre:", firstName);
    console.log("Apellido:", lastName);
    console.log("Ciudad:", city);
    console.log("Teléfono:", phone);
    console.log("Correo Electrónico:", email);
    console.log("Dirección:", address);

    // Puedes redirigir a otra página después de enviar el formulario si lo deseas
    // window.location.href = 'pagina-de-exito.html';
}
