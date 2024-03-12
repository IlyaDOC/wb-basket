export class BottomNavbar {
    static navbarItems = document.querySelectorAll('.bottom_navbar_item');
    static activeButton() {
        this.navbarItems.forEach(item=> {
            item.addEventListener('click', ()=> {
                this.navbarItems.forEach(item=> {
                   item.classList.remove('active');
                });
                item.classList.add('active');
            })
        });
    };
}