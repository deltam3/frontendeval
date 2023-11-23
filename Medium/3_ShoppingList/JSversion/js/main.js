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

        let listEl = document.querySelector(".shopping-list");
        items.map(function (item) {
          let li = document.createElement("li");
          li.innerHTML = `<div class="shopping-item">${item}</div>`;
          li.addEventListener("click", () => {
            let newItem = document.createElement("li");
            newItem.classList.add(`shopping-item`);
            newItem.innerHTML = `<div class="">
            <span class="shopping-item-checkBtn">V</span>
            <span class="shopping-item-title">${item}</span>
          </div>
          <div class="shopping-item-deleteBtn" id="">X</div>`;
            listEl.append(newItem);
          });
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
    if (e.target.nextElementSibling.classList.contains("linethrough")) {
      target.nextElementSibling.classList.remove("linethrough");
      target.parentNode.parentNode.classList.remove("turn-gray");
      target.nextElementSibling.innerHTML =
        target.nextElementSibling.textContent;
      return;
    }
    const checkItem = (target) => {
      target.parentNode.parentNode.classList.add("turn-gray");

      target.nextElementSibling.innerHTML =
        "<del>" + target.nextElementSibling.textContent + "</del>";
      target.nextElementSibling.classList.add("linethrough");
      console.log(target.nextElementSibling);
    };
    checkItem(target);
  }
};

shoppingListEl.addEventListener("click", handleDeleteBtn);
shoppingListEl.addEventListener("click", handleCheckBtn);
