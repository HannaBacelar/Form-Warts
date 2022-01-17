const submit = document.getElementById('botao');
const mail = document.getElementById('email');
const password = document.getElementById('senha');
const textarea = document.getElementById('textarea');

function validaLogin() {
  if (mail.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
submit.addEventListener('click', validaLogin);

const button = document.getElementById('submit-btn');
const agreed = document.getElementById('agreement');
function enableSubmit() {
  if (agreed.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
agreed.addEventListener('change', enableSubmit);

const evaluationForm = document.getElementById('evaluation-form');
function apagarFormulario() {
  for (let i = 0; i < evaluationForm.length; i += 1) {
    evaluationForm.innerHTML = '';
  }
}

function selecionaFamilia() {
  const inputFamily = document.getElementsByName('family');
  let markedFamily = '';
  for (let i = 0; i < inputFamily.length; i += 1) {
    if (inputFamily[i].checked) {
      markedFamily = inputFamily[i].value;
    }
  }
  return markedFamily;
}

function selecionaMateriasMarcadas() {
  const materiasMarcadas = [];
  const inputTecnologies = document.getElementsByName('tecnologia');
  for (let i = 0; i < inputTecnologies.length; i += 1) {
    if (inputTecnologies[i].checked === true) {
      materiasMarcadas.push(inputTecnologies[i].value);
    }
  }
  return materiasMarcadas;
}

function selecionaMaterias() {
  let materias = '';
  const infoMaterias = selecionaMateriasMarcadas();
  for (let i = 0; i < infoMaterias.length; i += 1) {
    if (materias === '') {
      materias = infoMaterias[i];
    } else {
      materias = `${materias}, ${infoMaterias[i]}`;
    }
  }
  return materias;
}

function selecionaAvaliacao() {
  let markedRate = '';
  const inputRate = document.getElementsByName('rate');
  for (let i = 0; i < inputRate.length; i += 1) {
    if (inputRate[i].checked) {
      markedRate = inputRate[i].value;
    }
  }
  return markedRate;
}

function salvaInfos() {
  const userInfo = [];
  console.log('teste');
  const inputNome = document.getElementById('input-name');
  const inputSobreNome = document.getElementById('input-lastname');
  userInfo[0] = `Nome: ${inputNome.value} ${inputSobreNome.value}`;
  const inputMail = document.getElementById('input-email');
  userInfo[1] = `Email: ${inputMail.value}`;
  const inputHouse = document.getElementById('house');
  userInfo[2] = `Casa: ${inputHouse.value}`;
  userInfo[3] = `Família: ${selecionaFamilia()}`;
  userInfo[4] = `Matérias: ${selecionaMaterias()}`;
  userInfo[5] = `Avaliação: ${selecionaAvaliacao()}`;
  userInfo[6] = `Observações: ${textarea.value}`;
  return userInfo;
}

function gerarTexto(event) {
  event.preventDefault();
  const infos = salvaInfos();
  apagarFormulario();
  for (let i = 0; i < infos.length; i += 1) {
    const infoArea = document.createElement('p');
    infoArea.innerText = infos[i];
    evaluationForm.appendChild(infoArea);
  }
}
const counter = document.getElementById('counter');
function textCounter() {
  counter.innerHTML = 500 - textarea.value.length;
}
textarea.addEventListener('keyup', textCounter);

button.addEventListener('click', gerarTexto);