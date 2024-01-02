import {apiMcCulaJava} from "./myMod.js";


// LastApi
const McCulaZipz = apiMcCulaJava;

let lastHTML='';
McCulaZipz.forEach(McCulaZip => {
    lastHTML+=`
    <div class="mods-container tooltip-container">
          <div class="img">
              <img src="${McCulaZip.image}" alt="">
          </div>
          <div class="name limit-text-to-2-lines">
          ${McCulaZip.name}
          <br>
          <span class="N${McCulaZip.gamename} t${McCulaZip.gamename} tooltip">${McCulaZip.gamename}</span>
          </div>
          <div class="version-loader">
          <div>${McCulaZip.Loaders}</div>
          <div>${McCulaZip.version}</div>
          </div>
          <div class="download-cont">
          <a class="a${McCulaZip.gamename}" href="${McCulaZip.servermf}" target="_blank">Download S1</a>
          
          </div>
          </div>
  
  
          `;
})
    document.querySelector('#js-McCulazipList').innerHTML = lastHTML;

    let uId = Math.floor(Math.random() * 10000).toString();
    let one = uId.split('').splice(2, 2)
    let two = one.join('')
        console.log(two);
    
