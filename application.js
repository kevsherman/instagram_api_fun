
$(document).ready(function(){
  $('form#search').submit(function(event){
    $('.city').remove();
    var url = "http://autocomplete.wunderground.com/aq?query=";
    var search = $('#searchfield').val();
    var fullsearch = url + search + "&cb=?";

    $.getJSON(fullsearch, function(data){

      $cityArray = $(data.RESULTS);
      CityViews.city($cityArray)
      bindButtons();
    });

    event.preventDefault();

   });
});

function bindButtons(){
  $('button.city').on("click", function(){
      url = $(this).data("id");
      $.getJSON(url, function(data){
        console.log(url);
      })
    });
}