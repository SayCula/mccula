fetch("https://www.curseforge.com/api/v1/mods/955907/files")
.then(response => response.json())
.then(data => {
     let SkyblockClassicEdition = data.data;
     SkyblockClassicEdition.forEach(file => {

         const dateArray = file.dateCreated.split('T');
         dateArray.splice(1, 2);
           
            let nameMod = ' One Water';
           
            document.querySelector('#title').innerText = nameMod
            document.querySelector('title').innerHTML += nameMod;
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
                    return `Day: ${resultDay}`;
                }else if(resultDay === 0 && resultMonth === 0 && resultYear === 0){
                    return `${startDateDays.getDate()}`;
                }else {
                    return `now`;
                }
            }
    document.querySelector('#js-postWorldsJv-sce').innerHTML += `
    <div class="mods-container tooltip-container">
        <div class="img">
        <img src="https://media.forgecdn.net/avatars/926/14/638395271239459002.png" alt="">
        </div>
            <div class="name limit-text-to-2-lines">
            ${nameMod}
                <span class="NjavaEdition tooltip">javaEdition</span>
            </div>
                <div id="ago" data-mod-id="${file.id}">
                ${calcDateT}
                </div>
                <div class="version-loader">
                    <p>${file.gameVersions[16]}</p>
                    <p>${file.gameVersions[9]}</p>
                    <p>1.19.X to 1.20.X</p>
                    
                </div>
                    <div class="download-cont">
                    <a class="ajavaEdition" href="https://www.curseforge.com/api/v1/mods/307740/files/${file.id}/download" target="_blank">Download</a>
                    </div>
                    </div>
                    `;
                    
                });
                
})
.catch(error => console.error('Error fetching data:', error));
