//test
//v1.0
//Copyright 2015 Octink. All rights reserved.

var fixingName;

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
	$('#ulDropDown').append(liButtEdit);
	$('#ulDropDown').append(liButtLogout);


	//Add div before .bannerLogo div {
	$('.bannerLogo').before('<div id="bannerBehind"></div>'); 


	//Detach footer and place it at the bottom of centrealign_split
	var footer = $('#footContent');
	footer.detach();
	$('.centrealign_split').after(footer);

	//On basket page add breadcrump steps and change "Continue Order" to "Proceed to checkout"
	 if (pathname.indexOf('basket') > -1){
	       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select &nbsp;your Items</p></div><div class="stepsPlain" style="float: left;" ><p>2. Edit </p></div><div class="stepsHighlight" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Confirm order &#38; payment</p></div></div><br style="clear: both" /><p class="underSteps"><a href="http://superdrystore.octink.com/superdry/products">CLICK HERE TO CONTINUE SHOPPING</a></p>');
	       $("span#ORDER_CONTINUE_TEXT").html('Proceed to checkout'); 
	 }

	 // Replacing Deliver with Collation and delivery on Basket page
	 $("#orderDelivery :nth-child(2)").text('Collation and delivery will be added upon confirmation');


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
    $('p:contains(2. Edit - Sign off printed material )').html('2. Sign off');

	 //Change style of Checkout breadcrum and add wider gap between cells
	 if (!(pathname.indexOf('order-confirm') > -1)){
	          $( ".stepsPlain:nth-of-type(4)" ).addClass('noAfter');
	        } else if (pathname.indexOf('order-confirm') > -1){
	          $( ".stepsHighlight" ).addClass('noAfter');
	          $(".centrealign_split table tbody tr:nth-of-type(3) td form table").attr({cellspacing:"4"});
	          $(".centrealign_split table tbody tr:nth-of-type(3) td form table tr td:not(.bgmed)").addClass('notBgmed');
	        }

	if (pathname == "/superdry/confirm-my-details") {
	          $( ".stepsHighlight" ).addClass('noAfter');
	        }

	if (pathname.indexOf('order_complete') > -1) {
	          $( ".stepsHighlight, .stepsPlain" ).hide();
	        }

	//RTT+ steps CSS debug
	$('ul.stepsList').removeClass('stepsList');

	 //Change "Please check Order reference" to "Please add order reference"
    $('strong#STOP_PONUMBER_TEXT').html('Please select billing region');

    //Add claas to CLICK HERE TO CONTINUE SHOPPING a tag
    $('a:contains(CLICK HERE TO CONTINUE SHOPPING)').parent().addClass('continueShopping');

    //Change "Pleace check you items" button text to "Please approve customised items"
    $('#STOP_SIGNOFF a strong').html('Please approve customised items');   

    //Change "Job title" to "Store Ref/Location (required)"
    //$('div.iCaption:contains(Job title)').html('Store Reference and Location (required)'); 
    //$('#HEADER__NAME').attr('placeholder','Store Ref/Location');
    $('#divHEADER__NAME').hide();
    $('#divProductionNotes .iCaption').html("Please enter a store name and location in store as showen below. You can\'t process without giving these details. ");
    $('#divProductionNotes .iCaption').css('color', 'red');
    $('#productionNotes').attr('placeholder','Example: Kingston upon Thames / Cash Desk');


       //Remove order history table content and change word "INVOICE to word "ORDER" and word "PO No." to "Billing region - "
    if(pathname == "/superdry/order-history") {
     $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(4)').remove();
     $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(4)').remove();
     $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(4)').remove();
     //$('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(3)').remove();
     //$('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(3)').remove();
     //$('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(2) table tbody tr td:nth-child(3)').remove();

     $('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr td:nth-child(1) a strong').each( function(){
      var textToChange = this.firstChild.nodeValue;
     this.firstChild.nodeValue = textToChange.replace( /INVOICE/g, 'ORDER');
     });
   $('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr td:nth-child(1)').each( function(){
     this.innerHTML = this.innerHTML.replace( /PO No./g, 'Billing Region -');
     });

   	$('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr').each( function(){
    	//var textToChange = this.firstChild.nodeValue;
     	//this.firstChild.nodeValue = textToChange.replace( /INVOICE/g, 'ORDER');
     	console.log(this)
     	//$('.orderView').each( function() {
     	//	console.log(this)
     	//});
     });
   }


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




//Change “Edit my details” button text to “Change “delivery address”
    $('#deliveryAddress a span').html('Change delivery address');

    //Change “Finish Order” button text to “Confirm order”
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
    $('#deliveryAddress td.notBgmed').append('<div id="DeliveryWarningMsg"><p>Please check delivery address and edit if necessary.<br>Once you click ‘Confirm Order’ below, the details shown here cannot be edited.</p></div>');

    //Add class to main checkout table
    $('#CustomPaymentInfo').parent().parent().parent().parent().addClass('checkoutTable');



	//Wrap footer content into "innerFooter" div
	$( "#footContent" ).wrapInner( "<div id='innerFooter'></div>");

	//Add Video Tutorial link to footer

	 if (pathname.indexOf('index') < 0) {
	         $('#footContent p').append('<span> | </span><a href="https://cdn.rawgit.com/OctAE/Public/master/User-Guide.pdf" target="_blank">User Guide</a>');
	          }
   


	    //Add Octink logo to footer
    $( "#innerFooter" ).append( "<a href='http://www.octink.com' target='_blank' id='footer-image'><img src='https://cdn.rawgit.com/OctAE/Public/master/super-footerOctink.jpg' alt='Octink'></a>");


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
    	$('p.continueShopping').removeClass('goBackToCat');
    	$('p.continueShopping a').html('click here to continue shopping');
    }

    //Change "Add notes" text to "Add store reference/notes"
    $('.small11px a').html('Add store reference/notes').hide();
    $('h2#notesProductionheader').html('Add store reference/notes');

    //Replace bin icon on "Customised your image" on Product individual page - customized items
    $('#editImage .img_trash img').attr({src:"https://cdn.rawgit.com/OctAE/Public/master/super-bin.png"});

    //Add "Thank you" add the begining of message on Order complete page
    $('.invoiceback p:nth-of-type(1)').before('<h2>Thank you</h2>'); 

     //Change text of message on Order complete page

    if (!(pathname.indexOf('order-approval') > -1)) { 
    	$('.invoiceback p:nth-of-type(3)').html('Your Octink Account Handler<br>will be in touch to confirm your delivery date').after('<p>visit <a href="http://www.octink.com">octink.com</a> to find out more about your signage supplier</p>'); 
	}

    //Add navigation text below order complete message
    $('.invoiceback').after('<p id="afterCompleteMsg">Click <a href="/superdry/products">Open Catalogue</a> to place another order, or <a href="/superdry/logout">Log Out</p>');

    //Add product key on product individual page
    $('#rightcol').append('<div id="productKey"><img src="https://cdn.rawgit.com/OctAE/Public/master/super-key.png"></div>');

    //Order approval page
    if (pathname.indexOf('order-approval') > -1) {
	          $( ".stepsHighlight, .stepsPlain" ).hide();
	          }

	//Remove above from page selection
	$( ".selectPage" ).parent().parent().removeClass('stepsHighlight'); 
	

    //Hide print this page button
    $('span:contains(Print this page)').parent().parent().hide();


    //Add breadcrumbs to edit-kit and edit-product page, BUT NOT ON PRODUCT WHICH IS PART OF A KIT
    if (pathname.indexOf('product-edit') > -1 || pathname.indexOf('kit-edit') > -1 ) {

    	if ($('a#addToKit span:contains(kit)').length == 0) {
		      
		        var breadcrumbHtml = "<div style='padding: 10px 0px 30px 4px; display: block'><strong>You are at: > > <a href='/superdry/products'>Superdry</a>"
		       	var pathArray = pathname.split("/");
		        var pathBefore = "";
		    		for (i = 2; i < pathArray.length-1; i++) {
		   				 pathBefore = pathBefore + "/" + pathArray[i]; 
		           		 breadcrumbHtml = breadcrumbHtml + " > <a href='/superdry/products" + pathBefore + "'>" + pathArray[i] + "</a>";
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

	//Point Footer T&C to Octink PDF T&C
    $('#footContent p a:nth-of-type(3)').attr({ href:"http://octink.com/dev/wp-content/uploads/2014/04/Octink_Standard-terms-of-business_April-2014.pdf", target:"nw"});

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


// Make "Store Reference / Location in Store" required field
if (pathname.indexOf('rttplus') > -1) {

			function scrollToElement(ele) {
    			$(window).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
			}
	         
			scrollToElement($('#productionNotes'));	

	         $('#productionNotes').focus();


			if (!$.trim($("#productionNotes").val())) {
			    $( "#checkoutButtonEdit" ).prop('disabled', true);
			} else {
				$( "#checkoutButtonEdit" ).prop('disabled', false);
			}


			$("#productionNotes").on('keyup paste',function() {
			    if ($(this).val().trim().length > 0) {
			        $('#checkoutButtonEdit').prop("disabled", false);
			    } else {
				$( "#checkoutButtonEdit" ).prop('disabled', true);
			}
			});

			$( ".input-group-btn" ).click(function() {
				if ($( "#checkoutButtonEdit" ).is(':disabled')) {
					$('#productionNotes').focusout();
					$('#productionNotes').focus();
				} 
			});


			fixingName = $("[id^=LAYER_0_ITEM_]").find('option:selected').text();

			$("#productionNotes").val($("#productionNotes").val().split(" ** Fixing:"+fixingName+"**").join(""));

			$("[id^=LAYER_0_ITEM_]").change(function() {
				fixingName = $("[id^=LAYER_0_ITEM_]").find('option:selected').text();
			});


			//$( "#checkoutButtonEdit" ).click(function() { 
			//	$( "#productionNotes" ).val($("#productionNotes").val() + " ** Fixing:"+fixingName+"**")
			//});

}


if($('#idOrderDelivery_523').is(':checked')) { 

$('#orderDelivery td').css({
      "color": "red"   
    });
$("#orderDelivery :nth-child(2)").text('Collation and delivery TBC');
 

}

//Add drop down list for basket page for Billing Region
if (pathname.indexOf('basket') > -1){
$( "#ponumber").before("<select name='billingregion' id='billingregion'><option>UK franchise</option><option>UK own retail</option><option>International franchise</option><option>International own retail </option><option>Western and Northern Europe franchise</option><option>Western and Northern Europe own retail </option><option>Central Eastern Europe franchise</option><option>Central Eastern Europe own retail </option><option>Southern Europe franchise</option><option>Southern Europe own retail </option><option>USA franchise</option><option>USA own retail </option></select>");
$( "select[name='billingregion']" )
  .change(function () {
    var billregion = "";
    $( "select[name='billingregion'] option:selected" ).each(function() {
      billregion = $( this ).text();
    });
    $( "input#ponumber" ).val( billregion );
  })
  .change();
}


})// End document ready



//This overrite native RedTie function. This makes page reload after alert "Product added to order successfully" alert
/*
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

*/


/* Overrides native function */
	function doAddToBasket() {
		
		// form post AJAX
		var objForm = document.getElementById("rtpForm");
			objForm.addToCart.value = "Y";
		var returnXml = "0";
			if (window.location.href.toLowerCase().indexOf('?returnxml=1') != -1 || window.location.href.toLowerCase().indexOf('&returnxml=1') != -1) {
				returnXml = "1";
			}
		var postUrl = "/public/edit_rttplus_exec.asp?returnXml=" + returnXml;
		var postContent = $("#rtpForm").serialize();
			if ($("#productionNotes").size() > 0) {
				$( "#productionNotes" ).val($("#productionNotes").val() + " ** Fixing:"+fixingName+"**");
				postContent = postContent + "&" + $("#productionNotes").serialize();
			}
		var jqueryXHR = $.post(postUrl, postContent)
			.done(function (data, textStatus, jqXHR) {
				if (data.isSuccess === "true") {
					document.location = data.actionRedirect;
				} else {
					if (data.actionMessage !== undefined) {
						if (data.actionMessage.length > 0) {
							alert(data.actionMessage + " (ERTP-64)");
						} else {
							alert("Unable to save at this time, no reason was given (ERTP-66)")
						}
					} else {
						alert("Unable to save at this time, please try again later (ERTP-68)");
					}
				}
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				alert("Unable to add to basket, please try again in a moment.  If this error persists, please contact support. (#RTP-390 | HTTP." + jqXHR.status + ")");
			})
			.always(function () {
			})
		;
	}