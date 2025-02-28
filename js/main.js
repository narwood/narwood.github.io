function hideModal(modalId) {
    document.getElementById("modal-overlay").style.visibility = 'hidden';
    document.getElementById(modalId).style.visibility = 'hidden';
}

function showModal(modalId) {
    let modal = document.getElementById(modalId);

    modal.style.transform = `translate(-50%, ${window.scrollY - modal.offsetHeight / 2}px)`;

    document.getElementById("modal-overlay").style.visibility = 'visible';
    modal.style.visibility = 'visible';
}

function clickLink(page) {
    let link = document.createElement('a');
    link.href = `../${page}`;
    link.click();
}



