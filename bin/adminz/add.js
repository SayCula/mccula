const mods = JSON.parse(localStorage.getItem('mods')) || []

const inputVmds = document.querySelector('#inputVmds');
const BtnAddVmds = document.querySelector('#addVmds');
const vMods = document.querySelector('#vMods')
const Btnadd = document.querySelector('#Btnadd');
const mdNm = document.querySelector('#mdNm');
const dateu = document.querySelector('#date');
const post = document.querySelector('#post')
const posts = document.querySelector('#posts')

const VersionsMods = JSON.parse(localStorage.getItem('VersionsMods')) || []

randerVmds()
rander()


BtnAddVmds.addEventListener('click',()=>{
    addVmds();
})
function randerVmds(){
    
    let vModsHtml = ''
    for(let i = 0; i < VersionsMods.length;i++){
        let VersionsModsObject = VersionsMods[i];
        let {Versions} = VersionsModsObject
        let html = `
            <option value="${Versions}">${Versions}</option>
        `
        vModsHtml += html;
    }
    vMods.innerHTML = vModsHtml
}

function addVmds(){
    let Versions = inputVmds.value;
    VersionsMods.push({Versions})
    localStorage.setItem('VersionsMods',JSON.stringify(VersionsMods))
    inputVmds.value = ''
    randerVmds()
}
Btnadd.addEventListener('click',()=>{
    add()
});
function rander(){
    let modsHtml = ''
    for(let i = 0; i < mods.length;i++){
        let modsObjet = mods[i];
        let {name,date,vModsV} = modsObjet
        let html = `
        <label for="inptMd" id="labelMd">
            <input type="checkbox" id="inptMd">             
            ${name}
            <span id="vMod">v${vModsV}</span>
            <span id="date">${date}</span>
            <button id="remove" onclick="
            localStorage.removeItem('mods');
            mods.splice(${i},1);
            rander();
            ">Remove</button>
        </label>
        `
        modsHtml += html;
        
    }
    post.innerHTML = modsHtml


}



function add(){

    let name = mdNm.value;
    let date = dateu.value;
    let vModsV = vMods.value


    mods.push({name,date,vModsV})
    localStorage.setItem('mods',JSON.stringify(mods))
    mdNm.value = '';
    date.value = '';
    rander();
}


