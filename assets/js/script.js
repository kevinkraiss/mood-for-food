console.log("hello world")

<<<<<<< HEAD
var dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
});
=======
var userBirthdayForm = document.querySelector('form')
var userBirthdayInput = document.getElementById('userBirthday')


function handleBirthday(event) {
    event.preventDefault()

    var birthday = userBirthdayInput.value
    console.log(birthday)

    var reformatDate = moment(birthday, "MM-DD-YY").format("dddd, MMMM Do YYYY")


    console.log(reformatDate)

}
userBirthdayForm.addEventListener('submit', handleBirthday)



>>>>>>> main
