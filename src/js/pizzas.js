const pizzas = [
  {
    "id": 1,
    "name": "Atum",
    "img": "pizzas/atum.png",
    "price": [14.49, 19.99, 29.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, atum, cebola fatiada e orégano."
  },
  {
    "id": 2,
    "name": "Banana c/ doce de Leite",
    "img": "pizzas/banan-doce-de-leite.png",
    "price": [16.5, 24.99, 29.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Banana, doce de leite, açúcar e canela."
  },
  {
    "id": 3,
    "name": "Brócolis c/ catupiry",
    "img": "pizzas/brocolis-com-catupiry.png",
    "price": [14.5, 22.99, 24.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, brócolis refogado com azeite, alho, e catupiry."
  },
  {
    "id": 4,
    "name": "Calabresa",
    "img": "pizzas/calabresa.png",
    "price": [14.5, 19.99, 27.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, calabresa fatiada, cebola fatiada e orégano."
  },
  {
    "id": 5,
    "name": "Camarão c/ catupiry",
    "img": "pizzas/camarao-c-catupiry.png",
    "price": [16.5, 25.99, 32.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, camarões ao molho, catupiry e orégano."
  },
  {
    "id": 6,
    "name": "Chocolate",
    "img": "pizzas/chocolate.png",
    "price": [14.5, 24.99, 29.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Chocolate ao leite. meio amargo com nutella"
  },
  {
    "id": 7,
    "name": "Chocolate c/ morango",
    "img": "pizzas/chocolate-com-morango.png",
    "price": [15.5, 23.99, 34.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Chocolate ao leite e morango."
  },
  {
    "id": 8,
    "name": "Coração",
    "img": "pizzas/coracao.png",
    "price": [14.5, 24.99, 29.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Coração de frango, molho, muçarela e orégano."
  },
  {
    "id": 9,
    "name": "Frango c/ catupiry",
    "img": "pizzas/frango-catupiry.png",
    "price": [14.5, 19.99, 26.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, frango desfiado, catupiry e orégano."
  },
  {
    "id": 10,
    "name": "Lombo c/ Catupiry",
    "img": "pizzas/lombo-catupiry.png",
    "price": [14.5, 23.99, 42.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Lombo canadense, catupiry, molho, muçarela e orégano."
  },
  {
    "id": 11,
    "name": "M&M's",
    "img": "pizzas/chocolate-c-mm.png",
    "price": [14.5, 22.99, 32.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Chocolate e M&M's, massa doce."
  },
  {
    "id": 12,
    "name": "Milho c/ bacon",
    "img": "pizzas/milho-com-bacon.png",
    "price": [14.5, 23.99, 42.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, milho, bacon, parmesão e orégano."
  },
  {
    "id": 13,
    "name": "Moda da casa",
    "img": "pizzas/moda-da-casa.png",
    "price": [14.5, 23.99, 38.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, milho, bacon, parmesão e orégano."
  },
  {
    "id": 14,
    "name": "Muçarela",
    "img": "pizzas/muçarela.png",
    "price": [14.5, 23.99, 32.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, milho, bacon, parmesão e orégano."
  },
  {
    "id": 15,
    "name": "Napolitana",
    "img": "pizzas/napolitana.png",
    "price": [14.5, 26.99, 33.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, tomates em rodelas, parmesão, azeitonas e orégano."
  },
  {
    "id": 16,
    "name": "Palmito",
    "img": "pizzas/palmito.png",
    "price": [14.5, 21.99, 28.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Palmito, tomate em rodelas, cogumelo, molho e orégano."
  },
  {
    "id": 17,
    "name": "Pepperoni",
    "img": "pizzas/pepperoni.png",
    "price": [14.5, 21.99, 28.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, salame pepperoni fatiado e orégano."
  },
  {
    "id": 18,
    "name": "Portuguesa",
    "img": "pizzas/portuguesa.png",
    "price": [15.5, 26.99, 35.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, presunto, calabresa, ovos, cebola, azeitonas e orégano."
  },
  {
    "id": 19,
    "name": "4 Queijos",
    "img": "pizzas/4queijos.png",
    "price": [15.5, 19.99, 47.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Molho, muçarela, provolone, parmesão, catupiry e orégano."
  },
  {
    "id": 20,
    "name": "Vegetariana",
    "img": "pizzas/vegetariana.png",
    "price": [15.5, 19.99, 47.99],
    "sizes": ["320g", "530g", "860g"],
    "description": "Brócolis, cebola, cogumelo, palmito, tomate e molho."
  }
];
