const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

let cart = [];
let modalQt = 1;
let modalKey = 0;

pizzas.map((item, index) => {
   let pizzaDiv = qs('.pizza').cloneNode(true);
   pizzaDiv.setAttribute('data-key', index)
   pizzaDiv.querySelector('.pizza-img').src = `src/images/${item.img}`;
   pizzaDiv.querySelector('.pizza-img').alt = item.name;
   pizzaDiv.querySelector('.pizza-name').innerHTML = item.name;
   pizzaDiv.querySelector('.pizza-price').innerHTML = `R$ ${item.price[2]}`;
   pizzaDiv.querySelector('.pizza-desc').innerHTML = item.description;
   qs('.pizza-area').append(pizzaDiv);
   qs('#menu h2').innerHTML = `Total de ${pizzas.length} pizzas`;

   pizzaDiv.addEventListener('click', (e) => {
      let key = e.target.closest('.pizza').getAttribute('data-key');
      modalQt = 1;
      modalKey = key; // Pizza aberta no modal

      qs('.pizzaInfo h1').innerHTML = pizzas[key].name;
      qs('.pizza-img-modal img').src = `src/images/${pizzas[key].img}`;
      qs('.pizzaInfo--desc').innerHTML = pizzas[key].description;
      qs('.pizzaInfo--actualPrice').innerHTML = `${pizzas[
         key
      ].price[2].toLocaleString("pt-br", {
         style: "currency",
         currency: "BRL",
      })}`;
      document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
      document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
         if (sizeIndex == 2) {
            size.classList.add('selected');
         }
         size.querySelector('span').innerHTML = pizzas[key].sizes[sizeIndex];
         size.addEventListener('click', () => {
            document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
            size.classList.add('selected');
            
            // Atualiza o preço atual conforme o tamanho
            modalQt = 1;
            document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
            document.querySelector(".pizzaInfo--actualPrice").innerHTML = `${pizzas[key].price[sizeIndex].toLocaleString(
               "pt-br", { style: "currency", currency: "BRL" }
            )}`;
         });
      });
      document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;

      qs('.pizzaWindowArea').style.opacity = 0;
      qs('.pizzaWindowArea').style.display = 'flex';
      setTimeout(() => {
         qs('.pizzaWindowArea').style.opacity = 1;
         qs('.pizzaWindowBody').style.marginTop = '0';
      }, 100);
   })
});

// Eventos do modal
function closeModal(){
   qs('.pizzaWindowArea').style.opacity = 0;
   qs('.pizzaWindowBody').style.marginTop = '-200px';
   setTimeout(() => {
      qs('.pizzaWindowArea').style.display = 'none';
   }, 300);
}
document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
   item.addEventListener('click', closeModal)
});
document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
   if(modalQt > 1){
      modalQt--;
      document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
      let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');
      let actualPrice = pizzas[modalKey].price[size];
      let updatePrice = actualPrice * modalQt;
      qs('.pizzaInfo--actualPrice').innerHTML = updatePrice.toLocaleString('pt-BR', 
         {style: 'currency', currency: 'BRL',});
   }
});

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
   modalQt++;
   document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
   let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');
   let actualPrice = pizzas[modalKey].price[size];
   let updatePrice = actualPrice * modalQt;
   qs('.pizzaInfo--actualPrice').innerHTML = updatePrice.toLocaleString('pt-BR', 
      {style: 'currency', currency: 'BRL',});
});