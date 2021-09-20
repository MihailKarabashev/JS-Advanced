function extractText() {
    let liElements = document.querySelectorAll('#items li');
    let textArea = document.getElementById('result');

    for (const liElement of liElements) {
        textArea.textContent+= liElement.textContent + '\n';
    }
}