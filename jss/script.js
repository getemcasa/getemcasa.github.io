document.addEventListener("DOMContentLoaded", () => {
    const increaseBtn = document.getElementById("increase-font");
    const decreaseBtn = document.getElementById("decrease-font");

    // Seleciona o conteúdo da lição (main)
    const contentArea = document.getElementById("lessonContent");

    if (!increaseBtn || !decreaseBtn || !contentArea) {
        console.warn("Botões ou área de conteúdo não encontrados.");
        return;
    }

    let currentSize = 16; // Tamanho inicial

    const updateFont = () => {
        contentArea.style.fontSize = currentSize + "px";

        // Ajusta todos os elementos internos proporcionalmente
        contentArea.querySelectorAll("*").forEach(el => {
            el.style.fontSize = currentSize + "px";
        });
    };

    increaseBtn.addEventListener("click", () => {
        if (currentSize < 26) {
            currentSize++;
            updateFont();
        }
    });

    decreaseBtn.addEventListener("click", () => {
        if (currentSize > 12) {
            currentSize--;
            updateFont();
        }
    });
});
