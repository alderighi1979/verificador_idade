function verificar(){
    var data = new Date();
    var ano = data.getFullYear() // pega o ano completo 2025
    var formAno = window.document.getElementById('txtano')
    var convertAnoNumber = Number(formAno.value)
    var res = window.document.querySelector('div#res')
    

    if (formAno.value.length == 0 || formAno.value > ano ){
        window.alert('Verifique os dados e tente novamente !!!')
    }else{
        var formSex = window.document.getElementsByName('radsex')
        var idade = ano - convertAnoNumber;
        res.innerHTML = `Idade Calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')// cria tag img
        img.setAttribute('id','foto') // cria um id para a tag img
        if (formSex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <10 ){
                //criança
                img.setAttribute('src', 'foto-bebe-h.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','foto-jovem-h.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src','foto-adulto-h.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-h.png')
            }
        }else if (formSex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <10 ){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
            
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
}