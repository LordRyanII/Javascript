//começo do meu código
const moduloLogin = require('./modulo-login/index.js')
const emailinput = document.querySelector('#email')
const passwordinput = document.querySelector('#senha');

function verifiqueDados() {
  // Errors:
  if (!emailinput.value) {
    return alert('Erro no e-mail, verifique');
  } else if (!passwordinput.value) {
    return alert('Preencha a senha');
  }

  // Success:
  if (emailinput.value === moduloLogin.usersId1.email) {
    console.log(moduloLogin.usersId1.email);
    return alert('Deu certo!');
  } else if (passwordinput.value === moduloLogin.usersId1.password) {
    console.log(moduloLogin.usersId1.password);
    return alert('Deu certo!');
  }
}

function clicar() {
  console.log('Olá');
  return verifiqueDados();
}
console.log(moduloLogin)