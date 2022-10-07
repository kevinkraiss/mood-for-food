console.log("hello world")


// var dropdown = document.querySelector(".dropdown");
// dropdown.addEventListener("click", function (event) {
//   event.stopPropagation();
//   dropdown.classList.toggle("is-active");
// });

var userBirthdayForm = document.querySelector('form')
var userBirthdayInput = document.getElementById('userBirthday')


function handleBirthday(event) {
    event.preventDefault()

    var birthday = userBirthdayInput.value
    console.log(birthday)

    var reformatDate = moment(birthday, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")


    console.log(reformatDate)

}

function getHscope() {
    var requestUrl = 'https://aztro.sameerkumar.website/?sign=aries&day=today'

    fetch(requestUrl, {
        method: 'POST'
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
        })
        
}

getHscope()


userBirthdayForm.addEventListener('submit', handleBirthday) 




