fetch("https://www.curseforge.com/api/v1/mods/238222/files")
.then(response => response.json())
.then(data => {
     let files = data.data;
     files.forEach(file => {
         let modIdArray = file.id.toString().split('');
             modIdArray.splice(4, 3);
       
         let modIdLine = modIdArray.join('');
         
         let modIdPart = file.id.toString().slice(3);
         

         const dateArray = file.dateCreated.split('T');
         dateArray.splice(1, 2);
            const updatedDate = dateArray[0] + ' ' + dateArray[1];
            let updatedDateF = dateArray.join('T');
            let nameMod = ' - Just Enough Items';
            document.querySelector('title').innerHTML += nameMod;
            
            const now = new Date();
            const startDate = new Date(updatedDateF);
            
            const days = now.getDate() - startDate.getDate();
            const months = now.getMonth() + 1 - startDate.getMonth();
            const years = now.getFullYear() - parseInt(updatedDateF.slice(0, 4));
            
            
           
            
            console.log(updatedDateF)

    document.querySelector('#js-postModsJv-jei').innerHTML += `
    <div class="mods-container tooltip-container">
        <div class="img">
            
        </div>
            <div class="name limit-text-to-2-lines">
            Just Enough Items
            </div>
            <div id="ago"></div>
            <div class="version-loader">
                    <div>${file.gameVersions[0]}</div>
                    <div>${file.gameVersions[2]}</div>
                </div>
                    <div class="download-cont">
                    
                    </div>
    </div>
    `;
    if(years === 0){
        document.querySelector('#ago').innerHTML = `${months} months ago`
    }else if(months === 0 && years === 0){
        document.querySelector('#ago').innerHTML = `${days} days ago`
    }else if(days === 0 && months === 0 && years === 0){
        document.querySelector('#ago').innerHTML = `${now.getDate()}`
    }else {
        document.querySelector('#ago').innerHTML = `now`

    }
    
});
})
.catch(error => console.error('Error fetching data:', error));
