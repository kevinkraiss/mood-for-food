console.log("hello world")

var userBirthdayForm = document.querySelector('form')
var userBirthdayInput = document.getElementById('userBirthday')

// handles user birthday input
function handleBirthday(event) {
    event.preventDefault()

    var birthday = userBirthdayInput.value
    console.log(birthday)

    var reformatDate = moment(birthday, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")


    console.log(reformatDate)

}

// gets horroscope info from aztro API
function getHscope() {
    var requestUrl = 'https://aztro.sameerkumar.website/?sign=libra&day=today'
    fetch(requestUrl, {
        method: 'POST'
    })
        .then(function (response) {
            return response.json()
            console.log(response)
        })
        .then(function(data) {
            console.log(data)
            
        })
    
        
    }
getHscope()

userBirthdayForm.addEventListener('submit', handleBirthday)



