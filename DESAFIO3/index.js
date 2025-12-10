function trocarTema(valor) {
  if (valor==='claro') {
    document.body.classList.add("tema-claro");
 
  }
  if(valor==='escuro')
    document.body.classList.remove("tema-claro");

}
