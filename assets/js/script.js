var dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
});


var userBirthdayForm = document.querySelector('form')
var userBirthdayInput = document.getElementById('userBirthday')


function handleBirthday(event) {
    event.preventDefault()

    var birthday = userBirthdayInput.value
    

    var reformatDate = moment(birthday,"YYYY, MM, DD").format("dddd, MMMM Do YYYY")


    console.log(reformatDate)

}


function getHoriscope() {
    var requestUrl =  'https://aztro.sameerkumar.website/?sign=aries&day=today'

    fetch(requestUrl, {
        method: 'POST'
    })
    .then(function(response){
        console.log(response.status);
        return response.json()
    }) .then (function(data) {
        console.log(data)
    })
}
getHoriscope()


userBirthdayForm.addEventListener('submit', handleBirthday)




