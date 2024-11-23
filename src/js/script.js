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
function closeModal() {
   qs('.pizzaWindowArea').style.opacity = 0;
   qs('.pizzaWindowBody').style.marginTop = '-200px';
   setTimeout(() => {
      qs('.pizzaWindowArea').style.display = 'none';
   }, 300);
}
document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
   item.addEventListener('click', closeModal)
});
document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
   if (modalQt > 1) {
      modalQt--;
      document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
      let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');
      let actualPrice = pizzas[modalKey].price[size];
      let updatePrice = actualPrice * modalQt;
      qs('.pizzaInfo--actualPrice').innerHTML = updatePrice.toLocaleString('pt-BR',
         { style: 'currency', currency: 'BRL', });
   }
});

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
   modalQt++;
   document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
   let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');
   let actualPrice = pizzas[modalKey].price[size];
   let updatePrice = actualPrice * modalQt;
   qs('.pizzaInfo--actualPrice').innerHTML = updatePrice.toLocaleString('pt-BR',
      { style: 'currency', currency: 'BRL', });
});

// Card
qs('.pizzaInfo--addButton').addEventListener('click', () => {

   let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');
   let identifier = pizzas[modalKey].id + '@' + size;
   let key = cart.findIndex((item) => item.identifier == identifier);

   if (key > -1) {
      cart[key].qt += modalKey;
   } else {
      cart.push({
         id: pizzas[modalKey].id,
         size,
         qt: modalQt
      });
   };

   updateCart();
   closeModal();
   document.querySelector('#menu').scrollIntoView({behavior: 'smooth'});
})

function updateCart() {
   qs('.cart-mobile span').innerHTML = cart.length;
   if (cart.length > 0) {
      qs('aside').classList.add('show');
      qs('.cart').innerHTML = '';

      let subtotal = 0;
      let desconto = 0;
      let total = 0;
      let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');

      for (let i in cart) {
         let pizzaItem = pizzas.find((item) => item.id == cart[i].id);
         subtotal += pizzaItem.price[size] * cart[i].qt;

         let cartDiv = qs('.cart-item').cloneNode(true);

         let pizzaSizeName;
         switch (cart[i].size) {
            case '0':
               pizzaSizeName = 'P';
               break;
            case '1':
               pizzaSizeName = 'M';
               break;
            case '2':
               pizzaSizeName = 'G';
               break;
         }

         let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;
         cartDiv.querySelector('img').src = `src/images/${pizzaItem.img}`;
         cartDiv.querySelector('.cart-item-nome').innerHTML = pizzaName;
         cartDiv.querySelector('.cart-item-qt').innerHTML = cart[i].qt;
         cartDiv.querySelector('.cart-item-qtmenos').addEventListener('click', () => {
            if(cart[i].qt > 1){
               cart[i].qt --;
            } else {
               cart.splice(i, 1);
            }
            updateCart();
         })
         cartDiv.querySelector('.cart-item-qtmais').addEventListener('click', () => {
            cart[i].qt++
            updateCart();
         });

         qs('.cart').append(cartDiv);
      }
      desconto = subtotal * 0.1;
      total = subtotal - desconto;
      
      qs('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
      qs('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
      qs('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

   } else {
      qs('aside').classList.remove('show');
   }
};

document.querySelector('.cart-finish').addEventListener('click', () => {
   qs('.finish-modal').style.display = 'flex';
});
qs('.finish-text button').addEventListener('click', () => {
   qs('.finish-modal').style.display = 'none';
});
qs('.menu-mobile').addEventListener('click', () => {
   qs('.nav-mobile').classList.toggle('show-mobile');
});
qs('.cart-mobile').addEventListener('click', () => {
   if(cart.length > 0){
      qs('aside').classList.toggle('show');
   }
});
qs('.menu-closer').addEventListener('click', () => {
   qs('aside').classList.remove('show');
})
qs('.finish-text button').addEventListener('click', () => {
   qs('aside').classList.remove('show');
   closeModal();
   qs('#home').scrollIntoView({behavior: 'smooth'});
})