export class InputBehaviour {
    constructor() {
        this.confirmButton = document.getElementById('confirmButton');
        this.telInput = document.getElementById('tel');

        this.fields = [
            {
                name: 'name',
                id: 'name',
                element: null,
                regex: /^[А-Я][а-я]+\s*$/,
                valid: false,
            },
            {
                name: 'lastName',
                id: 'lastName',
                element: null,
                regex: /^[А-Я][а-я]+\s*$/,
                valid: false,
            },
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'tel',
                id: 'tel',
                element: null,
                regex: /^(\+7)\s\(?[489][0-9]{2}\)?\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/i,
                valid: false,
            },
            {
                name: 'inn',
                id: 'inn',
                element: null,
                regex: /^(\d{14})$/,
                valid: false
            }
        ]
        const that = this;

        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.addEventListener('blur', function () {
                that.validateField.call(that, item, this);
            });

            item.element.addEventListener('input', function (){
                if (item.element.classList.contains('error')) {
                    if (item.element.value.match(item.regex)) {
                        item.element.classList.remove('error');
                        item.element.nextElementSibling.style.opacity = '0';
                        item.valid = true;
                    } else {
                        item.valid = false;
                    }
                }
            })
        });

        this.phoneMask(this.telInput);
        this.showLabels();

        this.confirmButton.addEventListener('click', function () {
            that.processForm();
        })
    }

    phoneMask(input) {
        const prefixNumber = (str) => {
            if (str === '7') {
                return '7 ';
            }
            if (str === '8') {
                return '7 ';
            }
            if (str === '9') {
                return '7 9';
            }
            return '7 ';
        };
        
        input.addEventListener('input', (e) => {
            const value = input.value.replace(/\D+/g, "");
            const numberLength = 11;

            let result;
            
            if (input.value.includes('+8') || input.value[0] === '8') {
                result = "";
            } else {
                result = "+";
            }

            for (let i = 0; i < value.length && i < numberLength; i++) {
                switch (i) {
                    case 0:
                        result += prefixNumber(value[i]);
                        continue;
                    case 4:
                        result += ' ';
                        break;
                    case 7:
                        result += ' ';
                        break;
                    case 9:
                        result += ' ';
                        break;
                    default:
                        break;
                }
                result += value[i];
            }
            input.value = result;
        });
    };


    validateField(field, element) {
        if (!element.value.match(field.regex) && element.value) {
            element.nextElementSibling.style.opacity = '1';
            element.classList.add('error');
            field.valid = false;
        } else if (!element.value && element.classList.contains('error')) {
            element.nextElementSibling.style.opacity = '1';
            field.valid = false;
        } else {
            element.nextElementSibling.style.opacity = '0';
            element.classList.remove('error');
            field.valid = true;
        }
        this.validateForm();
    };

    validateForm() {
        return this.fields.every((item => item.valid));
    };

    processForm() {
        if (this.validateForm()) {
            alert('Заказ успешно оформлен');
        } else {
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                if (!item.element.value || !item.valid) {
                    item.element.nextElementSibling.style.opacity = '1';
                    item.element.classList.add('error');
                } else if (item.element.classList.contains('error') && (!item.element.value || !item.valid)) {
                    item.element.nextElementSibling.style.opacity = '1';
                }
            });
            document.querySelector('.recipient_details.my_section').scrollIntoView({ behavior: "smooth", block: "start" });
            alert('Проверьте поля')
        }
    }
    showLabels() {
        let labels = document.querySelectorAll('.recipient_details_form label');
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.addEventListener('input', ()=> {
                if (item.element.value) {
                    item.element.parentElement.querySelector(':first-child').style.opacity = '1';
                } else {
                    item.element.parentElement.querySelector(':first-child').style.opacity = '0';
                }
            });
        });
    }
}