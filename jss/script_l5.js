document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close');

    function openModal(verse) {
        let text;
        switch (verse) {

            case 'João 1:32-33':
                text = `
                <p><b>João 1:32-33</b></p>
                <p>32 - E João testemunhou, dizendo: — Vi o Espírito descer do céu como pomba e pousar sobre ele.
                <p>33 - Eu não o conhecia; aquele, porém, que me enviou a batizar com água me disse: "Aquele sobre quem você vir descer e pousar o Espírito, esse é o que batiza com o Espírito Santo."
                `;
                break;

            case 'Lucas 4:1':
                    text = `
                    <p><b>Lucas 4:1</b></p>
                    <p>1 - Jesus, cheio do Espírito Santo, voltou do Jordão e foi guiado pelo mesmo Espírito, no deserto,</p>
                    `;
                    break;

            case 'Lucas 4:18':
                text = `
                <p><b>Lucas 4:18</b></P>
                <p>18 - "O Espírito do Senhor está sobre mim, porque ele me ungiu para evangelizar os pobres; enviou-me para proclamar libertação aos cativos e restauração da vista aos cegos, para pôr em liberdade os oprimidos,</p>
                `;
                break;

            case 'Mateus 12:27-28':
                text = `
                <p><b>Mateus 12:27-28</b></p>
                <p>27 - E, se eu expulso os demônios por Belzebu, por quem os filhos de vocês os expulsam? Por isso, eles mesmos serão os juízes de vocês.</p>
                <p>28 - Se, porém, eu expulso os demônios pelo Espírito de Deus, certamente é chegado o Reino de Deus sobre vocês.</p>
                `;
                break;

            case 'Hebreus 9:14':
                text = `
                <p><b>Hebreus 9:14</b></p>
                <p>14 - muito mais o sangue de Cristo, que, pelo Espírito eterno, a si mesmo ofereceu sem mácula a Deus, purificará a nossa consciência de obras mortas, para servirmos ao Deus vivo!</p>
                `;
                break;

            case 'Romanos 8:11':
                text = `
                <p><b>Romanos 8:11</b></p>
                <p>11 - Se em vocês habita o Espírito daquele que ressuscitou Jesus dentre os mortos, esse mesmo que ressuscitou Cristo dentre os mortos vivificará também o corpo mortal de vocês, por meio do seu Espírito, que habita em vocês.</p>
                `;
                break;

            case 'Atos 1:2':
                text = `
                <p><b>Atos 1:2</b></p>
                <p>2 - até o dia em que foi elevado às alturas, depois de haver dado mandamentos por meio do Espírito Santo aos apóstolos que tinha escolhido.</p>
                `;
                break;
            
            case 'Atos 10:38':
                text =`
                <p><b>Atos 10:38</b></p>
                <p>38 - como Deus ungiu a Jesus de Nazaré com o Espírito Santo e com poder. Jesus andou por toda parte, fazendo o bem e curando todos os oprimidos do diabo, porque Deus estava com ele.</p>
                `;
                break

            case 'Lucas 4:14-22':
                text = `
                <p><b>Lucas 4:14-22</b></p>
                <p>12 - Jesus respondeu ao diabo: — Também foi dito: "Não ponha à prova o Senhor, seu Deus."</p>
                <p>13 - Tendo concluído todas as tentações, o diabo afastou-se de Jesus, até momento oportuno. Jesus inicia a sua missão na Galileia.</p>
                <p>14 - Então Jesus, no poder do Espírito, voltou para a Galileia, e a sua fama correu por toda aquela região.</p>
                <p>15 - E ensinava nas sinagogas, sendo elogiado por todos.</p>
                <p><b><i>Jesus é rejeitado em Nazaré</i></b></p>
                <p>16 - Jesus foi para Nazaré, onde havia sido criado. Num sábado, entrou na sinagoga, segundo o seu costume, e levantou-se para ler.</p>
                <p>17 - Então lhe deram o livro do profeta Isaías. E, abrindo o livro, achou o lugar onde está escrito:</p>
                <p>18 - "O Espírito do Senhor está sobre mim, porque ele me ungiu para evangelizar os pobres; enviou-me para proclamar libertação aos cativos e restauração da vista aos cegos, para pôr em liberdade os oprimidos,</p>
                <p>19 - e proclamar o ano aceitável do Senhor."</p>
                <p>20 - Tendo fechado o livro, Jesus o devolveu ao assistente e sentou-se. Todos na sinagoga tinham os olhos fixos nele.</p>
                <p>21 - Então Jesus começou a dizer: — Hoje se cumpriu a Escritura que vocês acabam de ouvir.</p>
                <p>22 - Todos davam testemunho dele e se maravilhavam das palavras cheias de graça que lhe saíam dos lábios. E perguntavam: — Não é este o filho de José?</p>
                `;
                break;

            case 'Mateus 10:16-20':
                text = `
                <p><b>Mateus 10: 16-20</b></p>
                <p>16 - Eis que eu os envio como ovelhas para o meio de lobos. Portanto, sejam prudentes como as serpentes e simples como as pombas.</p>
                <p>17 - Tenham cuidado com os homens, porque eles os entregarão aos tribunais e os açoitarão nas suas sinagogas.</p>
                <p>18 - Por minha causa vocês serão levados à presença de governadores e de reis, para lhes servir de testemunho, a eles e aos gentios.</p>
                <p>19 - E, quando entregarem vocês, não se preocupem quanto a como ou o que irão falar, porque, naquela hora, lhes será concedido o que vocês dirão.</p>
                <p>20 - Afinal, não são vocês que estão falando, mas o Espírito do Pai de vocês é quem fala por meio de vocês.</p>
                `;
                break;

            case 'Lc 1:5-16':
                text = `
                <p><b>Lucas 1:5-16</b></p>
                <p><b><i>O nascimento de João Batista é anunciado</i></b></p>
                <p>5 - Nos dias de Herodes, rei da Judeia, houve um sacerdote chamado Zacarias, do turno de Abias. A mulher dele era das filhas de Arão e se chamava Isabel.</p>
                <p>6 - Ambos eram justos diante de Deus, vivendo de forma irrepreensível em todos os preceitos e mandamentos do Senhor.</p>
                <p> Eles não tinham filhos, porque Isabel era estéril, e os dois já tinham idade avançada.</p>
                <p>8 - E aconteceu que, enquanto Zacarias exercia o sacerdócio diante de Deus na ordem do seu turno, coube-lhe por sorteio,</p>
                <p>9 - segundo o costume sacerdotal, entrar no santuário do Senhor para queimar o incenso.</p>
                <p>10 - Durante esse tempo, toda a multidão do povo permanecia na parte de fora, orando.</p>
                <p>11 - E eis que apareceu a Zacarias um anjo do Senhor, em pé, à direita do altar do incenso.</p>
                <p>12 - Ao vê-lo, Zacarias ficou assustado, e o temor se apoderou dele.</p>
                <p>13 - O anjo, porém, lhe disse: — Não tenha medo, Zacarias, porque a sua oração foi ouvida. Isabel, sua esposa, dará à luz um filho, a quem você dará o nome de João.</p>
                <p>14 - Você ficará alegre e feliz, e muitos ficarão contentes com o nascimento dele.</p>
                <p>15 - Pois ele será grande diante do Senhor, não beberá vinho nem bebida forte, e será cheio do Espírito Santo, já desde o ventre materno.</p> 
                <p>16 - Ele converterá muitos dos filhos de Israel ao Senhor, seu Deus.</p>
                `;
                break;

            case 'Lc 1:26-38':
                text = `
                <p><b>Lucas 1:26-38</b></p>
                <p><b><i>O nascimento de Jesus é anunciado</i></b></p>
                <p>26 - No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré,</p>
                <p>27 - a uma virgem que estava comprometida a casar com um homem da casa de Davi, cujo nome era José. A virgem se chamava Maria.</p> 
                <p>28 - E, aproximando-se dela, o anjo disse: — Salve, agraciada! O Senhor está com você. </p>
                <p>29 - Ela, porém, ao ouvir esta palavra, perturbou-se muito e pôs-se a pensar no que poderia significar esta saudação. </p>
                <p>30 - Mas o anjo lhe disse: — Não tenha medo, Maria; porque você foi abençoada por Deus. </p>
                <p>31 - Você ficará grávida e dará à luz um filho, a quem chamará pelo nome de Jesus.</p>
                <p>32 - Este será grande e será chamado Filho do Altíssimo. Deus, o Senhor, lhe dará o trono de Davi, seu pai.</p>
                <p>33 - Ele reinará para sempre sobre a casa de Jacó, e o seu reinado não terá fim.34 Então Maria disse ao anjo: — Como será isto, se eu nunca tive relações com homem algum?</p>
                <p>35 - O anjo respondeu: — O Espírito Santo virá sobre você, e o poder do Altíssimo a envolverá com a sua sombra; por isso, também o ente santo que há de nascer será chamado Filho de Deus.</p>
                <p>36 - E Isabel, sua parenta, igualmente está grávida, apesar de sua idade avançada, sendo este já o sexto mês de gestação para aquela que diziam ser estéril.</p>
                <p>37 - Porque para Deus não há nada impossível.</p>
                <p>38 - Então Maria disse: — Aqui está a serva do Senhor; que aconteça comigo o que você falou. Então o anjo foi embora.</p>
                `;
                break;

            case 'Lc 1:39-45':
                text = `
                <p><b>Lucas 1:39-45</b></p>
                <p><b><i>Maria visita Isabel</i></b></p>
                <p>39 - Naqueles dias, Maria se aprontou e foi depressa à região montanhosa, a uma cidade de Judá.
                <p>40 - Entrou na casa de Zacarias e saudou Isabel.
                <p>41 - Quando Isabel ouviu a saudação de Maria, a criança lhe estremeceu no ventre. Então Isabel ficou cheia do Espírito Santo.
                <p>42 - E exclamou em alta voz: — Bendita é você entre as mulheres, e bendito o fruto do seu ventre!
                <p>43 - E que grande honra é para mim receber a visita da mãe do meu Senhor!
                <p>44 - Pois, logo que me chegou aos ouvidos a voz da saudação que você fez, a criança estremeceu de alegria dentro de mim.
                <p>45 - Bem-aventurada a que creu, porque serão cumpridas as palavras que lhe foram ditas da parte do Senhor.
                `; 
                break;

            case 'Lc 2:25-32':
                text = `
                <p><b>Lucas 2:25-32</b></p>
                <p><b><i>O cântico de Simeão</i></b></p>
                <p>25 - Em Jerusalém havia um homem chamado Simeão. Este homem era justo e piedoso e esperava a consolação de Israel; e o Espírito Santo estava sobre ele.</p>
                <p>26 - Ele tinha recebido uma revelação do Espírito Santo de que não morreria antes de ver o Cristo do Senhor.</p>
                <p>27 - Movido pelo Espírito, ele foi ao templo. Quando os pais trouxeram o menino Jesus para fazerem com ele o que a Lei ordenava,</p>
                <p>28 - Simeão o tomou nos braços e louvou a Deus, dizendo:</p>
                <p>29 - "Agora, Senhor, podes despedir em paz o teu servo, segundo a tua palavra;</p>
                <p>30 - porque os meus olhos já viram a tua salvação,</p>
                <p>31 - a qual preparaste diante de todos os povos:</p>
                <p>32 - luz para revelação aos gentios, e para glória do teu povo de Israel."</p>
                `; 
                break;

            case 'Mt 1:18-21':
                text = `
                <p><b>Mateus 1:18-21</b></p>
                <p><b><i>O nascimento de Jesus Cristo</i></b></p>
                <p>18 - O nascimento de Jesus Cristo foi assim: Maria, a sua mãe, estava comprometida para casar com José. Mas, antes de se unirem, ela se achou grávida pelo Espírito Santo.</p>
                <p>19 - José, com quem Maria estava para casar, sendo um homem justo e não querendo envergonhá-la em público, resolveu deixá-la sem que ninguém soubesse.</p>
                <p>20 - Enquanto ele refletia sobre isso, eis que lhe apareceu em sonho um anjo do Senhor, dizendo: — José, filho de Davi, não tenha medo de receber Maria como esposa, porque o que nela foi gerado é do Espírito Santo.</p>
                <p>21 - Ela dará à luz um filho e você porá nele o nome de Jesus, porque ele salvará o seu povo dos pecados deles.</p>
                `;
                break;

            case 'Mt 4:1-11':
                text = `
                <p><b>Mateus 4:1-11</b></p>
                <p><b><i>A tentação de Jesus</i></b></p>
                <p>1 - A seguir, Jesus foi levado pelo Espírito ao deserto, para ser tentado pelo diabo.</p>
                <p>2 - E, depois de jejuar quarenta dias e quarenta noites, teve fome.</p>
                <p>3 - Então o tentador, aproximando-se, disse a Jesus: — Se você é o Filho de Deus, mande que estas pedras se transformem em pães.</p>
                <p>4 - Jesus, porém, respondeu: — Está escrito: "O ser humano não viverá só de pão, mas de toda palavra que procede da boca de Deus."</p>
                <p>5 - Então o diabo levou Jesus à Cidade Santa, colocou-o sobre o pináculo do templo</p>
                <p>6 - e disse: — Se você é o Filho de Deus, jogue-se daqui, porque está escrito: "Aos seus anjos ele dará ordens a seu respeito. E eles o sustentarão nas suas mãos, para que você não tropece em alguma pedra."</p>
                <p>7 - Jesus respondeu: — Também está escrito: "Não ponha à prova o Senhor, seu Deus."</p>
                <p>8 - O diabo ainda levou Jesus a um monte muito alto, mostrou-lhe todos os reinos do mundo e a glória deles</p>
                <p>9 - e disse: — Tudo isso lhe darei se, prostrado, você me adorar.</p>
                <p>10 - Então Jesus lhe ordenou: — Vá embora, Satanás, porque está escrito: "Adore o Senhor, seu Deus, e preste culto somente a ele."</p>
                <p>11 - Com isto, o diabo deixou Jesus, e eis que vieram anjos e o serviram.</p>
                `;
                break;

            case 'Mt 13:13-17':
                text = `
                <p><b>Mateus 13:13-17</b></p>
                <p>13 - Por isso, falo com eles por meio de parábolas: porque, vendo, não veem; e, ouvindo, não ouvem, nem entendem.</p>
                <p>14 - Assim, neles se cumpre a profecia de Isaías: "Ouvindo, vocês ouvirão e de modo nenhum entenderão; vendo, vocês verão e de modo nenhum perceberão.</p>
                <p>15 - Porque o coração deste povo está endurecido; ouviram com os ouvidos tapados e fecharam os olhos; para não acontecer que vejam com os olhos, ouçam com os ouvidos, entendam com o coração, se convertam e sejam por mim curados."</p>
                <p>16 - Bem-aventurados, porém, são os olhos de vocês, porque veem; e bem-aventurados são os ouvidos de vocês, porque ouvem.</p>
                <p>17 - Pois em verdade lhes digo que muitos profetas e justos desejaram ver o que vocês estão vendo, mas não viram; e quiseram ouvir o que vocês estão ouvindo, mas não ouviram.</p>
                `;
                break;

            case 'Lucas 2:8':
                text = `
                <p><b>Lucas 2:8-14</b></p>
                <p><b><i>Os pastores e os anjos</i></b></p>
                <p>8 - Havia, naquela mesma região, pastores que viviam nos campos e guardavam os seus rebanhos durante as vigílias da noite.</p>
                <p>9 - E um anjo do Senhor desceu aonde eles estavam, e a glória do Senhor brilhou ao redor deles; e ficaram tomados de grande temor.</p>
                <p>10 - O anjo, porém, lhes disse: — Não tenham medo! Estou aqui para lhes trazer boa-nova de grande alegria, que será para todo o povo:</p>
                <p>11 - é que hoje, na cidade de Davi, lhes nasceu o Salvador, que é Cristo, o Senhor.</p>
                <p>12 - E isto servirá a vocês de sinal: vocês encontrarão uma criança envolta em faixas e deitada em manjedoura.</p>
                <p>13 - E, de repente, apareceu com o anjo uma multidão do exército celestial, louvando a Deus e dizendo:</p>
                <p>14 - "Glória a Deus nas maiores alturas, e paz na terra entre os homens, a quem ele quer bem."</p>
                `;
                break;

            case 'Lucas 1:35':
                text = `
                <p><b>Lucas 1:35</b></p>
                <p>35 - O anjo respondeu: — O Espírito Santo virá sobre você, e o poder do Altíssimo a envolverá com a sua sombra; por isso, também o ente santo que há de nascer será chamado Filho de Deus.</p>
                `;
                break;

            case 'Lucas 2:25-32':
                text = `
                <p><b>Lucas 2:25-32</b></p>
                <p><b><i>O cântico de Simeão</i></b></p>
                <p>25 - Em Jerusalém havia um homem chamado Simeão. Este homem era justo e piedoso e esperava a consolação de Israel; e o Espírito Santo estava sobre ele.</p>
                <p>26 - Ele tinha recebido uma revelação do Espírito Santo de que não morreria antes de ver o Cristo do Senhor.27 Movido pelo Espírito, ele foi ao templo. Quando os pais trouxeram o menino Jesus para fazerem com ele o que a Lei ordenava,</p>
                <p>28 - Simeão o tomou nos braços e louvou a Deus, dizendo:</p>
                <p>29 - "Agora, Senhor, podes despedir em paz o teu servo, segundo a tua palavra;</p>
                <p>30 - porque os meus olhos já viram a tua salvação,</p>
                <p>31 - a qual preparaste diante de todos os povos:</p>
                <p>32 - luz para revelação aos gentios, e para glória do teu povo de Israel."</p>
                `; 
                break;

            case 'Lucas 2:36-38':
                text = `
                <p><b>Lucas 2:36-38</b></p>
                <p><b><i>A profetisa Ana</i></b></p>
                <p>36 - Havia uma profetisa, chamada Ana, filha de Fanuel, da tribo de Aser. Ela era bem idosa, tendo vivido com o marido sete anos desde que tinha se casado.</p>
                <p>37 - Agora era viúva de oitenta e quatro anos. Ela não deixava o templo, mas adorava noite e dia, com jejuns e orações.</p>
                <p>38 - E, chegando naquela hora, dava graças a Deus e falava a respeito do menino a todos os que esperavam a redenção de Jerusalém.</p>
                `;
                break;

            case 'João 16:13-14':
                text = `
                <p><b>João 16:13-14</b></p>
                <p>13 - Porém, quando vier o Espírito da verdade, ele os guiará em toda a verdade. Ele não falará por si mesmo, mas dirá tudo o que ouvir e anunciará a vocês as coisas que estão para acontecer.</p>
                <p>14 - Ele me glorificará, porque vai receber do que é meu e anunciará isso a vocês.</p>
                `;
                break;

            case 'Exodo 29:4-7':
                text = `
                <p><b>Êxodo 29: 4-7</b></p>
                <p>4 - A irmã do menino ficou de longe, para ver o que ia acontecer com ele.</p>
                <p>5 - A filha de Faraó desceu para se banhar no rio, e as moças que tinham vindo com ela passeavam pela margem. Quando ela viu o cesto no meio dos juncos, mandou que uma das criadas fosse buscá-lo.</p>
                <p>6 - Abrindo o cesto, viu a criança; e eis que o menino chorava. Ela teve compaixão dele e disse: — Este é um menino dos hebreus.</p>
                <p>7 - Então a irmã do menino perguntou à filha de Faraó: — Quer que eu vá chamar uma das hebreias para que sirva de ama e crie esta criança para a senhora?</p>
                `;
                break;
            
            case 'Jo 1:32-34':
                text = `
                <p><b>João 1: 32-34</b></p>
                <p>32 - E João testemunhou, dizendo: — Vi o Espírito descer do céu como pomba e pousar sobre ele.</p>
                <p>33 - Eu não o conhecia; aquele, porém, que me enviou a batizar com água me disse: "Aquele sobre quem você vir descer e pousar o Espírito, esse é o que batiza com o Espírito Santo."</p>
                <p>34 - Pois eu mesmo vi e dou testemunho de que ele é o Filho de Deus.</p>
                `;
                break;
            
            case 'Lucas 3:22':
                text = `
                <p><b>Lucas 3:22</b></p>
                <a>22 - o Espírito Santo desceu sobre ele em forma corpórea como pomba, e do céu veio uma voz, que dizia: — Você é o meu Filho amado; em você me agrado.</b>
                `;
                break;
                
            case 'Mateus 4:1-11':
                text = `
                <p><b>Mateus 4:1-11</b></p>
                <p><b><i>A tentação de Jesus</i></b></p>
                <p>1 - A seguir, Jesus foi levado pelo Espírito ao deserto, para ser tentado pelo diabo.</p>
                <p>2 - E, depois de jejuar quarenta dias e quarenta noites, teve fome.</p>
                <p>3 - Então o tentador, aproximando-se, disse a Jesus: — Se você é o Filho de Deus, mande que estas pedras se transformem em pães.</p>
                <p>4 - Jesus, porém, respondeu: — Está escrito: "O ser humano não viverá só de pão, mas de toda palavra que procede da boca de Deus."</p>
                <p>5 - Então o diabo levou Jesus à Cidade Santa, colocou-o sobre o pináculo do templo</p>
                <p>6 - e disse: — Se você é o Filho de Deus, jogue-se daqui, porque está escrito: "Aos seus anjos ele dará ordens a seu respeito. E eles o sustentarão nas suas mãos, para que você não tropece em alguma pedra."</p>
                <p>7 - Jesus respondeu: — Também está escrito: "Não ponha à prova o Senhor, seu Deus."</p>
                <p>8 - O diabo ainda levou Jesus a um monte muito alto, mostrou-lhe todos os reinos do mundo e a glória deles</p>
                <p>9 - e disse: — Tudo isso lhe darei se, prostrado, você me adorar.</p>
                <p>10 - Então Jesus lhe ordenou: — Vá embora, Satanás, porque está escrito: "Adore o Senhor, seu Deus, e preste culto somente a ele."</p>
                <p>11 - Com isto, o diabo deixou Jesus, e eis que vieram anjos e o serviram.</p>
                `;
                break;
            
            case 'Lucas 2:25':
                text = `
                <p><b>Lucas 2:25</b></p>
                <p>25 - Em Jerusalém havia um homem chamado Simeão. Este homem era justo e piedoso e esperava a consolação de Israel; e o Espírito Santo estava sobre ele.</p>
                `;
                break;

            case 'Mateus 1:18-21':
                text = `
                <p><b>Mateus 1:18-21</b></p>
                <p><b><i>O nascimento de Jesus Cristo</b></i></p>
                <p>18 - O nascimento de Jesus Cristo foi assim: Maria, a sua mãe, estava comprometida para casar com José. Mas, antes de se unirem, ela se achou grávida pelo Espírito Santo.</p>
                <p>19 - José, com quem Maria estava para casar, sendo um homem justo e não querendo envergonhá-la em público, resolveu deixá-la sem que ninguém soubesse.</p>
                <p>20 - Enquanto ele refletia sobre isso, eis que lhe apareceu em sonho um anjo do Senhor, dizendo: — José, filho de Davi, não tenha medo de receber Maria como esposa, porque o que nela foi gerado é do Espírito Santo.</p>
                <p>21 - Ela dará à luz um filho e você porá nele o nome de Jesus, porque ele salvará o seu povo dos pecados deles.</p>
                `;
                break;
            
            case 'João 16:8':
                text = `
                <p><b>João 16:8</b></p>
                <p>8 - Quando ele vier, convencerá o mundo do pecado, da justiça e do juízo:</p>
                `;
                break;  

            case 'João 3:5':
                text = `
                <p><b>João 3:5</b></p>
                <p>5 - Jesus respondeu: — Em verdade, em verdade lhe digo: quem não nascer da água e do Espírito não pode entrar no Reino de Deus.</p>
                `;
                break;

            case 'Romanos 8:9':
                text = `
                <p><b>Romanos 8:9</b></p>
                <p>9 - Vocês, porém, não estão na carne, mas no Espírito, se de fato o Espírito de Deus habita em vocês. E, se alguém não tem o Espírito de Cristo, esse tal não é dele.</p>
                `;
                break;

            
            case 'Romanos 8:14':
                text = `
                <p><b>Romanos 8:14,/b></p>
                <p>14 - Pois todos os que são guiados pelo Espírito de Deus são filhos de Deus.</p>
                `;
                break;
            
            case 'João 16:13-14':
                text = `
                <p><b>João 16:13-14<b></p>
                <p>13 - Porém, quando vier o Espírito da verdade, ele os guiará em toda a verdade. Ele não falará por si mesmo, mas dirá tudo o que ouvir e anunciará a vocês as coisas que estão para acontecer. 
                <p>14 - Ele me glorificará, porque vai receber do que é meu e anunciará isso a vocês.
                `;
                break;

            case 'Lucas 4:4-12':
                text = `
                <p><b>Lucas 4:4-12,</b></p>
                <p>4 - Mas Jesus lhe respondeu: — Está escrito: "O ser humano não viverá só de pão."</p>
                <p>5 - Então o diabo o levou para um lugar mais alto e num instante lhe mostrou todos os reinos do mundo.</p>
                <p>6 - E disse: — Eu lhe darei todo este poder e a glória destes reinos, porque isso me foi entregue, e posso dar a quem eu quiser.</p>
                <p>7 - Portanto, se você me adorar, tudo isso será seu.</p>
                <p>8 - Mas Jesus respondeu: — Está escrito: "Adore o Senhor, seu Deus, e preste culto somente a ele."</p>
                <p>9 - Então o diabo levou Jesus a Jerusalém, colocou-o sobre o pináculo do templo e disse: — Se você é o Filho de Deus, jogue-se daqui,</p>
                <p>10 - porque está escrito: "Aos seus anjos ele dará ordens a seu respeito, para que o guardem."</p>
                <p>11 - E: "Eles o sustentarão nas suas mãos, para que você não tropece em alguma pedra."</p>
                <p>12 - Jesus respondeu ao diabo: — Também foi dito: "Não ponha à prova o Senhor, seu Deus."</p>
                `;
                break;

            case 'Mateus 12:20':
                text = `
                <p><b>Mateus 12:20</b></p>
                <p>20 - Não esmagará a cana quebrada, nem apagará o pavio que fumega, até que faça vencedor o juízo.</p>
                `;
                break;

            case 'Cl 2:15':
                text = `
                <p><b>Colossenses 2:15</b></p>
                <p>15 - E, despojando os principados e as potestades, publicamente os expôs ao desprezo, triunfando sobre eles na cruz.</p>
                `;
                break;

            case 'Lucas 4:16-21':
                text = `
                <p><b>Lucas 4:16-21</b></p>
                <p><b><i>Jesus é rejeitado em Nazaré</i></b></p>
                <p>16 - Jesus foi para Nazaré, onde havia sido criado. Num sábado, entrou na sinagoga, segundo o seu costume, e levantou-se para ler.</p>
                <p>17 - Então lhe deram o livro do profeta Isaías. E, abrindo o livro, achou o lugar onde está escrito:</p>
                <p>18 - "O Espírito do Senhor está sobre mim, porque ele me ungiu para evangelizar os pobres; enviou-me para proclamar libertação aos cativos e restauração da vista aos cegos, para pôr em liberdade os oprimidos,</p>
                <p>19 - e proclamar o ano aceitável do Senhor."</p>
                <p>20 - Tendo fechado o livro, Jesus o devolveu ao assistente e sentou-se. Todos na sinagoga tinham os olhos fixos nele.</p>
                <p>21 - Então Jesus começou a dizer: — Hoje se cumpriu a Escritura que vocês acabam de ouvir.</p>
                `;
                break;

            case 'João 14:17':
                text = `
                <p><b>João 14:17</b></p>
                <p>17 - À hora da ceia, enviou o seu servo para avisar aos convidados: "Venham, porque tudo já está preparado."</p>
                `;
                break;   
                
            case 'João 3:5-7':
                text = `
                <p><b>João 3:5-7</b></p>
                <p>5 - Todos os vales serão aterrados, e todos os montes e colinas serão nivelados; os caminhos tortuosos serão retificados, e as estradas irregulares serão aplanadas;</p>
                <p>6 - e toda a humanidade verá a salvação que vem de Deus."</p>
                <p>7 - João dizia às multidões que saíam para ser batizadas: — Raça de víboras! Quem deu a entender que vocês podem fugir da ira vindoura?</p>
                `;
                break;

             case 'João 7:39':
                text = `
                <p><b>João 7:39</b></p>
                <p>39 - Isso ele disse a respeito do Espírito que os que nele cressem haviam de receber; pois o Espírito até aquele momento não tinha sido dado, porque Jesus ainda não havia sido glorificado.</p>
                `;
                break;

            case 'Mateus 3:11':
                text = `
                <p><b>Mateus 3:11 </b></p>
                <p>11 - Eu batizo vocês com água, para arrependimento; mas aquele que vem depois de mim é mais poderoso do que eu, do qual não sou digno de carregar as sandálias. Ele os batizará com o Espírito Santo e com fogo.</p>
                `;
                break;
            
            case 'Lucas 11:13':
                text = `
                <p><b>Lucas 11:13</b></p>
                <p>13 - Ora, se vocês, que são maus, sabem dar coisas boas aos seus filhos, quanto mais o Pai celeste dará o Espírito Santo aos que lhe pedirem!</p>
                `;
                break;

            case 'Lucas 12:12':
                text = `
                <p><b>Lucas 12:12</b></p>
                <p>12 - Porque o Espírito Santo lhes ensinará, naquela mesma hora, as coisas que vocês devem dizer.</p>
                `;
                break;

            case 'Mateus 10:20':
                text = `
                <p><b>Mateus 10:20</b></p>
                <p>20 - Afinal, não são vocês que estão falando, mas o Espírito do Pai de vocês é quem fala por meio de vocês.</p>
                `;
                break;

            case 'Mateus 28:19-20':
                text = `
                <p><b>Mateus 28:19-20</b></p>
                <p>19 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo,</p>
                <p>20 - ensinando-os a guardar todas as coisas que tenho ordenado a vocês. E eis que estou com vocês todos os dias até o fim dos tempos.</p>
                `;
                break;

            case 'João 14:17':
                text = `
                <p><b>João 14:17</b></p>
                <p>17 - é o Espírito da verdade, que o mundo não pode receber, porque não o vê, nem o conhece. Vocês o conhecem, porque ele habita com vocês e estará em vocês.</p>
                `;
                break;

            case 'João 14:':
                text = `
                <p><b>João 14 </b></p>
                <p>15 - Se vocês me amam, guardarão os meus mandamentos.</p>
                <p>16 - E eu pedirei ao Pai, e ele lhes dará outro Consolador, a fim de que esteja com vocês para sempre:</p>
                <p>17 - é o Espírito da verdade, que o mundo não pode receber, porque não o vê, nem o conhece. Vocês o conhecem, porque ele habita com vocês e estará em vocês.</p>
                <p>25 - Tenho dito isso enquanto ainda estou com vocês.</p>
                <p>26 - Mas o Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse ensinará a vocês todas as coisas e fará com que se lembrem de tudo o que eu lhes disse.</p>
                `;
                break;
            
            case 'João 15:27':
                text = `
                <p><b>João 15:27 </b></p>
                <p>27 - E vocês também testemunharão, porque estão comigo desde o princípio.</p>
                `;
                break;

            case 'João 16:5-15':
                text = `
                <p><b>João 16:5-15 </b></p>
                <p><b><i>A obra do Espírito Santo</i></b></p>
                <p>5 - Mas, agora, vou para junto daquele que me enviou, e nenhum de vocês me pergunta: "Para onde o senhor vai?"</p>
                <p>6 - Pelo contrário, porque eu lhes disse essas coisas, a tristeza encheu o coração de vocês.</p>
                <p>7 - Mas eu lhes digo a verdade: é melhor para vocês que eu vá, porque, se eu não for, o Consolador não virá para vocês; mas, se eu for, eu o enviarei a vocês.</p>
                <p>8 - Quando ele vier, convencerá o mundo do pecado, da justiça e do juízo:</p>
                <p>9 - do pecado, porque eles não creem em mim;</p>
                <p>10 - da justiça, porque vou para o Pai, e vocês não me verão mais;</p>
                <p>11 - do juízo, porque o príncipe deste mundo já está julgado.</p>
                <p>12 - Tenho ainda muito para lhes dizer, mas vocês não o podem suportar agora.</p>
                <p>13 - Porém, quando vier o Espírito da verdade, ele os guiará em toda a verdade. Ele não falará por si mesmo, mas dirá tudo o que ouvir e anunciará a vocês as coisas que estão para acontecer.</p>
                <p>14 - Ele me glorificará, porque vai receber do que é meu e anunciará isso a vocês.</p>
                <p>15 - Tudo o que o Pai tem é meu. Por isso eu disse que o Espírito vai receber do que é meu e anunciar isso a vocês.</p>
                `;
                break;

            case 'João 20:22':
                text = `
                <p><b>João 20:22 </b></p>
                <p>22 - E, havendo dito isso, soprou sobre eles e disse-lhes: — Recebam o Espírito Santo.</p>
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
