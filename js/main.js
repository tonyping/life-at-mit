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
	{ x: 1335, y: 503, text: getData() }
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