const mcCulas = [
    {
        id: 1,
        name: 'NameMod',
        image: "avatars/635421614078544069.png",
        class:'mod',
        version: '0.00.0',
        Loaders: 'Fabric',
        link: 'https://www.mediafire.com/file/lwp9l9ao3gmelcg/VoxelMap__1.16.4.zip/file',
    },
    {
        id: 2,
        name: 'NameResourcePacks',
        image: "avatars/637976395534026859.png",
        class: 'ResourcePacks',
        Loaders: 'Neo Zbi',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/xnpjrkiyork70g3/Dark_Theme_v_ec_1.15.%252B.zip/file'
    },
    {
        id: 3,
        name: 'NameWorld',
        image: "avatars/638253574938461773.png",
        Loaders: 'Forge',
        class: 'World',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/tezt829jvrvskee/SkyBlock2.1.rar/file'
    },{
        id: 1,
        name: 'NameMod',
        image: "avatars/635421614078544069.png",
        class:'mod',
        version: '0.00.0',
        Loaders: 'Fabric',
        link: 'https://www.mediafire.com/file/lwp9l9ao3gmelcg/VoxelMap__1.16.4.zip/file',
    },
    {
        id: 2,
        name: 'NameResourcePacks',
        image: "avatars/637976395534026859.png",
        class: 'ResourcePacks',
        Loaders: 'Neo Zbi',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/xnpjrkiyork70g3/Dark_Theme_v_ec_1.15.%252B.zip/file'
    },
    {
        id: 3,
        name: 'NameWorld',
        image: "avatars/638253574938461773.png",
        Loaders: 'Forge',
        class: 'World',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/tezt829jvrvskee/SkyBlock2.1.rar/file'
    },{
        id: 1,
        name: 'NameMod',
        image: "avatars/635421614078544069.png",
        class:'mod',
        version: '0.00.0',
        Loaders: 'Fabric',
        link: 'https://www.mediafire.com/file/lwp9l9ao3gmelcg/VoxelMap__1.16.4.zip/file',
    },
    {
        id: 2,
        name: 'NameResourcePacks',
        image: "avatars/637976395534026859.png",
        class: 'ResourcePacks',
        Loaders: 'Neo Zbi',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/xnpjrkiyork70g3/Dark_Theme_v_ec_1.15.%252B.zip/file'
    },
    {
        id: 3,
        name: 'NameWorld',
        image: "avatars/638253574938461773.png",
        Loaders: 'Forge',
        class: 'World',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/tezt829jvrvskee/SkyBlock2.1.rar/file'
    },{
        id: 1,
        name: 'NameMod',
        image: "avatars/635421614078544069.png",
        class:'mod',
        version: '0.00.0',
        Loaders: 'Fabric',
        link: 'https://www.mediafire.com/file/lwp9l9ao3gmelcg/VoxelMap__1.16.4.zip/file',
    },
    {
        id: 2,
        name: 'NameResourcePacks',
        image: "avatars/637976395534026859.png",
        class: 'ResourcePacks',
        Loaders: 'Neo Zbi',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/xnpjrkiyork70g3/Dark_Theme_v_ec_1.15.%252B.zip/file'
    },
    {
        id: 3,
        name: 'NameWorld',
        image: "avatars/638253574938461773.png",
        Loaders: 'Forge',
        class: 'World',
        version: '0.00.0',
        link: 'https://www.mediafire.com/file/tezt829jvrvskee/SkyBlock2.1.rar/file'
    },{
        id: 1,
        name: 'NameMod',
        image: "avatars/635421614078544069.png",
        class:'mod',
        version: '5.23.9',
        Loaders: 'Fabric',
        link: 'https://www.mediafire.com/file/lwp9l9ao3gmelcg/VoxelMap__1.16.4.zip/file',
    },
    {
        id: 2,
        name: 'NameResourcePacks',
        image: "avatars/637976395534026859.png",
        class: 'ResourcePacks',
        Loaders: 'Neo Zbi',
        version: '8.00.0',
        link: 'https://www.mediafire.com/file/xnpjrkiyork70g3/Dark_Theme_v_ec_1.15.%252B.zip/file'
    },
    {
        id: 3,
        name: 'NameWorld',
        image: "avatars/638253574938461773.png",
        Loaders: 'Forge',
        class: 'World',
        version: '9.00.0',
        link: 'https://www.mediafire.com/file/tezt829jvrvskee/SkyBlock2.1.rar/file'
    },
]
console.log(mcCulas);
const modCula = mcCulas.filter(mcCula => (mcCula.class.includes('mod')));
  console.log(modCula);
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
            </div>
            <div class="version-loader">
                <div>${mcCula.Loaders}</div>
                <div>${mcCula.version}</div>
            </div>
            <div class="download-cont">
                <button>Download</button>
            </div>
        </div>
    `
  })
  document.querySelector('.js-mods-container-grid').innerHTML = modsHTML