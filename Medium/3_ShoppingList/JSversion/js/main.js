// const shoppingItems = [{}];

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// };

// const handleInput = (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// };

const inputEl = document.querySelector(".textInput");
inputEl.addEventListener("change", (e) => {
  e.preventDefault();

  const fetchPartialItems = async () => {
    let promise = await fetch(
      `https://api.frontendeval.com/fake/food/${e.target.value}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        return json;
      });
    return promise;
  };
  let returnedItems = fetchPartialItems();
  console.log(returnedItems);
});

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
