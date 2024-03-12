export class InfoMessage {
    static allInfoIcons = document.querySelectorAll('.info-icon');

    static messageShow() {
        this.allInfoIcons.forEach(item => {
           item.addEventListener('click', ()=> {
               item.nextElementSibling.classList.toggle('active');
           })
        });
    }
}