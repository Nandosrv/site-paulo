$(document).ready(function(){
    $('#mobile_btn').on('click', function () {
        $('#links').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Fechar o menu quando clicar fora dele
    $(document).on('click', function(event) {
        // Verifica se o clique foi fora do botão e do menu
        if (!$(event.target).closest('#mobile_btn, #links').length) {
            if ($('#links').hasClass('active')) {
                $('#links').removeClass('active'); // Remove a classe que mostra o menu
                $('#mobile_btn').find('i').removeClass('fa-x'); // Ajusta o ícone do botão
            }
        }
    });
});

// Código relacionado ao overlay e mobile message
if (window.innerWidth > 768) {
    document.getElementById('overlay').style.display = 'block'; // Exibe a sobreposição
    document.getElementById('mobile-message').style.display = 'block'; // Exibe a mensagem
}

document.getElementById('accept-btn').onclick = function() {
    document.getElementById('overlay').style.display = 'none'; // Esconde a sobreposição
    this.parentElement.style.display = 'none'; // Esconde a mensagem ao clicar
};
