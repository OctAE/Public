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
	  ul.append(liBasket);
	  ul.append(liProjects);
	  ul.append(liHistory);
	  ul.append(liDetails);
	  ul.append(liLogOut);



	//Remove "border: none !important" from last navigation ul li a
	$('#navButtLogout').parent().removeAttr('style');

	//Hide Navigaton links
	$('span#navButtHome').parent().parent().hide();
	$('span#navButtSaved').parent().parent().hide();

	//Change Navigation link "Open Catoloque" to be "Home"
	$('span#navButtCatelogue').html('Home');

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
	//$('#ulDropDown').append(liButtEdit);
	$('#ulDropDown').append(liButtLogout);


	//Add div before .bannerLogo div {
	$('.bannerLogo').before('<div id="bannerBehind"></div>'); 


	//Detach footer and place it at the bottom of centrealign_split
	var footer = $('#footContent');
	footer.detach();
	$('.centrealign_split').after(footer);


	//Add urgent icon
	$('span:contains("needs to be viewed")').css({'margin-left':'20px','padding-left':'20px'}).addClass('addUrgentIcon');
	
	
	if (pathname.indexOf('kit-edit') > -1){
	       $('#nextStep').html('Select your site specific graphics');
	       $('#kitItemsDiv > div > div').html('Furniture and Stock Graphics');
	 }


    if (pathname.indexOf('product-edit2') > -1){
        $(".helperContainer").append('<br /><span style="font-size:14px; font-weight: bold;"> Please be aware of capital letters and punctuation</span>');
	 }
	 
	 $('#shippingLabel').html('Site Address:');
	 $('label[for=termscheck], input#termscheck').html('I agree to have used or new furniture');
	 //$('input#termscheck').attr('checked', true);
	 
	 if (pathname.indexOf('public') > -1){
        $(".stepsHighlight").hide();
        $(".stepsPlain").hide();
	 }
	 
	 if (pathname.indexOf('order-confirm') > -1){
        $('#deliveryAddress > td > strong').html('Site Address:');
        $('span:contains("Change delivery address")').html('Change site address');
        //$('.alphabutton > a > span').html('Change site address');
	 }
	 
	 if (pathname.indexOf('products') > -1){
	    $("div > table").hide();
        $("td[valign=right]").hide();
        $("td[valign=middle]").hide();
        $('#productGridTable').show();
        $('#categoryGridTable').show();
	 }
	 
	 
	//Hide Balance
	$('#balancecell').detach(); 
	 

//********************STEPS**********************//

	 if (pathname.indexOf('products') > -1){
	       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsHighlight" style="float: left; "><p>1. Select Suite</p></div><div class="stepsPlain" style="float: left;" ><p>2. Customise Artwork</p></div><div class="stepsPlain" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Site details</p></div><div class="stepsPlain noAfter" style="float: left; background-position: 2px 0 !important"><p>5. Confirm order</p></div></div><br style="clear: both" /><p class="underSteps continueShopping underStepsBasket"><a href="http://taylorwimpeystore.octink.com/taylorwimpey/basket">GO TO BASKET</a></p>');
	       $("span#ORDER_CONTINUE_TEXT").html('Proceed to checkout'); 
	 }


	  if ((pathname.indexOf('kit-edit') > -1) || (pathname.indexOf('product-edit2') > -1)){
	       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select Suite</p></div><div class="stepsHighlight" style="float: left;" ><p>2. Customise Artwork</p></div><div class="stepsPlain" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Site details</p></div><div class="stepsPlain noAfter" style="float: left; background-position: 2px 0 !important"><p>5. Confirm order</p></div></div>');
	       $("span#ORDER_CONTINUE_TEXT").html('Proceed to checkout'); 
	 }

	

	 if (pathname.indexOf('basket') > -1){
	       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select Suite</p></div><div class="stepsPlain" style="float: left;" ><p>2. Customise Artwork</p></div><div class="stepsHighlight" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Site details</p></div><div class="stepsPlain noAfter" style="float: left; background-position: 2px 0 !important"><p>5. Confirm order</p></div></div><br style="clear: both" /><p class="underSteps"><a href="http://taylorwimpeystore.octink.com/taylorwimpey/products">CLICK HERE TO CONTINUE SHOPPING</a></p>');
	       $("span#ORDER_CONTINUE_TEXT").html('Confirm Site Details').parent().attr('href', '/taylorwimpey/edit-my-details') ; 
	 }

	 	 if (pathname.indexOf('order-confirm') > -1){
	       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select Suite</p></div><div class="stepsPlain" style="float: left;" ><p>2. Customise Artwork</p></div><div class="stepsPlain" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Site details</p></div><div class="stepsHighlight noAfter" style="float: left; background-position: 2px 0 !important"><p>5. Confirm order</p></div></div><br style="clear: both" />');
	  }


	  if ((pathname.indexOf('edit-my-details') > -1)||(pathname.indexOf('confirm-my-details')>-1)){
	       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select Suite</p></div><div class="stepsPlain" style="float: left;" ><p>2. Customise Artwork</p></div><div class="stepsPlain" style="float: left;"><p>3. Order summary</p></div><div class="stepsHighlight" style="float: left; background-position: 2px 0 !important"><p>4. Site details</p></div><div class="stepsPlain noAfter" style="float: left; background-position: 2px 0 !important"><p>5. Confirm order</p></div></div><br style="clear: both" />');
	       $("strong:contains('Contact:')").html('My Contact:').parent().next().next().html('<strong>Site Manager Contact:</strong>');

	       if (

($('#firstName').val().length<1) || // First Name
($('#lastName').val().length<1) || // Surname
($('#addressLine1').val().length<1) || // Address Line 1
($('#addressCity').val().length<1) || // City
($('#addressCounty').val().length<1) || // County
($('#postcode').val().length<1) || // Postcode
($('#deliverToFirstName').val().length<1) || // Delivery First Name
($('#deliverToLastName').val().length<1) || // Delivery Surname
($('#deliverToAddressLine1').val().length<1) || // DeliveryAddress Line 1
($('#deliverToAddressCity').val().length<1) || // Delivery City
($('#deliverToAddressCounty').val().length<1) || // Delivery County
($('#deliverToPostcode').val().length<1) || // Delivery Postcode
($('#deliverToAddressCounty').val().length<1) || // Delivery County
($('#phoneNo').val().length<1) || // Contact Phone
($('#email').val().length<1) || // Contact Email
($('#password').val().length<1) || // Contact Password
($('#passwordChk').val().length<1) || // Contact re-enter password
($('#globalCustom5').val().length<1) || // Site Manager Name
($('#globalCustom6').val().length<1) || // Site Manager Email
($('#globalCustom7').val().length<1) // Site Manager Phone
)
	       	 {

	       	 $("span:contains('Save details')").parent().parent().addClass('floatrigth');

	       } else {
	       	
	       	$("span:contains('Save details')").parent().parent().addClass('floatrigth').parent().prepend('<div class="betabutton" style="float:right; padding: 12px 0; margin-left: 20px"><a href="/taylorwimpey/order-confirm"><span>Proceed to Order Confirmation</span></a></div>');

	       }
 
	 }





	 //Add selectors to progress steps
	 $('.stepsHighlight').parent().addClass('progressSteps');
	 $('.progressSteps div:nth-of-type(1)').addClass('progressStep1');
	 $('.progressSteps div:nth-of-type(2)').addClass('progressStep2');
	 $('.progressSteps div:nth-of-type(3)').addClass('progressStep3');
	 $('.progressSteps div:nth-of-type(4)').addClass('progressStep4');
	 $('.progressSteps div:nth-of-type(5)').addClass('progressStep5');


//********************STEPS**********************//





	 //Hide edit now button
	if (pathname.indexOf('kit-edit') > -1) {
	 $('span[id^=editbtn]').hide();
	 $('#kitItemsTable').find('.alphabutton').hide();
   	$('.alphabutton a span').addClass('viewNowButton').parent().css('background-image', 'none');

    }
	 //Edit my Details page
	 if (pathname.indexOf('edit-my-details') > -1) {
	     //Hide feedback 
	     $('.bglight').hide();
	     
	    // //Reset delivery address
	    // $('#deliverToFirstName').val('');
	    // $('#deliverToLastName').val('');
	    //$('#deliverToCompanyName').val('');
	    // $('#deliverToAddressLine1').val('');
	    // $('#deliverToAddressLine2').val('');
	    // $('#deliverToAddressCity').val('');
	    // $('#deliverToAddressCounty').val('');
	    // $('#deliverToPostcode').val('');
	    // $('#deliverToCountry').val('');
	     //$('#').val('');
	 }

	
	//RTT+ steps CSS debug
	$('ul.stepsList').removeClass('stepsList');

	 //Change "Please check Order reference" to "Please add order reference"
    $('strong#STOP_PONUMBER_TEXT').html('Please enter your prefered install date');
    
    //Change "ponumber" type to date
    $('#ponumber').prop('type', 'date');

    //Add claas to CLICK HERE TO CONTINUE SHOPPING a tag
    $('a:contains(CLICK HERE TO CONTINUE SHOPPING)').parent().addClass('continueShopping');
    //Add class to kit customizable products
    $('span:contains(needs to be viewed)').parent().addClass('kitCustomize');
    //Change "Pleace check you items" button text to "Please approve customised items"
    //$('#STOP_SIGNOFF a strong').html('Please approve customised items');       


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
    $('#deliveryAddress td.notBgmed').append('<div id="DeliveryWarningMsg"><p>Please check delivery address and edit if necessary.<br>Once you click â€˜Confirm Orderâ€™ below, the details shown here cannot be edited.</p></div>');

    //Add class to main checkout table
    $('#CustomPaymentInfo').parent().parent().parent().parent().addClass('checkoutTable');



	//Wrap footer content into "innerFooter" div
	$( "#footContent" ).wrapInner( "<div id='innerFooter'></div>");

	//Add Video Tutorial link to footer
    $('#footContent p').append('<span> | </span><a href="https://youtu.be/7XeM3q4bsCU" target="_blank">Video Tutorial</a>');


	    //Add Octink logo to footer
    $( "#innerFooter" ).append( "<a href='http://www.octink.com' target='_blank' id='footer-image'><img src='https://rawgit.com/OctAE/Public/master/Powered%20by.png' alt='Octink'></a>");


    //After "Add to Order" go to Basket page as normal, but add text "Product has been added to basket, return to category..."
    var referrer =  document.referrer;
    if (pathname.indexOf('basket') > -1 && referrer.split("/").length > 5 )
    {
    	if (referrer.indexOf('product-edit') > -1) {
    		var backUrl = referrer.replace("http://taylorwimpeystore.octink.com/", "");
    		backUrl = backUrl.replace("product-edit", "products");
    		backUrl = backUrl.substr(0, backUrl.lastIndexOf("/"));
    		//var backUrlText = backUrl.substring(9);
    		//backUrlText = backUrlText.replace("/", " > ");
    		$('p.continueShopping').addClass('goBackToCat');
    		$('p.continueShopping a').attr({href:backUrl});
    		$('p.continueShopping a').html('add additional items');
    	} else if (referrer.indexOf('kit-edit') > -1) {
    	    if (referrer.indexOf('alternative') > -1) {
    	 	//var backUrl = referrer.replace("http://red2gouk.netprintmanager.com/", "");
    		//backUrl = backUrl.replace("kit-edit", "products");
    		//backUrl = backUrl.substr(0, backUrl.lastIndexOf("/"));
    		//var backUrlText = backUrl.substring(9);
    		//backUrlText = backUrlText.replace("/", " > ");
    		$('p.continueShopping').addClass('goBackToCat');
    	    //$('p.continueShopping a').attr({href:backUrl});
    	    $('p.continueShopping a').attr({href:"http://taylorwimpeystore.octink.com/taylorwimpey/products/02.-alternative-finish-shell/02-additional-items"});
    		$('p.continueShopping a').html('add additional items');
    		
    	    } else if (referrer.indexOf('standard') > -1) {
    	    $('p.continueShopping').addClass('goBackToCat');
    	    //$('p.continueShopping a').attr({href:backUrl});
    	    $('p.continueShopping a').attr({href:"http://taylorwimpeystore.octink.com/taylorwimpey/products/01.-standard-finish-swirl/02-additional-items"});
    		$('p.continueShopping a').html('add additional items');
    	    }
    	}
    } 

    if ($('p.continueShopping a').text() == 'go back to ') {
    	$('p.continueShopping').removeClass('goBackToCat')
    	$('p.continueShopping a').html('click here to continue shopping')
    }

    //Change "Add notes" text to "Add store reference/notes"
    $('.small11px a').html('Add store reference/notes');
    $('h2#notesProductionheader').html('Add store reference/notes');

    //Replace bin icon on "Customised your image" on Product individual page - customized items
    $('#editImage .img_trash img').attr({src:"https://googledrive.com/host/0BwH8qt4hNhT5ZjNmYUxCVWt3RVk/"});

    //Add "Thank you" add the begining of message on Order complete page
    $('.invoiceback p:nth-of-type(1)').before('<h2>Thank you</h2>'); 

     //Change text of message on Order complete page

    if (!(pathname.indexOf('order-approval') > -1)) { 
    	$('.invoiceback p:nth-of-type(3)').html('Your Octink Account Handler<br>will be in touch to confirm your install date').after('<p>visit <a href="http://www.octink.com">octink.com</a> to find out more about your signage supplier</p>'); 
	}

    //Add navigation text below order complete message
    $('.invoiceback').after('<p id="afterCompleteMsg">Click <a href="/taylorwimpey/products">Open Catalogue</a> to place another order, or <a href="/taylorwimpey/logout">Log Out</p>');

    //Order approval page
    if (pathname.indexOf('order-approval') > -1) {
	          $( ".stepsHighlight, .stepsPlain" ).hide();
	          }


    //Hide print this page button
    $('span:contains(Print this page)').parent().parent().hide();


    //Add breadcrumbs to edit-kit and edit-product page, BUT NOT ON PRODUCT WHICH IS PART OF A KIT
    if (pathname.indexOf('product-edit') > -1 || pathname.indexOf('kit-edit') > -1 ) {

    	if ($('a#addToKit span:contains(kit)').length == 0) {
		      
		        var breadcrumbHtml = "<div style='padding: 10px 0px 30px 4px; display: block'><strong>You are at: > > <a href='/taylorwimpey/products'>Tylor Wimpey</a>"
		       	var pathArray = pathname.split("/");
		        var pathBefore = "";
		    		for (i = 2; i < pathArray.length-1; i++) {
		   				 pathBefore = pathBefore + "/" + pathArray[i]; 
		           		 breadcrumbHtml = breadcrumbHtml + " > <a href='/taylorwimpey/products" + pathBefore + "'>" + pathArray[i] + "</a>";
					}
		      breadcrumbHtml = breadcrumbHtml + " > product selection</strong></div>";
		      $('.progressSteps').next().after(breadcrumbHtml);
			}
		}

	//Replace button text "Click to go to kit ......" to "< back to kit overview"
	$('#addToKit span:contains(go to kit)').html(' < return to items overview ');

	//Replace button text "Click to go to.... " to "personalize next item >"
	$('a#viewNextPage span').html('go to next item >').parent().parent().addClass('nextItem'); 

 	//Replace button text needs to be viewed as it requires personalisation before proceeding!" to "More items requires personalisation before proceeding!"
	$('.displayboxheading span:contains(needs to be viewed)').html('Press the button below to customise next item!'); 

	//Hide strong text: "Your data will not be shared with any 3rd parties other than Protx for payment processing".
	$('strong:contains(Your data will not be shared with any 3rd parties other than Protx for payment processing.)').hide();

	


   if (pathname.indexOf('forgot-password') > -1) {

	//Hide Forgotten password heading
     $(".heading").css( "color", "#331244" );

     //Change emaile input field background
		$(".bglight").css( "background-color", "#F5F5F5" );

	//Move button to the left
		$(".alphabutton").css( "margin-left", "-38px" );
	
    }
    
    	//Add wetransfer upload link to order-confirm page
     //if (pathname.indexOf('order-confirm') > -1) {
      //   var orderConfirmNumber = $('tr#orderNumber td::nth-child(2) span').html();
      // $('#orderSubTotal').before('<tr><td colspan ="5"><a target="_blank" id="wetransferlink" href="https://octink.wetransfer.com/?to=brad@octink.com&msg=this%20is%20technical%20drawning%20for%20' + orderConfirmNumber + '">Please send us a Technical Drawning!</a></td></tr>');
//
	 //  }
    
    


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

//Thanks "Add to kit" to Proceed
$('a:contains("Add to kit")').html('Proceed');

//add class to empty product box in category view
if ((pathname.indexOf('01.-standard-finish-swirl/01-suites') > -1 ) || (pathname.indexOf('02.-alternative-finish-shell/01-suites') > -1 ) ) {
    $('.productGridTR td:nth-child(4)').addClass('emptyProductGrid');
      $('.productGridTR td:nth-child(5)').addClass('emptyProductGrid');
 }

})// End document ready



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












