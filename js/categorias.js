const ref = db.ref("categoria");

$("#salvar").click(function (){
    let nome = $("#nome").val();
    let informacoes = $("#informacoes").val();

    if(nome === ""|| informacoes === ""){
        alert('preencha todos os campos');
        return
    } 
    
    ref.push({nome, informacoes});
    limpar();

}); 

function limpar(){
    $("#nome").val("");
    $("#informacoes").val("");
    $("#nome").focus();
    
}