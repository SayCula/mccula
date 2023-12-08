const inptImg = document.querySelector('#inptImg');
const inptFile = document.querySelector('#inptFile');
const fileNameP = document.querySelector('#fileNameP');
const imgP = document.querySelector('#imgP');
const fileP = document.querySelector('#fileP');
// input image 
inptImg.addEventListener("change", ()=>{
    const imgName = inptImg.value.split('\\').pop()
    imgP.innerHTML = `Image : ${imgName}  `
    
});
// input file 
inptFile.addEventListener("change", ()=>{
    const fileName = inptFile.value.split('\\').pop()
    fileP.innerHTML = `file : ${fileName}  `
    
})
