import {apiModsJava,getData} from "./mods/apiModsJava.js";

const ModsJava = apiModsJava;

let lastHTML='';
ModsJava.forEach(ModsJava => {
lastHTML+=`
    <div class="mods-container tooltip-container">
          <div class="img">
              <img src="${ModsJava.image}" alt="">
          </div>
          <div class="name limit-text-to-2-lines">
          ${ModsJava.name}
          <br>
          <span class="N${ModsJava.gamename} tooltip">${ModsJava.gamename}</span>
          </div>
          <div class="version-loader">
              <div>${ModsJava.Loaders}</div>
              <div>${ModsJava.version}</div>
          </div>
          <div class="download-cont">
          <a class="a${ModsJava.gamename}" href="${ModsJava.link}" target="_blank">Download</a>
          </div>
          </div>
  
  
          `;
})
          document.querySelector('#js-postModsJv').innerHTML = lastHTML;

         