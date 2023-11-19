const shoppingListEl = document.querySelector(".shopping-list");
const handleDeleteBtn = (e) => {
  let target = e.target;
  if (e.target.classList.contains("shopping-item-deleteBtn")) {
    const deleteItem = (target) => {
      target.parentNode.remove();
    };
    deleteItem(target);
  }
};
shoppingListEl.addEventListener("click", handleDeleteBtn);
