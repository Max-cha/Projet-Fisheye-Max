function profilFactory(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserprofilDOM() {
        
        return `
        <article>
            <img class="profil_pics" src="${picture}"/>
            <h2>${name}</h2>
        </article>
        `
    }
    return { name, picture, city, country, tagline, getUserprofilDOM }
}
