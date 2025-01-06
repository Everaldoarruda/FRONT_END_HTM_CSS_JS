const photos = [
    { id: 1, url: 'https://img.freepik.com/free-photo/beautiful-galactic-core-milky-way-with-rho-ophiuchi-cloud-complex-long-exposure-photograph_1150-21743.jpg?t=st=1736195577~exp=1736199177~hmac=5a84632d3d4c631995b9cd7ebabe9608242f9b3f4b0da3bf191b53dd2f8273da&w=740', title: 'Nebulosa' },
    { id: 2, url: 'https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2021/03/eso1625a-1024x776.jpg', title: 'Constelaçoes' },
    { id: 3, url: 'https://revistapesquisa.fapesp.br/wp-content/uploads/2024/02/RPF-sol-fusao-de-estrelas-2024-03-01-1140.jpg', title: 'Fusão de estrelas' },
    { id: 4, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/300px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg', title: 'Sol' },
    { id: 5, url: 'https://www.inovacaotecnologica.com.br/noticias/imagens/010130220528-andromeda-peso-estrelas.jpg', title: 'Via Lactea' },
    { id: 6, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg', title: 'Terra' },
    { id: 7, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/280px-FullMoon2010.jpg', title: 'Lua' },
    { id: 8, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/800px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg', title: 'Venus' },
    { id: 9, url: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/uma-das-concepcoes-artisticas-possivelmente-mais-proximas-um-buraco-negro-real-foi-apresentada-no-filme-interestelar-christopher-nolan-5acb7817aa3e5.jpg', title: 'Buraco Negro' },
    { id: 10, url: 'https://static.todamateria.com.br/upload/ma/rt/marte-0.jpg', title: 'Marte' },
];

function displayPhotos(photos) {
    const photoGrid = document.getElementById('photo-grid');
    photoGrid.innerHTML = '';
    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        photoDiv.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}">
            <div class="title">${photo.title}</div>
        `;
        photoGrid.appendChild(photoDiv);
    });
}

function searchPhotos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredPhotos = photos.filter(photo => photo.title.toLowerCase().includes(searchTerm));
    if (filteredPhotos.length > 0) {
        displayPhotos(filteredPhotos);
    } else {
        document.getElementById('photo-grid').innerHTML = '<p>Nenhuma foto encontrada.</p>';
    }
}

// Inicializa a galeria com todas as fotos
displayPhotos(photos);
