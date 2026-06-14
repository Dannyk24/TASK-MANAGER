function addTask() {
  const container = document.querySelector("ul");
  let inputElem = document.querySelector(".task-title");
  const InputElemValue = inputElem.value;
  const taskTitle = InputElemValue.trim();
  let taskDescElem = document.querySelector(".task-desc");
  const taskDesc = taskDescElem.value;
  if (taskTitle === "" || taskDesc === "") {
    alert("Cannot have empty input fields");
    return;
  }

  const card = document.createElement("li");
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = taskTitle;
  card.appendChild(cardTitle);

  const cardDesc = document.createElement("p");
  cardDesc.textContent = taskDesc;
  card.appendChild(cardDesc);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `Remove task <i class="fas fa-remove"></i>`;
  card.appendChild(deleteBtn);
  deleteBtn.onclick = () => card.remove();
  container.appendChild(card);

  inputElem.value = "";
  taskDescElem.value = "";
}
