const apiKey = 'cd8e5e5c2b38a09b7e5141e82668051f';
const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`;


// Fetch Data for London
fetch(ApiURL)

  .then(function (response) {

    console.log('resolved', response);
    return response.json();

  }).then(function (data) {

    console.log(data);

    const cityName = $('<h2>');
    const cityTemp = $('<div>');
    const cityWind = $('<div>');
    const cityHumid = $('<div>');

    cityName.text(data.name + ' - ' + dayjs().format('DD/MM/YYYY'));
    cityTemp.text('Temperature: ' + Math.round(data.main.temp) + ' °C');
    cityWind.text('Wind: ' + data.wind.speed + ' KPH');
    cityHumid.text('Humidity: ' + data.main.humidity + '%');

    $('#today').append(cityName);
    $('#today').append(cityTemp);
    $('#today').append(cityWind);
    $('#today').append(cityHumid);

    cityName.after('<br>');
    cityTemp.after('<br>');
    cityWind.after('<br>');

  }).catch(function (err) { 

    console.log('rejected', err);   

  });

  // Functionality to Click Search Button

//   $(document).ready(function() {
//     $('#search-button').click(function(event) {
//         event.preventDefault();
//         const userInput = $('#search-input').val();
//     });
// });



   
    
 



  

   
