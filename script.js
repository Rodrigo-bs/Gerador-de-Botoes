const form = document.querySelector('#controles')
const limpar = document.querySelector('[data-creator="limpar-padrao"]')
const button = document.querySelector('[data-creator="button"]')
const createCss = document.querySelector('[data-creator="button-css"]')

const atributos = []

const mudarStyle = {
    element: button,
    texto(value){
        this.element.innerText = value
    },
    color(value){
        this.element.style.color = value
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    height(value){
        this.element.style.height = value + 'px'
    },
    width(value){
        this.element.style.width = value + 'px'
        },
    border(value){
        this.element.style.border = value
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value){
        this.element.style.fontFamily = value
    },
    fontSize(value){
        this.element.style.fontSize = value + 'px'
    },
}

function addCss(event){
    const name = event.target.name
    const valor = event.target.value
    
    mudarStyle[name](valor)
    saveValues(name, valor)
    showCss()
}

function saveValues(nome, value){
    localStorage[nome] = value
}

function setValues(){
    const propriedades = Object.keys(localStorage)
    
    propriedades.forEach(propriedade => {
        mudarStyle[propriedade](localStorage[propriedade])
        form.elements[propriedade].value = localStorage[propriedade]
    })
}

function limparPadrao(event){
    event.preventDefault()
    localStorage.clear()
}

function showCss(){
    css.innerHTML = '<span>' + button.style.cssText.split('; ').join(';</span><span>')
}

limpar.addEventListener('click', limparPadrao)
form.addEventListener('change', addCss)
setValues()
