import {mods} from "./mods.js"
let userHTML = '';
mods.forEach((mod) => {
  userHTML += ` 
  <div class="checkbox-container ${mod.luncher}" >
    <label for="${mod.id}" id="${mod.id}">
        <input type="checkbox" id="${mod.id}" 
        data-mod-name="${mod.name}"
        data-mod-version="${mod.version}"
        data-mod-luncher="${mod.luncher}">
        <h3>${mod.name}</h3>
        <h3>v${mod.version}</h3>
        <h3>${mod.luncher}</h3>
    </label>
</div>
  `;
})
document.querySelector('.mods-lists').innerHTML = userHTML;