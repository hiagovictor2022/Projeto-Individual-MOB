
// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


// votar
porcentagem(txt_porcentagem.title)
function votar(personagens){

    fetch("/usuarios/votar", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },

       body: JSON.stringify({  
          personagens,
          id:sessionStorage.ID_USUARIO,

       })
   }).then(function (resposta) {

       console.log("resposta: ", resposta);

       if (resposta.ok) {
           
       porcentagem(personagens)
              
       } else {
           alert('Você ja votou nesse personagem!');
           throw ("Houve um erro ao tentar realizar o cadastro!");
       }
   }).catch(function (resposta) {
       console.log(`#ERRO: ${resposta}`);
       
   });

   return false;
}

function porcentagem(personagens){
    fetch("/usuarios/porcentagem", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },

       body: JSON.stringify({  
          personagens,

       })
   }).then(function (resposta) {

       console.log("resposta: ", resposta);

       if (resposta.ok) {
           
        resposta.json().then(json => {
            txt_porcentagem.innerHTML = ` Votos ${(json[0].qtd_votos/json[0].qtd_total*100).toFixed(0)}%`
        })  

           
       } else {
           alert('erro');
           throw ("Houve um erro ao tentar realizar o cadastro!");
       }
   }).catch(function (resposta) {
       console.log(`#ERRO: ${resposta}`);
       
   });

   return false;
}

function exibir(){
    fetch("/usuarios/exibir", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },

       body: JSON.stringify({  

       })
   }).then(function (resposta) {

       console.log("resposta: ", resposta);

       if (resposta.ok) {
           
           
        
       } else {
           alert('erro');
           throw ("Houve um erro ao tentar realizar o cadastro!");
       }
   }).catch(function (resposta) {
       console.log(`#ERRO: ${resposta}`);
       
   });

   return false;
}

