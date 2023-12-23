const mcCulasDg = [
    {
        id: 221,
        name:'BMO Pet',
        image: '../img/avatars/Dungeons/BMO-Pet-2.png',
        class: 'mod',
        gamename: 'Dungeons',
        category: 'Pet',
        link: 'google.com'
    },
]
const modCulaDg = mcCulasDg.filter(mcCulaDg => (mcCulaDg.class.includes('mod')));

let modsDgHTML = '';
mcCulasDg.forEach(mcCulaDg => {
    modsDgHTML+=`
    <div class="mods-container">
    <div class="img">
                <img src="${mcCulaDg.image}" alt="">
            </div>
            <div class="name limit-text-to-2-lines">
            ${mcCulaDg.name}
            <span class="N${mcCulaDg.gamename}">${mcCulaDg.gamename}</span>
            </div>
            <div class="version-loader">
          
                <div>${mcCulaDg.category}</div>
                </div>
                <div class="download-cont">
                <a class="a${mcCulaDg.gamename}" href="${mcCulaDg.link}" target="_blank">Download</a>
            </div>
            </div>
            `;
});
document.querySelector('#js-postMcDg').innerHTML = modsDgHTML;
// const lastDgIndex = mcCulasDg[mcCulasDg.length -1]
// let lastDgHTML='';

//       lastDgHTML+=`
//       <div class="mods-container ${lastDgIndex.id}">
//             <div class="img">
//                 <img src="${lastDgIndex.image}" alt="">
//             </div>
//             <div class="name limit-text-to-2-lines">
//             ${lastDgIndex.name}
//             <span>${lastDgIndex.gamename}</span>
//             </div>
//             <div class="version-loader">
//             <div>${lastDgIndex.Loaders}</div>
//             <div>${lastDgIndex.version}</div>
//             </div>
//             <div class="download-cont">
//             <a href="${lastDgIndex.link}" target="_blank">Download</a>
//             </div>
//             </div>
//             `;
            
            
//         document.querySelector('#js-post').innerHTML = lastDgHTML;