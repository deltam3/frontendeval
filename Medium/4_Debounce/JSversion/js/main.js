const inputEl = document.querySelector(".input-text");
inputEl.addEventListener("change", (e) => {
  e.preventDefault();

  function debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

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
        searchResultEl.innerHTML = "";
        items.map(function (item) {
          let li = document.createElement("li");
          li.innerHTML = `<div class="search-item">${item}</div>`;
          searchResultEl.append(li);
        });
      });
  };
  const processChange = debounce(() => fetchPartialItems());
  processChange();
});
