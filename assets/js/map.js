function myMap() {
	var mapCanvas = document.getElementById("map-canvas");
	var mapOptions = {
		center: new google.maps.LatLng(14.1703848, 121.1988725),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		zoomControl: false
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	marker = new google.maps.Marker({
		map: map,position: new google.maps.LatLng(14.1703848, 121.1988725)
	});
}