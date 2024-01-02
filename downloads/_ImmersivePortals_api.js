
            const ImmersivePortals = "https://www.curseforge.com/api/v1/mods/332273/files";

            fetch(ImmersivePortals)
                .then(response => response.json())
                .then(data => {
                data.data.forEach((file, index) => {
                    const lastThreeDigits = file.id.toString().slice(-3);
                    const fileName = file.fileName;
                    const gameVersions = file.gameVersions;
                    // id link
                    const modIdArray = file.id.toString().split('');
                          modIdArray.splice(4, 6);
                      let modIdLine = modIdArray.join('');
                      let modIdPart = file.id.toString().slice(-3);

                    // date 
                    const dateArray = file.dateCreated.split('T');
                          dateArray.splice(1, 2);
                    const updatedDate = dateArray[0] + ' ' + dateArray[1];
                      let updatedDateF = dateArray.join('T');
                      
                    const modList = document.querySelector('#ImmersivePortals')
                    modList.innerHTML = `
                    <div id="${lastThreeDigits}">
                    <input type="text" value="https://mediafilez.forgecdn.net/files/${modIdLine}/${modIdPart}/${fileName}">
                      <a class="dwn" href="https://mediafilez.forgecdn.net/files/${modIdLine}/${modIdPart}/${fileName}" target="_blank">${fileName}</a>
                      <p>${gameVersions[4]}</p>
                      <p>${gameVersions[0]}</p>
                      <p>${updatedDateF}</p>
                    </div>
                    `
                });
                })
                .catch(error => console.error("حدث خطأ: ", error));
            