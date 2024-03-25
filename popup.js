document.getElementById('home').addEventListener('click', function() {
    document.getElementById('secao-qrcode').style.display = 'none';
});

document.getElementById('abrir-gerador-qrcode').addEventListener('click', function() {
    document.getElementById('secao-qrcode').style.display = 'block';
});

document.getElementById('gerar').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    if (url) {
        // Limpa o QR Code anterior
        document.getElementById('qrcode').innerHTML = '';
        // Gera um novo QR Code
        new QRCode(document.getElementById('qrcode'), url);
    } else {
        alert('Por favor, insira uma URL.');
    }
});
