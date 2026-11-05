const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".List");

for(const card of cards) {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
}

for(const List of lists) {
    List.addEventListener("dragover", dragOver);
    List.addEventListener("dragenter", dragEnter);
    List.addEventListener("dragleave", dragLeave);
    List.addEventListener("drop", dragDrop);
}

function dragStart(e) {
    e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd(e) {
    console.log("Drag Ended");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();

    this.classList.add("over");
}

function dragLeave(e) {
    this.classList.remove("over");
}

function dragDrop(e) {
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);

    this.appendChild(card);
}