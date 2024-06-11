function site() {
    
    var dia = document.getElementById('dia');
    var res = document.getElementById('res');
    var day = Number(dia.value);
    var img1 = document.createElement('img');
    img1.setAttribute('id', 'foto');
    var TeAmo = document.createElement('p');
    var message = document.createElement('p');
    var botao = document.getElementById('botao');
    var h1 = document.getElementById('h1');
    var q1 = document.getElementById('q1');

    if (day != 26) {
        res.innerHTML = "ERROU FEIO! ERROU RUDE!";
        img1.setAttribute('src', 'foto2.jpg');
        dia.style.display = 'none'; 
        botao.style.display = 'none'; 
        h1.style.display = 'none';
        q1.style.display = 'none';
    } else {
        img1.setAttribute('src', 'foto.jpg');
        res.innerHTML = '💖  FELIZ DIA DOS NAMORADOS!  💖';
        message.textContent = 'Que Esse Seja o Primeiro de Muitos que Passaremos Juntos!';
        TeAmo.textContent = '💖   TE AMO MUITÃO    💖';
        TeAmo.style.color = 'red';
        TeAmo.style.fontSize = '30px';
        TeAmo.style.fontWeight = 'bold';
        dia.style.display = 'none'; 
        botao.style.display = 'none'; 
        h1.style.display = 'none';
        q1.style.display = 'none';
    }
    
    res.appendChild(img1);
    res.appendChild(message);
    res.appendChild(TeAmo);
}
