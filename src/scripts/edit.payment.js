export class EditPayment {
    static editActions = document.querySelectorAll('.payment_edit_action');
    static paymentWrapper = document.querySelector('.payment_edit_wrapper');
    static closeAction = document.querySelectorAll('.payment_edit_top_close');
    static actionButton = document.querySelectorAll('.edit_payment_button');
    static showEditPaymentWindow() {
        this.editActions.forEach(item => {
           item.addEventListener('click', ()=> {
               this.paymentWrapper.classList.toggle('active');
           });
        });

        this.closeAction.forEach(item=> {
            item.addEventListener('click', ()=> {
                this.paymentWrapper.classList.remove('active');
            });
        });

        this.actionButton.forEach(item=> {
           item.addEventListener('click', ()=> {
               this.paymentWrapper.classList.remove('active');
           });
        });
    }
}