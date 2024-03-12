export class Checkbox {
    constructor() {

    }

    static chooseAll() {
        this.checkAllElement = document.querySelector('.choose_all .real_checkbox');
        this.checkboxList = document.querySelectorAll('.check');
        this.checkAllElement.addEventListener('change', () => {
            this.checkboxList.forEach(item => {
                item.checked = !!this.checkAllElement.checked;
            })
        });
    }
}