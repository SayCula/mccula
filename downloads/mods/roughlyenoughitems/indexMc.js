import {swapArrayElements} from "/bin/apiZ/bin.js"

jei();
function jei(){   
fetch("https://www.curseforge.com/api/v1/mods/310111/files")
.then(response => response.json())
.then(data => {
     let rei = data.data;

        
     const neoforge = rei.filter(value => value.gameVersions.includes("NeoForge"));
     neoforge.forEach(value => {
        const swappedArray = swapArrayElements(value.gameVersions, 1, 2);
        
    })

rei.forEach(file => {


        let modIdArray = file.id.toString().split('');
            modIdArray.splice(4, 3);
        let modIdPartOne = modIdArray.join('');
        let modIdPart = file.id.toString().slice(4);
        let nameMod = ' Roughly Enough Items';
           
            document.querySelector('#title').innerText = nameMod
            document.querySelector('title').innerHTML += nameMod;
        
            


            
            
    
    function calcDate(){
        
         // create date
         const dateArray = file.dateCreated.split('T');
         dateArray.splice(1, 2);
         let updatedDateF = dateArray.join('T');
        // Live Date
        const now = new Date();
        const daysNow = now.getDate();
        const monthsNow = now.getMonth() + 1;
        const yearsNow = now.getFullYear();
        // Star Date
        const startDate = new Date(updatedDateF);
        let startDateDays = startDate.getDate();
        let startDateMonths = startDate.getMonth() + 1;
        let startDateYears = parseInt(updatedDateF.slice(0, 4));
     
        // Result
        let resultDay,resultMonth, resultYear;
        resultYear = yearsNow - startDateYears;
        if(monthsNow >= startDateMonths){
            resultMonth = monthsNow - startDateMonths;
        }else{
            resultYear--;
            resultMonth = 12 + monthsNow - startDateMonths;
        }
        if(daysNow >= startDateDays){
            resultDay = daysNow - startDateDays;
        }else{
            resultMonth--;
            const lastmonthday = new Date(startDateYears, startDateMonths, 0).getDate();
            resultDay = lastmonthday + daysNow - startDateDays;
        }

        if(resultYear === -1){
            return `Month : ${resultMonth}`;
        }else if(resultMonth === 0 && resultYear === 0){
            return `Day: ${resultDay}`;
        }else if(resultDay === 0 && resultMonth === 0 && resultYear === 0){
            return `${startDateDays.getDate()}`;
        }else {
            return `Years : ${resultYear}`;
        }
    }
    document.querySelector('#js-postModsJv-jei').innerHTML += `
    <div class="mods-container tooltip-container">
        <div class="img">
        <img src="https://media.forgecdn.net/avatars/282/25/637287701215436754.png" alt="">
        </div>
            <div class="name limit-text-to-2-lines">
            Just Enough Items
            <span class="NjavaEdition tooltip">javaEdition</span>
            </div>
            <div id="ago" data-mod-id="${file.id}">
            ${calcDate()}
            </div>
            <div class="version-loader">
                    <div>${file.gameVersions[1]}</div>
                    <div>${file.gameVersions[file.gameVersions.length-1]}</div>
  
                </div>
                    <div class="download-cont">
                    <a class="ajavaEdition" href="https://mediafilez.forgecdn.net/files/${modIdPartOne}/${modIdPart}/${file.fileName}" target="_blank">Download</a>
                    </div>
    </div>
    `;
});

})
.catch(error => console.error('Error fetching data:', error));

};
