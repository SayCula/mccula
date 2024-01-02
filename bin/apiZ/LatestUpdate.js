import {apiMcJava} from "./mods/apiMcJava.js";
// import {apiMcDg} from "./mods/apiMcDg.js";

// LastApi
const lastMods = apiMcJava;

let lastHTML='';
lastMods.forEach(lastMod => {
    lastHTML+=`
    <div class="mods-container tooltip-container">
          <div class="img">
              <img src="${lastMod.image}" alt="">
          </div>
          <div class="name limit-text-to-2-lines">
          ${lastMod.name}
          <br>
          <span class="N${lastMod.gamename} t${lastMod.gamename} tooltip">${lastMod.gamename}</span>
          </div>

          <div class="download-cont">
          <a class="a${lastMod.gamename}" href="${lastMod.link}" target="_blank">Download</a>
          </div>
          </div>
  
  
          `;
})
    document.querySelector('#js-post').innerHTML = lastHTML;

