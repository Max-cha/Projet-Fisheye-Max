async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
//const response= await fetch("D:/developpeurfront/projetfisheye/scripts/data/photographers.json")
//const data= await response.json()
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: data.photographers})
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.innerHTML+=userCardDOM;
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};
















init();