const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=1148e467331faa4f0adf5f990309d5a6&query=" + latitude + "," + longitude + "&units=f"
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
            console.log('Unable to connect to weather service!')
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently "  + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast