import { mods, removeMod, addMod } from "./mods.js";
const modsList = document.querySelector('.mods-list');
let modHTML = '';
mods.forEach((mod)=>{
    modHTML+= `
    <div class="mod-container mod-container-${mod.id}">
        <h3>Mod ID : ${mod.id}</h3>
        <h3>Mod Name : ${mod.name}</h3>
        <h3>Mod Version : ${mod.version}</h3>
        <h3>Mod Luncher : ${mod.luncher}</h3>
        <button class="remove-mod" data-mod-id="${mod.id}">Remove</button>
    </div>
    `;
});
modsList.innerHTML = modHTML;
const inputId = document.querySelector('.js-id')
inputId.addEventListener('input', () => {
    const inputValue = inputId.value;
    const sanitizedValue = inputValue.replace(/\s/g, '');
    inputId.value = sanitizedValue;
  })
const inputName = document.querySelector('.js-name')
const inputVersion = document.querySelector('.js-version')
const luncherOption = document.querySelector('.js-luncher')
document.querySelector('.add-mod').addEventListener('click', () => {
    addMod(inputId, inputName, inputVersion,luncherOption);
    updateHTML()
});
document.querySelectorAll('.remove-mod').forEach((button) => {
    button.addEventListener('click', () => {
      const { modId } = button.dataset;
      removeMod(modId);
      const modContainer = document.querySelector(`.mod-container-${modId}`)
      modContainer.remove();
      updateHTML()
      console.log(mods)
    })
  });
function updateHTML() {
    let modHTML = '';
    mods.forEach((mod)=>{
        modHTML+= `
        <div class="mod-container mod-container-${mod.id}">
            <h3>Mod ID : ${mod.id}</h3>
            <h3>Mod Name : ${mod.name}</h3>
            <h3>Mod Version : ${mod.version}</h3>
            <h3>Mod Luncher : ${mod.luncher}</h3>
            <button class="remove-mod" data-mod-id="${mod.id}">Remove</button>
        </div>
        `;
    });
    modsList.innerHTML = modHTML;
}