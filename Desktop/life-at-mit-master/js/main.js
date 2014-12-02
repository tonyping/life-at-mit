var getDormHtmlContent = function(dorm) {
	var htmlContent = 	'<p align="center" class="dormName"><b>' + dorm.name + '</b></p>' + 
    				  	'<ul class="gallery list-unstyled">';
    $(dorm.videos).each(function(i) {
    	var video = dorm.videos[i];
		htmlContent += 	'<li data-src="' + video.src + '" data-sub-html="' + video.description + '">' +
		    		   		'<a href="#">' +
		    					'<img src="' + video.thumb + '"/>' +
		    				'</a>' +
		  				'</li>';
	});
	$(dorm.images).each(function(i) {
    	var image = dorm.images[i];
		htmlContent += 	'<li data-src="' + image.src + '" data-sub-html="' + image.description + '">' +
		    					'<img src="' + image.thumb + '"/>' +
		  				'</li>';
	});
	htmlContent += '</ul>';
	return htmlContent;
}

var options = [];
var data = [];

options.push({
	align: {
  		y: 'top'
	},
	offset: {
  		top: -280
	},
	handlers: {
		click: 'toggle'
	}
});

var dormsArray = [];
$(dorms).each(function(i) {
	var dorm = dorms[i];
	dormsArray.push({ x: dorm.x, y: dorm.y, text: getDormHtmlContent(dorm) });
});
data.push(dormsArray);

$(document).ready(function() {
	// Activate markers on the map
    $('.taggd').each(function(i, e) {
    	$(e).taggd(options[i], data[i]);
    });
    // Activate Light Gallery for each dorm
    $(".gallery").lightGallery({
    	showThumbByDefault:true,
        addClass:'showThumbByDefault'
    });
    // Do not show any popovers when user clicks on map
    $(".taggd").click(function() {
    	$(".taggd-item-hover").removeClass("show");
    })
});
