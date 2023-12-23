import {apiModsJava} from "./mods/apiModsJava.js";
import {apiModsDg} from "./mods/apiModsDg.js";

import {apiWorldsJava} from "./worlds/apiWorldsJava.js";

// Mods List
const lastapiModsDg = apiModsDg[apiModsDg.length -1];
const lastapiModsJava = apiModsJava[apiModsJava.length -1];
// Mods World
const LastapiWorldsJava = apiWorldsJava[apiWorldsJava.length -1];

// LastApi
const lastMods = [lastapiModsDg,lastapiModsJava,LastapiWorldsJava];

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
          <div class="version-loader">
              <div>${lastMod.Loaders}</div>
              <div>${lastMod.version}</div>
          </div>
          <div class="download-cont">
          <a class="a${lastMod.gamename}" href="${lastMod.link}" target="_blank">Download</a>
          </div>
          </div>
  
  
          `;
})

    document.querySelector('#js-post').innerHTML = lastHTML;
    // document.querySelector('#js-posts').innerHTML = lastHTML;
