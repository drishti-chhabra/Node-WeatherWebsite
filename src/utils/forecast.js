const request=require('request')

const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=797e8b596ec6df40abd3a784f6c15aa8&query='+lat+','+long+'&units=m'
    
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services',undefined)
        }
        else if(body.error){
            
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined, 
                body.current.weather_descriptions[0]+' current temperature is '+ body.current.temperature + ' degrees but it feels like '+ body.current.feelslike+ ' degrees'
            )
        }
    })
    }
    module.exports=forecast






    
// const url='http://api.weatherstack.com/current?access_key=797e8b596ec6df40abd3a784f6c15aa8&query=37.8267,-122.4233&units=f'

// request({url:url,json:true}, (error,response) => {
// if(error){
//     console.log('Unable to connect to a weather service')
// }else if(response.body.error){
// console.log("Unable to find location")
// }
// else{

// console.log(response.body.current.weather_descriptions[0]+' current temperature is '+ response.body.current.temperature + ' degrees but it feels like '+ response.body.current.feelslike+ ' degrees')
// }
//console.log(response.body.current);

//console.log(response.body.current.weather_descriptions[0]+' current temperature is '+ response.body.current.temperature + ' degrees but it feels like '+ response.body.current.feelslike+ ' degrees')
//})