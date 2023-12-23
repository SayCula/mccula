const iditem = document.querySelector('#iditem');
const nameitem = document.querySelector('#nameitem');
const imgitem = document.querySelector('#imgitem');
const versionitem = document.querySelector('#versionitem');
const linkitem = document.querySelector('#linkitem');
// select
const classitem = document.querySelector("#classitem");
const gamenameitem = document.querySelector("#gamenameitem");
const Loaders = document.querySelector("#Loaders");

const show = document.querySelector('#show');
const BTnCApi = document.querySelector('#BTnCApi');

BTnCApi.addEventListener('click',()=>{

    show.innerText = `
        {
            id: ${iditem.value},
            name: '${nameitem.value}',
            image: '${imgitem.value}',
            class: '${classitem.value}',
            version: '${versionitem.value}',
            Loaders: '${Loaders.value}',
            gamename: '${gamenameitem.value}',
            link: '${linkitem.value}'
        },
    `;
})



