(function(){
  "use strict";

  var Moosipurk = function(){
    // SINGELTON PATTERN

    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; //this viitab moosipurgile

    console.log(this);
    //console.log('moosipurgi sees');

    //kõik muutujad, mis on üldised ja muudetavad
    this.click_count = 0;



    //panen rakenduse tööle
    this.init();
  };

  // kõik moosipurgi funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      this.bindMouseEvents();
    },   //esimene käivitus. siin kuulame hiireklõpse. esialgne loogika

    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClic.bind(this));
    },

    addNewClic: function(event){
      //console.log(event);
      this.click_count++;
      console.log(this_click_count);

    }  //kui toimub hiireklõps, siis käivitub funktsioon
  };

  window.onload = function(){
    var app = new Moosipurk();
  };



})();
