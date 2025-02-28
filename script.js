function goToNextPage() {
    window.location.href = 'page2.html';
}

function goToProposal() {
    window.location.href = 'proposal.html';
}

function sayYes() {
    document.getElementById('response').innerText = "Sapevo che avresti detto di sì! ❤️";
}

function sayNo() {
    alert("Riprova, forse hai cliccato per sbaglio! 😆");
}
