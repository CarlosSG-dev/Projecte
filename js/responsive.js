/*Autoinvocada, posa el footer baix de la pagina*/


 (function footBottom(){

    document.getElementsByTagName('footer')[0].classList.toggle("footerBottom", screen.height > document.getElementsByTagName('body').offsetHeight);

})(); 




