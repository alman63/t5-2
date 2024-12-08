const button = document.querySelector(".button");

if (button) {
  button.addEventListener("click", () => {
    const input = document.querySelector(".input");
    if (input.value === "") {
      alert("Нельзя добавить пустого пользователя");
    } else {
      localStorage.setItem("user", input.value);
      getUserName();
    }
  });
} else {
  console.log("Не найдена кнопка");
}

const getUserName = () => {
  const h = document.querySelector(".h2_name");
  if (h) {
    const nameUser = localStorage.getItem("user");
    if (nameUser !== null) {
      h.innerHTML = `${nameUser}`;
    } else {
      h.innerHTML = "Нет сохраненного пользователя";
    }
  } else {
    console.log("Не найден h2 для записи значения");
  }
};

getUserName();
