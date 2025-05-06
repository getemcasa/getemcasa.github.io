document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close');

    function openModal(verse) {
        let text;
        switch (verse) {

            case 'atos2.1-13':
                text = `
                <p><b> Atos 2: 1-13</b></p>                
                <p>1 - Chegando o dia de Pentecoste, estavam todos reunidos num só lugar.</p>
                <p>2 - De repente veio do céu um som, como de um vento muito forte, e encheu toda a casa na qual estavam assentados.</p>
                <p>3 - E viram o que parecia línguas de fogo, que se separaram e pousaram sobre cada um deles.</p>
                <p>4 - Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava. </p>
                <p>5 - Havia em Jerusalém judeus, tementes a Deus, vindos de todas as nações do mundo. </p>
                <p>6 - Ouvindo-se este som, ajuntou-se uma multidão que ficou perplexa, pois cada um os ouvia falar em sua própria língua.</p>
                <p>7 - Atônitos e maravilhados, eles perguntavam: "Acaso não são galileus todos estes homens que estão falando? </p>
                <p>8 - Então, como os ouvimos, cada um de nós, em nossa própria língua materna? </p>
                <p>9 - Partos, medos e elamitas; habitantes da Mesopotâmia, Judéia e Capadócia, Ponto e da província da Ásia, </p>
                <p>10 - Frígia e Panfília, Egito e das partes da Líbia próximas a Cirene; visitantes vindos de Roma, </p>
                <p>11 - tanto judeus como convertidos ao judaísmo; cretenses e árabes. Nós os ouvimos declarar as maravilhas de Deus em nossa própria língua! "</p>
                <p>12 - Atônitos e perplexos, todos perguntavam uns aos outros: "Que significa isto? "</p>
                <p>13 - Alguns, todavia, zombavam deles e diziam: "Eles beberam vinho demais".</p>
                `;
            break;

            case 'atos4.23-31':
                text = `
                <p><b>Atos 4:23-31</b></p>
                <p>23 - Quando foram soltos, Pedro e João voltaram para os seus e contaram tudo o que os chefes dos sacerdotes e os líderes religiosos lhes tinham dito.</p>
                <p>24 - Ouvindo isso, levantaram juntos a voz a Deus, dizendo: "Ó Soberano, tu fizeste o céu, a terra, o mar e tudo o que neles há!</p>
                <p>25 - Tu falaste pelo Espírito Santo por boca do teu servo, nosso pai Davi: ‘Por que se enfurecem as nações, e os povos conspiram em vão?</p>
                <p>26 - Os reis da terra se levantam, e os governantes se reúnem contra o Senhor e contra o seu Ungido'.</p>
                <p>27 - De fato, Herodes e Pôncio Pilatos reuniram-se com os gentios e com os povos de Israel nesta cidade, para conspirar contra o teu santo servo Jesus, a quem ungiste.</p>
                <p>28 - Fizeram o que o teu poder e a tua vontade haviam decidido de antemão que acontecesse.</p>
                <p>29 - Agora, Senhor, considera as ameaças deles e capacita os teus servos para anunciarem a tua palavra corajosamente.</p>
                <p>30 - Estende a tua mão para curar e realizar sinais e maravilhas por meio do nome do teu santo servo Jesus".</p>
                <p>31 - Depois de orarem, tremeu o lugar em que estavam reunidos; todos ficaram cheios do Espírito Santo e anunciavam corajosamente a palavra de Deus.</p>
                `;
            break;

            case 'atos1.1-11':
                text = `
                <p><b>Atos 1:1-11</b></p>
                <p>1 - Em meu livro anterior, Teófilo, escrevi a respeito de tudo o que Jesus começou a fazer e a ensinar, </p>
                <p>2 - até o dia em que foi elevado ao céu, depois de ter dado instruções por meio do Espírito Santo aos apóstolos que havia escolhido.</p>
                <p>3 - Depois do seu sofrimento, Jesus apresentou-se a eles e deu-lhes muitas provas indiscutíveis de que estava vivo. Apareceu-lhes por um período de quarenta dias falando-lhes acerca do Reino de Deus.</p>
                <p>4 - Certa ocasião, enquanto comia com eles, deu-lhes esta ordem: "Não saiam de Jerusalém, mas esperem pela promessa de meu Pai, da qual lhes falei.</p>
                <p>5 - Pois João batizou com água, mas dentro de poucos dias vocês serão batizados com o Espírito Santo".</p>
                <p>6 - Então os que estavam reunidos lhe perguntaram: "Senhor, é neste tempo que vais restaurar o reino a Israel? "</p>
                <p>7 - Ele lhes respondeu: "Não lhes compete saber os tempos ou as datas que o Pai estabeleceu pela sua própria autoridade.</p>
                <p>8 - Mas receberão poder quando o Espírito Santo descer sobre vocês, e serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria, e até os confins da terra".
                <p>9 Tendo dito isso, foi elevado às alturas enquanto eles olhavam, e uma nuvem o encobriu da vista deles.</p>
                <p>10 - E eles ficaram com os olhos fixos no céu enquanto ele subia. De repente surgiram diante deles dois homens vestidos de branco,</p>
                <p>11 - que lhes disseram: "Galileus, por que vocês estão olhando para o céu? Este mesmo Jesus, que dentre vocês foi elevado ao céu, voltará da mesma forma como o viram subir".</p>
                `;
            break;
            
            case 'atos1.12-22':
                text = `
                <p><b>Atos 1:12-22</b></p>
                <p>12 - Então eles voltaram para Jerusalém, vindo do monte chamado das Oliveiras, que fica perto da cidade, cerca de um quilômetro.</p>
                <p>13 - Quando chegaram, subiram ao aposento onde estavam hospedados. Achavam-se presentes Pedro, João, Tiago e André; Filipe, Tomé, Bartolomeu e Mateus; Tiago, filho de Alfeu, Simão, o zelote, e Judas, filho de Tiago.</p>
                <p>14 - Todos eles se reuniam sempre em oração, com as mulheres, inclusive Maria, a mãe de Jesus, e com os irmãos de Jesus.</p>
                <p>15 - Naqueles dias Pedro levantou-se entre os irmãos, um grupo de cerca de cento e vinte pessoas,</p>
                <p>16 - e disse: "Irmãos, era necessário que se cumprisse a Escritura que o Espírito Santo predisse por boca de Davi, a respeito de Judas, que serviu de guia aos que prenderam Jesus.</p>
                <p>17 - Ele foi contado como um dos nossos e teve participação neste ministério".</p>
                <p>18 - (Com a recompensa que recebeu pelo seu pecado, Judas comprou um campo. Ali caiu de cabeça, seu corpo partiu-se ao meio, e as suas vísceras se derramaram.</p>
                <p>19 - Todos em Jerusalém ficaram sabendo disso, de modo que, na língua deles, esse campo passou a chamar-se Aceldama, isto é, campo de Sangue.)</p>
                <p>20 - "Porque", prosseguiu Pedro, "está escrito no Livro de Salmos: ‘Fique deserto o seu lugar, e não haja ninguém que nele habite; e ainda: Que outro ocupe o seu lugar.</p>
                <p>21 - Portanto, é necessário que escolhamos um dos homens que estiveram conosco durante todo o tempo em que o Senhor Jesus viveu entre nós,</p>
                <p>22 - desde o batismo de João até o dia em que Jesus foi elevado dentre nós às alturas. É preciso que um deles seja conosco testemunha de sua ressurreição".</p>
                `;
            break;

            case '2co3.4-11':
                text = `
                <p><b>2 Coríntios 3:4-11</b></p>
                <p>4-  Tal é a confiança que temos diante de Deus, por meio de Cristo. </p>
                <p>5 - Não que possamos reivindicar qualquer coisa com base em nossos próprios méritos, mas a nossa capacidade vem de Deus.</p>
                <p>6 - Ele nos capacitou para sermos ministros de uma nova aliança, não da letra, mas do Espírito; pois a letra mata, mas o Espírito vivifica.</p>
                <p>7 - O ministério que trouxe a morte foi gravado com letras em pedras; mas esse ministério veio com tal glória que os israelitas não podiam fixar os olhos na face de Moisés por causa do resplendor do seu rosto, ainda que desvanecente.</p>
                <p>8 - Não será o ministério do Espírito ainda muito mais glorioso?</p>
                <p>9 - Se era glorioso o ministério que trouxe condenação, quanto mais glorioso será o ministério que produz justiça!</p>
                <p>10 - Pois o que outrora foi glorioso, agora não tem glória, em comparação com a glória insuperável.</p>
                <p>11 - E se o que estava se desvanecendo se manifestou com glória, quanto maior será a glória do que permanece!</p>
                `;
            break;

            case 'atos28.23-31':
                text = `
                <p><b>Atos 28:23-31</b></p>
                <p>23 - Assim combinaram encontrar-se com Paulo em dia determinado, indo em grupo ainda mais numeroso ao lugar onde ele estava. Desde a manhã até à tarde ele lhes deu explicações e lhes testemunhou do Reino de Deus, procurando convencê-los a respeito de Jesus, com base na Lei de Moisés e nos Profetas.</p>
                <p>24 - Alguns foram convencidos pelo que ele dizia, mas outros não creram.</p>
                <p>25 - Discordaram entre si mesmos e começaram a ir embora, depois de Paulo ter feito esta declaração final: "Bem que o Espírito Santo falou aos seus antepassados, por meio do profeta Isaías:</p>
                <p>26 - Vá a este povo e diga: "Ainda que estejam sempre ouvindo, vocês nunca entenderão; ainda que estejam sempre vendo, jamais perceberão".</p>
                <p>27 - Pois o coração deste povo se tornou insensível; de má vontade ouviram com os seus ouvidos, e fecharam os seus olhos. Se assim não fosse, poderiam ver com os olhos, ouvir com os ouvidos, entender com o coração e converter-se, e eu os curaria.</p>
                <p>28 - "Portanto, quero que saibam que esta salvação de Deus é enviada aos gentios; eles a ouvirão! "</p>
                <p>29 - Depois que ele disse isto, os judeus se retiraram, discutindo intensamente entre si.</p>
                <p>30 - Por dois anos inteiros Paulo permaneceu na casa que havia alugado, e recebia a todos os que iam vê-lo.</p>
                <p>31 - Pregava o Reino de Deus e ensinava a respeito do Senhor Jesus Cristo, abertamente e sem impedimento algum.</p>
                `;
            break;

            case '1co2.6-16':
                text = `
                <p><b>1 Coríntios 2:6-16</b></p>
                <p>6 - Entretanto, falamos de sabedoria entre os maduros, mas não da sabedoria desta era ou dos poderosos desta era, que estão sendo reduzidos a nada.</p>
                <p>7 - Pelo contrário, falamos da sabedoria de Deus, do mistério que estava oculto, o qual Deus preordenou, antes do princípio das eras, para a nossa glória.</p>
                <p>8 - Nenhum dos poderosos desta era o entendeu, pois, se o tivessem entendido, não teriam crucificado o Senhor da glória.</p>
                <p>9 - Todavia, como está escrito: "Olho nenhum viu, ouvido nenhum ouviu, mente nenhuma imaginou o que Deus preparou para aqueles que o amam";</p>
                <p>10 - mas Deus o revelou a nós por meio do Espírito. O Espírito sonda todas as coisas, até mesmo as coisas mais profundas de Deus.</p>
                <p>11 - Pois, quem dentre os homens conhece as coisas do homem, a não ser o espírito do homem que nele está? Da mesma forma, ninguém conhece as coisas de Deus, a não ser o Espírito de Deus.</p>
                <p>12 - Nós, porém, não recebemos o espírito do mundo, mas o Espírito procedente de Deus, para que entendamos as coisas que Deus nos tem dado gratuitamente.</p>
                <p>13 - Delas também falamos, não com palavras ensinadas pela sabedoria humana, mas com palavras ensinadas pelo Espírito, interpretando verdades espirituais para os que são espirituais.</p>
                <p>14 - Quem não tem o Espírito não aceita as coisas que vêm do Espírito de Deus, pois lhe são loucura; e não é capaz de entendê-las, porque elas são discernidas espiritualmente.</p>
                <p>15 - Mas quem é espiritual discerne todas as coisas, e ele mesmo por ninguém é discernido; pois</p>
                <p>16 - "quem conheceu a mente do Senhor para que possa instruí-lo? " Nós, porém, temos a mente de Cristo.</p>
                `;
            break;

            case 'atos2.14-36':
                text = `
                <p><b>Atos 2:14-36</b></p>
                <p>14 - Então Pedro levantou-se com os Onze e, em alta voz, dirigiu-se à multidão: "Homens da Judéia e todos os que vivem em Jerusalém, deixem-me explicar-lhes isto! Ouçam com atenção: </p>
                <p>15 - estes homens não estão bêbados, como vocês supõem. Ainda são nove horas da manhã! </p>
                <p>16 - Pelo contrário, isto é o que foi predito pelo profeta Joel: </p>
                <p>17 - ‘Nos últimos dias, diz Deus, derramarei do meu Espírito sobre todos os povos. Os seus filhos e as suas filhas profetizarão, os jovens terão visões, os velhos terão sonhos.</p>
                <p>18 - Sobre os meus servos e as minhas servas derramarei do meu Espírito naqueles dias, e eles profetizarão.</p>
                <p>19 - Mostrarei maravilhas em cima no céu e sinais em baixo, na terra, sangue, fogo e nuvens de fumaça.</p>
                <p>20 - O sol se tornará em trevas e a lua em sangue, antes que venha o grande e glorioso dia do Senhor.</p>
                <p>21 - E todo aquele que invocar o nome do Senhor será salvo! ’</p>
                <p>22 - "Israelitas, ouçam estas palavras: Jesus de Nazaré foi aprovado por Deus diante de vocês por meio de milagres, maravilhas e sinais, que Deus fez entre vocês por intermédio dele, como vocês mesmos sabem.</p>
                <p>23 - Este homem lhes foi entregue por propósito determinado e pré-conhecimento de Deus; e vocês, com a ajuda de homens perversos, o mataram, pregando-o na cruz.</p>
                <p>24 - Mas Deus o ressuscitou dos mortos, rompendo os laços da morte, porque era impossível que a morte o retivesse.</p>
                <p>25 - A respeito dele, disse Davi: ‘Eu sempre via o Senhor diante de mim. Porque ele está à minha direita, não serei abalado.</p>
                <p>26 - Por isso o meu coração está alegre e a minha língua exulta; o meu corpo também repousará em esperança,</p>
                <p>27 - porque tu não me abandonarás no sepulcro, nem permitirás que o teu Santo sofra decomposição.</p>
                <p>28 - Tu me fizeste conhecer os caminhos da vida e me encherás de alegria na tua presença’.</p>
                <p>29 - "Irmãos, posso dizer-lhes com franqueza que o patriarca Davi morreu e foi sepultado, e o seu túmulo está entre nós até o dia de hoje.</p>
                <p>30 - Mas ele era profeta e sabia que Deus lhe prometera sob juramento que colocaria um dos seus descendentes em seu trono.</p>
                <p>31 - Prevendo isso, falou da ressurreição do Cristo, que não foi abandonado no sepulcro e cujo corpo não sofreu decomposição.</p>
                <p>32 - Deus ressuscitou este Jesus, e todos nós somos testemunhas desse fato.</p>
                <p>33 - Exaltado à direita de Deus, ele recebeu do Pai o Espírito Santo prometido e derramou o que vocês agora vêem e ouvem.  </p>
                <p>34 - Pois Davi não subiu ao céu, mas ele mesmo declarou: ‘O Senhor disse ao meu Senhor: Senta-te à minha direita</p>
                <p>35 - até que eu ponha os teus inimigos como estrado para os teus pés’.</p>
                <p>36 - "Portanto, que todo Israel fique certo disto: Este Jesus, a quem vocês crucificaram, Deus o fez Senhor e Cristo".</p>
                `;
            break;

            case 'atos2.37-47':
                text = `
                <p><b>Atos 2:37-47</b></p>
                <p>37 - Quando ouviram isso, os seus corações ficaram aflitos, e eles perguntaram a Pedro e aos outros apóstolos: "Irmãos, que faremos? "
                <p>38 - Pedro respondeu: "Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo, para perdão dos seus pecados, e receberão o dom do Espírito Santo.</p>
                <p>39 - Pois a promessa é para vocês, para os seus filhos e para todos os que estão longe, para todos quantos o Senhor, o nosso Deus chamar".</p>
                <p>40 - Com muitas outras palavras os advertia e insistia com eles: "Salvem-se desta geração corrompida! "</p>
                <p>41 - Os que aceitaram a mensagem foram batizados, e naquele dia houve um acréscimo de cerca de três mil pessoas.</p>
                <p>42 - Eles se dedicavam ao ensino dos apóstolos e à comunhão, ao partir do pão e às orações.</p>
                <p>43 - Todos estavam cheios de temor, e muitas maravilhas e sinais eram feitos pelos apóstolos.</p>
                <p>44 - Todos os que criam mantinham-se unidos e tinham tudo em comum.</p>
                <p>45 - Vendendo suas propriedades e bens, distribuíam a cada um conforme a sua necessidade.</p>
                <p>46 - Todos os dias, continuavam a reunir-se no pátio do templo. Partiam o pão em suas casas, e juntos participavam das refeições, com alegria e sinceridade de coração,</p>
                <p>47 - louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava todos os dias os que iam sendo salvos.</p>
                `;
            break;

            case 'atos1.19':
                text = `
                <p><b>Atos 1:19</b></p>
                <p>19 - Todos em Jerusalém ficaram sabendo disso, de modo que, na língua deles, esse campo passou a chamar-se Aceldama, isto é, campo de Sangue.</p>
                `;
            break;

            case 'atos.1.4-5':
                text = `
                <p><b>Atos 1:4-5</b></p>
                <p>4 - Certa ocasião, enquanto comia com eles, deu-lhes esta ordem: "Não saiam de Jerusalém, mas esperem pela promessa de meu Pai, da qual lhes falei.</p>
                <p>5 - Pois João batizou com água, mas dentro de poucos dias vocês serão batizados com o Espírito Santo".</p>
                `;
            break;

            case 'atos1.8':
                text = `
                <p><b>Atos 1:8</b></p>
                <p>8 Mas receberão poder quando o Espírito Santo descer sobre vocês, e serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria, e até os confins da terra".</p>
                `;
            break;

            case 'atos.1.13-14':
                text = `
                <p><b>Atos 1:13-14</b></p>
                <p>13 - Quando chegaram, subiram ao aposento onde estavam hospedados. Achavam-se presentes Pedro, João, Tiago e André; Filipe, Tomé, Bartolomeu e Mateus; Tiago, filho de Alfeu, Simão, o zelote, e Judas, filho de Tiago.</p>
                <p>14 - Todos eles se reuniam sempre em oração, com as mulheres, inclusive Maria, a mãe de Jesus, e com os irmãos de Jesus.</p>
                `;
            break;

            case 'atos1.16-20':
                text = `
                <p><b>Atos 1:16-20</b></p>
                <p>16 - e disse: "Irmãos, era necessário que se cumprisse a Escritura que o Espírito Santo predisse por boca de Davi, a respeito de Judas, que serviu de guia aos que prenderam Jesus.</p>
                <p>17 - Ele foi contado como um dos nossos e teve participação neste ministério".</p>
                <p>18 - ( Com a recompensa que recebeu pelo seu pecado, Judas comprou um campo. Ali caiu de cabeça, seu corpo partiu-se ao meio, e as suas vísceras se derramaram.</p>
                <p>19 - Todos em Jerusalém ficaram sabendo disso, de modo que, na língua deles, esse campo passou a chamar-se Aceldama, isto é, campo de Sangue. )</p>
                <p>20 - "Porque", prosseguiu Pedro, "está escrito no Livro de Salmos: ‘Fique deserto o seu lugar, e não haja ninguém que nele habite’; e ainda: ‘Que outro ocupe o seu lugar’.</p>
                `;
            break;

            case 'jo.16e14':
                text = `
                <p><b>João 16:7</b></p>
                <p>7 - Mas eu lhes afirmo que é para o bem de vocês que eu vou. Se eu não for, o Conselheiro não virá para vocês; mas se eu for, eu o enviarei.</p>
                <p><b>João 14:26</b></p>
                <p>26 - Mas o Conselheiro, o Espírito Santo, que o Pai enviará em meu nome, lhes ensinará todas as coisas e lhes fará lembrar tudo o que eu lhes disse.</p>
                `;
            break;

            case 'atos.7.55-56':
                text = `
                <p><b>Atos 7:55-56</b></p>
                <p>55 - Mas Estêvão, cheio do Espírito Santo, levantou os olhos para o céu e viu a glória de Deus, e Jesus de pé, à direita de Deus,</p>
                <p>56 - e disse: "Vejo o céu aberto e o Filho do homem de pé, à direita de Deus".</p>
                `;
            break;

            case 'cl.3.1':
                text = `
                <p><b>Colossense 3:1</b></p>
                <p>1 Portanto, já que vocês ressuscitaram com Cristo, procurem as coisas que são do alto, onde Cristo está assentado à direita de Deus.</p>
                `;
            break;

            case 'joao14.16':
                text = `
                <p><b>João 14:16</b></p>
                <p>16 E eu pedirei ao Pai, e ele lhes dará outro Conselheiro para estar com vocês para sempre,</p>
                `;
            break;

            case 'atos2.1-4':
                text = `
                <p><b>Atos 2:1-4</b></p>
                <p>1 - Chegando o dia de Pentecoste, estavam todos reunidos num só lugar.</p>
                <p>2 - De repente veio do céu um som, como de um vento muito forte, e encheu toda a casa na qual estavam assentados.</p>
                <p>3 - E viram o que parecia línguas de fogo, que se separaram e pousaram sobre cada um deles.</p>
                <p>4 - Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava.</p>
                `;
            break;

            case 'num28.26':
                text = `
                <p><b>Números 28:26</b></p>
                <p>26 "No dia da festa da colheita dos primeiros frutos, a Festa das Semanas, quando apresentarem ao Senhor uma oferta do cereal novo, convoquem uma santa assembléia e não façam trabalho algum.</p>
                `;
            break;
                     
            case 'lv.23.15-21':
                text = `
                <p><b>Levíticos 23:15-21</b></p>
                <p>15 - "A partir do dia seguinte ao sábado, o dia em que vocês trarão o feixe da oferta ritualmente movida, contem sete semanas completas. </p>
                <p>16 - Contem cinquenta dias, até um dia depois do sétimo sábado, e então apresentem uma oferta de cereal novo ao Senhor.</p>
                <p>17 - Onde quer que morarem, tragam de casa dois pães feitos com dois jarros da melhor farinha, cozidos com fermento, como oferta movida dos primeiros frutos ao Senhor.</p>
                <p>18 - Junto com os pães apresentem sete cordeiros, cada um com um ano de idade e sem defeito, um novilho e dois carneiros. Eles serão holocausto ao Senhor, juntamente com as suas ofertas de cereal e ofertas derramadas; é oferta preparada no fogo, de aroma agradável ao Senhor.</p>
                <p>19 - Depois sacrifiquem um bode como oferta pelo pecado e dois cordeiros, cada um com um ano de idade, como oferta de comunhão.</p>
                <p>20 - O sacerdote moverá os dois cordeiros perante o Senhor como gesto ritual de apresentação, juntamente com o pão dos primeiros frutos. São uma oferta sagrada ao Senhor que pertencem ao sacerdote.</p>
                <p>21 - Naquele mesmo dia vocês proclamarão uma reunião sagrada e não realizarão trabalho algum. Este é um decreto perpétuo para as suas gerações, onde quer que vocês morarem.</p>
                `;
            break;
                  
            case 'mateus 26:56':
                text = `
                <p><b>Mateus 26:56</b></p>
                <p>56 - Mas tudo isso aconteceu para que se cumprissem as Escrituras dos profetas". Então todos os discípulos o abandonaram e fugiram.</p>
                `;
            break;

            case 'marcos 14:50':
                text = `
                <p><b>Marcos 14:50</b></p>
                <p>50 - Então todos o abandonaram e fugiram.</p>
                `;
            break;

            case 'marcos14.66-72':
                text = `
                <p><b>Marcos 14:66-72</b></p>
                <p>66 - Estando Pedro em baixo, no pátio, uma das criadas do sumo sacerdote passou por ali.</p>
                <p>67 - Vendo Pedro a aquecer-se, olhou bem para ele e disse: "Você também estava com Jesus, o Nazareno".</p>
                <p>68 - Contudo ele o negou, dizendo: "Não o conheço, nem sei do que você está falando". E saiu para o alpendre.</p>
                <p>69 - Quando a criada o viu lá, disse novamente aos que estavam por perto: "Esse aí é um deles".</p>
                <p>70 - De novo ele negou. Pouco tempo depois, os que estavam sentados ali perto disseram a Pedro: "Certamente você é um deles. Você é galileu! "</p>
                <p>71 - Ele começou a se amaldiçoar e a jurar: "Não conheço o homem de quem vocês estão falando! "</p>
                <p>72 - E logo o galo cantou pela segunda vez. Então Pedro se lembrou da palavra que Jesus lhe tinha dito: "Antes que duas vezes cante o galo, você me negará três vezes". E se pôs a chorar.</p>
                `;
            break;

            case 'joao.20.19':
                text = `
                <p><b>João 20:19</b></p>
                <p>19 - Ao cair da tarde daquele primeiro dia da semana, estando os discípulos reunidos a portas trancadas, por medo dos judeus, Jesus entrou, pôs-se no meio deles e disse: "Paz seja com vocês!"</p>
                `;
            break;

            case 'joao 21.3':
                text = `
                <p><b>João 21:3</b></p>
                <p>3 - "Vou pescar", disse-lhes Simão Pedro. E eles disseram: "Nós vamos com você". Eles foram e entraram no barco, mas naquela noite não pegaram nada.</p>
                `;
            break;

            case '2co 5.17':
                text = `
                <p><b>2 Coríntios 5:17</b></p>
                <p>17 - Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!</p>
                `;
            break;

            case 'atos 2.36':
                text = `
                <p><b>Atos 2:36</b></p>
                <p>36 - "Portanto, que todo Israel fique certo disto: Este Jesus, a quem vocês crucificaram, Deus o fez Senhor e Cristo".</p>
                `;
            break;

            case 'marcos 14.66-71':
                text = `
                <p><b>Marcos 14:66-71</b></p>
                <p>66 - Estando Pedro em baixo, no pátio, uma das criadas do sumo sacerdote passou por ali.</p>
                <p>67 - Vendo Pedro a aquecer-se, olhou bem para ele e disse: "Você também estava com Jesus, o Nazareno".</p>
                <p>68 - Contudo ele o negou, dizendo: "Não o conheço, nem sei do que você está falando". E saiu para o alpendre.</p>
                <p>69 - Quando a criada o viu lá, disse novamente aos que estavam por perto: "Esse aí é um deles".</p>
                <p>70 - De novo ele negou. Pouco tempo depois, os que estavam sentados ali perto disseram a Pedro: "Certamente você é um deles. Você é galileu! "</p>
                <p>71 - Ele começou a se amaldiçoar e a jurar: "Não conheço o homem de quem vocês estão falando! "</p>
                `;
            break;

            case 'atos 1.8':
                text = `
                <p><b>Atos 1:8</b></p>
                <p>18 - ( Com a recompensa que recebeu pelo seu pecado, Judas comprou um campo. Ali caiu de cabeça, seu corpo partiu-se ao meio, e as suas vísceras se derramaram.</p>
                `;
            break;

            case 'atos 2.4-6':
                text = `
                <p><b>Atos 2:4-6</b></p>
                <p>4 - Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava.</p>
                <p>5 - Havia em Jerusalém judeus, tementes a Deus, vindos de todas as nações do mundo.</p>
                <p>6 - Ouvindo-se este som, ajuntou-se uma multidão que ficou perplexa, pois cada um os ouvia falar em sua própria língua.</p>
                `;
            break;

            case 'at4':
                text = `
                <p><b>Atos 4:13-29</b></p>
                <p>13 - Vendo a coragem de Pedro e de João, e percebendo que eram homens comuns e sem instrução, ficaram admirados e reconheceram que eles haviam estado com Jesus.</p>
                <p>14 - E como podiam ver ali com eles o homem que fora curado, nada podiam dizer contra eles.</p>
                <p>15 - Assim, ordenaram que se retirassem do Sinédrio e começaram a discutir,</p>
                <p>16 - perguntando: "Que faremos com esses homens? Todos os que moram em Jerusalém sabem que eles realizaram um milagre notório que não podemos negar.</p>
                <p>17 - Todavia, para impedir que isso se espalhe ainda mais entre o povo, precisamos adverti-los de que não falem mais com ninguém sobre esse nome".</p>
                <p>18 - Então, chamando-os novamente, ordenaram-lhes que não falassem nem ensinassem em nome de Jesus.</p>
                <p>19 - Mas Pedro e João responderam: "Julguem os senhores mesmos se é justo aos olhos de Deus obedecer aos senhores e não a Deus.</p>
                <p>20 - Pois não podemos deixar de falar do que vimos e ouvimos".</p>
                <p>21 - Depois de mais ameaças, eles os deixaram ir. Não tinham como castigá-los, porque todo o povo estava louvando a Deus pelo que acontecera.</p>
                <p>22 - Pois o homem que fora curado milagrosamente tinha mais de quarenta anos de idade.</p>
                <p>23 - Quando foram soltos, Pedro e João voltaram para os seus e contaram tudo o que os chefes dos sacerdotes e os líderes religiosos lhes tinham dito.</p>
                <p>24 - Ouvindo isso, levantaram juntos a voz a Deus, dizendo: "Ó Soberano, tu fizeste o céu, a terra, o mar e tudo o que neles há!</p>
                <p>25 - Tu falaste pelo Espírito Santo por boca do teu servo, nosso pai Davi: ‘Por que se enfurecem as nações, e os povos conspiram em vão?</p>
                <p>26  -Os reis da terra se levantam, e os governantes se reúnem contra o Senhor e contra o seu Ungido’.</p>
                <p>27 - De fato, Herodes e Pôncio Pilatos reuniram-se com os gentios e com os povos de Israel nesta cidade, para conspirar contra o teu santo servo Jesus, a quem ungiste.</p>
                <p>28 - Fizeram o que o teu poder e a tua vontade haviam decidido de antemão que acontecesse.</p>
                <p>29 - Agora, Senhor, considera as ameaças deles e capacita os teus servos para anunciarem a tua palavra corajosamente.</p>

                <p><b> Atos 28:31</b></p>
                <p>31 Pregava o Reino de Deus e ensinava a respeito do Senhor Jesus Cristo, abertamente e sem impedimento algum.</p>
                `;
            break;

            case 'joao 16.13-14':
                text = `
                <p><b>João 16:13-14</b></p>
                <p>13 - Mas quando o Espírito da verdade vier, ele os guiará a toda a verdade. Não falará de si mesmo; falará apenas o que ouvir, e lhes anunciará o que está por vir.</p>
                <p>14 - Ele me glorificará, porque receberá do que é meu e o tornará conhecido a vocês.</p>
                `;
            break;

            case '2 co 2-14':
                text = `
                <p><b>2 Coríntios 2:14</b></p>
                <p>14 - porque sabemos que aquele que ressuscitou ao Senhor Jesus dentre os mortos, também nos ressuscitará com Jesus e nos apresentará com vocês.</p>
                `;
            break;

            case 'atos2':
                text = `
                <p><b>Atos 2:16-21</b></p>
                <p>16 - Pelo contrário, isto é o que foi predito pelo profeta Joel: </p>
                <p>17 - ‘Nos últimos dias, diz Deus, derramarei do meu Espírito sobre todos os povos. Os seus filhos e as suas filhas profetizarão, os jovens terão visões, os velhos terão sonhos.</p>
                <p>18 - Sobre os meus servos e as minhas servas derramarei do meu Espírito naqueles dias, e eles profetizarão.</p>
                <p>19 - Mostrarei maravilhas em cima no céu e sinais em baixo, na terra, sangue, fogo e nuvens de fumaça.</p>
                <p>20 - O sol se tornará em trevas e a lua em sangue, antes que venha o grande e glorioso dia do Senhor.</p>
                <p>21 - E todo aquele que invocar o nome do Senhor será salvo! ’</p>

                <p><b>Atos 2:25-28</b></p>
                <p>25 - A respeito dele, disse Davi: ‘Eu sempre via o Senhor diante de mim. Porque ele está à minha direita, não serei abalado.</p>
                <p>26 - Por isso o meu coração está alegre e a minha língua exulta; o meu corpo também repousará em esperança,</p>
                <p>27 - porque tu não me abandonarás no sepulcro, nem permitirás que o teu Santo sofra decomposição.</p>
                <p>28 - Tu me fizeste conhecer os caminhos da vida e me encherás de alegria na tua presença’.</p>

                <p><b>Atos 2:34-35</b></p>
                <p>34 - Pois Davi não subiu ao céu, mas ele mesmo declarou: ‘O Senhor disse ao meu Senhor: Senta-te à minha direita</p>
                <p>35 - até que eu ponha os teus inimigos como estrado para os teus pés’.</p>
                `;
            break;

            case 'romanos 1.16':
                text = `
                <p><b>Romanos 1:16</b></p>
                <p>16 Não me envergonho do evangelho, porque é o poder de Deus para a salvação de todo aquele que crê: primeiro do judeu, depois do grego.</p>
                `;
            break;
        
            case 'atos 2.16-21':
                text = `
                <p><b>Atos 2:16-21 </b></p>
                <p>16 - Pelo contrário, isto é o que foi predito pelo profeta Joel:</p>
                <p>17 - ‘Nos últimos dias, diz Deus, derramarei do meu Espírito sobre todos os povos. Os seus filhos e as suas filhas profetizarão, os jovens terão visões, os velhos terão sonhos.</p>
                <p>18 - Sobre os meus servos e as minhas servas derramarei do meu Espírito naqueles dias, e eles profetizarão.</p>
                <p>19 - Mostrarei maravilhas em cima no céu e sinais em baixo, na terra, sangue, fogo e nuvens de fumaça.</p>
                <p>20 - O sol se tornará em trevas e a lua em sangue, antes que venha o grande e glorioso dia do Senhor.</p>
                <p>21 - E todo aquele que invocar o nome do Senhor será salvo! ’</p>
                `;
            break;

            case 'joel 2.28-32':
                text = `
                <p><b>Joel 2:28-32</b></p>
                <p>28 - "E, depois disso, derramarei do meu Espírito sobre todos os povos. Os seus filhos e as suas filhas profetizarão, os velhos terão sonhos, os jovens terão visões.</p>
                <p>29 - Até sobre os servos e as servas derramarei do meu Espírito naqueles dias.</p>
                <p>30 - Mostrarei maravilhas no céu e na terra, sangue, fogo e nuvens de fumaça.</p>
                <p>31 - O sol se tornará em trevas, e a lua em sangue; antes que venha o grande e terrível dia do Senhor.</p>
                <p>32 - E todo aquele que invocar o nome do Senhor será salvo, pois, conforme prometeu o Senhor, no monte Sião e em Jerusalém haverá livramento para os sobreviventes, para aqueles a quem o Senhor chamar.</p>
                `;
            break;

            case 'atos 2.22-35':
                text = `
                <p><b>Atos 2:22-35</b></p>
                <p>22 - "Israelitas, ouçam estas palavras: Jesus de Nazaré foi aprovado por Deus diante de vocês por meio de milagres, maravilhas e sinais, que Deus fez entre vocês por intermédio dele, como vocês mesmos sabem.</p>
                <p>23 - Este homem lhes foi entregue por propósito determinado e pré-conhecimento de Deus; e vocês, com a ajuda de homens perversos, o mataram, pregando-o na cruz.</p>
                <p>24 - Mas Deus o ressuscitou dos mortos, rompendo os laços da morte, porque era impossível que a morte o retivesse.</p>
                <p>25 - A respeito dele, disse Davi: ‘Eu sempre via o Senhor diante de mim. Porque ele está à minha direita, não serei abalado.</p>
                <p>26 - Por isso o meu coração está alegre e a minha língua exulta; o meu corpo também repousará em esperança,</p>
                <p>27 - porque tu não me abandonarás no sepulcro, nem permitirás que o teu Santo sofra decomposição.</p>
                <p>28 - Tu me fizeste conhecer os caminhos da vida e me encherás de alegria na tua presença’.</p>
                <p>29 - "Irmãos, posso dizer-lhes com franqueza que o patriarca Davi morreu e foi sepultado, e o seu túmulo está entre nós até o dia de hoje.</p>
                <p>30 Mas ele era profeta e sabia que Deus lhe prometera sob juramento que colocaria um dos seus descendentes em seu trono.</p>
                <p>31 -Prevendo isso, falou da ressurreição do Cristo, que não foi abandonado no sepulcro e cujo corpo não sofreu decomposição.</p>
                <p>32 - Deus ressuscitou este Jesus, e todos nós somos testemunhas desse fato.</p>
                <p>33 - Exaltado à direita de Deus, ele recebeu do Pai o Espírito Santo prometido e derramou o que vocês agora vêem e ouvem.</p>
                <p>34 - Pois Davi não subiu ao céu, mas ele mesmo declarou: ‘O Senhor disse ao meu Senhor: Senta-te à minha direita</p>
                <p>35 - até que eu ponha os teus inimigos como estrado para os teus pés’.</p>
                `;
            break;

            case 'atos 2.36':
                text = `
                <p><b>Atos 2:36</b></p>
                <p>36 - "Portanto, que todo Israel fique certo disto: Este Jesus, a quem vocês crucificaram, Deus o fez Senhor e Cristo". </p>
                `;
            break;

            case 'atos 2.38':
                text = `
                <p><b>Atos 2:38</b></p>
                <p>38 - Pedro respondeu: "Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo, para perdão dos seus pecados, e receberão o dom do Espírito Santo. </p>
                `;
            break;
            
            case 'atos 2.5':
                text = `
                <p><b>Atos 2:5-11</b></p>
                <p>5 - Havia em Jerusalém judeus, tementes a Deus, vindos de todas as nações do mundo.</p>
                <p>6 - Ouvindo-se este som, ajuntou-se uma multidão que ficou perplexa, pois cada um os ouvia falar em sua própria língua.</p>
                <p>7 - Atônitos e maravilhados, eles perguntavam: "Acaso não são galileus todos estes homens que estão falando?</p>
                <p>8 - Então, como os ouvimos, cada um de nós, em nossa própria língua materna?</p>
                <p>9 - Partos, medos e elamitas; habitantes da Mesopotâmia, Judéia e Capadócia, Ponto e da província da Ásia,</p>
                <p>10 - Frígia e Panfília, Egito e das partes da Líbia próximas a Cirene; visitantes vindos de Roma,</p>
                <p>11 - tanto judeus como convertidos ao judaísmo; cretenses e árabes. Nós os ouvimos declarar as maravilhas de Deus em nossa própria língua! "</p>

                <p><b>Atos 8:26-40</b></p>
                <p>26 - Um anjo do Senhor disse a Filipe: "Vá para o sul, para a estrada deserta que desce de Jerusalém a Gaza".<p>
                <p>27 - Ele se levantou e partiu. No caminho encontrou um eunuco etíope, um oficial importante, encarregado de todos os tesouros de Candace, rainha dos etíopes. Esse homem viera a Jerusalém para adorar a Deus e,<p>
                <p>28 - de volta para casa, sentado em sua carruagem, lia o livro do profeta Isaías.<p>
                <p>29 - E o Espírito disse a Filipe: "Aproxime-se dessa carruagem e acompanhe-a".<p>
                <p>30 - Então Filipe correu para a carruagem, ouviu o homem lendo o profeta Isaías e lhe perguntou: "O senhor entende o que está lendo? "<p>
                <p>31 - Ele respondeu: "Como posso entender se alguém não me explicar? " Assim, convidou Filipe para subir e sentar-se ao seu lado.32 - O eunuco estava lendo esta passagem da Escritura: "Ele foi levado como ovelha para o matadouro, e como cordeiro mudo diante do tosquiador, ele não abriu a sua boca.<p>
                <p>33 - Em sua humilhação foi privado de justiça. Quem pode falar dos seus descendentes? Pois a sua vida foi tirada da terra".<p>
                <p>34 - O eunuco perguntou a Filipe: "Diga-me, por favor: de quem o profeta está falando? De si próprio ou de outro? "<p>
                <p>35 - Então Filipe, começando com aquela passagem da Escritura, anunciou-lhe as boas novas de Jesus.<p>
                <p>36 - Prosseguindo pela estrada, chegaram a um lugar onde havia água. O eunuco disse: "Olhe, aqui há água. Que me impede de ser batizado? "<p>
                <p>37 - Disse Filipe: "Você pode, se crê de todo o coração". O eunuco respondeu: "Creio que Jesus Cristo é o Filho de Deus".<p>
                <p>38 - Assim, deu ordem para parar a carruagem. Então Filipe e o eunuco desceram à água, e Filipe o batizou.<p>
                <p>39 - Quando saíram da água, o Espírito do Senhor arrebatou Filipe repentinamente. O eunuco não o viu mais e, cheio de alegria, seguiu o seu caminho.<p>
                <p>40 - Filipe, porém, apareceu em Azoto e, indo para Cesaréia, pregava o evangelho em todas as cidades pelas quais passava.<p>
                `;
            break;

            case 'Atos e mateus':
                text = `
                <p><b>Atos 2:14-36</b></p>
                <p>14 - Então Pedro levantou-se com os Onze e, em alta voz, dirigiu-se à multidão: "Homens da Judéia e todos os que vivem em Jerusalém, deixem-me explicar-lhes isto! Ouçam com atenção: </p>
                <p>15 - estes homens não estão bêbados, como vocês supõem. Ainda são nove horas da manhã!</p>
                <p>16 - Pelo contrário, isto é o que foi predito pelo profeta Joel:</p>
                <p>17 - ‘Nos últimos dias, diz Deus, derramarei do meu Espírito sobre todos os povos. Os seus filhos e as suas filhas profetizarão, os jovens terão visões, os velhos terão sonhos.</p>
                <p>18 - Sobre os meus servos e as minhas servas derramarei do meu Espírito naqueles dias, e eles profetizarão.</p>
                <p>19 - Mostrarei maravilhas em cima no céu e sinais em baixo, na terra, sangue, fogo e nuvens de fumaça.</p>
                <p>20 - O sol se tornará em trevas e a lua em sangue, antes que venha o grande e glorioso dia do Senhor.</p>
                <p>21 - E todo aquele que invocar o nome do Senhor será salvo! ’</p>
                <p>22 - "Israelitas, ouçam estas palavras: Jesus de Nazaré foi aprovado por Deus diante de vocês por meio de milagres, maravilhas e sinais, que Deus fez entre vocês por intermédio dele, como vocês mesmos sabem.</p>
                <p>23 - Este homem lhes foi entregue por propósito determinado e pré-conhecimento de Deus; e vocês, com a ajuda de homens perversos, o mataram, pregando-o na cruz.</p>
                <p>24 - Mas Deus o ressuscitou dos mortos, rompendo os laços da morte, porque era impossível que a morte o retivesse.</p>
                <p>25 - A respeito dele, disse Davi: ‘Eu sempre via o Senhor diante de mim. Porque ele está à minha direita, não serei abalado.</p>
                <p>26 - Por isso o meu coração está alegre e a minha língua exulta; o meu corpo também repousará em esperança,</p>
                <p>27 - porque tu não me abandonarás no sepulcro, nem permitirás que o teu Santo sofra decomposição.</p>
                <p>28 - Tu me fizeste conhecer os caminhos da vida e me encherás de alegria na tua presença’.</p>
                <p>29 - "Irmãos, posso dizer-lhes com franqueza que o patriarca Davi morreu e foi sepultado, e o seu túmulo está entre nós até o dia de hoje.</p>
                <p>30 - Mas ele era profeta e sabia que Deus lhe prometera sob juramento que colocaria um dos seus descendentes em seu trono.</p>
                <p>31 - Prevendo isso, falou da ressurreição do Cristo, que não foi abandonado no sepulcro e cujo corpo não sofreu decomposição.</p>
                <p>32 - Deus ressuscitou este Jesus, e todos nós somos testemunhas desse fato.</p>
                <p>33 - Exaltado à direita de Deus, ele recebeu do Pai o Espírito Santo prometido e derramou o que vocês agora vêem e ouvem.</p>
                <p>34 - Pois Davi não subiu ao céu, mas ele mesmo declarou: ‘O Senhor disse ao meu Senhor: Senta-te à minha direita</p>
                <p>35 - até que eu ponha os teus inimigos como estrado para os teus pés’.</p>
                <p>36 - "Portanto, que todo Israel fique certo disto: Este Jesus, a quem vocês crucificaram, Deus o fez Senhor e Cristo".</p>

                <p><b>Mateus 10:19</b></p>
                <p>19 Mas quando os prenderem, não se preocupem quanto ao que dizer, ou como dizer. Naquela hora lhes será dado o que dizer,</p>
                `;
            break;

            case 'atos-joao':
                text = `
                <p><b>Atos 2 37-41</b></p>
                <p>37 - Quando ouviram isso, os seus corações ficaram aflitos, e eles perguntaram a Pedro e aos outros apóstolos: "Irmãos, que faremos? "</p>
                <p>38 - Pedro respondeu: "Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo, para perdão dos seus pecados, e receberão o dom do Espírito Santo.</p>
                <p>39 - Pois a promessa é para vocês, para os seus filhos e para todos os que estão longe, para todos quantos o Senhor, o nosso Deus chamar".</p>
                <p>40 - Com muitas outras palavras os advertia e insistia com eles: "Salvem-se desta geração corrompida! "</p>
                <p>41 - Os que aceitaram a mensagem foram batizados, e naquele dia houve um acréscimo de cerca de três mil pessoas.</p>

                <p><b>João 16:7-11</b></p>
                <p>7 - Mas eu lhes afirmo que é para o bem de vocês que eu vou. Se eu não for, o Conselheiro não virá para vocês; mas se eu for, eu o enviarei.</p>
                <p>8 - Quando ele vier, convencerá o mundo do pecado, da justiça e do juízo.</p>
                <p>9 - Do pecado, porque os homens não crêem em mim;</p>
                <p>10 - da justiça, porque vou para o Pai, e vocês não me verão mais;</p>
                <p>11 - e do juízo, porque o príncipe deste mundo já está condenado.</p>
                `;
            break;

            case 'atos 16.30':
                text = `
                <p><b>Atos 16:30</b></p>
                <p>30 Então levou-os para fora e perguntou: "Senhores, que devo fazer para ser salvo? " </p>
                `;
            break;

            case 'atos 2e4':
                text = `
                <p><b>Atos 2:42-47</b></p>
                <p>42 - Eles se dedicavam ao ensino dos apóstolos e à comunhão, ao partir do pão e às orações.</p>
                <p>43 - Todos estavam cheios de temor, e muitas maravilhas e sinais eram feitos pelos apóstolos.</p>
                <p>44 - Todos os que criam mantinham-se unidos e tinham tudo em comum.</p>
                <p>45 - Vendendo suas propriedades e bens, distribuíam a cada um conforme a sua necessidade.</p>
                <p>46 - Todos os dias, continuavam a reunir-se no pátio do templo. Partiam o pão em suas casas, e juntos participavam das refeições, com alegria e sinceridade de coração,</p>
                <p>47 - louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava todos os dias os que iam sendo salvos.</p>

                <p><b>Atos 4:32-35</b></p>
                <p>32 - Da multidão dos que creram, uma era a mente e um o coração. Ninguém considerava unicamente sua coisa alguma que possuísse, mas compartilhavam tudo o que tinham.</p>
                <p>33 - Com grande poder os apóstolos continuavam a testemunhar da ressurreição do Senhor Jesus, e grandiosa graça estava sobre todos eles.</p>
                <p>34 - Não havia pessoas necessitadas entre eles, pois os que possuíam terras ou casas as vendiam, traziam o dinheiro da venda</p>
                <p>35 - e o colocavam aos pés dos apóstolos, que o distribuíam segundo a necessidade de cada um.</p>
                `;
            break;
           
            case 'atos 2.47-4.32':
                text = `
                <p><b>Atos 2:47</b></p>
                <p>47 - louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava todos os dias os que iam sendo salvos.'</p>

                <p><b>Atos 4:32</b></p>
                <p>32 - Da multidão dos que creram, uma era a mente e um o coração. Ninguém considerava unicamente sua coisa alguma que possuísse, mas compartilhavam tudo o que tinham.</p>
                `;
            break;

            case 'atos 4.8':
                text = `
                <p><b>Atos 4:18</b></p>
                <p>18 - Então, chamando-os novamente, ordenaram-lhes que não falassem nem ensinassem em nome de Jesus.</p>
                `;
            break;

            case 'atos 6.3':
                text = `
                <p><b>Atos 6:3</b></p>
                <p>3 - Irmãos, escolham entre vocês sete homens de bom testemunho, cheios do Espírito e de sabedoria. Passaremos a eles essa tarefa</p>
                `;
            break;

            case 'atos 6e7':
                text = `
                <p><b>Atos 6:5</b></p>
                <p>5 - Tal proposta agradou a todos. Então escolheram Estêvão, homem cheio de fé e do Espírito Santo, além de Filipe, Prócoro, Nicanor, Timom, Pármenas e Nicolau, um convertido ao judaísmo, proveniente de Antioquia.</p>

                <p><b>Atos 7:55</b></p>
                <p>55 - Mas Estêvão, cheio do Espírito Santo, levantou os olhos para o céu e viu a glória de Deus, e Jesus de pé, à direita de Deus,</p>
                `;
            break;

            case 'atos 9e13':
                text = `
                <p><b>Atos 9:17</b></p>
                <p>17 - Então Ananias foi, entrou na casa, impôs as mãos sobre Saulo e disse: "Irmão Saulo, o Senhor Jesus, que lhe apareceu no caminho por onde você vinha, enviou-me para que você volte a ver e seja cheio do Espírito Santo".</p>

                <p><b>Atos 13:9</b></p>
                <p>9 - Então Saulo, também chamado Paulo, cheio do Espírito Santo, olhou firmemente para Elimas e disse:</p>
                `;
            break;

            case 'atos 11.24':
                text = `
                <p><b>Atos 11:24</b></p>
                <p>24 - Ele era um homem bom, cheio do Espírito Santo e de fé; e muitas pessoas foram acrescentadas ao Senhor.</p>
                `;
            break;

            case 'atos 4.31':
                text = `
                <p><b>Atos 4:31</b></p>
                <p>31 - Depois de orarem, tremeu o lugar em que estavam reunidos; todos ficaram cheios do Espírito Santo e anunciavam corajosamente a palavra de Deus.</p>
                `;
            break;

            case 'atos 4-4-20':
                text = `
                <p><b>Atos 4:8-13</b></p>
                <p>8 - Então Pedro, cheio do Espírito Santo, disse-lhes: "Autoridades e líderes do povo!</p>
                <p>9 - Visto que hoje somos chamados para prestar contas de um ato de bondade em favor de um aleijado, sendo interrogados acerca de como ele foi curado,</p>
                <p>10 - saibam os senhores e todo o povo de Israel que por meio do nome de Jesus Cristo, o Nazareno, a quem os senhores crucificaram, mas a quem Deus ressuscitou dos mortos, este homem está aí curado diante dos senhores.</p>
                <p>11 - Este Jesus é ‘a pedra que vocês, construtores, rejeitaram, e que se tornou a pedra angular’.</p>
                <p>12 - Não há salvação em nenhum outro, pois, debaixo do céu não há nenhum outro nome dado aos homens pelo qual devamos ser salvos".</p>
                <p>13 - Vendo a coragem de Pedro e de João, e percebendo que eram homens comuns e sem instrução, ficaram admirados e reconheceram que eles haviam estado com Jesus.</p>

                <p><b>Atos 4:29-31</b></p>
                <p>29 - Agora, Senhor, considera as ameaças deles e capacita os teus servos para anunciarem a tua palavra corajosamente.</p>
                <p>30 - Estende a tua mão para curar e realizar sinais e maravilhas por meio do nome do teu santo servo Jesus".
                <p>31 - Depois de orarem, tremeu o lugar em que estavam reunidos; todos ficaram cheios do Espírito Santo e anunciavam corajosamente a palavra de Deus.<p>

                <p><b>Atos 20:22-24</b></p>
                <p>22 - "Agora, compelido pelo Espírito, estou indo para Jerusalém, sem saber o que me acontecerá ali, </p>
                <p>23 - senão que, em todas as cidades, o Espírito Santo me avisa que prisões e sofrimentos me esperam.</p>
                <p>24 - Todavia, não me importo, nem considero a minha vida de valor algum para mim mesmo, se tão-somente puder terminar a corrida e completar o ministério que o Senhor Jesus me confiou, de testemunhar do evangelho da graça de Deus.</p>
                `;
            break;

            case 'atos 5':
                text = `
                <p><b>Atos 5: 3-4,9</b></p>
                <p>3 - Então perguntou Pedro: "Ananias, como você permitiu que Satanás enchesse o seu coração, a ponto de você mentir ao Espírito Santo e guardar para si uma parte do dinheiro que recebeu pela propriedade?</p>
                <p>4 - Ela não lhe pertencia? E, depois de vendida, o dinheiro não estava em seu poder? O que o levou a pensar em fazer tal coisa? Você não mentiu aos homens, mas sim a Deus".</p>
                <p>9 - Pedro lhe disse: "Por que vocês entraram em acordo para tentar o Espírito do Senhor? Veja! Estão à porta os pés dos que sepultaram seu marido, e eles a levarão também".</p>
                `;
            break;
            
            case 'atos 6.3.15.6':
                text = `
                <p><b>Atos 6:3</b></p>
                <p>3 - Irmãos, escolham entre vocês sete homens de bom testemunho, cheios do Espírito e de sabedoria. Passaremos a eles essa tarefa</p>
            
                <p><b>Atos 15:28</b></p>
                <p>28 - Pareceu bem ao Espírito Santo e a nós não impor a vocês nada além das seguintes exigências necessárias:</p>

                <p><b>Atos 6:6-10</b></p>
                <p>6 - Apresentaram esses homens aos apóstolos, os quais oraram e lhes impuseram as mãos.
                <p>7 - Assim, a palavra de Deus se espalhava. Crescia rapidamente o número de discípulos em Jerusalém; também um grande número de sacerdotes obedecia à fé.
                <p>8 - Estêvão, homem cheio da graça e do poder de Deus, realizava grandes maravilhas e sinais entre o povo.
                <p>9 - Contudo, levantou-se oposição dos membros da chamada Sinagoga dos Libertos, dos judeus de Cirene e de Alexandria, bem como das províncias da Cilícia e da Ásia. Esses homens começaram a discutir com Estêvão,
                <p>10 - mas não podiam resistir à sabedoria e ao Espírito com que ele falava.</p>
                `;
            break;
            
            case 'atos 9.31':
                text = `
                <p><b>Atos 9:31</b></p>
                <p>31 A igreja passava por um período de paz em toda a Judéia, Galiléia e Samaria. Ela se edificava e, encorajada pelo Espírito Santo, crescia em número, vivendo no temor do Senhor.</p>
                `;
            break;

            case 'atos 13.14':
                text = `
                <p><b>Atos 13:1-4</b></p>
                <p>1 - Na igreja de Antioquia havia profetas e mestres: Barnabé, Simeão, chamado Níger, Lúcio de Cirene, Manaém, que fora criado com Herodes, o tetrarca, e Saulo.</p>
                <p>2 - Enquanto adoravam ao Senhor e jejuavam, disse o Espírito Santo: "Separem-me Barnabé e Saulo para a obra a que os tenho chamado".</p>
                <p>3 - Assim, depois de jejuar e orar, impuseram-lhes as mãos e os enviaram.</p>
                <p>4 - Enviados pelo Espírito Santo, desceram a Selêucia e dali navegaram para Chipre.</p>

                <p><b>Atos 14:26-27</b></p>
                <p></p>
                <p>26 - De Atália navegaram de volta a Antioquia, onde tinham sido recomendados à graça de Deus para a missão que agora haviam completado.</p>
                <p>27 - Chegando ali, reuniram a igreja e relataram tudo o que Deus tinha feito por meio deles e como abrira a porta da fé aos gentios.</p>
                `;
            break;

            case 'atos 20.28':
                text = `
                <p><b>Atos 20:28</b></p>
                <p>28 - Cuidem de vocês mesmos e de todo o rebanho sobre o qual o Espírito Santo os colocou como bispos, para pastorearem a igreja de Deus, que ele comprou com o seu próprio sangue.</p>
                `;
            break;

            case 'gn 12.3':
                text = `
                <p><b> Gênesis 12:3</b></p>
                <p>3 - Abençoarei os que o abençoarem, e amaldiçoarei os que o amaldiçoarem; e por meio de você todos os povos da terra serão abençoados".</p>
                `;
            break;

            case 'atos 8.26':
                text = `
                <p><b>Atos 8:</b></p>
                <p>26 - Um anjo do Senhor disse a Filipe: "Vá para o sul, para a estrada deserta que desce de Jerusalém a Gaza".</p>
                <p>29 - E o Espírito disse a Filipe: "Aproxime-se dessa carruagem e acompanhe-a".</p>
                <p>39 - Quando saíram da água, o Espírito do Senhor arrebatou Filipe repentinamente. O eunuco não o viu mais e, cheio de alegria, seguiu o seu caminho.</p>
                
                `;
            break;

            case 'atos 10.11':
                text = `
                <p><b> Atos 10:19-20</b></p>
                <p>19 - Enquanto Pedro ainda estava pensando na visão, o Espírito lhe disse: "Simão, três homens estão procurando por você.</p>
                <p>20 - Portanto, levante-se e desça. Não hesite em ir com eles, pois eu os enviei".</p>
                
                <p><b>Atos 11:12</b></p>
                <p>12 O Espírito me disse que não hesitasse em ir com eles. Estes seis irmãos também foram comigo, e entramos na casa de um certo homem.</p>
                `;
            break;

            case 'atos 2co':
                text = `
                <p><b>Atos 13: 2-4</b></p>
                <p>2 - Enquanto adoravam ao Senhor e jejuavam, disse o Espírito Santo: "Separem-me Barnabé e Saulo para a obra a que os tenho chamado".</p>
                <p>3 - Assim, depois de jejuar e orar, impuseram-lhes as mãos e os enviaram.</p>
                <p>4 - Enviados pelo Espírito Santo, desceram a Selêucia e dali navegaram para Chipre.</p>

                <p><b>2 Coríntios 10:16</b></p>
                <p>16 - para que possamos pregar o evangelho nas regiões que estão além de vocês, sem nos vangloriarmos de trabalho já realizado em território de outro.</p>
                `;
            break;

            case 'atos 16.6-10':
                text = `
                <p><b>Atos 16:6-10</b></p>
                <p>6 - Paulo e seus companheiros viajaram pela região da Frígia e da Galácia, tendo sido impedidos pelo Espírito Santo de pregar a palavra na província da Ásia. </p>
                <p>7 - Quando chegaram à fronteira da Mísia, tentaram entrar na Bitínia, mas o Espírito de Jesus os impediu.
                <p>8 - Então, contornaram a Mísia e desceram a Trôade.</p>
                <p>9 - Durante a noite Paulo teve uma visão, na qual um homem da Macedônia estava em pé e lhe suplicava: "Passe à Macedônia e ajude-nos".</p>
                <p>10 - Depois que Paulo teve essa visão, preparamo-nos imediatamente para partir para a Macedônia, concluindo que Deus nos tinha chamado para lhes pregar o evangelho.</p>
                `;
            break;

            case 'atos 2.4-11':
                text = `
                <p><b>Atos 2:4-11</b></p>
                <p>4 - Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava.</p>
                <p>5 - Havia em Jerusalém judeus, tementes a Deus, vindos de todas as nações do mundo.</p>
                <p>6 - Ouvindo-se este som, ajuntou-se uma multidão que ficou perplexa, pois cada um os ouvia falar em sua própria língua.</p>
                <p>7 - Atônitos e maravilhados, eles perguntavam: "Acaso não são galileus todos estes homens que estão falando?</p>
                <p>8 - Então, como os ouvimos, cada um de nós, em nossa própria língua materna?</p>
                <p>9 - Partos, medos e elamitas; habitantes da Mesopotâmia, Judéia e Capadócia, Ponto e da província da Ásia,</p>
                <p>10 - Frígia e Panfília, Egito e das partes da Líbia próximas a Cirene; visitantes vindos de Roma,</p>
                <p>11 - tanto judeus como convertidos ao judaísmo; cretenses e árabes. Nós os ouvimos declarar as maravilhas de Deus em nossa própria língua! "</p>
                `;
            break;

            case 'atos 6.8.11':
                text = `
                <p><b>Atos 6:7</b></p>
                <p>7 Assim, a palavra de Deus se espalhava. Crescia rapidamente o número de discípulos em Jerusalém; também um grande número de sacerdotes obedecia à fé.</p>

                <p><b>Atos 8:1-4</b></p>
                <p>1 - E Saulo estava ali, consentindo na morte de Estêvão. Naquela ocasião desencadeou-se grande perseguição contra a igreja em Jerusalém. Todos, exceto os apóstolos, foram dispersos pelas regiões da Judéia e de Samaria.</p>
                <p>2 - Alguns homens piedosos sepultaram Estêvão e fizeram por ele grande lamentação.</p>
                <p>3 - Saulo, por sua vez, devastava a igreja. Indo de casa em casa, arrastava homens e mulheres e os lançava na prisão.</p>
                <p>4 - Os que haviam sido dispersos pregavam a palavra por onde quer que fossem.</p>

                <p><b>Atos 11: 19-26</b></p>
                <p>19 - Os que tinham sido dispersos por causa da perseguição desencadeada com a morte de Estêvão chegaram até à Fenícia, Chipre e Antioquia, anunciando a mensagem apenas aos judeus.</p>
                <p>20 -  Alguns deles, todavia, cipriotas e cireneus, foram a Antioquia e começaram a falar também aos gregos, contando-lhes as boas novas a respeito do Senhor Jesus.</p>
                `;
            break;

            case 'rm 15 co.10':
                text = `
                <p><b>Romanos 15:18-19 </b></p>
                <p>18 - Não me atrevo a falar de nada, exceto daquilo que Cristo realizou por meu intermédio em palavra e em ação, a fim de levar os gentios a obedecerem a Deus:</p>
                <p>19 - pelo poder de sinais e maravilhas e por meio do poder do Espírito de Deus. Assim, desde Jerusalém e arredores, até o Ilírico, proclamei plenamente o evangelho de Cristo.</p>

                <p><b>2 Coríntios 10:16</b></p>
                <p>16 para que possamos pregar o evangelho nas regiões que estão além de vocês, sem nos vangloriarmos de trabalho já realizado em território de outro.</p>
                `;
            break;

            case 'atos 8.9-17':
                text = `
                <p><b>Atos 8:17</b></p>
                <p>17 - Então Pedro e João lhes impuseram as mãos, e eles receberam o Espírito Santo.</p>

                <p><b>Atos 9:17</b></p>
                <p>17 Então Ananias foi, entrou na casa, impôs as mãos sobre Saulo e disse: "Irmão Saulo, o Senhor Jesus, que lhe apareceu no caminho por onde você vinha, enviou-me para que você volte a ver e seja cheio do Espírito Santo".</p>
                `;
            break;

            case 'atos 10.11-15':
                text = `
                <p><b>Atos 10:44</b></p>
                <p>44 - Enquanto Pedro ainda estava falando estas palavras, o Espírito Santo desceu sobre todos os que ouviam a mensagem.</p>

                <p><b>Atos 11:15-18</b></p>
                <p></p>
                <p>15 - "Quando comecei a falar, o Espírito Santo desceu sobre eles como sobre nós no princípio.</p>
                <p>16 - Então me lembrei do que o Senhor tinha dito: ‘João batizou com água, mas vocês serão batizados com o Espírito Santo’.</p>
                <p>17 - Se, pois, Deus lhes deu o mesmo dom que nos dera quando cremos no Senhor Jesus Cristo, quem era eu para pensar em opor-me a Deus? "</p>
                <p>18 - Ouvindo isso, não apresentaram mais objeções e louvaram a Deus, dizendo: "Então, Deus concedeu arrependimento para a vida até mesmo aos gentios! "</p>
                `;
            break;

            case 'ef 5.18':
                text = `
                <p><b> Efésios 5:18</b></p>
                <p>18 - Não se embriaguem com vinho, que leva à libertinagem, mas deixem-se encher pelo Espírito,</p>
                `;
            break;

            case 'atos 2.4':
                text = `
                <p><b>Atos 2:4</b></p>
                <p>4 Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava.</p>
                `;
            break;

            case 'atos 4.31':
                text = `
                <p><b>Atos 4:31</b></p>
                <p>31 - Depois de orarem, tremeu o lugar em que estavam reunidos; todos ficaram cheios do Espírito Santo e anunciavam corajosamente a palavra de Deus.</p>
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
