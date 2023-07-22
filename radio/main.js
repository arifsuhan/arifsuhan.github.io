console.log("main.js");

// let radio_station_dropdown = $(".dropdown-menu");
// let option_element = $("<li>").append($("a").attr("href", "http://www.google.com/"));
// let option_element = $("<li>").text("hello");
// radio_station_dropdown.append(option_element);

let myselect = $('.myselect');

for(let i=0; i<radio_data.length; i++){
	let temp_data = radio_data[i];
	let temp_title = temp_data["title"];
	let temp_radio_stream = temp_data["radio_stream"];
	let temp_img = temp_data["img"];


	// console.log(temp_title +" ---> "+ temp_radio_stream);
	// myselect.append('<option>'+ temp_title +'</option>');
	myselect.prepend("<option value="+ temp_radio_stream +">" + temp_title + "</option>");
}

myselect.change(function() {
	// var val = $(this).val(); 
	var temp_radio_stream = this.value;
	var temp_title = $(".myselect :selected").text();

	console.log(temp_title +"--->"+ temp_radio_stream);
	let radio_title = $(".radio_title");
	radio_title.text(temp_title);

	$(".radio_stream").attr("src", temp_radio_stream);
})

