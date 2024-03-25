document.getElementById('abrir-gerador-qrcode').addEventListener('click', function() {
    document.getElementById('secao-qrcode').style.display = 'block';
    document.getElementById('menu').style.display = 'none'; // Esconde o menu
    document.getElementById('voltar').style.display = 'block'; // Mostra o botão voltar
});

// Adiciona funcionalidade ao botão voltar
document.getElementById('voltar').addEventListener('click', function() {
    document.getElementById('secao-qrcode').style.display = 'none';
    document.getElementById('menu').style.display = 'block'; // Mostra o menu novamente
    document.getElementById('voltar').style.display = 'none'; // Esconde o botão voltar
});

// Modificação para o gerador de QR Code para esconder o menu e mostrar o botão voltar
document.getElementById('gerar').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    if (url) {
        document.getElementById('qrcode').innerHTML = '';
        new QRCode(document.getElementById('qrcode'), url);
        document.getElementById('menu').style.display = 'none'; // Esconde o menu
        document.getElementById('voltar').style.display = 'block'; // Mostra o botão voltar
    } else {
        alert('Por favor, insira uma URL.');
    }
});

document.getElementById('servicos-tjmt').addEventListener('click', function() {
    fetch('servicos-tjmt.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('container').innerHTML = html;
        })
        .catch(err => {
            console.error('Failed to load page: ', err);
        });
});


