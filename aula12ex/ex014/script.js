function carregar() {
    var msg = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora >= 0 && hora < 12) {
        img.src = ('manha.png')
        document.body.style.background = '#D5B387'
    }

    else if (hora >= 12 && hora <= 18){
        img.src = ('tarde.png')
        document.body.style.background = '#B17167'
    }

    else {
        img.src = ('noite.png')
        document.body.style.background = '#644462'
    }
}
