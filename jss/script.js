document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close');

    function openModal(verse) {
        let text;
        switch (verse) {

            case 'rm12:2':
                text = `
                <p><b>Romanos 12: 2</b></p>
                <p>² Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.</p>    
                `;
                break;

            case 'jo21:3':
                text = `
                <p><b>João 21:3</b></p>
                <p>³ "Vou pescar", disse-lhes Simão Pedro. E eles disseram: "Nós vamos com você". Eles foram e entraram no barco, mas naquela noite não pegaram nada.</p>                
                `;
                break;

            case 'lc15:17':
                text = `
                <p><b>Lucas 15:17</b></p>
                <p>Caindo em si, ele disse: ‘Quantos empregados de meu pai têm comida de sobra, e eu aqui, morrendo de fome!</p>                
                `;
                break;
            case '2co13:5':
                text = `
                <p><b>2 Coríntios 13:5</b></p>
                <p>Examinem-se para ver se vocês estão na fé; provem-se a si mesmos. Não percebem que Cristo Jesus está em vocês? A não ser que tenham sido reprovados!</p>                
                `;
                break;
                
                

            case 'nome':
                text = `
                <p><b> </b></p>
                <p> </p>                
                `;
                break;


            default:
                text = 'Texto não encontrado.';
                break;
        }

        modalText.innerHTML = text;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.querySelectorAll('a[onclick^="openModal"]').forEach(citation => {
        citation.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link
            const verse = citation.getAttribute('onclick').replace("openModal('", "").replace("')", "");
            openModal(verse);
        });
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Adiciona o evento de tecla para fechar o modal com a tecla Esc
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
