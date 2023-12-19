import {apiModsJava} from "./mods/apiModsJava.js";
import {apiModsDg} from "./mods/apiModsDg.js";

import {apiWorldsJava} from "./worlds/apiWorldsJava.js";

// Mods List
const lastapiModsDg = apiModsDg[apiModsDg.length -1];
const lastapiModsJava = apiModsJava[apiModsJava.length -1];
// Mods World
const LastapiWorldsJava = apiWorldsJava[apiWorldsJava.length -1];
console.log(LastapiWorldsJava)
// LastApi
const lastMods = [lastapiModsDg,lastapiModsJava,LastapiWorldsJava];

let lastHTML='';
lastMods.forEach(lastMod => {
    lastHTML+=`
    <div class="mods-container">
          <div class="img">
              <img src="${lastMod.image}" alt="">
          </div>
          <div class="name limit-text-to-2-lines">
          ${lastMod.name}
          <span>${lastMod.gamename}</span>
          </div>
          <div class="version-loader">
              <div>${lastMod.Loaders}</div>
              <div>${lastMod.version}</div>
          </div>
          <div class="download-cont">
          <a class="Alin" href="${lastMod.link}" target="_blank">Download</a>
          </div>
          </div>
  
  
          `;
})

    document.querySelector('#js-post').innerHTML = lastHTML;
