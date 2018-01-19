//v1.0
//Copyright 2015 Octink. All rights reserved.

$(document).ready(function(){


	//which page I see?
	var pathname = window.location.pathname;


	//Remove two empty <p> tags before and after banner
	$('.bannerLogo').prev().hide();
	$('.bannerLogo').next().hide();


	 //Reorder navigation links
	  var ul = $('ul#navivert');
	  var li = ul.children("li");

	  var liHome = li[0];
	  var liDetails = li[1];
	  var liProjects = li[2];
	  var liHistory = li[3];
	  var liCataloque = li[4];
	  var liBasket = li[5];
	  var liLogOut = li[6];

	  li.detach();
	  ul.append(liHome);
	  ul.append(liCataloque);
	  //ul.append(liBasket);
	  ul.append(liProjects);
	  ul.append(liHistory);
	  ul.append(liDetails);
	  ul.append(liLogOut);



	//Remove "border: none !important" from last navigation ul li a
	$('#navButtLogout').parent().removeAttr('style');

	//Hide Navigaton links
	//$('span#navButtHome').parent().parent().hide();
	$('span#navButtSaved').parent().parent().remove();

	//Change Navigation link "Open Catoloque" to be "Home"
	$('span#navButtCatelogue').html('Place an order');
	
	//Change Navigation link "HOME" to point into landing page
	$('span#navButtHome').parent().attr("href", "/Mace/welcome");

	//Add drop down submenu - CCS also created
	$('ul#navivert').append('<li id="liDropDown"><a href="#">My Account</a></li>');
	$('li#liDropDown').append('<ul id="ulDropDown"></ul>');
	var liButtHistory = $('#navButtHistory').parent().parent();
	var liButtEdit = $('#navButtEdit').parent().parent();
	var liButtLogout = $('#navButtLogout').parent().parent();
	liButtHistory.detach();
	liButtEdit.detach();
	liButtLogout.detach();
	$('#ulDropDown').append(liButtHistory);
	$('#ulDropDown').append(liButtEdit);
	$('#ulDropDown').append(liButtLogout);



	//Detach footer and place it at the bottom of centrealign_split
	var footer = $('#footContent');
	footer.detach();
	$('.centrealign_split').after(footer);


//Wrap footer content into "innerFooter" div
	$( "#footContent" ).wrapInner( "<div id='innerFooter'></div>");


	    //Add Octink logo to footer
    $( "#innerFooter" ).append( "<a href='http://www.octink.com' target='_blank' id='footer-image'><img height='60' src='https://rawgit.com/OctAE/Public/master/Powered-by-white-text-logo.png' alt='Octink'></a>");


	    //Footer copyright
    $('div#copyContent.botlinks p').remove();



	//Point Footer T&C to Octink PDF T&C
    $('#footContent p a:nth-of-type(4)').attr({ href:"http://octink.com/dev/wp-content/uploads/2014/04/Octink_Standard-terms-of-business_April-2014.pdf", target:"nw"});


   //add complaints form link to footer
   if (pathname.indexOf('index') < 0) {
	         $('#footContent p').append('<span> | </span><a href="https://www.surveymonkey.co.uk/r/MACEWEB" target="_blank">Feedback Form</a>');
	          }

   //add link to catologue
   	//if (pathname.indexOf('index') < 0) {
	//         $('#footContent p').append('<span> | </span><a href="https://cdn.rawgit.com/OctAE/Public/master/MACE%20Catalogue.pdf" target="_blank">Mace Catalogue</a>');
	//          }
		

	//On basket page add breadcrump steps and change "Continue Order" to "Proceed to checkout"
	// if (pathname.indexOf('basket') > -1){
	  //     $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select &nbsp;your Items</p></div><div class="stepsPlain" style="float: left;" ><p>2. Edit </p></div><div class="stepsHighlight" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Confirm order &#38; payment</p></div></div><br style="clear: both" /><p class="underSteps"><a href="http://macestore.octink.com/mace/products">CLICK HERE TO CONTINUE SHOPPING</a></p>');
	    //   $("span#ORDER_CONTINUE_TEXT").html('Proceed to checkout'); 
	 //}


	 //Add selectors to progress steps
	 $('.stepsHighlight').parent().addClass('progressSteps');
	 $('.progressSteps div:nth-of-type(1)').addClass('progressStep1');
	 $('.progressSteps div:nth-of-type(2)').addClass('progressStep2');
	 $('.progressSteps div:nth-of-type(3)').addClass('progressStep3');
	 $('.progressSteps div:nth-of-type(4)').addClass('progressStep4');

	//Change breadcrump 4 to "Checkout"
	$( "p#step4text" ).html('4. Checkout');
	$( "div.stepsPlain p:contains(4. Confirm order & payment)").html('4. Checkout');
	$( "div.stepsHighlight p:contains(4. Confirm order & payment)").html('4. Checkout');


    //Change text on breadcrump step "2. Edit - Sign off printed material" to "2. Sign off"
    //$('p:contains(2. Edit - Sign off printed material )').html('2. Sign off');

	 //Change style of Checkout breadcrum and add wider gap between cells
	 if (!(pathname.indexOf('order-confirm') > -1)){
	          $( ".stepsPlain:nth-of-type(4)" ).addClass('noAfter');
	        } else if (pathname.indexOf('order-confirm') > -1){
	          $( ".stepsHighlight" ).addClass('noAfter');
	          $(".centrealign_split table tbody tr:nth-of-type(3) td form table").attr({cellspacing:"4"});
	          $(".centrealign_split table tbody tr:nth-of-type(3) td form table tr td:not(.bgmed)").addClass('notBgmed');
	        }

	//if (pathname == "/mace/confirm-my-details") {
	  //        $( ".stepsHighlight" ).addClass('noAfter');
	    //    }

	if (pathname.indexOf('order_complete') > -1) {
	          $( ".stepsHighlight, .stepsPlain" ).hide();
	        }

	 //Change "Please check Order reference" to "Please add order reference"
    $('strong#STOP_PONUMBER_TEXT').html('Please add your projects approver');

    //Add claas to CLICK HERE TO CONTINUE SHOPPING a tag
    $('a:contains(CLICK HERE TO CONTINUE SHOPPING)').parent().addClass('continueShopping');

    //Change "Pleace check you items" button text to "Please approve customised items"
    $('#STOP_SIGNOFF a strong').html('Please approve customised items');       


       //Remove order history table content and change word "INVOICE to word "ORDER" and word "PO No." to "Customer order reference - "
    //if(pathname == "/superdry/order-history") {
     //  $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(4)').remove();
     //  $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(3)').remove();
     //  $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(2) table tbody tr td:nth-child(3)').remove();
     //  $('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr td:nth-child(1) a strong').each( function(){
      //  var textToChange = this.firstChild.nodeValue;
     //   this.firstChild.nodeValue = textToChange.replace( /INVOICE/g, 'ORDER');
     //    });
   //   $('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr td:nth-child(1)').each( function(){
     //   this.innerHTML = this.innerHTML.replace( /PO No./g, 'Customer order reference -');
     //    });

   // }


	//Change look of productGridTable      
	$("table#productGridTable").attr({cellspacing:"8"}).removeAttr('style');
	$("table#productGridTable").prev().prev().addClass('sorListdiv');

	//Change look of edit product page. make background color same as body
	$('#leftCol, #rightcol').parent().addClass('editProductWrappers');
	$('#leftCol div:nth-of-type(1)').first().hide();
	$('#rightcol div:nth-of-type(1)').first().hide();
	$(".epspacer").hide();

	//Take care of "Click to Enlarge button" on product page
	$('span:contains(Click to Enlarge)').parent().parent().removeAttr().addClass('alphabutton clickToEnlarge');



	 //Change "start_from_scratch" button. Add .alphabutton style into it
    $("img[src$='start_from_scratch.gif']").hide().parent().wrapInner("<span>Remove saved projects</span>").wrap("<div class='alphabutton' id='startFromScratch'></div>");




//Change â€œEdit my detailsâ€ button text to â€œChange â€œdelivery addressâ€
    $('#deliveryAddress a span').html('Change delivery address');

    //Change â€œFinish Orderâ€ button text to â€œConfirm orderâ€
    if(pathname == "/8build/order-confirm")
      $('.betabutton a span').html('Confirm order');

    //Add ID to T&Cs checkbox on Checkout
    $('#orderTotal').next().attr('id','tandccheckbox');

    //Align text on checkout table
    $('#orderNumber td.bgmed, #customerName td.bgmed, #deliveryAddress td.bgmed, #phoneNumber td.bgmed, #emailAddress td.bgmed, #poNumber td.bgmed,  #orderSubTotal td:nth-of-type(2), #orderTax td:nth-of-type(2), #orderDelivery td:nth-of-type(2), #orderTotal td:nth-of-type(2)').attr('align','right');

    //Wrap text inside those tds into tags for styling
    if (pathname.indexOf('order-confirm') > -1) {
      $( "#orderSubTotal td:nth-of-type(2), #orderTax td:nth-of-type(2), #orderDelivery td:nth-of-type(2), #orderTotal td:nth-of-type(2)" ).wrapInner( "<div class='checkoutPrices'><p></p></div>");
    }

    //Add some breathing room between customer details and order info in checkout table
    $('#poNumber').after('<tr style="height: 25px;"></tr>');

    //Next to Delivery Address add warning that this must be reviewed closely
    //$('#deliveryAddress td.notBgmed').append('<div id="DeliveryWarningMsg"><p>Please check delivery address and edit if necessary.<br>Once you click â€˜Confirm Orderâ€™ below, the details shown here cannot be edited.</p></div>');

    //Add class to main checkout table
    $('#CustomPaymentInfo').parent().parent().parent().parent().addClass('checkoutTable');





	


    //After "Add to Order" go to Basket page as normal, but add text "Product has been added to basket, return to category..."
    var referrer =  document.referrer;
    if (pathname.indexOf('basket') > -1 && referrer.split("/").length > 5 )
    {
    	if (referrer.indexOf('product-edit') > -1) {
    		var backUrl = referrer.replace("http://red2gouk.netprintmanager.com/", "");
    		backUrl = backUrl.replace("product-edit", "products");
    		backUrl = backUrl.substr(0, backUrl.lastIndexOf("/"));
    		//var backUrlText = backUrl.substring(9);
    		//backUrlText = backUrlText.replace("/", " > ");
    		$('p.continueShopping').addClass('goBackToCat');
    		$('p.continueShopping a').attr({href:backUrl});
    		$('p.continueShopping a').html('click here to continue shopping');
    	} else if (referrer.indexOf('kit-edit') > -1) {
    		var backUrl = referrer.replace("http://red2gouk.netprintmanager.com/", "");
    		backUrl = backUrl.replace("kit-edit", "products");
    		backUrl = backUrl.substr(0, backUrl.lastIndexOf("/"));
    		//var backUrlText = backUrl.substring(9);
    		//backUrlText = backUrlText.replace("/", " > ");
    		$('p.continueShopping').addClass('goBackToCat');
    		$('p.continueShopping a').attr({href:backUrl});
    		$('p.continueShopping a').html('click here to continue shopping');
    	}
    } 

    if ($('p.continueShopping a').text() == 'go back to ') {
    	$('p.continueShopping').removeClass('goBackToCat')
    	$('p.continueShopping a').html('click here to continue shopping')
    }

    //Change "Add notes" text to "Add store reference/notes"
    //$('.small11px a').html('Add store reference/notes');
    //$('h2#notesProductionheader').html('Add store reference/notes');

    //Replace bin icon on "Customised your image" on Product individual page - customized items
    //$('#editImage .img_trash img').attr({src:"https://googledrive.com/host/0BwH8qt4hNhT5ZjNmYUxCVWt3RVk/"});

    //Add "Thank you" add the begining of message on Order complete page
    $('.invoiceback p:nth-of-type(1)').before('<h2>Thank you</h2>'); 

     //Change text of message on Order complete page

    if (!(pathname.indexOf('order-approval') > -1)) { 
    	$('.invoiceback p:nth-of-type(3)').html('Your Octink Account Handler<br>will be in touch to confirm your delivery date').after('<p>visit <a href="http://www.octink.com">octink.com</a> to find out more about your signage supplier</p>'); 
	}

    //Add navigation text below order complete message
    $('.invoiceback').after('<p id="afterCompleteMsg">Click <a href="/mace/products">Open Catalogue</a> to place another order, or <a href="/mace/logout">Log Out</p>');

    //Order confirm page
    if (pathname.indexOf('order-confirm') > -1) {
	          $( "#termscheck" ).hide();
	          $( "#termscheck" ).prop( "checked", true );
	          $('label[for="termscheck"]').hide();
	          }

    //Order approval page
    if (pathname.indexOf('order-approval') > -1) {
	          $( ".stepsHighlight, .stepsPlain" ).hide();
	          }


    //Hide print this page button
    $('span:contains(Print this page)').parent().parent().hide();


    //Add breadcrumbs to edit-kit and edit-product page, BUT NOT ON PRODUCT WHICH IS PART OF A KIT
    if (pathname.indexOf('product-edit') > -1 || pathname.indexOf('kit-edit') > -1 ) {

    	if ($('a#addToKit span:contains(kit)').length == 0) {
		      
		        var breadcrumbHtml = "<div style='padding: 10px 0px 30px 4px; display: block'><strong>You are at: > > <a href='/mace/products'>Mace</a>"
		       	var pathArray = decodeURIComponent(pathname).split("/");
		        var pathBefore = "";
		    		for (i = 2; i < pathArray.length-1; i++) {
		   				 pathBefore = pathBefore + "/" + pathArray[i]; 
		           		 breadcrumbHtml = breadcrumbHtml + " > <a href='/mace/products" + pathBefore + "'>" + pathArray[i] + "</a>";
					}
		      breadcrumbHtml = breadcrumbHtml + " > product selection</strong></div>";
		      //breadcrumbHtml = $("</div>").html(breadcrumbHtml).text();
		      
		      if(pathname.indexOf('product-edit') > -1) {
		      	$('.progressSteps').after(decodeEntities(breadcrumbHtml));
		      	
		      }	else {
		      	$('.progressSteps').next().after(breadcrumbHtml);
		      }
		      
			}
		}
		
	function decodeEntities(encodedString) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }

	//Replace button text "Click to go to kit ......" to "< back to kit overview"
	$('#addToKit span:contains(go to kit)').html(' < return to items overview ');

	//Replace button text "Click to go to.... " to "personalize next item >"
	$('a#viewNextPage span').html('go to next item >').parent().parent().addClass('nextItem'); 

 	//Replace button text needs to be viewed as it requires personalisation before proceeding!" to "More items requires personalisation before proceeding!"
	$('.displayboxheading span:contains(needs to be viewed)').html('Press the button below to go to next item!'); 

	//Hide strong text: "Your data will not be shared with any 3rd parties other than Protx for payment processing".
	$('strong:contains(Your data will not be shared with any 3rd parties other than Protx for payment processing.)').hide();


	//Capaigns-attach location to products list within the store (kit) overview.
	if (pathname.indexOf('campaign') > -1 ) {
		var locationObject = {};
		var locationObjectKey;
		var locationObjectValue;
		var h4Value;
		var h4AddedValue;
		$('.location').each(function(){
	        locationObjectKey = $(this).attr('id');
	        locationObjectValue = $(this).find('spam').html();
		   	locationObject[locationObjectKey] = locationObjectValue;
		});
		$('#kitItemsTable h4').each(function(){
			h4Value = $(this).html();
			h4Value = h4Value.substring(0, h4Value.lastIndexOf('-'));
	        h4Value = h4Value.substring(0, h4Value.length - 1);
	        for (var key in locationObject) {
  				if (locationObject.hasOwnProperty(key)) {
    				if (key == h4Value) {
    					h4AddedValue = locationObject[key];
    				}
 				 }
			}
			$(this).html(h4Value + " (" + h4AddedValue + ")");
		});
	}

	//Capaigns - attach location to individual products view from the kit (loading value from kit page).
	var listTitle = $('input#listTitle').attr('value');
	var locFromKitOverview = "";
	if ($('#addToKit').length) {
		var returnToKitLink = $('#addToKit').attr('onclick');
		if (returnToKitLink.indexOf('campaign') > -1 ) {
			var returnToKitLinkStartPos = returnToKitLink.indexOf('\'') + 1;
			var returnToKitLinkEndPos = returnToKitLink.indexOf('\'',returnToKitLinkStartPos);
			returnToKitLink = returnToKitLink.substring(returnToKitLinkStartPos,returnToKitLinkEndPos);

			function getLocationFromOverview() {
			$.ajax({
		  		 url:returnToKitLink,
		  		 //type:'GET',
		  		 async: false,
		  		 success: function(data){
		      	 locFromKitOverview =  $(data).find('#' + listTitle +' spam').html();
		        	}
				});
				return locFromKitOverview;
			}
			getLocationFromOverview();
			var optSelector = "form#edit option:contains("+locFromKitOverview+")";
			$('form#edit option').each(function(){$(this).removeAttr('selected');})
			$(optSelector).attr('selected', 'selected');
			actionPageSaveText();
			$('form#edit').hide();
			$('h2#notesProductionheader').html('Add notes');
		}
		
		
	}


/* DISPLAY TOOLTIP WITH LARGE ICON ON HOOVER */


//if home page then no
if (!(pathname.indexOf('welcome') > -1)){
    


$( "img" ).hover(
  function() {
    if (($(this).attr('src')))
    var productCode = ($(this).attr('alt'));
  var titleCode = ($(this).attr('title'));
    var iconLocation = ($(this).attr('src'));
    var dataImage = ($(this).attr('data-imagelg'));
    
  if ((iconLocation.indexOf('img.netprintmanager.com') > -1) && !(iconLocation.indexOf('imgCategories') > -1) && ($(this).attr('id') != "previewImage" )) {
    //iconLocation = iconLocation.replace("ASRC_TNS.png", "APRV.jpg");
    $( "body" ).append( '<div id="popup"><img src=' + dataImage + '></div>' );
    console.log(dataImage);

  } //end if statament
  }, function() {
    $("#popup").remove();
  }
).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('#popup')
        .css({ top: mousey, left: mousex })
});


} // close if home page



//Add drop down list for basket page for Billing Region
if (pathname.indexOf('basket') > -1){
$( "#ponumber").before("<select name='costcode' id='costcode'><option>Octink to seek manual approval</option><option>Rachel Wadia - 0411/34551</option><option>1119 / 34021 - Robin Ede</option><option>1114 – Samantha Gilding</option><option>BC434 T5 Connections- 33624</option><option>BC329 Passenger Automation Self Boarding Gates- 33317</option><option>BC025 First Direct Access- 33074 - Ellen Fitchet</option><option>1120 – Special Projects</option><option>1205 – I&A - Rose Mackey</option><option>0149 Marketing and communications - Liam McKay</option><option>0305 Health and safety - Liam McKay</option><option>DGP Logistics - Payment in advance</option><option>1103 Major Projects - Taryn Farah</option><option>1105 Major Projects - Kele Aistrop</option><option>1105 Major Projects - Victoria Lane</option><option>1103 Major Projects - Louisa Donnelly</option><option>1103 Major Projects - Maxine Oliver</option><option>1105 Major Projects - Valerie Malcolm</option><option>1105 Major Projects - Katherine Heney</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Martina William</option><option>1105 Major Projects - Dharmini Dhushyanthan</option><option>1105 Residential / Major Projects - Donna Smith</option><option>1105 Residential / Major Projects - Maureen Watters</option><option>1105 Major Projects - TBC</option><option>1105 Major Projects - TBC</option><option>1119 Commercial - Daniela Cantir</option><option>1119 Commercial - Rebecca Penfold</option><option>1119 Commercial - Genevieve Hines</option><option>1119 Commercial - Stella Hansen</option><option>1119 Commercial - Anna Ibraeva</option><option>1119 Commercial - Connie Richardson</option><option>1119 Commercial - Amanda Rowney</option><option>1113 Amenities - Jonathan Kulik-Szafransk</option><option>1113 Amenities - Dawn Smith</option><option>1113 Public - Claire Marika Berryman</option><option>1113 Public - Lisa Tracey</option><option>1113 Public - Lindi Kluever</option><option>1113 Public - Angela Lewis</option><option>1113 Public - Andrew Palmer</option><option>1113 Public - Michaela de-WinterHeald</option><option>1113 Public - Dawn Smith</option><option>1113 Public - Erika Servi</option><option>1113 Public - Laura Jopson</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1104 Technology - Haley Coomer</option><option>1104 Technology - Sandra Grizzle</option><option>1104 Technology - Brogan Hollobon</option><option>1104 Technology - Karen Nayler</option><option>0411 Como - Bob Bruno</option><option>0411 Como - Sam Harding</option><option>0411 Como - Jackie Smith</option><option>0411 Como - Sam Harding</option><option>0411 Como - Robert Woodward</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Pamela Harman</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Charlie Davis</option><option>1205 Infrastructure and Aviation - Alyssa Jones</option><option>1205 Infrastructure and Aviation - Taylor Thompson</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1205 Infrastructure and Aviation - Kelly Butler</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Emma Reilly</option><option>1205 Infrastructure and Aviation - Tracy Thorp</option><option>1205 Infrastructure and Aviation - Sheila Tung</option><option>1205 Infrastructure and Aviation - Courtney Hicks</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1114 Residential - Jenny Stirling</option><option>1114 Residential - Louise Hepple</option><option>1114 Residential - Kate Saunders</option><option>1114 Residential - Lynsey Jennings</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Mick Delaney</option><option>1114 Residential - Catherine Rocha Davies</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Katherine Heney</option><option>0213 Regional - Claire Kavanagh</option><option>0910 MEP - Ian Milner</option><option>0910 MEP - Bianca Panlook</option><option>0910 MEP - Joanne Asher</option><option>0910 MEP - Mandy Farrelly</option><option>0910 MEP - Antiounette Williams</option><option>0910 MEP - Julie Aveiro</option><option>0910 MEP - Lisa Harris</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>0121 - India Cable</option><option>1114 - Jenny Towers</option><option>0204 - Ian Goddard</option><option>1119/32777 - Holly Gooding</option><option>1113 - Snezhina Kortoci</option><option>1105/34362 - Sam Gilding</option></select>");
$('#ponumber').hide();
$( "select[name='costcode']" )
  .change(function () {
    var costcode = "";
    $( "select[name='costcode'] option:selected" ).each(function() {
      costcode = $( this ).text();
    });
    $( "input#ponumber" ).val( costcode );
  })
  .change();
}


if (pathname.indexOf('home') > -1 ) {
	$("#ie").hide();
	var version = detectIE();

	if (version === false) {
	  document.getElementById('result').innerHTML = '<s>IE/Edge</s>';
	} else if (version >= 12) {
	  document.getElementById('result').innerHTML = 'Edge ' + version;
	} else {
	  document.getElementById('result').innerHTML = 'IE ' + version;
	}

	// add details to debug result
	document.getElementById('details').innerHTML = window.navigator.userAgent;

	/**
	 * detect IE
	 * returns version of IE or false, if browser is not Internet Explorer
	 */
	function detectIE() {
	  var ua = window.navigator.userAgent;
	  var msg = ''
	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
	    //msg = 'To use this website to its full capacity please use <a href="https://www.google.com/chrome/browser/desktop/index.html">google chrome</a>'
	    $("#ie").show();
	  }

	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
	    //msg = 'To use this website to its full capacity please use <a href="https://www.google.com/chrome/browser/desktop/index.html">google chrome</a>'
	   $("#ie").show();
	  }

	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
	    //msg = 'To use this website to its full capacity please use <a href="https://www.google.com/chrome/browser/desktop/index.html">google chrome</a>'
	    $("#ie").show();
	  }
	  //alert(msg)
	//$( "#ie" ).html(msg);
	  // other browser
	//  return false;
	//}
}
}


})// End document ready

//Change Checkout button text
$('#checkoutButton4').html('Add To Order');

//Add to menu
//$("#navivert").append("<li><a href="/Mace/products" accesskey="5"><span id="navButtCatelogue">Products</span></a></li>");



//This overrite native RedTie function. This makes page reload after alert "Product added to order successfully" alert
function addProduct_Response() {
  var httpStatus = 0;
  var feedbackMessage = "";

  if( xmlHTTP.readyState == 4 ) {

    try {
      // check return http status
      // set delay to minimum
      httpStatus = xmlHTTP.status;
    } catch( noStatus ) {
      httpStatus = 0;
    }

    if( httpStatus == 200 ) {

      // return message

      try {
        xmlMessage = xmlHTTP.responseText;
      } catch (xmlHTTPError) {
        feedbackMessage = feedbackMessage + "Encountered an error when attempting to read the response over AJAX.  ";
        feedbackMessage = feedbackMessage + "Error details:\n" + xmlHTTPError.description + "\n\n"
        feedbackMessage = feedbackMessage + "If this problem continues, please include these details in a support ticket"

        alert(feedbackMessage);

        waitingForResult = false;
        
        return false;
      }

      if (xmlMessage.substring(0, 4) == "OK==") {

        alert(document.getElementById("msgSuccess").value);
                
        
      } else {
        alert( xmlMessage );
      }

      waitingForResult = false;

    } else {
      alert("httpStatus: " + httpStatus.toString());

      waitingForResult = false;
    }
    
  }
window.location.reload();
} //This overrite native RedTie function. This makes page reload after alert "Product added to order successfully" alert


