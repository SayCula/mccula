
const Header = document.querySelector('.Header')

screenCheck();
window.addEventListener('resize',screenCheck());

function screenCheck(){
    let screenWidth = window.innerWidth || document.body.clientWidth;
    if(screenWidth <= 600){
        Header.classList.replace("Header", "HeaderResp");
    } else if(screenWidth >= 600){
        Header.classList.replace("HeaderResp", "Header");
    }
    
};

