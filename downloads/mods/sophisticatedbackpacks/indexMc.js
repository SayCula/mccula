sophisticatedbackpacks();
function sophisticatedbackpacks(){   
fetch("https://www.curseforge.com/api/v1/mods/422301/files")
.then(response => response.json())
.then(data => {
     let sbps = data.data;

     sbps.forEach(file => {
        let modIdArray = file.id.toString().split('');
            modIdArray.splice(4, 3);
        let modIdPartOne = modIdArray.join('');
        let modIdPart = file.id.toString().slice(4);

    const calcDateT = calcDate()
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

        if(resultYear === 0){
            return `Month : ${resultMonth}`;
        }else if(resultMonth === 0 && resultYear === 0){
            return `Day: ${startDate.getDate()}`;
        }else if(resultDay === 0 && resultMonth === 0 && resultYear === 0){
            return `${startDate.getDate()}`;
        }else {
            return `now`;
        }
    }
    document.querySelector('#js-postModsJv-sce').innerHTML += `
    <div class="mods-container tooltip-container">
        <div class="img">
        <img src="https://media.forgecdn.net/avatars/375/56/637549610342642859.png" alt="">
        </div>
            <div class="name limit-text-to-2-lines">
            Sophisticated Backpacks
            <span class="NjavaEdition tooltip">javaEdition</span>
            </div>
            <div id="ago" data-mod-id="${file.id}">
            ${calcDateT}
            </div>
            <div class="version-loader">
                    <div>${file.gameVersions[0]}</div>
                    <div>${file.gameVersions[1]}</div>
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
