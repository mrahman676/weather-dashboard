const apiKey = 'cd8e5e5c2b38a09b7e5141e82668051f';
const FCApiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;


fetch(FCApiURL)
  .then(function (response) {
    console.log('resolved', response);
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (err) { 
    console.log('rejected', err);   
  });

  