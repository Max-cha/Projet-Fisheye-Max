function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        return `
        <article>
            <img class="profil_pics" src="${picture}"/>
            <h2>${name}</h2>
        </article>
        `
    }
    return { name, picture, getUserCardDOM }
}