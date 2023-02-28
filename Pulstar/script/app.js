function burger__menu() {
  const menu = document.querySelector(".content-menu")
  const menuBtn = document.querySelector(".content-burger")

  const body = document.body

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active__burger")
      menuBtn.classList.toggle("active__burger")
      body.classList.toggle("lock")
    })
  }
}

burger__menu()

//================================================================================================================================
