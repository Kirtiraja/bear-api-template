$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const searchTerm = $('#searchTerm').val();
    $('#searchTerm').val("");

    let request = new XMLHttpRequest();
    const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchTerm}&format=json`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.articleTitle').append(`Article Title: ${response.items[0].title}`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
