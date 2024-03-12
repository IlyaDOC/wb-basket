import {InputBehaviour} from "./input.behaviour.js";
import {Checkbox} from "./checkbox.js";
import {ActualDate} from "./actual.date.js";
import {BottomNavbar} from "./bottom.navbar.js";
import {AgreeCheckbox} from "./agree.checkbox.js";
import {InfoMessage} from "./infomessage.js";
import {DiscountInfo} from "./discount.info.js";
import {ReturnInfo} from "./return.info.js";
import {EditPayment} from "./edit.payment.js";
import {EditDelivery} from "./edit.delivery.js";

class App {
    constructor() {
        new InputBehaviour();
        Checkbox.chooseAll();
        new ActualDate();
        BottomNavbar.activeButton();
        AgreeCheckbox.checkBoxAction();
        InfoMessage.messageShow();
        DiscountInfo.showDiscountInfo();
        ReturnInfo.showReturnInfo();
        EditPayment.showEditPaymentWindow();
        EditDelivery.showEditPaymentWindow();
        EditDelivery.deliveryMethodAction();
    }
}

(new App());