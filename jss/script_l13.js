document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close');

    function openModal(verse) {
        let text;
        switch (verse) {
                    
            case 'ef 4:11':
                text = `
                <p><b>Efésios 4:11</b></p>                
                <p>11 - E ele designou alguns para apóstolos, outros para profetas, outros para evangelistas, e outros para pastores e mestres,</p>
                `;
            break;

            case 'hb 13:17':
                text = `
                <p><b> Hebreus 13:17</b></p>                
                <p>17 Obedeçam aos seus líderes e submetam-se à autoridade deles. Eles cuidam de vocês como quem deve prestar contas. Obedeçam-lhes, para que o trabalho deles seja uma alegria e não um peso, pois isso não seria proveitoso para vocês.</p>
                `;
            break;

            case 'tg 3:17':
                text = `
                <p><b>Tiago 3:17</b></p>                
                <p>17 Mas a sabedoria que vem do alto é antes de tudo pura; depois, pacífica, amável, compreensiva, cheia de misericórdia e de bons frutos, imparcial e sincera.</p>
                `;
            break;

            case 'tg 1:19':
                text = `
                <p><b>Tiago 1:19</b></p>                
                <p>19 Meus amados irmãos, tenham isto em mente: Sejam todos prontos para ouvir, tardios para falar e tardios para irar-se,</p>
                `;
            break;

            case 'tm tt pe':
                text = `
                <p><b>1 Timóteo 3:1-17</b></p>                
                <p>1 - Esta afirmação é digna de confiança: se alguém deseja ser bispo, deseja uma nobre função.</p>      
                <p>2 - É necessário, pois, que o bispo seja irrepreensível, marido de uma só mulher, sóbrio, prudente, respeitável, hospitaleiro e apto para ensinar;</p>
                <p>3 - não deve ser apegado ao vinho, nem violento, mas sim amável, pacífico e não apegado ao dinheiro.</p>
                <p>4 - Ele deve governar bem sua própria família, tendo os filhos sujeitos a ele, com toda a dignidade.</p>
                <p>5 - Pois, se alguém não sabe governar sua própria família, como poderá cuidar da igreja de Deus?</p>
                <p>6 - Não pode ser recém-convertido, para que não se ensoberbeça e caia na mesma condenação em que caiu o diabo.</p>
                <p>7 - Também deve ter boa reputação perante os de fora, para que não caia em descrédito nem na cilada do diabo.</p>                

                <p><b>Tito 1:5-9</b></p>                
                <p>5 - A razão de tê-lo deixado em Creta foi para que você pusesse em ordem o que ainda faltava e constituísse presbíteros em cada cidade, como eu o instruí.</p>
                <p>6 - É preciso que o presbítero seja irrepreensível, marido de uma só mulher, e tenha filhos crentes que não sejam acusados de libertinagem ou de insubmissão.</p>
                <p>7 - Por ser encarregado da obra de Deus, é necessário que o bispo seja irrepreensível: não orgulhoso, não briguento, não apegado ao vinho, não violento, nem ávido por lucro desonesto.</p>
                <p>8 - É preciso, porém, que ele seja hospitaleiro, amigo do bem, sensato, justo, consagrado, tenha domínio próprio</p>
                <p>9 - e apegue-se firmemente à mensagem fiel, da maneira como foi ensinada, para que seja capaz de encorajar outros pela sã doutrina e de refutar os que se opõem a ela.</p>                

                <p><b>1 Pedro 5:1-3</b></p>                
                <p>                1 Portanto, apelo para os presbíteros que há entre vocês, e o faço na qualidade de presbítero como eles e testemunha dos sofrimentos de Cristo, como alguém que participará da glória a ser revelada:</p>
                <p>2 Pastoreiem o rebanho de Deus que está aos seus cuidados. Olhem por ele, não por obrigação, mas de livre vontade, como Deus quer. Não façam isso por ganância, mas com o desejo de servir.</p>
                <p>3 Não ajam como dominadores dos que lhes foram confiados, mas como exemplos para o rebanho.</p>
                `;
            break;

            case 'at 20:17-28':
                text = `
                <p><b>Atos 20:17-28</b></p>                
                <p>17 - De Mileto, Paulo mandou chamar os presbíteros da igreja de Éfeso.</p>
                <p>18 - Quando chegaram, ele lhes disse: "Vocês sabem como vivi todo o tempo em que estive com vocês, desde o primeiro dia em que cheguei à província da Ásia.</p>
                <p>19 - Servi ao Senhor com toda a humildade e com lágrimas, sendo severamente provado pelas conspirações dos judeus.</p>
                <p>20 - Vocês sabem que não deixei de pregar-lhes nada que fosse proveitoso, mas ensinei-lhes tudo publicamente e de casa em casa.</p>
                <p>21 - Testifiquei, tanto a judeus como a gregos, que eles precisam converter-se a Deus com arrependimento e fé em nosso Senhor Jesus.</p>
                <p>22 - "Agora, compelido pelo Espírito, estou indo para Jerusalém, sem saber o que me acontecerá ali,</p>
                <p>23 - senão que, em todas as cidades, o Espírito Santo me avisa que prisões e sofrimentos me esperam.</p>
                <p>24 - Todavia, não me importo, nem considero a minha vida de valor algum para mim mesmo, se tão-somente puder terminar a corrida e completar o ministério que o Senhor Jesus me confiou, de testemunhar do evangelho da graça de Deus.</p>
                <p>25 - "Agora sei que nenhum de vocês, entre os quais passei pregando o Reino, verá novamente a minha face.</p>
                <p>26 - Portanto, eu lhes declaro hoje que estou inocente do sangue de todos.</p>
                <p>27 - Pois não deixei de proclamar-lhes toda a vontade de Deus.</p>
                <p>28 - Cuidem de vocês mesmos e de todo o rebanho sobre o qual o Espírito Santo os colocou como bispos, para pastorearem a igreja de Deus, que ele comprou com o seu próprio sangue.</p>                
                `;
            break;

            case 'jo hb pe':
                text = `
                <p><b>João 10:11</b></p>                
                <p>11 - "Eu sou o bom pastor. O bom pastor dá a sua vida pelas ovelhas.</p>

                <p><b>Hebreus 13:20</b></p>                
                <p>20 - O Deus da paz, que pelo sangue da aliança eterna trouxe de volta dentre os mortos a nosso Senhor Jesus, o grande Pastor das ovelhas,</p>

                <p><b>1 Pedro 5:4</b></p>                
                <p>4 - Quando se manifestar o Supremo Pastor, vocês receberão a imperecível coroa da glória.</p>
                `;
            break;

            case '1co 12:28':
                text = `
                <p><b>1 Coríntios 12:28</b></p>               
                <p>28 Assim, na igreja, Deus estabeleceu primeiramente apóstolos; em segundo lugar, profetas; em terceiro lugar, mestres; depois os que realizam milagres, os que têm dom de curar, os que têm dom de prestar ajuda, os que têm dons de administração e os que falam diversas línguas.</p>
                `;
            break;

            case 'rm 12:7':
                text = `
                <p><b>Romanos 12:7</b></p>                
                <p>7 - Se o seu dom é servir, sirva; se é ensinar, ensine;</p>
                `;
            break;

            case 'ef 4:13':
                text = `
                <p><b>Efésios 4:13</b></p>                
                <p>13 - até que todos alcancemos a unidade da fé e do conhecimento do Filho de Deus, e cheguemos à maturidade, atingindo a medida da plenitude de Cristo.</p>
                `;
            break;

            case 'at 13:1':
                text = `
                <p><b>Atos 13:1</b></p>                
                <p>1 - Na igreja de Antioquia havia profetas e mestres: Barnabé, Simeão, chamado Níger, Lúcio de Cirene, Manaém, que fora criado com Herodes, o tetrarca, e Saulo.</p>
                `;
            break;

            case 'mt 22:29':
                text = `
                <p><b>Mateus 22:29</b></p>                
                <p>29 - Jesus respondeu: "Vocês estão enganados porque não conhecem as Escrituras nem o poder de Deus!</p>
                `;
            break;

            case 'ef 6:19':
                text = `
                <p><b> Efésios 6:19</b></p>                
                <p>19 Orem também por mim, para que, quando eu falar, seja-me dada a mensagem a fim de que, destemidamente, torne conhecido o mistério do evangelho,</p>
                `;
            break;

            case '2tm 4:11':
                text = `
                <p><b>2 Timóteo 4:11</b></p>                
                <p>11 - Só Lucas está comigo. Traga Marcos com você, porque ele me é útil para o ministério.</p>
                `;
            break;

            case 'fl 4:14-18':
                text = `
                <p><b>Filipenses 4:14-18</b></p>                
                <p>14 - Apesar disso, vocês fizeram bem em participar de minhas tribulações. </p>
                <p>15 - Como vocês sabem, filipenses, nos seus primeiros dias no evangelho, quando parti da Macedônia, nenhuma igreja partilhou comigo no que se refere a dar e receber, exceto vocês; </p>
                <p>16 - pois, estando eu em Tessalônica, vocês me mandaram ajuda, não apenas uma vez, mas duas, quando tive necessidade.</p>
                <p>17 - Não que eu esteja procurando ofertas, mas o que pode ser creditado na conta de vocês.</p>
                <p>18 - Recebi tudo, e o que tenho é mais que suficiente. Estou amplamente suprido, agora que recebi de Epafrodito os donativos que vocês enviaram. Elas são uma oferta de aroma</p>                
                `;
            break;

            case 'hb 13:7-17':
                text = `
                <p><b>Hebreus 13:7 e 17</b></p>                
                <p>7 Lembrem-se dos seus líderes, que lhes falaram a palavra de Deus. Observem bem o resultado da vida que tiveram e imitem a sua fé.</p>
                <p>17 Obedeçam aos seus líderes e submetam-se à autoridade deles. Eles cuidam de vocês como quem deve prestar contas. Obedeçam-lhes, para que o trabalho deles seja uma alegria e não um peso, pois isso não seria proveitoso para vocês.</p>
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
