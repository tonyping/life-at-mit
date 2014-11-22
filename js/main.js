var data = [];
var options = [];

var getData = function() {
     var data = '<p align="center"><b> Kresge Auditorium </b></p>' + 
     			'<ul id="lightGallery" class="gallery list-unstyled">' + 
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="http://vimeo.com/35451452">' +
		    			'<a href="#">' +
		    				'<img src="assets/test-video-thumb.png" height="100" width="100"/>' +
		    			'</a>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
				'</ul>';
				
			'<p align="center"><b> Student Center </b></p>' + 
     			'<ul id="lightGallery" class="gallery list-unstyled">' + 
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="http://vimeo.com/35451452">' +
		    			'<a href="#">' +
		    				'<img src="assets/test-video-thumb.png" height="100" width="100"/>' +
		    			'</a>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
		  			'<li data-src="assets/test.png">' +
		    			'<img src="assets/test.png" height="100" width="100"/>' +
		  			'</li>' +
				'</ul>';
	return data;
}

options.push({
	align: {
  		y: 'top'
	},
	offset: {
  		top: -300
	},
	handlers: {
		click: 'toggle'
	}
});


data.push([
	//Grad
	{ x: 75, y: 600, text: getData() }, //Tang Hall (W84)
	{ x: 165, y: 500, text: getData() }, //Westgate (W85)
	{ x: 280, y: 400, text: getData() }, //The Warehouse (NW30)
	{ x: 450, y: 350, text: getData() }, //Ashdown House (NW35)
	{ x: 575, y: 300, text: getData() }, //Sidney Pacific (NW86)
	{ x: 655, y: 375, text: getData() }, //Edgerton House (NW10)
	
	//Undergrad
	{ x: 200, y: 680, text: getData() }, //Next House (W71)
	{ x: 400, y: 620, text: getData() }, //New House (W70)
	{ x: 420, y: 470, text: getData() }, //Simmons Hall (W79)
	{ x: 575, y: 600, text: getData() }, //MacGregor House (W61)
	{ x: 800, y: 620, text: getData() }, //Burton Conner House (W51)
	{ x: 1000, y: 350, text: getData() }, //Random Hall (NW61)
	{ x: 1300, y: 660, text: getData() }, //Baker House (W7)
	{ x: 1550, y: 550, text: getData() }, //Bexley Hall(W13)
	{ x: 1600, y: 690, text: getData() }, //McCormick Hall (W4)
	{ x: 1700, y: 580, text: getData() }, //Maseeh Hall (W1)
	{ x: 2350, y: 455, text: getData() }, //East Campus (62/64)
	{ x: 2250, y: 670, text: getData() }, //Senior House (E2)
	
	//FSILG
	{ x: 690, y: 630, text: getData() }, //Delta Psi
	{ x: 910, y: 715, text: getData() }, //Kappa Sigma
	{ x: 950, y: 720, text: getData() }, //Pi Beta Epsilon
	{ x: 980, y: 725, text: getData() }, //Delta Kappa Epsilon
	{ x: 1030, y: 720, text: getData() }, //Phi Beta Epsilon
	{ x: 1150, y: 650, text: getData() }, //Theta Delta Chi
		
	//Other
	{ x: 670, y: 460, text: getData() }, //Heinz Building (W59)
	{ x: 820, y: 450, text: getData() }, //Z-center (W35)
	{ x: 1150, y: 420, text: getData() }, //Rockwell Cage (W33)
	{ x: 1330, y: 500, text: getData() }, //Kresge Auditorium (W16)
	{ x: 1380, y: 350, text: getData() }, //Student Center (W20)
	{ x: 2000, y: 370, text: getData() }, //Stata Center (32)
	{ x: 2150, y: 490, text: getData() }, //Green Building (54)

]);


$(document).ready(function(){
    $('.taggd').each(function(i, e) {
    	$(e).taggd(options[i], data[i]);
    });
    $("#lightGallery").lightGallery({
    	showThumbByDefault:true,
        addClass:'showThumbByDefault'
    });
});
