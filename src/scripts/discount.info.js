export class DiscountInfo {
    static allOldPrices = document.querySelectorAll('.old_price:not(.price_adaptive .old_price)');

    static showDiscountInfo() {
        this.allOldPrices.forEach(item=> {
           item.addEventListener('click', ()=> {
              item.nextElementSibling.classList.toggle('active');
           });
        });
    }
}