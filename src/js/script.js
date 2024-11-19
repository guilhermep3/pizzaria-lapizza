const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

pizzas.map((item, index) =>{
   let pizzaDiv = qs('.pizza').cloneNode(true);
   pizzaDiv.setAttribute('data-key', index)
   pizzaDiv.querySelector('.pizza-img').src = `src/images/${item.img}`;
   pizzaDiv.querySelector('.pizza-img').alt = item.name;
   pizzaDiv.querySelector('.pizza-name').innerHTML = item.name;
   pizzaDiv.querySelector('.pizza-price').innerHTML = `R$ ${item.price[2]}`;
   pizzaDiv.querySelector('.pizza-desc').innerHTML = item.description;
   qs('.pizza-area').append(pizzaDiv);
   qs('#menu h2').innerHTML = `Total de ${pizzas.length} pizzas`;

   pizzaDiv.addEventListener('click', ()=>{
      qs('.pizzaWindowArea').style.display = 'flex';
   })
});
function closeModal(){
   qs('.pizzaWindowArea').style.display = 'none';
}