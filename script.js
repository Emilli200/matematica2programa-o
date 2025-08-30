function showAnimalInfo(animal) {
    const animalInfo = document.getElementById('animal-info');
    
    if (animal === 'leao') {
        animalInfo.innerHTML = `
            <h3>Leão</h3>
            <p>Os leões são conhecidos como os "reis da selva". São grandes felinos nativos da África e da Índia.</p>
            <img src="https://via.placeholder.com/400x250?text=Leão" alt="Leão">
        `;
    } else if (animal === 'elefante') {
        animalInfo.innerHTML = `
            <h3>Elefante</h3>
            <p>Os elefantes são os maiores mamíferos terrestres. Eles possuem grandes orelhas e longos troncos.</p>
            <img src="https://via.placeholder.com/400x250?text=Elefante" alt="Elefante">
        `;
    } else if (animal === 'gato') {
        animalInfo.innerHTML = `
            <h3>Gato</h3>
            <p>Os gatos são animais domésticos muito populares. Eles são conhecidos por sua agilidade e independência.</p>
            <img src="https://via.placeholder.com/400x250?text=Gato" alt="Gato">
        `;
    } else if (animal === 'cachorro') {
        animalInfo.innerHTML = `
            <h3>Cachorro</h3>
            <p>Os cachorros são os melhores amigos do homem. Eles são leais, carinhosos e ótimos companheiros.</p>
            <img src="https://via.placeholder.com/400x250?text=Cachorro" alt="Cachorro">
        `;
    }
}