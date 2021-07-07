document.getElementById('st1').addEventListener('click', changeStyle1)
document.getElementById('st2').addEventListener('click', changeStyle2)
document.getElementById('st3').addEventListener('click', changeStyle3)

function changeStyle1(){
    document.getElementById('style').href = 'css/style.css'
}

function changeStyle2(){
    document.getElementById('style').href = 'css/style2.css'
}

function changeStyle3(){
    document.getElementById('style').href = 'css/style3.css'
}

let items = document.getElementsByTagName('button')

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', calculator);
}

function calculator(){
    let texto = document.getElementById('result').innerHTML
    switch (this.innerHTML) {
        case 'DEL':
            document.getElementById('result').innerHTML = texto.substring(0, texto.length - 1);
            break;
        case 'RESET':
            document.getElementById('result').innerHTML = ''
            break;
        case '.':
            document.getElementById('result').innerHTML += ','
            break;
        case '=':
            texto = texto.replace('x','*')
            texto = texto.replace(',', '.')
            let resultado = eval(texto)
            resultado = resultado.toString()
            resultado = resultado.replace('.',',')
            document.getElementById('result').innerHTML = resultado
            break;
        default:
            document.getElementById('result').innerHTML += this.innerHTML
            break;
    }
}



