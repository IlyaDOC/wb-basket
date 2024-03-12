export class ReturnInfo {
    static allFreeElements = document.querySelectorAll('.free');

    static showReturnInfo () {
        this.allFreeElements.forEach(item => {
            item.addEventListener('click', ()=> {
                item.nextElementSibling.classList.toggle('active');
            });
        });
    };
}