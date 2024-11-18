function salvarCadastro()
{
    let cpf = document.getElementById('formGroupCadastroCPF').value;
    let nome = document.getElementById('formGroupCadastroNome').value;
    let dtNas = document.getElementById('formGroupCadastroDataNasc').value;
    let email = document.getElementById('formGroupCadastroEmail').value;
    let cel = document.getElementById('formGroupCadastroCel').value;
    let senha = document.getElementById('formGroupCadastroSenha').value;

    let dadosUsuario = {nome: nome, dtNas: dtNas, email: email, cel: cel, senha: senha};

    let mensagem = `Usuário cadastrado com sucesso!: \n\nCPF: ${cpf}\nNome: ${nome}\nData Nascimento: ${dtNas}\nEmail: ${email}\nCelular: ${cel}\nSenha: ${senha}\n`;

    if (localStorage.getItem(cpf)) 
    {
        alert('Já exite um cadastro com esse CPF, tente novamente');
    }
    else 
    {
        localStorage.setItem(cpf, JSON.stringify(dadosUsuario));

        alert(mensagem);
    }
}