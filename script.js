const form = document.querySelector('#controles')
const css = document.querySelector('[data-creator="cssText"]')
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
        this.element.style.fontSize = value
    },
}

function addCss(event){
    const name = event.target.name
    const valor = event.target.value
    
    mudarStyle[name](valor)
    showCss()
}

function showCss(){
    css.innerHTML = '<span>' + button.style.cssText.split('; ').join(';</span><span>')
}

form.addEventListener('change', addCss)
