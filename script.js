
function logar() {
  var login = document.getElementById("username").value;
  var senha = document.getElementById("password").value;

  if (login === "admin" && senha === "123") {
    alert("Sucesso!");
    window.location.href = "menu.html";
    return false; 
  } else {
    alert("Usuário ou senha incorretas");
    return false;
  }
}

document.getElementById("btnCadastrarLivro").onclick = function(){
    window.location.href = "cadastrar_livro.html";
};

document.getElementById("btnVerLivros").onclick = function(){
    window.location.href = "lista_livros.html";
};

document.getElementById("btnCadastrarCliente").onclick = function(){
    window.location.href = "cadastrar_cliente.html";
};

document.getElementById("btnAlugarLivro").onclick = function(){
    window.location.href = "alugar_livro.html";
};

document.getElementById("btnDevolverLivro").onclick = function(){
    window.location.href = "devolver_livro.html";
};


document.getElementById("btnSair").onclick = function(){
    alert("Saindo do sistema...");
    window.location.href = "login.html";
};
