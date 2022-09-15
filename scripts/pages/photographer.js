async function getPhotographers() {
const params = new URLSearchParams(window.location.search);                               
const id = params.get("id");

    return ({
        photographer: data.photographers.find(photographer=>photographer.id==id),
        medias: data.media.filter(media=>media.photographerId==id)
    })
}

async function displayData(photographer) {
    const profilSection = document.querySelector("#profil");
    const profilmodel = profilFactory(photographer)
    const profil=profilmodel.getUserprofilDOM()
   profilSection.innerHTML+=profil
};

async function init() {
    // Récupère les datas des photographes
    const { photographer,medias } = await getPhotographers();
    console.log(medias)
    console.log(photographer)
    displayData(photographer);
};
init()