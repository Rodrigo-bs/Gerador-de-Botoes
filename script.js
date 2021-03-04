const form = document.querySelector('#controles')
const css = document.querySelector('[data-creator="css"]')
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

function createCssCode(event){
    event.preventDefault()
    /* const p = document.createElement('p')
    const styleButton = button.style
    let first = 1
    
    for (let i = 0; i < styleButton.length; i++) {
        if(styleButton[i].substring(styleButton[i].length - 6) == 'radius')
            p.innerText = styleButton.borderRadius

        else if((styleButton[i].substring(0, 6) == 'border')){
            const anterior = styleButton.border

            if(anterior != styleButton.border || first == 1){
                p.innerText += styleButton.border
                first = 0
            }
        }
            
        css.appendChild(p)
    } */
}

function addCss(event){
    const name = event.target.name
    const valor = event.target.value
    const cssAtributo =  event.target.previousElementSibling.innerText + ': ' +valor+';'
    mudarStyle[name](valor)
}

createCss.addEventListener('click', createCssCode)
form.addEventListener('change', addCss)