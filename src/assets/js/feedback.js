let feedback = document.querySelector(".feedback");
let modalBackground = document.querySelector(".modal-background");

function showFeedback(n) {
    if (n !== 1){
        feedback.classList.remove("visually-hidden");
        modalBackground .classList.remove("visually-hidden");
    }
    if (n !== 2){
        feedback.classList.add("visually-hidden");
        modalBackground .classList.add("visually-hidden");
    }
}