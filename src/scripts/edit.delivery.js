export class EditDelivery {
    static editActions = document.querySelectorAll('.delivery_edit_action');
    static deliveryWrapper = document.querySelector('.edit_delivery_wrapper');
    static closeAction = document.querySelectorAll('.delivery_edit_top_close');
    static actionButton = document.querySelectorAll('.edit_delivery_button');
    static methodActionButtons = document.querySelectorAll('.delivery_edit_method');
    static showEditPaymentWindow() {

        this.editActions.forEach(item => {
            item.addEventListener('click', ()=> {
                this.deliveryWrapper.classList.toggle('active');
            });
        });

        this.closeAction.forEach(item=> {
            item.addEventListener('click', ()=> {
                this.deliveryWrapper.classList.remove('active');
            });
        });

        this.actionButton.forEach(item=> {
            item.addEventListener('click', ()=> {
                this.deliveryWrapper.classList.remove('active');
            });
        });
    };

    static deliveryMethodAction () {
        this.methodActionButtons.forEach(item => {
            item.addEventListener('click', ()=> {
                this.methodActionButtons.forEach(item=> {
                    item.classList.remove('active');
                })
               item.classList.add('active');
            });
        });
    };
}