export let mods = JSON.parse(localStorage.getItem('mods')) || [];
export function saveToStorage() {
  localStorage.setItem('mods', JSON.stringify(mods))
}
export function addMod(inputId, inputName, inputVersion,luncherOption) {
  const id = inputId.value;
  const name = inputName.value;
  const version = inputVersion.value;
  const luncher = luncherOption.value;
  mods.push({
    id, name, version,luncher
  })
  inputId.value = "";
  inputName.value = "";
  inputVersion.value = "";
  saveToStorage()
  console.log(mods)
}
export function removeMod(modId) {
  mods = mods.filter(mod => mod.id !== modId);
  saveToStorage()
}