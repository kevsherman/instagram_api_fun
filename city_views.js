CityViews = {
  city: function(cityArray){
    $(cityArray).each(function(){
      var city_name = "<h3 class='city'>"+this.name+"</h3>";
      var href = CityViews.generateButton(this); 
      $('#main').append(city_name);
      $('#main').append(href);
    });
  },

  generateButton: function(city){
   
    var uniqueId = city.zmw
    return "<button class='city' data-id='http://api.wunderground.com/api/e51ea3dd5554092e/forecast/q/zmw:"+uniqueId+".json'>visit page</a>";
  }

}