const btnShareOnFacebook = document.querySelector('#btnShareOnFacebook');
const btnShareOnX = document.querySelector('#btnShareOnX');
const btnShareOnWhatsApp = document.querySelector('#btnShareOnWhatsApp');
const btnCopyLink = document.querySelector('#btnCopyLink');

btnShareOnFacebook.addEventListener('click',()=>{
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&quote=' + encodeURIComponent(message), '_blank');
});
btnShareOnX.addEventListener('click',()=>{shareOn('https://twitter.com/intent/tweet?url=');});
btnShareOnWhatsApp.addEventListener('click',()=>{shareOn('https://api.whatsapp.com/send?text=');});
btnCopyLink.addEventListener('click',()=>{navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied!'));});


function shareOn(link){
    let message = `test ${document.title}: `;
    window.open(link + encodeURIComponent(message) + encodeURIComponent(window.location.href) , '_blank');
};

    // btnS Open and Close.
    const btnOpen = document.querySelector('#btnOpen');
    const btnClose = document.querySelector('#btnClose');
    // menu list top
    const menuOpen = document.querySelector('#menuOpen');

    btnOpen.addEventListener('click',()=>{
        menuOpen.classList.toggle('hide');
    });



    // btn lightMode.
    const btnLightMod = document.querySelector('#btnLightMod');
    const body = document.querySelector('body');
    btnLightMod.addEventListener('click',()=>{
    body.classList.toggle('lightmod');
    });