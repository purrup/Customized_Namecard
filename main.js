// define variables
let input = document.querySelector('#input')
let output = document.querySelector('#output')
let nameCardBorder = output.firstElementChild

// create output-filed
function createNamecard() {
  let inputName = document.querySelector('#username')
  let inputIntro = document.querySelector('#inputselfintro')
  let inputPhoto = document.querySelector('#userphoto')

  let cardName = document.querySelector('#cardName')
  let cardIntro = document.querySelector('#selfintro')
  let cardPhoto = document.getElementById("outputuserphoto")

  if (inputName.value.length === 0 && inputIntro.value.length === 0) {
    return false
  } else {
    cardName.innerHTML = inputName.value
    cardIntro.innerHTML = inputIntro.value
    cardPhoto.src = inputPhoto.value
    cardPhoto.alt = "profilephoto"
    console.log(cardPhoto)
  }
  nameCardBorder.classList.add("border")
}

// set the listener of submit
input.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-primary')) {
    createNamecard()
    changeTheme()
  }
})

function changeTheme() {
  let nameCardBorder = output.firstElementChild

  if (document.getElementById("lighttheme").checked) {
    console.log("light")
  } else if (document.getElementById("darktheme").checked) {
    console.log("dark")
    nameCardBorder.classList.add("container", "dark")
  }
}

// user can change the theme after submit by clicking the radio button
input.addEventListener('click', function (event) {
  let nameCardBorder = output.firstElementChild

  if (event.target.classList.contains('form-check-input')) {
    // choose light theme then remove dark theme
    if (document.getElementById("lighttheme").checked || nameCardBorder.classList.contains('dark')) {
      nameCardBorder.classList.remove("dark")
    }
    // 點選submit但姓名或自介是空白
    else if (document.getElementById("darktheme").checked && (inputName.value.length === 0 && inputIntro.value.length === 0)) {
      return false
    }
    // 點選submit且姓名自介不是空白才會產生dark theme
    else if (document.getElementById('#submit').checked && document.getElementById("darktheme").checked && (inputName.value.length !== 0 && inputIntro.value.length !== 0)) {
      nameCardBorder.classList.add("container", "dark")
    }
  }
})
