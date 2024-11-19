const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);


pizzas.map((item, index) =>{
   let pizzaDiv = qs('.pizza').cloneNode(true);
   pizzaDiv.setAttribute('data-key', index)
   pizzaDiv.querySelector('.pizza-img').src = `src/images/${item.img}`;
   pizzaDiv.querySelector('.pizza-name').innerHTML = item.name;
   pizzaDiv.querySelector('.pizza-price').innerHTML = item.price[2];
   pizzaDiv.querySelector('.pizza-desc').innerHTML = item.description;
   qs('.pizza-area').append(pizzaDiv)
})