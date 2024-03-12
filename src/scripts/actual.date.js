export class ActualDate {
    constructor() {
        const footerDate = document.getElementById('actualDate');
        const nowDate = new Date();
        const nowYear = nowDate.getFullYear();
        footerDate.innerText = nowYear;
    }
}