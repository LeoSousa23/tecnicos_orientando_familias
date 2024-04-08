// Carregar os dados do arquivo JSON
fetch('src/data/data.json')
  .then(response => response.json())
  .then(data => {
    const blogCardsContainer = document.getElementById('blog-cards');
    
    // Iterar sobre os dados e criar os componentes HTML dinamicamente
    data.forEach(card => {
      const cardHTML = `
        <a class="card_material_blog" href="${card.link}">
          <img src="${card.imagem}" alt="">
          <div class="material_blog_tittle">
            <div class="material_blog_tag">
              <p>${card.tag}</p>
              <div class="line"></div>
              <span>${card.data}</span>
            </div>
            <h3>${card.titulo}</h3>
          </div>
          <p>${card.descricao}</p>
        </a>
        <div class="divisor"></div>
      `;
      // Adicionar o componente HTML ao contêiner
      blogCardsContainer.innerHTML += cardHTML;
    });
  })
  .catch(error => console.error('Erro ao carregar os dados:', error));