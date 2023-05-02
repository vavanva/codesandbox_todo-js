import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

const createIncompleteList = (incompleteText) => {
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // delete
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // move
    const div = completeButton.parentNode;
    const text = div.firstElementChild.innerText;
    div.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // delete
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("completed_list").removeChild(deleteTarget);

      // move
      createIncompleteList(backButton.parentNode.firstElementChild.innerText);
    });

    div.appendChild(p);
    div.appendChild(backButton);

    const li = document.createElement("li");
    li.appendChild(div);
    console.log(document.getElementById("completed_list"));
    document.getElementById("completed_list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // add
  const div = document.createElement("div");
  div.className = "list_row";
  const p = document.createElement("p");
  p.innerText = incompleteText;
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  const li = document.createElement("li");
  li.appendChild(div);
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
