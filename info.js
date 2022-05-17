export default class Info {
    constructor ({infoText,chooseButton,whoWin}) {
        this._infoText = infoText;
        this._chooseButton = chooseButton;
        this._whoWin = whoWin;
    }   

    getWinner() {
        return infoText + whoWin + chooseButton;
    }

    getNoOneWin() {
        return infoText + chooseButton;
    }
}
