var products = [{
					"id": "100",
					"name": "iPhone 4S",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "101",
					"name": "Moto X",
					"brand": "Motorola",
					"os": "Android"	
				},
				{
					"id": "102",
					"name": "iPhone 6",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "103",
					"name": "Samsung Galaxy S",
					"brand": "Samsung",
					"os": "Android"
				},
				{
					"id": "104",
					"name": "Google Nexus",
					"brand": "ASUS",
					"os": "Android"
				},
				{
					"id": "105",
					"name": "Surface",
					"brand": "Microsoft",
					"os": "Windows"
				}];
products2=products;
arrOS=[];
arrBrand=[];
osSelected = "";
brandSelected = "";

//Creating an array of Operating Systems
for (var i=0; i<products.length;i++){
	if (!arrOS.includes(products[i].os)) {
		arrOS.push(products[i].os);
	}
}

//Creating an array of Brands
for (var i=0; i<products.length;i++){
	if (!arrBrand.includes(products[i].brand)) {
		arrBrand.push(products[i].brand);
	}
}

var html1 = "";
$(document).ready(function(){
	myDisplay(products);
})

function myDisplay(products){
	html1 = '<div class="dropdown">\
				<button  id="osdropbutton" class="dropbutton">Filter by Operating System</button>\
				<div id="osDropdown" class="dropdown-content">';
	
	for(var i=0; i<arrOS.length; i++) 
	{
		html1 += "<a href='#' data-os="+arrOS[i]+" class='os' >"+arrOS[i]+"</a>";
	}
	html1 += '</div>\
			</div>';
	html1 += '<div class="dropdown">\
				<button id="branddropbutton" class="dropbutton">Filter by Brand</button>\
				<div id="brandDropdown" class="dropdown-content">';
	for(var i=0; i<arrBrand.length; i++) {
		html1 += "<a href='#' data-brand="+arrBrand[i]+" class='brand' >"+arrBrand[i]+"</a>";
	}	
	html1 += '</div>\
				</div>';

	html1 += '<div class="clear">\
					<button id="clearbutton" class="clearbutton">Clear Filters</button>\
				</div>'
	html1 += "<div><table class='table'><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
	
	for (i=0;i<products.length;i++) 
	{
		html1 += '<tr id="'+products[i].id+'"><td>'+products[i].id+'</td><td>'+ products[i].name +'</td><td>'+ products[i].brand + '</td><td>' + products[i].os+'</td><td><a href="#" data-hide='+products[i].id+' id="remove" >X</a></td></tr>';
	}
		
	html1 += '</table></div>';

	html1 += '<div>\
				<input type="text" id="search-field">\
				<input type="button" value="Search" id="search-button">\
			  </div>'

	$(".main").html(html1);
}

$(document).ready(function()
{
	$(document).on("click", ".os", function()
	{
		osSelected=$(this).data("os");
		for (i=0;i<products.length;i++) 
		{	$('#'+products[i].id).show();
			if(brandSelected!="") {
				if (products[i].os != osSelected || products[i].brand != brandSelected) {
					$('#'+products[i].id).hide();
				}
			}
			else {
				if (products[i].os != osSelected) {
					$('#'+products[i].id).hide();
				}
			}
		}
	});
});

$(document).ready(function()
{
	$(document).on("click", ".brand", function()
	{
		brandSelected=$(this).data("brand");
		for (i=0;i<products.length;i++) 
		{
			if(osSelected!="") {
				if (products[i].os != osSelected || products[i].brand != brandSelected) {
					$('#'+products[i].id).hide();
				}
			}
			else {
				if (products[i].brand != brandSelected) {
					$('#'+products[i].id).hide();
				}
			}
		}
		brandSelected = "";
	});
});

$(document).ready(function(){
	var id;
	$(document).on('click','#remove', function(){
		id = $(this).data("hide");
	for (var i =0; i<products.length; i++) {
		if(products[i].id == id) {
			$('#'+products[i].id).hide();
		}
	}
	})
})

$(document).on('click','#osdropbutton',function(){
	document.getElementById("osDropdown").classList.toggle("show");
})

$(document).on('click','#branddropbutton',function(){
	document.getElementById("brandDropdown").classList.toggle("show");
})

$(document).on('click','#clearbutton',function(){
	myDisplay(products2);
	products=products2;
})

$(document).on('click','#search-button', function(){
	var y = $('#search-field').val();
	temarr=[];
	for (i=0;i< products.length;i++) {
		
		if(products[i].id == y || products[i].name==y) {
			$('#'+products[i].id).show();
		}
		else {
			$('#'+products[i].id).hide();
		}	
		}
})