var userBirthdayForm = document.querySelector('form')
var userBirthdayInput = document.getElementById('userBirthday')
var hScopeEl = document.getElementById('hScopeContainer')

var userSign = 'scorpio'
var birthday
var reformatDate = ''
var reformatYear = ''
var hScopeObj
var userMood
var userHscope = ''

// signs

var zodaicSigns = [
    {
    sign:'aries',
    begDate: '-03-21',
    endDate: '-04-19'
    },

    {
    sign:'taurus',
    begDate: '-04-20',
    endDate: '-05-20'
    },

    {
    sign:'gemini',
    begDate: '-05-21',
    endDate: '-06-21'
    },

    {
    sign:'cancer',
    begDate: '-06-22',
    endDate: '-07-22'
    },

    {
    sign:'leo',
    begDate: '-07-23',
    endDate: '-08-22'
    },

    {
    sign:'virgo',
    begDate: '-08-23',
    endDate: '-09-22'
    },

    {
    sign:'libra',
    begDate: '-09-23',
    endDate: '-10-22'
    },

    {
    sign:'scorpio',
    begDate: '-10-24',
    endDate: '-11-21'
    },

    {
    sign:'sagittarius',
    begDate: '-11-22',
    endDate: '-12-21'
    },

    {
    sign:'capricorn',
    begDate: '-12-22',
    endDate: '-01-19'
    },

    {
    sign:'aquarius',
    begDate: '-01-20',
    endDate: '-02-18'
    },

    {
    sign:'pisces',
    begDate: '-02-19',
    endDate: '-03-20'
    }
]

// renders horoscope text to element

function renderHscope() {
    hScopeEl.textContent = userHscope
}

// handles user birthday input
function handleBirthday(event) {
    event.preventDefault()

    var birthday = userBirthdayInput.value

    reformatDate = moment(birthday, "YYYY-MM-DD").format("MM-DD")

    reformatYear = moment(birthday, "YYYY-MM-DD").format('YYYY')
    
    convertHscope()
}

// converts user birthdate into astrological sign

function convertHscope() {
//    console.log(reformatDate)
for (var i = 0; i < zodaicSigns.length; i++) {
    if (moment(reformatYear + '-' + reformatDate).isBetween(reformatYear + zodaicSigns[i].begDate, reformatYear + zodaicSigns[i].endDate, 'day') === true ) {
        userSign = zodaicSigns[i].sign
    }
}
    getHscope()
}

// gets horroscope info from aztro API
function getHscope() {
    var requestUrl = 'https://aztro.sameerkumar.website/?sign=' + userSign + '&day=today'
    fetch(requestUrl, {method: 'POST'} )
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
            hScopeObj = data
//            console.log(hScopeObj)
            userMood = hScopeObj.mood
            userHscope = hScopeObj.description
//            console.log(userMood, userHscope)          
        renderHscope()
        })
    }

// event listeners

userBirthdayForm.addEventListener('submit', handleBirthday)