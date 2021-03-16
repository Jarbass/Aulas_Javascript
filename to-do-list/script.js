const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", () => {
    if (inputField.value !== "") {
        const paragraph = document.createElement("p");
        paragraph.classList.add("paragraph-stylling");
        paragraph.innerHTML = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";

        paragraph.addEventListener("click", () => {
            paragraph.style.textDecoration = "line-through";
        });

        paragraph.addEventListener("dblclick", () => {
            toDoContainer.removeChild(paragraph);
        });
    } else {
        alert("Adicione uma task");
    }
})

