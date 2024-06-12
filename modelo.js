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
        res.innerHTML = "Errou Feio! Errou Rude!" ;
        res.style.color = "White";
        img1.setAttribute('src', 'foto2.jpg');
        dia.style.display = 'none'; 
        botao.style.display = 'non'; 
        h1.style.display = 'non';
        q1.style.display = 'non';
    } else {
        img1.setAttribute('src', 'foto.jpg');
        res.innerHTML = '💖  Feliz Dia dos Namorados!  💖';
        message.textContent = 'Que Esse Seja o Primeiro de Muitos que Passaremos Juntos!';
        TeAmo.textContent = '💖   T E  A M O  M U I T Ã O    💖';
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
