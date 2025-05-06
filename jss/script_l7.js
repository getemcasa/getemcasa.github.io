document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close');

    function openModal(verse) {
        let text;
        switch (verse) {

            case 'jo16.1-14':
                text = `
                <p><b>João 16:1-14</b></p>                
                <p>1 "Tenho-lhes dito tudo isso para que vocês não venham a tropeçar.</p>
                <p>2 Vocês serão expulsos das sinagogas; de fato, virá o tempo quando quem os matar pensará que está prestando culto a Deus.</p>
                <p>3 Farão essas coisas porque não conheceram nem o Pai, nem a mim.</p>
                <p>4 Estou lhes dizendo isto para que, quando chegar a hora, lembrem-se de que eu os avisei. Não lhes disse isso no princípio, porque eu estava com vocês".</p>
                <p>5 "Agora que vou para aquele que me enviou, nenhum de vocês me pergunta: ‘Para onde vais? ’</p>
                <p>6 Porque falei estas coisas, o coração de vocês encheu-se de tristeza.</p>
                <p>7 Mas eu lhes afirmo que é para o bem de vocês que eu vou. Se eu não for, o Conselheiro não virá para vocês; mas se eu for, eu o enviarei.</p>
                <p>8 Quando ele vier, convencerá o mundo do pecado, da justiça e do juízo.</p>
                <p>9 Do pecado, porque os homens não crêem em mim;</p>
                <p>10 da justiça, porque vou para o Pai, e vocês não me verão mais;</p>
                <p>11 e do juízo, porque o príncipe deste mundo já está condenado.</p>
                <p>12 "Tenho ainda muito que lhes dizer, mas vocês não o podem suportar agora.</p>
                <p>13 Mas quando o Espírito da verdade vier, ele os guiará a toda a verdade. Não falará de si mesmo; falará apenas o que ouvir, e lhes anunciará o que está por vir.</p>
                <p>14 Ele me glorificará, porque receberá do que é meu e o tornará conhecido a vocês.</p>
                `;
            break;

            case 'sl133.1-3':
                text = `
                <p><b>Salmo 133:1-3</b></p>                
                <p>1 Como é bom e agradável quando os irmãos convivem em união!</p>
                <p>2 É como óleo precioso derramado sobre a cabeça, que desce pela barba, a barba de Arão, até a gola das suas vestes.</p>
                <p>3 É como o orvalho do Hermom quando desce sobre os montes de Sião. Ali o Senhor concede a bênção da vida para sempre.</p>
                `;
            break;

            case 'at19.1-7':
                text = `
                <p><b>Atos 19:1-7</b></p>                
                <p></p>
                <p>1 Enquanto Apolo estava em Corinto, Paulo, atravessando as regiões altas, chegou a Éfeso. Ali encontrou alguns discípulos</p>
                <p>2 e lhes perguntou: "Vocês receberam o Espírito Santo quando creram? " Eles responderam: "Não, nem sequer ouvimos que existe o Espírito Santo".</p>
                <p>3 "Então, que batismo vocês receberam? ", perguntou Paulo. "O batismo de João", responderam eles.</p>
                <p>4 Disse Paulo: "O batismo de João foi um batismo de arrependimento. Ele dizia ao povo que cresse naquele que viria depois dele, isto é, em Jesus".</p>
                <p>5 Ouvindo isso, eles foram batizados no nome do Senhor Jesus.</p>
                <p>6 Quando Paulo lhes impôs as mãos, veio sobre eles o Espírito Santo, e começaram a falar em línguas e a profetizar.</p>
                <p>7 Eram ao todo uns doze homens.</p>
                `;
            break;

            case 'at6.1-7':
                text = `
                <p><b>Atos 6:1-7</b></p>                
                <p></p>
                <p>1 Naqueles dias, crescendo o número de discípulos, os judeus de fala grega entre eles queixaram-se dos judeus de fala hebraica, porque suas viúvas estavam sendo esquecidas na distribuição diária de alimento.</p>
                <p>2 Por isso os Doze reuniram todos os discípulos e disseram: "Não é certo negligenciarmos o ministério da palavra de Deus, a fim de servir às mesas.</p>
                <p>3 Irmãos, escolham entre vocês sete homens de bom testemunho, cheios do Espírito e de sabedoria. Passaremos a eles essa tarefa</p>
                <p>4 e nos dedicaremos à oração e ao ministério da palavra".</p>
                <p>5 Tal proposta agradou a todos. Então escolheram Estêvão, homem cheio de fé e do Espírito Santo, além de Filipe, Prócoro, Nicanor, Timom, Pármenas e Nicolau, um convertido ao judaísmo, proveniente de Antioquia.</p>
                <p>6 Apresentaram esses homens aos apóstolos, os quais oraram e lhes impuseram as mãos.</p>
                <p>7 Assim, a palavra de Deus se espalhava. Crescia rapidamente o número de discípulos em Jerusalém; também um grande número de sacerdotes obedecia à fé.</p>
                `;
            break;

            case 'at6.8-15':
                text = `
                <p><b>Atos 6:8-15</b></p>                
                <p>8 Estêvão, homem cheio da graça e do poder de Deus, realizava grandes maravilhas e sinais entre o povo.</p>
                <p>9 Contudo, levantou-se oposição dos membros da chamada Sinagoga dos Libertos, dos judeus de Cirene e de Alexandria, bem como das províncias da Cilícia e da Ásia. Esses homens começaram a discutir com Estêvão,</p>
                <p>10 mas não podiam resistir à sabedoria e ao Espírito com que ele falava.</p>
                <p>11 Então subornaram alguns homens para dizerem: "Ouvimos Estêvão falar palavras blasfemas contra Moisés e contra Deus".</p>
                <p>12 Com isso agitaram o povo, os líderes religiosos e os mestres da lei. E, prendendo Estêvão, levaram-no ao Sinédrio.</p>
                <p>13 Ali apresentaram falsas testemunhas que diziam: "Este homem não pára de falar contra este lugar santo e contra a lei.</p>
                <p>14 Pois o ouvimos dizer que esse Jesus, o Nazareno, destruirá este lugar e mudará os costumes que Moisés nos legou".</p>
                <p>15 Olhando para ele, todos os que estavam sentados no Sinédrio viram que o seu rosto parecia o rosto de um anjo.</p>
                `;
            break;

            case 'at7.54-60':
                text = `
                <p><b>Atos 7:54-60</b></p>                
                <p></p>
                <p>54 Ouvindo isso, ficavam furiosos e rangiam os dentes contra ele.</p>
                <p>55 Mas Estêvão, cheio do Espírito Santo, levantou os olhos para o céu e viu a glória de Deus, e Jesus de pé, à direita de Deus,</p>
                <p>56 e disse: "Vejo o céu aberto e o Filho do homem de pé, à direita de Deus".</p>
                <p>57 Mas eles taparam os ouvidos e, gritando bem alto, lançaram-se todos juntos contra ele,</p>
                <p>58 arrastaram-no para fora da cidade e começaram a apedrejá-lo. As testemunhas deixaram seus mantos aos pés de um jovem chamado Saulo.</p>
                <p>59 Enquanto apedrejavam Estêvão, este orava: "Senhor Jesus, recebe o meu espírito".</p>
                <p>60 Então caiu de joelhos e bradou: "Senhor, não os consideres culpados deste pecado". E, dizendo isso, adormeceu.</p>
                `;
            break;

            case 'at8.26-40':
                text = `
                <p><b>Atos 8:26-40</b></p>                
                <p></p>
                <p>26 Um anjo do Senhor disse a Filipe: "Vá para o sul, para a estrada deserta que desce de Jerusalém a Gaza".</p>
                <p>27 Ele se levantou e partiu. No caminho encontrou um eunuco etíope, um oficial importante, encarregado de todos os tesouros de Candace, rainha dos etíopes. Esse homem viera a Jerusalém para adorar a Deus e,</p>
                <p>28 de volta para casa, sentado em sua carruagem, lia o livro do profeta Isaías.</p>
                <p>29 E o Espírito disse a Filipe: "Aproxime-se dessa carruagem e acompanhe-a".</p>
                <p>30 Então Filipe correu para a carruagem, ouviu o homem lendo o profeta Isaías e lhe perguntou: "O senhor entende o que está lendo? "</p>
                <p>31 Ele respondeu: "Como posso entender se alguém não me explicar? " Assim, convidou Filipe para subir e sentar-se ao seu lado.</p>
                <p>32 O eunuco estava lendo esta passagem da Escritura: "Ele foi levado como ovelha para o matadouro, e como cordeiro mudo diante do tosquiador, ele não abriu a sua boca.</p>
                <p>33 Em sua humilhação foi privado de justiça. Quem pode falar dos seus descendentes? Pois a sua vida foi tirada da terra".</p>
                <p>34 O eunuco perguntou a Filipe: "Diga-me, por favor: de quem o profeta está falando? De si próprio ou de outro? "</p>
                <p>35 Então Filipe, começando com aquela passagem da Escritura, anunciou-lhe as boas novas de Jesus.</p>
                <p>36 Prosseguindo pela estrada, chegaram a um lugar onde havia água. O eunuco disse: "Olhe, aqui há água. Que me impede de ser batizado? "</p>
                <p>37 Disse Filipe: "Você pode, se crê de todo o coração". O eunuco respondeu: "Creio que Jesus Cristo é o Filho de Deus".</p>
                <p>38 Assim, deu ordem para parar a carruagem. Então Filipe e o eunuco desceram à água, e Filipe o batizou.</p>
                <p>39 Quando saíram da água, o Espírito do Senhor arrebatou Filipe repentinamente. O eunuco não o viu mais e, cheio de alegria, seguiu o seu caminho.</p>
                <p>40 Filipe, porém, apareceu em Azoto e, indo para Cesaréia, pregava o evangelho em todas as cidades pelas quais passava.</p>
                `;
            break;

            case 'at10.9-22':
                text = `
                <p><b>Atos 10:9-22</b></p>                                
                <p>9 No dia seguinte, por volta do meio dia, enquanto eles viajavam e se aproximavam da cidade, Pedro subiu ao terraço para orar.</p>
                <p>10 Tendo fome, queria comer; enquanto a refeição estava sendo preparada, caiu em êxtase.</p>
                <p>11 Viu o céu aberto e algo semelhante a um grande lençol que descia à terra, preso pelas quatro pontas,12 contendo toda espécie de quadrúpedes, bem como de répteis da terra e aves do céu.</p>
                <p>13 Então uma voz lhe disse: "Levante-se, Pedro; mate e coma".</p>
                <p>14 Mas Pedro respondeu: "De modo nenhum, Senhor! Jamais comi algo impuro ou imundo! "</p>
                <p>15 A voz lhe falou segunda vez: "Não chame impuro ao que Deus purificou".</p>
                <p>16 Isso aconteceu três vezes, e em seguida o lençol foi recolhido ao céu.</p>
                <p>17 Enquanto Pedro estava refletindo no significado da visão, os homens enviados por Cornélio descobriram onde era a casa de Simão e chegaram à porta.</p>
                <p>18 Chamando, perguntaram se ali estava hospedado Simão, conhecido como Pedro.</p>
                <p>19 Enquanto Pedro ainda estava pensando na visão, o Espírito lhe disse: "Simão, três homens estão procurando por você.</p>
                <p>20 Portanto, levante-se e desça. Não hesite em ir com eles, pois eu os enviei".</p>
                <p>21 Pedro desceu e disse aos homens: "Eu sou quem vocês estão procurando. Por que motivo vieram? "</p>
                <p>22 Os homens responderam: "Viemos da parte do centurião Cornélio. Ele é um homem justo e temente a Deus, respeitado por todo o povo judeu. Um santo anjo lhe disse que o chamasse à sua casa, para que ele ouça o que você tem para dizer".</p>
                `;
            break;

            case 'mt3.13-17':
                text = `
                <p><b>Mateus 3:13-17</b></p>                
                <p>13 Então Jesus veio da Galiléia ao Jordão para ser batizado por João.</p>
                <p>14 João, porém, tentou impedi-lo, dizendo: "Eu preciso ser batizado por ti, e tu vens a mim? "</p>
                <p>15 Respondeu Jesus: "Deixe assim por enquanto; convém que assim façamos, para cumprir toda a justiça". E João concordou.</p>
                <p>16 Assim que Jesus foi batizado, saiu da água. Naquele momento os céus se abriram, e ele viu o Espírito de Deus descendo como pomba e pousando sobre ele.</p>
                <p>17 Então uma voz dos céus disse: "Este é o meu Filho amado, em quem me agrado".</p>
                `;
            break;

            case 'ef1.13-14':
                text = `
                <p><b>Efésios 1:13-14</b></p>                
                <p></p>
                <p>13 Nele, quando vocês ouviram e creram na palavra da verdade, o evangelho que os salvou, vocês foram selados com o Espírito Santo da promessa,</p>
                <p>14 que é a garantia da nossa herança até a redenção daqueles que pertencem a Deus, para o louvor da sua glória.</p>
                `;
            break;

            case '1co3.16':
                text = `
                <p><b>1 Coríntios 3:16</b></p>                
                <p>16 Vocês não sabem que são santuário de Deus e que o Espírito de Deus habita em vocês?</p>
                `;
            break;

            case '1co2.10':
                text = `
                <p><b>1 Coríntios 2:10</b></p>                
                <p>10 mas Deus o revelou a nós por meio do Espírito. O Espírito sonda todas as coisas, até mesmo as coisas mais profundas de Deus.</p>
                `;
            break;

            case 'rm12.2':
                text = `
                <p><b>Romanos 12:2</b></p>                
                <p>2 Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.</p>
                `;
            break;

            case 'ef4.23':
                text = `
                <p><b>Efésios 4:23</b></p>                
                <p>23 a serem renovados no modo de pensar e</p>
                `;
            break;

            case '1co2.14-16':
                text = `
                <p><b>1 Coríntios 2:14-16</b></p>                
                <p>14 Quem não tem o Espírito não aceita as coisas que vêm do Espírito de Deus, pois lhe são loucura; e não é capaz de entendê-las, porque elas são discernidas espiritualmente.<p>
                <p>15 Mas quem é espiritual discerne todas as coisas, e ele mesmo por ninguém é discernido; pois<p>
                <p>16 "quem conheceu a mente do Senhor para que possa instruí-lo? " Nós, porém, temos a mente de Cristo.<p>
                `;
            break;

            case '2co3.18':
                text = `
                <p><b>2 Coríntios 3:18</b></p>                
                <p>18 E todos nós, que com a face descoberta contemplamos a glória do Senhor, segundo a sua imagem estamos sendo transformados com glória cada vez maior, a qual vem do Senhor, que é o Espírito.</p>
                `;
            break;

            case 'lc15.17':
                text = `
                <p><b>Lucas 15:17</b></p>                
                <p>17 "Caindo em si, ele disse: ‘Quantos empregados de meu pai têm comida de sobra, e eu aqui, morrendo de fome!</p>
                `;
            break;

            case 'lc15.21':
                text = `
                <p><b>Lucas 15:21</b></p>                
                <p>21 "O filho lhe disse: ‘Pai, pequei contra o céu e contra ti. Não sou mais digno de ser chamado teu filho’.</p>
                `;
            break;

            case 'jo16.8-11':
                text = `
                <p><b>João 16:8-11 </b></p>                
                <p>8 Quando ele vier, convencerá o mundo do pecado, da justiça e do juízo.</p>
                <p>9 Do pecado, porque os homens não crêem em mim;</p>
                <p>10 da justiça, porque vou para o Pai, e vocês não me verão mais;</p>
                <p>11 e do juízo, porque o príncipe deste mundo já está condenado.</p>
                `;
            break;

            case 'jo16.13':
                text = `
                <p><b>João 16:13</b></p>                
                <p>13 Mas quando o Espírito da verdade vier, ele os guiará a toda a verdade. Não falará de si mesmo; falará apenas o que ouvir, e lhes anunciará o que está por vir.</p>
                `;
            break;

            case 'mt10lc12':
                text = `
                <p><b>Mateus 10:17-20</b></p>                
                <p></p>
                <p>17 "Tenham cuidado, pois os homens os entregarão aos tribunais e os açoitarão nas sinagogas deles.</p>
                <p>18 Por minha causa vocês serão levados à presença de governadores e reis como testemunhas a eles e aos gentios.</p>
                <p>19 Mas quando os prenderem, não se preocupem quanto ao que dizer, ou como dizer. Naquela hora lhes será dado o que dizer,</p>
                <p>20 pois não serão vocês que estarão falando, mas o Espírito do Pai de vocês falará por intermédio de vocês.</p>

                <p><b>Lucas 12:11-12</b></p>                
                <p></p
                <p>11 "Quando vocês forem levados às sinagogas e diante dos governantes e das autoridades, não se preocupem com a forma pela qual se defenderão, ou com o que dirão,</p>
                <p>12 pois naquela hora o Espírito Santo lhes ensinará o que devem dizer".</p>
                `;
            break;

            case '1jo2.27':
                text = `
                <p><b>1 João 2:27</b></p>                
                <p>27 Quanto a vocês, a unção que receberam dele permanece em vocês, e não precisam que alguém os ensine; mas, como a unção dele recebida, que é verdadeira e não falsa, os ensina acerca de todas as coisas, permaneçam nele como ele os ensinou.</p>
                `;
            break;

            case 'gl5.16':
                text = `
                <p><b>Gálatas 5:16</b></p>                
                <p>16 Por isso digo: vivam pelo Espírito, e de modo nenhum satisfarão os desejos da carne.</p>
                `;
            break;

            case 'at16.6-7':
                text = `
                <p><b>Atos 16:6-7</b></p>                
                <p>6 Paulo e seus companheiros viajaram pela região da Frígia e da Galácia, tendo sido impedidos pelo Espírito Santo de pregar a palavra na província da Ásia.</p>
                <p>7 Quando chegaram à fronteira da Mísia, tentaram entrar na Bitínia, mas o Espírito de Jesus os impediu.</p>
                `;
            break;

            case 'at16.9-10':
                text = `
                <p><b>Atos 16:9-10</b></p>                
                <p> </p>
                <p>9 Por três dias ele esteve cego, não comeu nem bebeu.<p>
                <p>10 Em Damasco havia um discípulo chamado Ananias. O Senhor o chamou numa visão: "Ananias! " "Eis-me aqui, Senhor", respondeu ele.<p>
                `;
            break;

            case 'ex35jz14':
                text = `
                <p><b>Êxodo 35:30-31</b></p>                
                <p>30 Disse então Moisés aos israelitas: "O Senhor escolheu Bezalel, filho de Uri, neto de Hur, da tribo de Judá,
                <p>31 e o encheu do Espírito de Deus, dando-lhe destreza, habilidade e plena capacidade artística,            

                <p><b>Juízes 14:6-19</b></p>                
                <p>6 O Espírito do Senhor apossou-se de Sansão, e ele, sem nada nas mãos, rasgou o leão como se fosse um cabrito. Mas não contou nem ao pai nem à mãe o que fizera.
                <p>7 Então foi conversar com a mulher de quem gostava.
                <p>8 Algum tempo depois, quando voltou para casar-se com ela, Sansão saiu do caminho para olhar o cadáver do leão, e nele havia um enxame de abelhas e mel.
                <p>9 Tirou o mel com as mãos e o foi comendo pelo caminho. Quando voltou aos seus pais, repartiu com eles o mel, e eles também comeram. Mas não lhes contou que tinha tirado o mel do cadáver do leão.
                <p>10 Seu pai desceu à casa da mulher, e Sansão deu ali uma festa, como era costume dos noivos.
                <p>11 Quando ele chegou, trouxeram-lhe trinta rapazes para o acompanharem na festa.
                <p>12 "Vou propor-lhes um enigma", disse-lhes Sansão. "Se vocês puderem dar-me a resposta certa durante os sete dias da festa, então eu lhes darei trinta vestes de linho e trinta mudas de roupas.
                <p>13 Se não conseguirem dar-me a resposta, vocês me darão trinta vestes de linho e trinta mudas de roupas. " "Proponha-nos o seu enigma", disseram. "Vamos ouvi-lo. "
                <p>14 Disse ele então: "Do que come saiu comida; do que é forte saiu doçura". Durante três dias eles não conseguiram dar a resposta.
                <p>15 No quarto dia disseram à mulher de Sansão: "Convença o seu marido a explicar o enigma. Caso contrário, poremos fogo em você e na família de seu pai, e vocês morrerão. Você nos convidou para nos roubar? "
                <p>16 Então a mulher de Sansão implorou-lhe aos prantos: "Você me odeia! Você não me ama! Você deu ao meu povo um enigma, mas não me contou a resposta! " "Nem a meu pai e à minha mãe expliquei o enigma", respondeu ele. "Por que deveria explicá-lo a você? "
                <p>17 Ela chorou durante o restante da semana da festa. Por fim, no sétimo dia, ele lhe contou, pois ela continuava a perturbá-lo. Ela, por sua vez, revelou o enigma ao seu povo.
                <p>18 Antes do pôr-do-sol do sétimo dia, os homens da cidade vieram lhe dizer:  "O que é mais doce que o mel? O que é mais forte que o leão? " Sansão lhes disse:  "Se vocês não tivessem arado com a minha novilha, não teriam solucionado o meu enigma".
                <p>19 Então o Espírito do Senhor apossou-se de Sansão. Ele desceu a Ascalom, matou trinta homens, pegou as suas roupas e as deu aos que tinham explicado o enigma. Depois, enfurecido, foi para a casa do seu pai.

                <p><b>Juízes 15:14</b></p>                
                <p>14 Quando ia chegando a Leí, os filisteus foram ao encontro dele aos gritos. Mas o Espírito do Senhor apossou-se dele. As cordas em seus braços se tornaram como fibra de linho queimada, e os laços caíram das suas mãos.</p>
                `;
            break;

            case 'jo14.17':
                text = `
                <p><b>João 14:17</b></p>                
                <p>17 o Espírito da verdade. O mundo não pode recebê-lo, porque não o vê nem o conhece. Mas vocês o conhecem, pois ele vive com vocês e estará em vocês.</p>
                `;
            break;

            case '1co6.19':
                text = `
                <p><b>1 Coríntios 6:19</b></p>                
                <p>19 Acaso não sabem que o corpo de vocês é santuário do Espírito Santo que habita em vocês, que lhes foi dado por Deus, e que vocês não são de si mesmos?</p>
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
