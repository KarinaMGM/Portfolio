
function sendEmail() {

    // Coleta os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: email,
    //     Password: "Enter your password",
    //     To: 'karimacedog@gmail.com',
    //     From: nome,
    //     Subject: assunto,
    //     Body: mensagem,
    // })
    //     .then(function (message) {
            alert("Email enviado com sucesso")
        // });

};