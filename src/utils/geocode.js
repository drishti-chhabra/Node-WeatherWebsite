const request=require('request')


const geocode=(address,callback) =>{ 
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?limit=1&access_token=pk.eyJ1IjoiZHJpc2h0aS1jaGhhYnJhIiwiYSI6ImNrcHEyZHdheTBkbTYydXF6dWZndnFkZ3QifQ.KiCHHUfnTpjinBvDP-tQJw'
    request({url,json:true},(error,{body}={})=>{
        if(error)
        {
            callback('Unable to connect to location services', undefined)
        }
        else if(body.features.length===0)
        {
            callback('Unable to find location. Try another search')
        }
        else
        {
            //console.log(response.body.features[0])
            callback(undefined, {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
           
        }
    })
}
module.exports=
geocode



// const geourl='https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?limit=1&access_token=pk.eyJ1IjoiZHJpc2h0aS1jaGhhYnJhIiwiYSI6ImNrcHEyZHdheTBkbTYydXF6dWZndnFkZ3QifQ.KiCHHUfnTpjinBvDP-tQJw'
// request({url:geourl, json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to Geolocation services')
//     }
//     else if(response.body.features.length===0){
// console.log('No matching results. PLease try again')
//     }
//     else
//     {
//     console.log('Longitude: '+response.body.features[0].center[0]+'\n Latitude: '+ response.body.features[0].center[1]);
//     }
// })