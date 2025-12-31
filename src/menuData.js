// Menu data for Agua na Boca restaurant

const menuData = {
  "CALZONES": [
    {
      name: "CALZONE DE FRANGO",
      price: { P: "5.000,00", M: "6.000,00", G: "7.000,00" },
      description: "Frango, chouriço, queijo, tomate, cebola, azeitona, cogumelo, pimentos e milho doce.",
      image: "/snack/calzonefrango.jpeg",
    },
    {
      name: "CALZONE DE CARNE",
      price: { P: "5.000,00", M: "6.000,00", G: "7.000,00" },
      description: "Carne moída, chouriço, queijo, tomate, cebola, cogumelo, azeitona, pimento e milho doce.",
      image: "/snack/calzonecarne.jpeg",
    },
    {
      name: "CALZONE MISTA",
      price: { P: "6.000,00", M: "7.000,00", G: "8.000,00" },
      description: "Carne moída, frango, chouriço, queijo, tomate, cebola, cogumelo, azeitona, pimento e milho doce.",
      image: "/snack/calzonemista.jpeg",
    },
    {
      name: "CALZONE DE CAMARÃO",
      price: { P: "6.000,00", M: "7.000,00", G: "8.000,00" },
      description: "Camarão, queijo, pimento, cebola, azeitona e cogumelo.",
      image: "/snack/calzonecama.jpeg",
    },
    {
      name: "CALZONE DE ATUM",
      price: { P: "5.000,00", M: "6.000,00", G: "8.000,00" },
      description: "Queijo, azeitona, pimento, cebola, tomate, milho doce, atum.",
      image: "/snack/calzoneatum.jpeg",
    },
  ],

  "PIZZAS": [
    {
      name: "PIZZA MINI",
      price: "2.000,00",
      description: "Pizza individual de tamanho pequeno, ideal para uma pessoa.",
      image: "/snack/pizza.jpeg",
    },
    {
      name: "PIZZA ÁGUA NA BOCA",
      price: { P: "7.000,00", M: "10.000,00", G: "12.000,00" },
      description: "Frango, chouriço, ovo, fiambre, bacon, queijo, azeitona, pimenta, cebola, milho doce e cogumelo.",
      image: "/snack/pizza.jpeg",
    },
    {

      name: "PIZZA BOLONHESA",
      price: { P: "8.000,00", M: "10.000,00", G: "12.000,00" },
      description: "Carne moída, cogumelo, queijo, milho doce e azeitona.",
      image: "/snack/pizzabolonhesa.jpeg",
    },
    {
      name: "PIZZA CAPRICHOSA",
      price: { P: "8.000,00", M: "10.000,00", G: "12.000,00" },
      description: "Chouriço, frango, bacon, fiambre, queijo, milho doce e cogumelo.",
      image: "/snack/pizzacapri.jpeg",
    },
    {
      name: "PIZZA CAMARÃO",
      price: { P: "9.000,00", M: "11.000,00", G: "14.000,00" },
      description: "Camarão, pimento, cebola, queijo, azeitona e cogumelo.",
      image: "/snack/pizzamaca.jpeg",
    },
    {
      name: "PIZZA MARGARIDA",
      price: { P: "6.000,00", M: "7.000,00", G: "9.000,00" },
      description: "Queijo e azeitona.",
      image: "/snack/pizzamarga.jpeg",
    },
    {
      name: "PIZZA VEGETARIANA",
      price: { P: "7.000,00", M: "8.000,00", G: "10.000,00" },
      description: "Cogumelo, azeitona, pimento, cebola, milho doce e tomate.",
      image: "/snack/pizzavege.jpeg",
    },
    {
      name: "PIZZA CARBONARA",
      price: { P: "8.000,00", M: "10.000,00", G: "12.000,00" },
      description: "Frango, bacon, milho doce, ovo e cogumelo.",
      image: "/snack/pizzacarbo.jpeg",
    },
    {
      name: "PIZZA DE ATUM",
      price: { P: "8.000,00", M: "10.000,00", G: "12.000,00" },
      description: "Atum, cogumelo, pimentos, cebola, tomate, milho doce e azeitona.",
      image: "/snack/pizza.jpeg",
    },
  ],

  "FAHITAS": [
    {
      name: "FAHITA ÁGUA NA BOCA",
      price: "5.000,00",
      description: "Frango, chouriço, ovo, fiambre, bacon, azeitona, pimenta, cebola, milho doce, cogumelo e batata frita.",
      image: "/snack/fahitaagua.jpeg",
    },
    {
      name: "FAHITA DE CARNE",
      price: "2.500,00",
      description: "Carne moída, cogumelo, milho doce, azeitona e batata frita.",
      image: "/snack/fahitacarne.jpeg",
    },
    {
      name: "FAHITA FRANGO",
      price: "2.500,00",
      description: "Chouriço, frango, bacon, fiambre, milho doce, cogumelo e batata frita.",
      image: "/snack/fahitafrango.jpeg",
    },
    {
      name: "FAHITA MISTA",
      price: "3.000,00",
      description: "Camarão, pimento, cebola, azeitona e cogumelo e batata frita.",
      image: "/snack/fahitamista.jpeg",
    },
  ],

  "HAMBURGUERES": [
    {
      name: "HAMBÚRGUER SIMPLES",
      price: "2.500,00",
      popular: true,
      description: "Carne de vaca, pão, ovo, salada e molhos.",
      image: "/snack/hambusimples.jpeg",
    },

    {
      name: "HAMBÚRGUER COMPOSTO",
      price: "3.000,00",
      description: "Carne, pão e ovo.",
      image: "/snack/hambucomposto.jpeg",
    },
    {
      name: "HAMBÚRGUER ÁGUA NA BOCA",
      price: "4.000,00",
      description: "Carne de vaca, pão, ovo, salada, molhos, fiambre, queijo, bacon e batata frita.",
      image: "/snack/hambuagua.jpeg",
    },
    {
      name: "CACHORRO ÁGUA NA BOCA",
      price: "2.000,00",
      description: "Pão, salsicha, batata palha e molhos.",
      image: "/snack/cachorro.jpeg",
    },
    {
      name: "BIFANA NO PÃO",
      price: "3.500,00",
      description: "Carne de porco, pão e ovo.",
      image: "/snack/bifananopao.jpeg",
    },
    {
      name: "PREGO NO PÃO",
      price: "2.500,00",
      description: "Carne de vaca, pão, ovo, salada, molhos, fiambre e batata frita.",
      image: "/snack/pregonopao.jpeg",
    },
    {
      name: "OMELETE SIMPLES",
      price: "1.800,00",
      description: "Ovo, cebola e salsa.",
      image: "/cafetaria/omcomposta.jpg",
    },
    {
      name: "OMELETE MISTA",
      price: "2.500,00",
      description: "Ovo, cebola, salsa, carne/frango, queijo e fiambre.",
      image: "/cafetaria/omelete.jpg",
    },

  ],

  // "CAFETARIA": [
  //   {
  //     name: "CAFÉ",
  //     price: "650,00",
  //     description: "Um café expresso tradicional, encorpado e aromático.",
  //     image: "/cafetaria/cafe.jpg",
  //   },
  //   {
  //     name: "CARIOCA",
  //     price: "650,00",
  //     description: "Um café mais suave e menos concentrado.",
  //     image: "/cafetaria/cafe-duplo.jpeg",
  //   },
  //   {
  //     name: "DESCAFEINADO",
  //     price: "800,00",
  //     description: "Café descafeinado para quem prefere evitar a cafeína sem perder o sabor.",
  //     image: "/cafetaria/cafe-cheiro.jpeg",
  //   },
  //   {
  //     name: "GALÃO",
  //     price: "750,00",
  //     description: "Bebida tradicional com uma generosa dose de leite e café, ideal para manhãs relaxantes.",
  //     image: "/cafetaria/galao.jpg",
  //   },
  //   {
  //     name: "CHÁ",
  //     price: "650,00",
  //     description: "Chá aromático preparado com folhas selecionadas, leve e refrescante.",
  //     image: "/cafetaria/cha.jpeg",
  //   },
  //   {
  //     name: "CHÁ NATURAL",
  //     price: "1.000,00",
  //     description: "Chá preparado com ervas naturais frescas e aromáticas.",
  //     image: "/cafetaria/cha-cheiro.jpeg",
  //   },
  //   {
  //     name: "COPO DE LEITE",
  //     price: "800,00",
  //     description: "Leite fresco e cremoso servido em copo.",
  //     image: "/cafetaria/leite-choco.jpeg",
  //   },
  //   {
  //     name: "CAFÉ COM CHEIRINHO",
  //     price: "1.000,00",
  //     description: "Café aromatizado com um toque especial que desperta os sentidos.",
  //     image: "/cafetaria/cafe-cheiro.jpeg",
  //   },
  // ],

  // "ENTRADAS e PETISCOS": {
  //   "ENTRADAS": [
  //     {
  //       name: "AZEITONA AO ALHO",
  //       price: "1.000,00",
  //       description: "Azeitonas marinadas com alho, oferecendo um toque mediterrâneo e sabor intenso.",
  //       image: "/entradas/azeitonas-alho.jpeg",
  //     },
  //     {
  //       name: "GINGUBA",
  //       price: "1.000,00",
  //       description: "Ginguba torrada, um petisco crocante e tradicional com sabor marcante.",
  //       image: "/entradas/ginguba.jpg",
  //     },
  //     {
  //       name: "TORRESMO",
  //       price: "750,00",
  //       description: "Torresmos dourados e crocantes, perfeitos para os apreciadores de sabores intensos.",
  //       image: "/entradas/torresmos.jpeg",
  //     },
  //     {
  //       name: "TREMOÇO",
  //       price: "1.000,00",
  //       description: "Tremoços conservados, um petisco tradicional leve e saboroso.",
  //       image: "/entradas/tremossos.jpeg",
  //     },
  //     {
  //       name: "LULU BATATA FRITA",
  //       price: "750,00",
  //       description: "Batatas fritas crocantes da casa, ideais para partilhar.",
  //       image: "/entradas/lulu.jpeg",
  //     },
  //     {
  //       name: "COCHINHA",
  //       price: "350,00",
  //       description: "Salgadinhos crocantes recheados com frango desfiado e temperado.",
  //       image: "/entradas/cochinha.jpeg",
  //     },
  //     {
  //       name: "CROQUETE",
  //       price: "400,00",
  //       description: "Croquetes tradicionais de carne, crocantes por fora e macios por dentro.",
  //       image: "/entradas/croquetes.jpg",
  //     },
  //     {
  //       name: "RISSÓIS",
  //       price: "400,00",
  //       description: "Rissóis caseiros com recheios variados, ideais para petiscar.",
  //       image: "/entradas/rissois.jpg",
  //     },
  //     {
  //       name: "ENROLADINHOS",
  //       price: "200,00",
  //       description: "Enroladinhos crocantes com recheio saboroso, perfeitos para acompanhar uma bebida.",
  //       image: "/entradas/enroladinho.jpeg",
  //     },
  //     {
  //       name: "TORRADAS",
  //       price: "1.000,00",
  //       description: "Torradas crocantes e douradas, ideais para acompanhar entradas ou café.",
  //       image: "/entradas/torrada.jpeg",
  //     },
  //     {
  //       name: "SOPA DE FEIJÃO",
  //       price: "1.000,00",
  //       description: "Sopa de feijão caseira, reconfortante e nutritiva.",
  //       image: "/entradas/sopafeijao.jpeg",
  //     },
  //     {
  //       name: "SOPA DE LEGUMES",
  //       price: "1.000,00",
  //       description: "Sopa de legumes frescos da estação, leve e saudável.",
  //       image: "/entradas/sopalegumes.jpeg",
  //     },

  //   ],
  //   "PETISCOS": [
  //     {
  //       name: "PICA PAU",
  //       price: "5.000,00",
  //       description: "Petisco típico com pedaços de carne salteados com pickles e molho especial.",
  //       image: "/petisco/pica-pau.jpeg",
  //     },
  //     {
  //       name: "CHOURIÇO CASEIRO",
  //       price: "4.000,00",
  //       description: "Chouriço caseiro artesanal, com sabor defumado e tempero inigualável.",
  //       image: "/petisco/chouriço-caseiro.jpeg",
  //     },
  //     {
  //       name: "ASINHAS PANADAS",
  //       price: "4.500,00",
  //       description: "Asinhas de frango empanadas e fritas até ficarem crocantes e douradas.",
  //       image: "/petisco/asinhas-fritas.jpeg",
  //     },
  //     {
  //       name: "DOBRADINHA",
  //       price: "2.500,00",
  //       description: "Dobradinha à moda tradicional, um petisco robusto e cheio de sabor.",
  //       image: "/petisco/dobradinha.jpeg",
  //     },
  //     {
  //       name: "CHOCO FRITO",
  //       price: "3.000,00",
  //       description: "Choco frito crocante, tenro por dentro e com tempero especial.",
  //       image: "/petisco/choco.jpeg",
  //     },
  //     {
  //       name: "FRANGO A PASSARINHO",
  //       price: "3.000,00",
  //       description: "Pedaços de frango frito crocante, temperados com ervas finas.",
  //       image: "/petisco/passarinho.jpg",
  //     },
  //     {
  //       name: "MÃO DE VACA",
  //       price: "3.000,00",
  //       description: "Mão de vaca suculenta, preparada com temperos clássicos para realçar seu sabor.",
  //       image: "/petisco/mao-vaca.jpeg",
  //     },
  //   ],
  // },

  "PRATOS de CARNE": {
    "PRATOS DE CARNE ": [
      {
        name: "PREGO NO PRATO",
        price: "5.000,00",
        description: "Bife tenro servido no prato com acompanhamentos tradicionais.",
        image: "/carne/pregono.jpg",
      },
      {
        name: "CHOURIÇO C. COMPOSTO",
        price: "5.500,00",
        description: "Chouriço caseiro grelhado servido com acompanhamentos variados.",
        image: "/carne/c.composto.jpeg",
      },
      {
        name: "BITOQUE",
        price: "7.000,00",
        description: "Clássico bitoque com bife de vaca, ovo estrelado e batatas fritas.",
        image: "/carne/bitoque.jpg",
      },
      {
        name: "CHURRASCO G. NACIONAL",
        price: "6.000,00",
        description: "Churrasco grelhado à moda nacional, suculento e temperado.",
        image: "/carne/churras.jpeg",
      },
      {
        name: "CHURRASCO G. NUA",
        price: "5.000,00",
        description: "Churrasco grelhado servido simples, destacando o sabor natural da carne.",
        image: "/carne/churras.jpeg",
      },
      {
        name: "BIFE GRELHADO",
        price: "7.000,00",
        description: "Bife de vaca grelhado no ponto, suculento e saboroso.",
        image: "/carne/bife.jpeg",
      },
      {
        name: "COSTULETA DE PORCO GR",
        price: "7.000,00",
        description: "Costuleta de porco grelhada com temperos tradicionais.",
        image: "/carne/entrecosto-porco.jpeg",
      },
      {
        name: "FEBRAS DE PORCO",
        price: "7.000,00",
        description: "Febras de porco grelhadas no ponto, suculentas e temperadas.",
        image: "/carne/febra-grill.jpg",
      },
      {
        name: "PICANHA",
        price: "12.000,00",
        description: "Picanha premium grelhada, suculenta e saborosa.",
        image: "/carne/picanha-brasa.jpeg",
      },
      {
        name: "ESPETADA",
        price: "6.000,00",
        description: "Espetada de carne com legumes grelhados e temperos especiais.",
        image: "/carne/espetada.jpeg",
      },
      {
        name: "BIFANA NO PRATO",
        price: "5.000,00",
        description: "Bifanas suculentas servidas no prato com acompanhamentos.",
        image: "/carne/bifanas-casa.jpeg",
      },
      {
        name: "FRANGO GRELHADO",
        price: "4.500,00",
        description: "Frango grelhado tenro e suculento com temperos especiais.",
        image: "/carne/frango-grill.jpg",
      },
      {
        name: "GRELHADA MISTA",
        price: "12.000,00",
        description: "Seleção de carnes grelhadas variadas para os amantes de carne.",
        image: "/carne/tabua-mista.jpeg",
      },
      {
        name: "MASSA BOLONHESA",
        price: "6.000,00",
        description: "Massa com molho bolonhesa caseiro, rico e saboroso.",
        image: "/carne/massa-bolonhesa.jpeg",
      },
    ],
  },

  "PRATOS DE PEIXE": {
    "PRATOS DE PEIXE": [
      {
        name: "LULAS GRELHADAS",
        price: "7.000,00",
        description: "Lulas frescas grelhadas com temperos mediterrâneos.",
        image: "/peixe/lulas-grelha.jpeg",
      },
      {
        name: "COZIDO DE PEIXE GRE",
        price: "5.500,00",
        description: "Cozido de peixe fresco com legumes da época.",
        image: "/peixe/cozido-peixe.jpg",
      },
      {
        name: "ARROZ DE MARISCO",
        price: "10.000,00",
        description: "Arroz cremoso com variedade de mariscos frescos.",
        image: "/peixe/arrozmarisco.jpeg",
      },
      {
        name: "BACALHAU À GOMES DE SÁ",
        price: "12.000,00",
        description: "Bacalhau tradicional à Gomes de Sá, com batatas, cebolas e azeite.",
        image: "/peixe/bacalhau-lagreiro.jpeg",
      },
    ],
  },



  "TOSTAS E SANDES": [
    {
      name: "SANDES DE ATUM",
      price: "2.000,00",
      description: "Sanduíche de atum fresco com maionese e legumes.",
      image: "/cafetaria/sandes-atum.jpeg",
    },
    {
      name: "SANDES MISTA",
      price: "1.500,00",
      description: "Sanduíche com queijo e fiambre, clássica e saborosa.",
      image: "/cafetaria/sandes-fiambre.jpeg",
    },
    {
      name: "SANDES DE OMOLETE",
      price: "1.800,00",
      description: "Sanduíche com omelete fresca, leve e nutritiva.",
      image: "/cafetaria/sandes-qjopre.jpeg",
    },
    {
      name: "SANDES DE OVO ESTRELADO",
      price: "1.000,00",
      description: "Sanduíche com ovo estrelado, simples e deliciosa.",
      image: "/cafetaria/sandes-ovo.jpeg",
    },
    {
      name: "SANDES PEITO DE FRANGO",
      price: "3.000,00",
      description: "Sanduíche com peito de frango grelhado e legumes frescos.",
      image: "/cafetaria/sandes-frango.jpeg",
    },
    {
      name: "SANDES DE QUEIJO",
      price: "1.000,00",
      description: "Sanduíche simples de queijo, clássica e saborosa.",
      image: "/cafetaria/sandes-qjofia.jpeg",
    },
    {
      name: "TOSTA DE ATUM",
      price: "2.000,00",
      description: "Tosta com atum e queijo derretido, crocante e saborosa.",
      image: "/cafetaria/tosta-atum.jpeg",
    },
    {
      name: "TOSTA DE FRANGO",
      price: "2.000,00",
      description: "Tosta com frango desfiado e queijo derretido.",
      image: "/cafetaria/tosta-carne.jpg",
    },
    {
      name: "TOSTA MISTA",
      price: "1.800,00",
      description: "Tosta com queijo e fiambre, clássica e dourada.",
      image: "/cafetaria/tosta-mista.jpg",
    },
    {
      name: "MAGOGA ÁGUA NA BOCA",
      price: "3.000,00",
      description: "Sanduíche especial da casa com ingredientes selecionados.",
      image: "/tostas/magoga.jpg",
    },
  ],

  "SOBREMESAS": [
    {
      name: "ARROZ DOCE",
      price: "1.000,00",
      description: "Arroz doce cremoso com canela, uma sobremesa tradicional e reconfortante.",
      image: "/snack/arrozdoce.jpeg",
    },
    {
      name: "BOLO CASEIRO (FATIA)",
      price: "750,00",
      description: "Fatia de bolo caseiro do dia, fresco e saboroso.",
      image: "/snack/bolo.jpeg",
    },
    {
      name: "MUSSE",
      price: "1.500,00",
      description: "Musse leve e cremosa em diversos sabores.",
      image: "/sobremesa/mousses.jpeg",
    },
    {
      name: "PUDIM",
      price: "1.000,00",
      description: "Pudim cremoso tradicional com calda de caramelo.",
      image: "/sobremesa/pudim.jpg",
    },
    {
      name: "SALADA DE FRUTA",
      price: "1.500,00",
      description: "Salada de frutas frescas da estação, refrescante e saudável.",
      image: "/sobremesa/salada-fruta.jpeg",
    },
    {
      name: "BISCOITOS",
      price: "200,00",
      description: "Biscoitos caseiros crocantes, perfeitos para acompanhar café.",
      image: "/sobremesa/bolo-bolacha.jpeg",
    },
    {
      name: "BOLO GINGUBA (FATIA)",
      price: "1.000,00",
      description: "Fatia de bolo de ginguba (amendoim), tradicional e saboroso.",
      image: "/snack/bolo.jpeg",
    },
    {
      name: "BOLO CHOCOLATE (FATIA)",
      price: "1.500,00",
      description: "Fatia de bolo de chocolate rico e indulgente.",
      image: "/snack/bolochoco.jpeg",
    },
  ],


  "BEBIDAS": {
    // "CERVEJAS": [
    //   {
    //     name: "BOOSTER CIDER GARRAFA",
    //     price: "500,00",
    //     description: "Cerveja Booster Cider em garrafa, refrescante e com sabor de cidra.",
    //     image: "/bebidas/booster-cider.jpg",
    //   },
    //   {
    //     name: "BOOSTER MANGA GARRAFA",
    //     price: "500,00",
    //     description: "Cerveja Booster sabor manga em garrafa, refrescante e tropical.",
    //     image: "/bebidas/booster-manga.jpg",
    //   },
    //   {
    //     name: "BOOSTER CIDER LATA",
    //     price: "800,00",
    //     description: "Cerveja Booster Cider em lata, prática e refrescante.",
    //     image: "/bebidas/booster-lata.jpg",
    //   },
    //   {
    //     name: "BOOSTER MANGA LATA",
    //     price: "800,00",
    //     description: "Cerveja Booster sabor manga em lata, ideal para dias quentes.",
    //     image: "/bebidas/booster-manga-l.jpg",
    //   },
    //   {
    //     name: "BOOSTER MORANGO LATA",
    //     price: "800,00",
    //     description: "Cerveja Booster sabor morango em lata, doce e refrescante.",
    //     image: "/bebidas/booster-lata.jpg",
    //   },
    //   {
    //     name: "N'GOLA",
    //     price: "500,00",
    //     description: "Cerveja nacional N'Gola, refrescante e de sabor característico.",
    //     image: "/bebidas/cuca-g.jpg",
    //   },
    //   {
    //     name: "CUCA GARRAFA",
    //     price: "500,00",
    //     description: "Cerveja Cuca em garrafa, uma das marcas mais populares.",
    //     image: "/bebidas/cuca-g.jpg",
    //   },
    //   {
    //     name: "EKA GARRAFA",
    //     price: "500,00",
    //     description: "Cerveja EKA em garrafa, refrescante e de qualidade.",
    //     image: "/bebidas/eka.jpg",
    //   },
    //   {
    //     name: "DOPPEL GARRAFA",
    //     price: "500,00",
    //     description: "Cerveja Doppel em garrafa, com sabor encorpado e aroma distintivo.",
    //     image: "/bebidas/doppel.jpg",
    //   },
    //   {
    //     name: "GORDON LATA",
    //     price: "800,00",
    //     description: "Cerveja Gordon em lata, refrescante e prática.",
    //     image: "/bebidas/gordon.jpg",
    //   },
    // ], 

    "SUMOS": [

      {
        name: "SUMOL LATA",
        price: "800,00",
        description: "Refrigerante Sumol em lata, sabores variados e refrescantes.",
        image: "/bebidas/sumollata.jpeg",
      },
      {
        name: "SUMOL GARRAFA",
        price: "500,00",
        description: "Refrigerante Sumol em garrafa, com variedade de sabores frutados.",
        image: "/bebidas/sumolgarrafa.jpeg",
      },
      {
        name: "COMPAL LATA",
        price: "1.000,00",
        description: "Néctar de frutas Compal em lata, natural e saboroso.",
        image: "/bebidas/compallata.jpeg",
      },
      // {
      //   name: "COMPAL GARRAFA",
      //   price: "500,00",
      //   description: "Néctar de frutas Compal em garrafa, uma opção saudável e refrescante.",
      //   image: "/bebidas/compalgarrafa.jpeg",
      // },
      {
        name: "COMPAL 1L",
        price: "1.500,00",
        description: "Néctar de frutas Compal em embalagem de 1L, ideal para compartilhar.",
        image: "/bebidas/compal1L.jpeg",
      },
      // {
      //   name: "SUMO NATURAL",
      //   price: "1.000,00",
      //   description: "Sumo natural de frutas da estação, refrescante e saudável.",
      //   image: "/bebidas/sumonatural.jpeg",
      // },
      // {
      //   name: "SUMO NATURAL MISTO",
      //   price: "1.200,00",
      //   description: "Sumo natural misto com combinação de frutas da estação.",
      //   image: "/bebidas/sumonaturalmisto.jpeg",
      // },
    ],

    "ÁGUAS": [
      {
        name: "ÁGUA CHELA 0.5L",
        price: "300,00",
        description: "Água mineral Chela em garrafa de 0.5L, pura e refrescante.",
        image: "/bebidas/aguachela.jpeg",
      },
      {
        name: "ÁGUA CHELA 1.5L",
        price: "500,00",
        description: "Água mineral Chela em garrafa de 1.5L, ideal para compartilhar.",
        image: "/bebidas/aguachela.jpeg",
      },
      {
        name: "ÁGUA PRECIOSA 0.5L",
        price: "300,00",
        description: "Água mineral Preciosa em garrafa de 0.5L, pura e cristalina.",
        image: "/bebidas/preciosa.png",
      },
      {
        name: "ÁGUA PRECIOSA 1.5L",
        price: "500,00",
        description: "Água mineral Preciosa em garrafa de 1.5L, prática e econômica.",
        image: "/bebidas/aguapreciosa.jpeg",
      },
      // {
      //   name: "ÁGUA COM GÁS",
      //   price: "1.900,00",
      //   description: "Água mineral com gás, refrescante e com leve efervescência.",
      //   image: "/bebidas/aguagas.jpeg",
      // },
      // {
      //   name: "ÁGUA TÓNICA",
      //   price: "800,00",
      //   description: "Água tónica, ideal para drinks ou para apreciar pura.",
      //   image: "/bebidas/aguatonica.jpeg",
      // },
    ],

    "REFRIGERANTES": [
      {
        name: "7'UP LATA",
        price: "700,00",
        description: "Refrigerante 7'UP em lata, refrescante com sabor cítrico.",
        image: "/bebidas/7uplata.jpeg",
      },
      // {
      //   name: "7'UP GARRAFA",
      //   price: "500,00",
      //   description: "Refrigerante 7'UP em garrafa, sabor limão refrescante.",
      //   image: "/bebidas/7up-g.jpg",
      // },
      {
        name: "PEPSI LATA",
        price: "700,00",
        description: "Refrigerante Pepsi em lata, sabor cola tradicional.",
        image: "/bebidas/pepsi.jpg",
      },
      // {
      //   name: "PEPSI GARRAFA",
      //   price: "500,00",
      //   description: "Refrigerante Pepsi em garrafa, refrescante e com o sabor cola clássico.",
      //   image: "/bebidas/pepsi-g.jpg",
      // },
      {
        name: "MIRINDA LATA",
        price: "700,00",
        description: "Refrigerante Mirinda em lata, refrescante e frutado.",
        image: "/bebidas/mirinda.jpg",
      },
      // {
      //   name: "MIRINDA GARRAFA",
      //   price: "500,00",
      //   description: "Refrigerante Mirinda em garrafa, com sabor frutal intenso.",
      //   image: "/bebidas/mirinda-g.jpg",
      // },
      {
        name: "TOP GARRAFA",
        price: "500,00",
        description: "Refrigerante Top em garrafa, sabor único e refrescante.",
        image: "/bebidas/top.jpg",
      },
      {
        name: "SPEED",
        price: "800,00",
        description: "Bebida energética Speed, ideal para momentos que exigem energia extra.",
        image: "/bebidas/speed.jpeg",
      },
      {
        name: "REDBULL",
        price: "2.500,00",
        description: "Bebida energética Red Bull, revitalizante e estimulante.",
        image: "/bebidas/redbull.jpeg",
      },
      {
        name: "COCA-COLA",
        price: "1.000,00",
        description: "Refrigerante Coca-Cola, o sabor clássico mundialmente reconhecido.",
        image: "/bebidas/coca-cola.jpeg",
      },
      {
        name: "XXL",
        price: "800,00",
        description: "Bebida energética XXL, para quando você precisa de um impulso extra.",
        image: "/bebidas/xxl.jpeg",
      },
      // {
      //   name: "DRENER",
      //   price: "500,00",
      //   description: "Drener, bebida refrescante com propriedades diuréticas.",
      //   image: "/bebidas/drener.jpeg",
      // },
    ],
  },




};

// Console.log para verificar se o objeto foi criado corretamente
console.log("menuData carregado, categorias:", Object.keys(menuData).length);

// Exportação do menuData
export default menuData;
