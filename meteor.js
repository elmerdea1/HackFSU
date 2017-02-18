//Elmer Dea
//11/10/16
window.addEventListener("load",getData(),false);
//function readOut(){document.getElementById("testOut").innerHTML = getData();}

var xhr = false;
//on load, creates new xhr for openWeather api

var updateElement = function(data) {
	  document.getElementById("testOut").innerHTML = data;
}

function getData(callback)
{
	//console.log("world" + callBack)
	xhr = new XMLHttpRequest();
	if (xhr) 
	{ 
				try 
				{
					xhr.open("GET", "https://data.nasa.gov/resource/y77d-th95.json");
					xhr.send();
				}
				catch (e) 
				{
					alert("t3");
				}	
	}
	//if ready and okay, parses xhr data via json
	
	var gloc;
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			write(myArr);
		   gloc = write(myArr);
		  console.log("hello" + gloc);
		  
		  //document.getElementById("testOut").innerHTML = gloc;
		  //return gloc;
		  //updateElement(gloc);
		  if (typeof callback === 'function'){ 
		  callback(gloc);
		  }
		}
	};
}

//creates string with text and json data for display



function write(w) 
{
	var loc = []
	for (i = 0; i < 50; i++)
	{	
	//{lat: -31.563910, lng: 147.154312}
		var lat = w[i].geolocation.coordinates[0];
		var lng = w[i].geolocation.coordinates[1];
		loc.push({lat: lat, lng: lng})
	}
	//loc = loc.substring(0, loc.length - 1);
	//loc += "]";
    //document.getElementById("testOut").innerHTML = loc;
	
	return loc;
}