const apiKey = 'cd8e5e5c2b38a09b7e5141e82668051f';
const FCApiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;


// Fetch Data for London

fetch(FCApiURL)
  .then(function (response) {
    console.log('resolved', response);
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (err) { 
    console.log('rejected', err);   
  });


  // Functionality to Click Search Button

  $(document).ready(function() {
    $('#search-button').click(function(event) {
        event.preventDefault();
        const userInput = $('#search-input').val();
        console.log(userInput);
    });
});

  // // Functionality to get Current London Weather Data
  // $(document).ready(function() {

  //   // Create City
  //   const london = $('<div></div>');
  //   london.text('London');
  //   $('#today').append(London);

  //   document.getElementById('.today') = data.name;
  //   document.getElementById('.today') = data.main.temp;
  //   document.getElementById('.today') = data.wind;
  //   document.getElementById('.today') = data.main.humidity;
    
  // });



  

   
