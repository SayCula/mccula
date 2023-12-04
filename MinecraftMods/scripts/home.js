import {mods} from "./mods.js"
let userHTML = '';
mods.forEach((mod) => {
  userHTML += ` 
  <div class="checkbox-container">
    <input type="checkbox" id="${mod.id}" 
    data-mod-name="${mod.name}"
    data-mod-version="${mod.version}"
    data-mod-luncher="${mod.luncher}">
    <h3>Mod Name : ${mod.name}</h3>
    <h3>Mod Version : ${mod.version}</h3>
    <h3>Mod Luncher : ${mod.luncher}</h3>
  </div>
  `;
})
document.querySelector('.mods-lists').innerHTML = userHTML;