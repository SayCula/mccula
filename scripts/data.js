


const resCula = mcCulas.filter(mcCula => (mcCula.class.includes('ResourcePacks')));
  console.log(resCula);
const worldCula = mcCulas.filter(mcCula => (mcCula.class.includes('World')));
console.log(worldCula);
let modsHTML = '';
mcCulas.forEach(mcCula=>{
    modsHTML+=`
    <div class="mods-container">
            <div class="img">
                <img src="${mcCula.image}" alt="">
            </div>
            <div class="name limit-text-to-2-lines">
            ${mcCula.name}
            <span>${mcCula.gamename}</span>
            </div>
            <div class="version-loader">
                <div>${mcCula.Loaders}</div>
                <div>${mcCula.version}</div>
                </div>
                <div class="download-cont">
                <a href="${mcCula.link}" target="_blank">Download</a>
            </div>
            </div>
            `;
        })
        document.querySelector('#post').innerHTML = modsHTML;
        
        // Latest update
    const lastIndex = mcCulas[mcCulas.length -1]
    let lastHTML='';

      lastHTML+=`
      <div class="mods-container">
            <div class="img">
                <img src="${lastIndex.image}" alt="">
            </div>
            <div class="name limit-text-to-2-lines">
            ${lastIndex.name}
            <span>${lastIndex.gamename}</span>
            </div>
            <div class="version-loader">
                <div>${lastIndex.Loaders}</div>
                <div>${lastIndex.version}</div>
            </div>
            <div class="download-cont">
            <a class="Alin" href="${lastIndex.link}" target="_blank">Download</a>
            </div>
            </div>
            
            `;

        document.querySelector('#js-post').innerHTML = lastHTML;
  


        // const modscontainer = document.querySelector('.mods-container');
        // const downloadcont = document.querySelector('.dAlin');

        // modscontainer.addEventListener('mouseover', ()=>{
        //     downloadcont.classList.remove('visible');
        // })
        // modscontainer.addEventListener('mouseout', ()=>{
        //     downloadcont.classList.add('visible');
        // })