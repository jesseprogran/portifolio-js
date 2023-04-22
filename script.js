function ativarMensagem(mensagem){
  const menssagemTexto = mensagem.innerText.split('');
  mensagem.innerText = '';
  menssagemTexto.forEach((letra, i) =>{
    setTimeout(() => {
      mensagem.innerText += letra;
    }, 75 * i);
  });
};

const titulo = document.querySelector(".digitando");
ativarMensagem(titulo);


