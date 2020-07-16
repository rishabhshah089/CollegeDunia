  "use strict";

  var n;
  var data;
  fetch("colleges.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      //console.log(data);
      //obj = JSON.parse(data);
      n = data.colleges.length;
      for (var i = 0; i < n; i++) {

        var cardColumn = document.createElement("div");
        document.getElementById('collegeDetails').appendChild(cardColumn).setAttribute("class", "cardColumn");

        var card = document.createElement("div");
        document.getElementsByClassName('cardColumn')[i].appendChild(card).setAttribute("class", "card");

        //Adding imagePart
        var imagePart = document.createElement("div");
        document.getElementsByClassName('card')[i].appendChild(imagePart).setAttribute("class", "imagePart");

        //Adding elements for imagePart
        var image = document.createElement("div");
        document.getElementsByClassName('imagePart')[i].appendChild(image).setAttribute("class", "image");
        document.getElementsByClassName('imagePart')[i].appendChild(image).setAttribute("style", "background-image:url(Images/"+data.colleges[i].image+")");

        var ratings = document.createElement("div");
        document.getElementsByClassName('imagePart')[i].appendChild(ratings).setAttribute("class", "ratings");
        var ratingsText = document.createElement("div");
        document.getElementsByClassName('ratings')[i].appendChild(ratingsText).setAttribute("class", "ratings-text");
        document.getElementsByClassName("ratings-text")[i].innerHTML = data.colleges[i].rating+"/5";
        var remarks = document.createElement("div");
        document.getElementsByClassName('ratings-text')[i].appendChild(remarks).setAttribute("class", "remarks");
        document.getElementsByClassName("remarks")[i].innerHTML = data.colleges[i].rating_remarks;

        var tags = document.createElement("div");
        document.getElementsByClassName('imagePart')[i].appendChild(tags).setAttribute("class", "tags tags-text");
        document.getElementsByClassName("tags")[i].innerHTML = data.colleges[i].tags[0];

        var tags2 = document.createElement("div");
        document.getElementsByClassName('tags')[i].appendChild(tags2).setAttribute("class", "tags2 tags-text");
        document.getElementsByClassName("tags2")[i].innerHTML = data.colleges[i].tags[1];

        var rankings = document.createElement("div");
        document.getElementsByClassName('imagePart')[i].appendChild(rankings).setAttribute("class", "rankings");
        document.getElementsByClassName("rankings")[i].innerHTML = "#"+data.colleges[i].ranking;

        //Adding collegePart
        var collegePart = document.createElement("div");
        document.getElementsByClassName('card')[i].appendChild(collegePart).setAttribute("class", "collegePart");

        //Adding elements for collegePart
        var collegeName = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(collegeName).setAttribute("class", "collegeName");
        document.getElementsByClassName("collegeName")[i].innerHTML = data.colleges[i].college_name;

        var stars = document.createElement("div");
        document.getElementsByClassName('collegeName')[i].appendChild(stars).setAttribute("class", "stars");
        //console.log(stars);
        for (var j=0; j<data.colleges[i].rating; j++){
          var k = document.createElement("i");
          document.getElementsByClassName('stars')[i+0].appendChild(k).setAttribute("class", "fa fa-star");
          document.getElementsByClassName('stars')[i+0].appendChild(k).setAttribute("style", "font-size:12px");
        }
        for (var j=0; j<(5-data.colleges[i].rating); j++){
          var k = document.createElement("i");
          document.getElementsByClassName('stars')[i+0].appendChild(k).setAttribute("class", "fa fa-star");
          document.getElementsByClassName('stars')[i+0].appendChild(k).setAttribute("style", "font-size:12px;color:lightgrey;");
        }

        var origFees = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(origFees).setAttribute("class", "origFees");
        var strike = document.createElement("strike");
        document.getElementsByClassName('origFees')[i].appendChild(strike);
        document.getElementsByTagName("strike")[i].innerHTML = "&#8377; "+data.colleges[i].original_fees;

        var discountTag = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(discountTag).setAttribute("class", "discountTag");
        var k = document.createElement("i");
        document.getElementsByClassName('discountTag')[i].appendChild(k).setAttribute("class", "fa fa-tag");
        document.getElementsByClassName('discountTag')[i].appendChild(k).setAttribute("style", "font-size:25px;color:red;transform: rotate(-45deg);");

        var discFees = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(discFees).setAttribute("class", "discFees");
        document.getElementsByClassName("discFees")[i].innerHTML = "&#8377; "+data.colleges[i].discounted_fees;

        var nearestPlaces = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(nearestPlaces).setAttribute("class", "nearestPlaces");
        document.getElementsByClassName("nearestPlaces")[i].innerHTML = data.colleges[i].nearest_place[0]+" | ";
        var morePlaces = document.createElement("span");
        document.getElementsByClassName('nearestPlaces')[i].appendChild(morePlaces).setAttribute("class", "morePlaces");
        document.getElementsByClassName("morePlaces")[i].innerHTML = data.colleges[i].nearest_place[1];

        var famousPlaces = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(famousPlaces).setAttribute("class", "famousPlaces");
        var match = document.createElement("span");
        document.getElementsByClassName('famousPlaces')[i].appendChild(match).setAttribute("class", "match");
        document.getElementsByClassName("match")[i].innerHTML = "93% Match : ";
        var kms = document.createElement("span");
        document.getElementsByClassName('famousPlaces')[i].appendChild(kms).setAttribute("class", "kms");
        document.getElementsByClassName("kms")[i].innerHTML = data.colleges[i].famous_nearest_places;

        var feesCycle = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(feesCycle).setAttribute("class", "feesCycle");
        document.getElementsByClassName("feesCycle")[i].innerHTML = data.colleges[i].fees_cycle;

        var offer = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(offer).setAttribute("class", "offer");
        var offerText = document.createElement("span");
        document.getElementsByClassName('offer')[i].appendChild(offerText).setAttribute("class", "offerText");
        document.getElementsByClassName("offerText")[i].innerHTML = data.colleges[i].offertext;

        var amenities = document.createElement("div");
        document.getElementsByClassName('collegePart')[i].appendChild(amenities).setAttribute("class", "amenities");
        var code = '<i class="fa fa-circle" style="font-size:4px;"></i>';
        document.getElementsByClassName("amenities")[i].innerHTML = data.colleges[i].amenties[0]+" "+code+" "+data.colleges[i].amenties[1];
        //var k = document.createElement("i");
        //document.getElementsByClassName('amenities')[i].appendChild(k).setAttribute("class", "fa fa-circle");
        //document.getElementsByClassName('amenities')[i].appendChild(k).setAttribute("style", "font-size:4px;");
        //document.getElementsByClassName("amenities")[i].innerHTML = data.colleges[i].amenties[1];

      }


    })
