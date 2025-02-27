function hideModal(modalId) {
    document.getElementById("modal-overlay").style.visibility = 'hidden';
    document.getElementById(modalId).style.visibility = 'hidden';
}

function showModal(modalId) {
    let modal = document.getElementById(modalId);
    let scroll = window.scrollY;
    console.log(scroll);

    modal.style.transform = `translate(-50%, ${-200 + window.scrollY}px)`;

    document.getElementById("modal-overlay").style.visibility = 'visible';
    document.getElementById(modalId).style.visibility = 'visible';
}



