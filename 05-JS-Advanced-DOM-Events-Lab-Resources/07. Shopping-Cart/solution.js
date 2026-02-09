function solve() {
   const textAreaRef = document.querySelector('textarea');
   const parentDivs = Array.from(document.getElementsByClassName('product'));
   const checkoutBtn = document.querySelector('.checkout')
   parentDivs.forEach(a => a.addEventListener('click', onAdd));
   checkoutBtn.addEventListener('click', onCheckout);
   
   let list = [];
   let finalPrice = 0;
   function onAdd(ev){
      if(ev.target.tagName != "BUTTON"){
         return;
      };
      
      const productTitle = ev.currentTarget.querySelector(".product-title").textContent;
      const price = Number(ev.currentTarget.querySelector(".product-line-price").textContent);
      if(!list.includes(productTitle)) {
         list.push(productTitle)
      }
         
      finalPrice += price;
      textAreaRef.value += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`;
   }

   function onCheckout(ev){
      textAreaRef.value += `You bought ${list.join(', ')} for ${finalPrice.toFixed(2)}.`;
      parentDivs.forEach(a => a.removeEventListener('click', onAdd));
      checkoutBtn.removeEventListener('click', onCheckout);
      
      
   }
   
}