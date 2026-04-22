const ref = db.ref("fornecedores");

$("#salvar").click(function (){
    let nome = $("#nome").val();
    let cnpj = $("#cnpj").val();
    let estado = $("#estado").val();
    let email = $("#email").val();

    if(nome === ""|| cnpj === "" || email === "" || estado === "" ){
        alert('preencha todos os campos');
        return
    } 
    
    ref.push({nome, cnpj, email, estado});
    limpar();

}); 

function limpar(){
    $("#nome").val("");
    $("#cnpj").val("");
    $("#email").val("");
    $("#estado").val("");
    $("#nome").focus();
    
}
