const inputEl = document.querySelector(".textInput");
inputEl.addEventListener("change", (e) => {
  e.preventDefault();

  const fetchPartialItems = async () => {
    let promise = await fetch(
      `https://api.frontendeval.com/fake/food/${e.target.value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let items = result;
        let searchResultEl = document.querySelector(".search-result");

        items.map(function (item) {
          let li = document.createElement("li");
          li.innerHTML = `<div>${item}</div>`;
          searchResultEl.append(li);
        });
      });
  };

  fetchPartialItems();
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

const handleCheckBtn = (e) => {
  let target = e.target;
  if (e.target.classList.contains("shopping-item-checkBtn")) {
    const checkItem = (target) => {
      target.parentNode.parentNode.classList.add("turn-gray");
      target.nextElementSibling.classList.add("linethrough");
      console.log(target.nextElementSibling);
    };
    checkItem(target);
  }
};

shoppingListEl.addEventListener("click", handleDeleteBtn);
shoppingListEl.addEventListener("click", handleCheckBtn);
