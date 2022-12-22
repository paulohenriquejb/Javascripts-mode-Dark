function changeMode(){
    changeClass();
    changeText();
}

function changeClass(){
  button.classList.toggle(darkmodeClass)  
  h1.classList.toggle(darkmodeClass)  
  body.classList.toggle(darkmodeClass)  
  button.classList.toggle(darkmodeClass)  
}

function changeText(){
    const lightMode = "Modo light "
    const darkmode = "Dark Mode"

    if(body.classList.contains(darkmodeClass)){
       button.innerHTML = "light Mode";
       h1.innerHTML = darkmode + " ON";
       
    } else{
    
    button.innerHTML = "ativar modo dark";
    h1.innerHTML = lightMode + ' ligado';
    }
}

const darkmodeClass = 'dark-mode'
const button =  document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]


button.addEventListener('click', changeMode)