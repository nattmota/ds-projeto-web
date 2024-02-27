function verificar() {
    let inputUser = document.getElementById("user");
    let inputPassword = document.getElementById("password").value

    if (inputUser === "" || inputPassword === "") {
        alert("Preenche todos os campos!");

    } else {
        alert("Bem-Vindo!");
        window.location.href = "./pages/to-do-principal.html";
    }
}