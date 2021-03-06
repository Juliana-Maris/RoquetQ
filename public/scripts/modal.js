
export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        // aqui é a funcionalidade de atribuir a classe active para modal
        modalWrapper.classList.add("active")
    }
    function close() {
        // aqui é a funcionalidade de remover a classe active para modal
        modalWrapper.classList.remove("active")
    }
    return {
        open,
        close
    }
}