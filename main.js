const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  const selectOption = () => {
    const $listOptions = d.querySelectorAll(".list");
    d.addEventListener("click", (e) => {
      if (e.target.matches(".list *")) {
        // console.log(e.path);
        // e.path.forEach((tag) => console.log(tag.classList?.contains("list")));
        const $componentLi = e.path.find((tag) =>
          tag.classList?.contains("list")
        );
        // console.log($componentLi);
        $listOptions.forEach((componentLi) =>
          componentLi.classList.remove("active")
        );
        $componentLi.classList.add("active");
        // console.log($listOptions);
      }
    });
  };
  selectOption();
  const openOrCloseMenu = () => {
    d.addEventListener("click", (e) => {
      if (e.target.matches(".toggle *")) {
        const $menu = d.querySelector(".toggle"),
          $navigation = d.querySelector(".navigation");
        $menu.classList.toggle("active");
        $navigation.classList.toggle("active");
      }
    });
  };
  openOrCloseMenu();
});
