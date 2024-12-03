
/*O JavaScript é executado apenas depois que todo o conteúdo da página (HTML) for carregado e estiver pronto por conta do dom content loaded. */
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as tags section
    const sectionImages = {
        home: {
            small: './imagens/verdeP.png',
            medium: './imagens/cinzaM.png',
            large: './imagens/pretoG.png'
        },
        sobre:{
            small: './imagens/cinzaP.png',
            medium: './imagens/pretoM.png',
            large: './imagens/verdeG.png'
        },
        habilidades:{
            small: './imagens/pretoP.png',
            medium: './imagens/verdeM.png',
            large: './imagens/cinzaG.png'
        }
    }
    const sections = document.querySelectorAll('section');

    /* executar uma função para cada item em uma lista. Neste caso, executando a função para cada <section> da página. */
    sections.forEach(section => {
        const id = section.id; //obtem o id da seção
        if (sectionImages[id]) {
            // Cria o elemento <picture>
            const pictureElement = document.createElement('picture');

            // Adiciona as sources e img ao elemento picture
            const source1 = document.createElement('source');
            source1.setAttribute('media', '(max-width:750px)');
            source1.setAttribute('srcset', sectionImages[id].small);
            source1.setAttribute('type', 'image/png');

            const source2 = document.createElement('source');
            source2.setAttribute('media', '(max-width:1050px)');
            source2.setAttribute('srcset', sectionImages[id].medium);
            source2.setAttribute('type', 'image/png');

            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', sectionImages[id].large);
            imgElement.setAttribute('alt', 'Imagem dinâmica da seção ${id}');

            pictureElement.appendChild(source1);
            pictureElement.appendChild(source2);
            pictureElement.appendChild(imgElement);

            // Adiciona o elemento picture ao final da seção
            section.appendChild(pictureElement);
        }        
    });

});
