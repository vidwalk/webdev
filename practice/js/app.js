const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})


$(document).ready(function () {
    $('.submit').click(function (event) {
        
        
        var email = $('.email-input').val();
        var message = $('.message-input').val();
        var statusElmEmail = $('.status-email .error-para');
        var statusElmMessage = $('.status-message .error-para');

        statusElmEmail.empty();
        statusElmMessage.empty();

        if(email.length > 3 && email.includes('@') && email.includes('.')){
            /*Remove when ready to send */
            statusElmEmail.append('');
        }
        else{
            event.preventDefault();
            statusElmEmail.append('email invalid');
        }
        if(message.length > 5 ){
            /*Remove when ready to send */
            statusElmMessage.append('');
        }
        else{
            event.preventDefault();
            statusElmMessage.append('message invalid');
        }
    })
})

$(document).click(function () {
    var statusElmMessage = $('.status-message .error-para');
    var statusElmEmail = $('.status-email .error-para');
    if($('.message-input').is(":focus")){
        statusElmMessage.empty()
        statusElmMessage.append('')
    }
    if($('.email-input').is(":focus")){
        statusElmEmail.empty()
        statusElmEmail.append('')
    }
})