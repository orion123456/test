//magnific-popup
$(document).ready(function() {
    $('.photo-block a').magnificPopup({
        type:'image', //одиночный лайтбокс
        gallery:{enabled:true} // добавляем если нужна галлерея
    });
});