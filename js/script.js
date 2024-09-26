
$(document).ready(function(){
    $('#mobile_btn').on('click', function (){
         $('#links').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
        })
})

if (window.innerWidth > 768) {
    document.getElementById('overlay').style.display = 'block'; // Exibe a sobreposição
    document.getElementById('mobile-message').style.display = 'block'; // Exibe a mensagem
}

document.getElementById('accept-btn').onclick = function() {
    document.getElementById('overlay').style.display = 'none'; // Esconde a sobreposição
    this.parentElement.style.display = 'none'; // Esconde a mensagem ao clicar
}


