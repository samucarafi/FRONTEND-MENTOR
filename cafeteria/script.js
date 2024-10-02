// Adiciona um evento de clique nos botões de adicionar ao carrinho  
document.querySelectorAll('.add-to-cart').forEach(button => {  
    button.addEventListener('click', event => {  
       event.preventDefault();  
       const card = button.parentNode;  
       const carrinho = document.querySelector('.carrinho-container');  
       const carrinhoItem = document.createElement('div');  
       carrinhoItem.classList.add('carrinho-item');  
       carrinhoItem.innerHTML = `  
         <img src="${card.querySelector('img').src}" alt="${card.querySelector('h3').textContent}">  
         <h3>${card.querySelector('h3').textContent}</h3>  
         <p>R$ ${card.querySelector('p').textContent}</p>  
         <button class="remove-from-cart">Remover do carrinho</button>  
       `;  
       carrinho.appendChild(carrinhoItem);  
    });  
 });  
   
 // Adiciona um evento de clique nos botões de remover do carrinho  
 document.querySelectorAll('.remove-from-cart').forEach(button => {  
    button.addEventListener('click', event => {  
       event.preventDefault();  
       const carrinhoItem = button.parentNode;  
       carrinhoItem.remove();  
    });  
 });  
   
 // Adiciona um evento de clique no botão de finalizar compra  
 document.querySelector('.checkout').addEventListener('click', event => {  
    event.preventDefault();  
    const carrinho = document.querySelector('.carrinho-container');  
    const total = Array.from(carrinho.children).reduce((total, item) => {  
       return total + parseFloat(item.querySelector('p').textContent.replace('R$ ', ''));  
    }, 0);  
    alert(`Total: R$ ${total.toFixed(2)}`);  
 });
 
 