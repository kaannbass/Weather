const key = 'o9baL3C3AXLsxYp6D62xAcC4FEKXvBAj';

const getWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const q = `${id}?apikey=${key}`;
    const response = await fetch(base + q);
    const data = await response.json();

    return data[0];
};

const getCity = async (city)=>{

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}

getWeather("328328")


getCity('London')
    .then(data => {
        return getWeather(data.Key)
    }).then(data => {
        
    })
    .catch(err => console.log(err))
