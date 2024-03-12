export class AgreeCheckbox {
    static agreeCheckbox = document.getElementById('agree_checkbox');
    static totalValue = document.getElementById('total_price').innerText;
    static confirmButton = document.getElementById('confirmButton');

    static checkBoxAction () {
        this.agreeCheckbox.addEventListener('change', ()=> {
            this.agreeCheckbox.checked ? this.confirmButton.innerText = `Оплатить ${this.totalValue} сом`
                : this.confirmButton.innerText = `Заказать`
        });
    }
}