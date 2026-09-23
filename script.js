```javascript
// ==============================
// VARIABLE OTP
// ==============================

let codigoOTP = "";


// ==============================
// ANALIZADOR DE CONTRASEÑAS
// ==============================

function analizarPassword() {

    let password =
        document.getElementById("password").value;

    let resultado = "";


    // ==============================
    // COMPROBAR REQUISITOS
    // ==============================

    let longitud =
        password.length >= 8;

    let mayuscula =
        /[A-Z]/.test(password);

    let minuscula =
        /[a-z]/.test(password);

    let numero =
        /[0-9]/.test(password);

    let simbolo =
        /[^A-Za-z0-9]/.test(password);


    // ==============================
    // MOSTRAR RESULTADOS
    // ==============================

    resultado += longitud
        ? "✅ Mínimo 8 caracteres.<br>"
        : "❌ Mínimo 8 caracteres.<br>";


    resultado += mayuscula
        ? "✅ Tiene mayúscula.<br>"
        : "❌ Falta mayúscula.<br>";


    resultado += minuscula
        ? "✅ Tiene minúscula.<br>"
        : "❌ Falta minúscula.<br>";


    resultado += numero
        ? "✅ Tiene número.<br>"
        : "❌ Falta número.<br>";


    resultado += simbolo
        ? "✅ Tiene símbolo.<br>"
        : "❌ Falta símbolo.<br>";


    document.getElementById("resultadoPassword").innerHTML =
        resultado;


    // ==============================
    // CALCULAR PUNTOS
    // ==============================

    let puntos = 0;

    if (longitud) puntos++;
    if (mayuscula) puntos++;
    if (minuscula) puntos++;
    if (numero) puntos++;
    if (simbolo) puntos++;


    // ==============================
    // BARRA DE SEGURIDAD
    // ==============================

    let barra =
        document.getElementById("nivelPassword");


    if (puntos === 0) {

        barra.style.width = "0%";

    } else if (puntos === 1) {

        barra.style.width = "20%";

    } else if (puntos === 2) {

        barra.style.width = "40%";

    } else if (puntos === 3) {

        barra.style.width = "60%";

    } else if (puntos === 4) {

        barra.style.width = "80%";

    } else {

        barra.style.width = "100%";

    }


    // ==============================
    // PERMITIR CONTINUAR
    // ==============================

    if (puntos === 5) {

        document.getElementById("botonContinuar").style.display =
            "block";

    } else {

        document.getElementById("botonContinuar").style.display =
            "none";

    }

}


// ==============================
// IR AL LOGIN
// ==============================

function irAlLogin() {

    document.getElementById("pantallaPassword").style.display =
        "none";

    document.getElementById("pantallaLogin").style.display =
        "block";

}


// ==============================
// INICIAR SESIÓN
// ==============================

function iniciarSesion() {

    let correo =
        document.getElementById("correo").value;

    let clave =
        document.getElementById("clave").value;


    // ==============================
    // VALIDAR CAMPOS
    // ==============================

    if (correo === "" || clave === "") {

        alert("Complete todos los campos.");

        return;

    }


    // ==============================
    // GENERAR OTP
    // ==============================

    codigoOTP =
        Math.floor(100000 + Math.random() * 900000);


    // ==============================
    // OCULTAR LOGIN
    // ==============================

    document.getElementById("pantallaLogin").style.display =
        "none";


    // ==============================
    // MOSTRAR MFA
    // ==============================

    document.getElementById("pantallaOTP").style.display =
        "block";

}


// ==============================
// MOSTRAR CÓDIGO DE PRUEBA
// ==============================

function mostrarCodigoPrueba() {

    document.getElementById("codigoPrueba").innerHTML =

        "<div class='codigo-prueba'>" +

        "🔐 Código de prueba: " +

        "<strong>" + codigoOTP + "</strong>" +

        "</div>";

}


// ==============================
// VERIFICAR OTP
// ==============================

function verificarOTP() {

    let codigoUsuario =
        document.getElementById("otp").value;

    let resultado =
        document.getElementById("resultadoOTP");


    // ==============================
    // COMPROBAR CÓDIGO
    // ==============================

    if (codigoUsuario === codigoOTP.toString()) {


        resultado.innerHTML =

            "<div class='acceso-permitido'>" +

            "<h2>✅ Código correcto</h2>" +

            "<p>" +
            "La autenticación multifactor fue completada correctamente." +
            "</p>" +

            "</div>";


        // ==============================
        // OCULTAR MFA
        // ==============================

        document.getElementById("pantallaOTP").style.display =
            "none";


        // ==============================
        // MOSTRAR ACCESO
        // ==============================

        setTimeout(function() {

            document.getElementById("pantallaAcceso").style.display =
                "block";

        }, 1000);


    } else {


        resultado.innerHTML =

            "<div class='acceso-denegado'>" +

            "<h2>❌ Código incorrecto</h2>" +

            "<p>" +
            "Verifique el código e intente nuevamente." +
            "</p>" +

            "</div>";

    }

}


// ==============================
// MOSTRAR / OCULTAR CONTRASEÑA
// ==============================

function mostrarPassword(id, boton) {

    const campo =
        document.getElementById(id);


    if (campo.type === "password") {

        campo.type = "text";

        boton.textContent = "🙈";

    } else {

        campo.type = "password";

        boton.textContent = "👁️";

    }

}
```
