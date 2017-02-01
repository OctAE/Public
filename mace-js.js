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
    $('strong#STOP_PONUMBER_TEXT').html('Please add customer order reference');

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
    
  if ((iconLocation.indexOf('img.netprintmanager.com') > -1) && !(iconLocation.indexOf('imgCategories') > -1) && ($(this).attr('id') != "previewImage" )) {
  
    var M480 = "http://img.netprintmanager.com/red2gouk/i/695/6834/749974.698527a0-b785-480e-adfc-825972824eb9.jpeg";
    var MSFSN01 = "http://img.netprintmanager.com/red2gouk/imgLibTool/705542399_APRV.jpg";
    var M4802 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616505.9fa875df-3c35-4357-b0a1-c7bfdd6da868.jpeg";
    var BusinesscardDEMO1 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616509.d91c16c1-8263-48bf-9644-cb100539af36.jpeg";
    var M020 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616516.4d9a62c6-5cf0-4b1a-b344-ede9c90210e0.jpeg";
    var M095 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616522.9db5eac8-375a-474b-9654-5bfb7a22ae62.jpeg";
    var M275 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616525.a61e000b-376c-4667-8a16-4ef555b19a74.jpeg";
    var MaceDemoJointVenures = "http://img.netprintmanager.com/red2gouk/i/695/6834/616530.3c6845d9-6919-4929-8685-cdc9003e593f.jpeg";
    var M482 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616537.a6d4193a-9dbb-427b-8daa-1e7c119f17d5.jpeg";
    var MSFSN900 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616579.efa7a0ac-129b-45e5-8240-546bf229bc1c.jpeg";
    var M479 ="http://img.netprintmanager.com/red2gouk/imgLibTool/693446325_APRV.jpg";
    var MSFSN003 = "http://img.netprintmanager.com/red2gouk/i/695/6834/749983.8c88de6e-4ef0-4b51-9fd0-ecd916d38468.jpeg";
    var MSFSN005 = "http://img.netprintmanager.com/red2gouk/i/695/6834/749987.ed0ad9b3-dc2a-49d3-a9ac-97a4dbfc9819.jpeg";
    var MSFSN010 = "http://img.netprintmanager.com/red2gouk/i/695/6834/749993.8a13c5dc-7133-45ca-9752-fcaeb4a79eb0.jpeg";
    var MSFSN012 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750106.548b3603-550a-45b8-88b9-f6613043906f.jpeg";
    var MSFSN015 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750111.0f0bdd52-2784-44c1-a0e5-7f1df2935f72.jpeg";
    var MSFSN016 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750118.a2c2cc6e-177b-45d6-9476-514cce42dc9e.jpeg";
    var MSFSN100 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750123.c19286dc-c586-4e9c-9712-fa0041dc5308.jpeg";
    var MSFSN1000 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750124.52e08723-64af-468d-ae3f-7e1cf1927220.jpeg";
    var M4STEPSA1 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750132.20734c64-b342-44c0-94a4-31430b5dd830.jpeg";
    var M4STEPSA3 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750136.c19202ef-9c91-4527-94ce-c1bf0f0a7d33.jpeg";
    var MSFSN1100 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750164.3f36ebff-0647-41a0-b526-de6e03070b1b.jpeg";
    var MSFSN120 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750169.45a754a2-dc40-4a98-b531-8914465d6c22.jpeg";
    var MSFSN200 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750173.534969e4-a453-4e4a-8245-acdfe0c19772.jpeg";
    var MSFSN400 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750182.2a05c7e8-84b1-4f50-a411-5b7d971c352d.jpeg";
    var MSFSN500 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750185.17a59419-ef49-4831-9b7d-ece5ee5650cd.jpeg";
    var MSFSN600 = "http://img.netprintmanager.com/red2gouk/imgLibTool/517546315_APRV.jpg";
    var MSFSN700 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750197.7b220691-1ef4-4356-b288-dfb922678255.jpeg";
    var MSFSN800 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750198.b6b5eb7e-5cc4-463e-82b4-37a262408f91.jpeg";
    var MSOS001 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750199.170bcc8a-cf07-4c30-a385-db2d0b452e94.jpeg";
    var MSOSCARD = "http://img.netprintmanager.com/red2gouk/imgLibTool/705547378_ASRC.jpg";
    var MWAH4STEPS = "http://img.netprintmanager.com/red2gouk/imgLibTool/415446320_APRV.jpg";
    var ToolTethersMustBeWornA3 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750219.4cd6019d-9d1a-4a51-b7f9-780b92bd644b.jpeg";
    var MSFSNVS001f = "http://img.netprintmanager.com/red2gouk/i/695/6834/750160.57a7bc9e-791e-4a02-a88a-def483de245f.jpeg";
    var MSFSNVS001p = "http://img.netprintmanager.com/red2gouk/i/695/6834/750163.947f7f23-9cc7-47d4-a608-53d41b34dc11.jpeg";
    var MSFSNVS002f = "http://img.netprintmanager.com/red2gouk/i/695/6834/750166.f253ab13-eb05-411a-9c14-33f3922a2b4f.jpeg";
    var MSFSNVS002p = "http://img.netprintmanager.com/red2gouk/i/695/6834/751025.9a9085a1-bc26-43bd-a18f-d128af07419f.jpeg";
    var MSFSNVS003f = "http://img.netprintmanager.com/red2gouk/i/695/6834/750166.f253ab13-eb05-411a-9c14-33f3922a2b4f.jpeg";
    var MSFSNVS003p = "http://img.netprintmanager.com/red2gouk/i/695/6834/750183.f7a008d2-47ce-4224-90b7-2bd978e26be5.jpeg";
    var MFSNVS020f = "http://img.netprintmanager.com/red2gouk/i/695/6834/750184.e468445e-2b15-40b4-a398-c7c0ad0308d5.jpeg";
    var MSFSNVSOO3p = "http://img.netprintmanager.com/red2gouk/i/695/6834/750186.3e4b85b3-e597-482b-a05d-5527106bc920.jpeg";
    var MSFSNVS020f = "http://img.netprintmanager.com/red2gouk/i/695/6834/750200.8e48c76f-c75a-446d-ad5e-65ac73a9cfdd.jpeg";
    var MSFSNVS021f = "http://img.netprintmanager.com/red2gouk/i/695/6834/750201.491b5b47-56ec-4135-b125-5c0e3aabccbf.jpeg";
    var M502 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750207.ec760674-2eca-4b8d-b9e3-5fe9ccf30915.jpeg";
    var M503 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750208.722702a4-f693-4979-a86c-522f2e2e735d.jpeg";
    var M505 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750212.72d2b830-d725-4629-a564-d2a41e9dda05.jpeg";
    var M506 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750213.8187145c-9cc5-48a6-a85e-f35a18620837.jpeg";
    var M196 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750274.138c9524-d2a0-4cd3-a718-a9b04751da21.jpeg";
    var M197 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750280.f252cb54-642d-49c3-8b83-c93dde5aa2c0.jpeg";
    var M199 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750282.ba6e2ea8-2e70-40d6-b827-ce7ec1ea268a.jpeg";
    var M200 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750310.9df5ceea-3297-43a8-9481-8d969bafae7a.jpeg";
    var M204 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750325.2c5d08bf-0bc9-4746-9cfa-abdd654f090b.jpeg";
    var M211 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750684.2d6c6019-5a33-41c3-bacd-498850dfc509.jpeg";
    var MESP = "http://img.netprintmanager.com/red2gouk/i/695/6834/750685.d816b8f4-3c91-43b4-8d59-d314efa2d0f0.jpeg";
    var M400 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750686.91d30e5e-abdf-4d50-b984-8f1ea55ae454.jpeg";
    var M401 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750689.2c53275f-54e5-4ff2-ba86-9b77d87d04e8.jpeg";
    var M402 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750690.23311e9b-6087-4d65-82fd-badd95b194c2.jpeg";
    var M005 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750693.2ddc0f11-83a4-44c6-a1ac-2688c6220fc4.jpeg";
    var M008 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750694.910061ef-64ec-45eb-8035-7c561d762913.jpeg";
    var M013 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750696.b885f4a9-1ed8-4349-b7de-8ecb409a3c24.jpeg";
    var M024 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750697.17197e2d-00bb-4b79-80ba-23e04525ab1d.jpeg";
    var M391 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750698.e501fa6c-b892-4f3e-a4ad-db951cb07ec1.jpeg";
    var M612 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750701.2abba1bf-a455-4b68-8fb9-d6139276f9f6.jpeg";
    var M055 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750708.5c0fc8cb-86cd-41a0-ae4b-7fbd6bb719b6.jpeg";
    var M062 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750709.986e22d0-3e4e-4131-812c-28235de936d0.jpeg";
    var M070 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750710.2907a337-b0f4-4847-9276-3519201ac7a9.jpeg";
    var M071 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750711.17a2891f-24ba-4ca0-a94a-fd299c128886.jpeg";
    var M076 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750712.d6992808-7b07-471b-acc7-5d7c6a873420.jpeg";
    var M077 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750715.6a8fd693-fc94-40c7-a123-47b57a3785cc.jpeg";
    var M079 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750716.d2f62bfb-3b44-49e5-b2a3-edf9fdb0619c.jpeg";
    var M080 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750718.7db2a76f-af0f-4aa5-9784-57d7b2131a1d.jpeg";
    var M289 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750719.b209e5c4-a442-40ec-b4f0-837495288333.jpeg";
    var M294 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750720.bec12a48-6ffa-477d-8a43-6aec0211c568.jpeg";
    var M389b = "http://img.netprintmanager.com/red2gouk/i/695/6834/750721.4330ecba-4e77-42c2-81a2-81d6928f384d.jpeg";
    var M533 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750725.fa10df4e-895d-4752-882a-8850fba710ee.jpeg";
    var M081 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751790.d3fdb3b3-6c51-49e4-a352-49bb10f300c9.jpeg";
    var M091 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751810.d4d45f00-d013-4503-b484-8c83b5c6b89a.jpeg";
    var M092 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750733.5db3a8ac-7824-4470-b713-d666161443a0.jpeg";
    var M095 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750734.369c4d02-84a1-4fc0-9e79-af50409dcf31.jpeg";
    var M100 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750735.ec674b42-a2d4-4710-ac32-f30348ff1999.jpeg";
    var M104 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750735.ec674b42-a2d4-4710-ac32-f30348ff1999.jpeg";
    var M107 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750738.34709add-683c-4cdc-8cb9-536e223cea33.jpeg";
    var M133 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750740.e24daf46-df5b-4243-8507-9e82fe902252.jpeg";
    var M311 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750741.ad913e5a-7ad7-4431-8d41-1d190e46e92c.jpeg";
    var M574 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750742.a6b26577-891a-41cc-9b9d-14990d9e45b7.jpeg";
    var M142 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751773.bc2d3b14-be90-434d-8544-207c909b9aef.jpeg";
    var M149 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751776.e673366a-c086-450b-b1f3-b8bce647f765.jpeg";
    var M151 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751777.815f11cb-e597-4a2b-a129-9e975f8e2d49.jpeg";
    var M152 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751778.cef6a3fc-b4d6-43ca-be10-b5147521ee7b.jpeg";
    var M157 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751779.16b3c2a1-dce2-4824-a806-b05ea9254ca3.jpeg";
    var M169 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751783.0cfcc5f6-836f-4408-bfb8-72abb38a766d.jpeg";
    var M170 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751784.d8da5ee9-b722-4f04-814c-f510b6d7812a.jpeg";
    var M171 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751785.32ef719c-b91c-497b-8e6f-266330ece241.jpeg";
    var M172 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751786.d0b02202-2fc9-423c-8c94-93936fb3420c.jpeg";
    var M173 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751787.ef32ca46-5fd4-40df-92b9-8ec3a0165d6b.jpeg";
    var M174 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751788.4c1e885f-412c-4b50-9103-4829cc6ccef2.jpeg";
    var M175 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751789.fcc4a92b-29c3-4c2c-a9dc-7c17f444f121.jpeg";
    var M176 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751793.a8c64fb8-a3a5-4d6e-84e0-16fc62799f19.jpeg";
    var M184 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751794.3fa98862-215e-4af4-a746-ddb0bf277f12.jpeg";
    var M185 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751795.fd81a6aa-54ed-46df-982b-53804f9f378a.jpeg";
    var M341 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751809.f9428fec-c64d-43c7-9ab3-02bf1c65b7d2.jpeg";
    var M359 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751811.f64a124e-e886-4016-b7a2-47cd9d7e762b.jpeg";
    var M554 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751812.4a802644-115a-40e8-a9da-2419b04babf6.jpeg";
    var M555 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751815.dbf6c876-2938-48a2-84a7-826c41d0f81f.jpeg";
    var M556 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751819.246933d0-8739-4395-b73b-a59e037110bd.jpeg";
    var M560a = "http://img.netprintmanager.com/red2gouk/i/695/6834/751820.1f3bdb4c-7bd2-4226-aad4-2d992eacefb6.jpeg";
    var M834 = "http://img.netprintmanager.com/red2gouk/i/695/6834/751821.064a4d6c-3298-403e-8c24-e873afdef5c9.jpeg";
    var M415 = "http://img.netprintmanager.com/red2gouk/imgLibTool/892647362_APRV.jpg";
    var M455 = "http://img.netprintmanager.com/red2gouk/i/695/6834/750744.e6af3ccb-1214-470b-8b7a-edc6ea1bb429.jpeg";
    var MPROG1A = "http://img.netprintmanager.com/red2gouk/i/695/6834/750759.eeced7e3-2c4b-4b7e-999e-e1816171fc51.jpeg";
    var MSFSN004 = "http://img.netprintmanager.com/red2gouk/i/695/6834/764308.e2c20686-9a3e-4c55-b5ce-8b6cea55be1f.jpeg";
    var MSFSN011 = "http://img.netprintmanager.com/red2gouk/i/695/6834/764304.0a1e1f39-8c41-469a-936d-e1f4d2ab57c5.jpeg";
    var M226 = "http://img.netprintmanager.com/red2gouk/i/695/6834/766385.c42452b8-abb7-4ca2-b7e7-b53108cf704b.jpeg";

	var MSFSN007 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774168.d6aa402b-c043-4f8a-a2ad-0d71802bd0ea.jpeg";
	var MSFSN008 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774169.644552d5-bdce-4714-adbb-7aea692cff61.jpeg";
	var MSFSN009 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774172.f5ec802d-c3ff-4b85-b07a-4753aa837db7.jpeg";
	var M552 = "http://img.netprintmanager.com/red2gouk/imgLibTool/645747976_APRV.jpg";
	var M265 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774174.b65093f9-16d3-4696-bd97-da4334810074.jpeg";
	var M343 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774175.cab220d6-a768-4696-a90b-8f1e633277c1.jpeg";
	var M349 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774177.b36fb73c-91b3-407d-b1d9-e5eb1958fab8.jpeg";
	var MWALL = "http://img.netprintmanager.com/red2gouk/i/695/6834/774179.8882b0c5-451b-4be2-ab93-792de5d4080b.jpeg";
	var M499 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774181.17f71a45-0efc-43fe-9b73-fba4d8d42a93.jpeg";
	var M210 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774183.5438811a-f090-4afb-9e42-c864dad4c814.jpeg";
	var M588 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774184.ca71463c-0ee9-4637-a1bc-af09030a96f0.jpeg";
	var M589 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774185.db974020-0b75-45dc-91e5-f628cdeb2f02.jpeg";
	var M590 = "http://img.netprintmanager.com/red2gouk/i/695/6834/774186.7b4fbd99-3fc4-4385-a7c1-58f255b03273.jpeg";
	
	var M131 = "http://img.netprintmanager.com/red2gouk/i/695/6834/789751.78de7050-7523-4af4-883c-455018d64c5d.jpeg";
	var M132 = "http://img.netprintmanager.com/red2gouk/i/695/6834/789753.2c013812-2524-4f91-b59a-2fbd54973042.jpeg";
	var M486 = "http://img.netprintmanager.com/red2gouk/i/695/6834/789766.2b9f16b2-1afa-4bfb-9ad9-77a5c864af77.jpeg";
	var M495 = "http://img.netprintmanager.com/red2gouk/i/695/6834/789769.413a56d2-2187-4c88-8be8-fed3c3a2da3b.jpeg";
	var M224 = "http://img.netprintmanager.com/red2gouk/i/695/6834/843502.0b2fb01d-8634-44a8-8b35-75b1e3159a89.jpeg";
	var MFORS = "http://img.netprintmanager.com/red2gouk/i/695/6834/843462.cf85adf5-fa19-45c5-ad5d-c95f2fa59bd3.jpeg";

	var M4803 = "http://img.netprintmanager.com/red2gouk/imgLibTool/981150170_ASRC.jpg";
	var M4793 = "";
	var M4783 = "";
	var M4773 = "";
	var M478 = "";
	var M4773 = "";
	var M4792 = "";
	var M4782 = "";
	var M4772 = "";
	var M551 = "http://img.netprintmanager.com/red2gouk/imgLibTool/542550189_ASRC.jpg";
	var MMMC480 = "http://img.netprintmanager.com/red2gouk/imgLibTool/942550190_ASRC.jpg";
	var MMMC479 = "http://img.netprintmanager.com/red2gouk/imgLibTool/750150191_ASRC.jpg";
	var MMMC478 = "http://img.netprintmanager.com/red2gouk/imgLibTool/825550192_ASRC.jpg";
	var MMMC477 = "http://img.netprintmanager.com/red2gouk/imgLibTool/323050193_ASRC.jpg";
	var MSFSN006 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919690.7b0e4536-90c4-493c-9e06-f6515977f98a.jpeg";
	var MSFSN013 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919692.63fea996-e068-428d-ba19-42c09ab87096.jpeg";
	var MSFSN100a = "http://img.netprintmanager.com/red2gouk/i/695/6834/919693.8e553fde-531e-4546-8973-caae2ccafaf5.jpeg";
	var MSFSN701 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919694.4ee5106a-1af6-4da4-a075-540761b2b504.jpeg";
	var MMEWP02 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919695.8741bfa4-f0d3-46a9-b494-9ab8558468ce.jpeg";
	var MTTMA2 = "";
	var MTTMYTA2 = "";
	var MTTMYTA3 = "";
	var MSFSNVS004p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919700.6e1aaafb-046b-42ab-a0d7-0c8d1bf1993c.jpeg";
	var MSFSNVS004f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919701.9b8b33db-2ea3-4959-a925-18eea08990c2.jpeg";
	var MSFSNVS006p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919702.88b18386-dbb5-4f09-b571-5ba1e394727c.jpeg";
	var MSFSNVS006f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919703.0326cd3b-5057-433b-8b95-7fc5bef07e27.jpeg";
	var MSFSNVS007p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919705.9578368d-821f-4760-aee9-9a8656cf7a7a.jpeg";
	var MSFSNVS007f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919706.67451ec2-cc1a-42db-8583-3d20b1634cf1.jpeg";
	var MSFSNVS008p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919707.83e5fe41-f264-40fa-80dc-fcaeac5de802.jpeg";
	var MSFSNVS008f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919708.c6f22719-e17c-4d4f-989f-049f1b1f0046.jpeg";
	var MSFSNVS009p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919709.ca0e4900-584c-4fd9-80e1-d8296c6782af.jpeg";
	var MSFSNVS009f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919710.6122cd2e-551d-4dfd-be0f-813504020f96.jpeg";
	var MSFSNVS010p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919711.ba6e33a1-b6f8-4ba3-b9e8-355764fec84d.jpeg";
	var MSFSNVS010f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919712.6af3d4b8-9f4f-45d7-a795-5041ac83aeda.jpeg";
	var MSFSNVS011p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919713.7037ae1a-5fcb-470a-a5ba-8ed6f9ecd036.jpeg";
	var MSFSNVS011f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919714.fd617e74-c5d8-4e80-857f-f231d4ea9c5a.jpeg";
	var MSFSNVS012p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919716.f54b296c-460d-42ec-b6b9-9a24a2fb1a69.jpeg";
	var MSFSNVS012f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919717.bc11af8a-62a4-4f3a-8f94-e4e88c1ca46f.jpeg";
	var MSFSNVS013p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919718.a199a44e-309d-4b0f-9e4a-58b59c6a8316.jpeg";
	var MSFSNVS013f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919719.bab64bb9-0a39-49d0-b9a7-3dd5c5de3076.jpeg";
	var MSFSNVS014p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919720.9bd7c343-77fb-4fa9-9157-d41c62413952.jpeg";
	var MSFSNVS014f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919721.aedd96d7-964e-4379-a5d1-4c2d5719cb50.jpeg";
	var MSFSNVS015p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919722.17af6629-2a39-42fb-bcf3-95a47829711d.jpeg";
	var MSFSNVS015f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919723.0fac505e-d39b-4406-94b3-4b18133c8858.jpeg";
	var MSFSNVS016p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919724.e64cdf38-179d-479b-bd2e-3941e949f132.jpeg";
	var MSFSNVS016f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919725.c04847a1-dbe0-4951-a97b-d7f5f5d3b4d9.jpeg";
	var MSFSNVS017p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919726.14518643-c029-4ef2-bc83-681a0ea44ec4.jpeg";
	var MSFSNVS017f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919727.98017e1a-4392-4daa-bceb-54e405d2802f.jpeg";
	var MSFSNVS018p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919728.d578aeef-6c0f-4bb3-b847-dbb27f612ddf.jpeg";
	var MSFSNVS018f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919729.d636d8a4-e915-4e35-8e00-861c33467803.jpeg";
	var MSFSNVS019p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919730.4e6ce35e-3daa-4e97-acdb-a969f255b1c0.jpeg";
	var MSFSNVS019f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919731.644939db-e5d6-4ed2-a7d0-a85cbb843e68.jpeg";
	var MSFSNVS020p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919732.1e4f8451-0fd7-492a-b661-d025bbd87fb4.jpeg";
	var MSFSNVS021p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919733.b7e0ed29-c786-45de-bc54-61e082c993a2.jpeg";
	var MSFSNVS022p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919734.0c1ad58f-4471-4fc5-899c-37b6841e2398.jpeg";
	var MSFSNVS022f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919735.208118da-0133-42ac-a340-e8292c2d9cdf.jpeg";
	var MSFSNVS024p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919736.0d87dacb-a629-41bb-bdbb-e07c843d7a6c.jpeg";
	var MSFSNVS024f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919737.6c3c562e-cd8f-40ad-9d16-0e2a2f2c12fc.jpeg";
	var MSFSNVS026p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919738.e7a55fb0-c8f0-4b91-9708-d2d035e7c560.jpeg";
	var MSFSNVS026f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919739.81c76778-541e-4396-aec7-925f26f15d87.jpeg";
	var MSFSNVS027p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919740.d9a9c9d7-b997-4064-9dda-343a30310c6e.jpeg";
	var MSFSNVS027f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919741.24a6a377-9a4a-49b8-a68c-a788ba66ccb6.jpeg";
	var MSFSNVS028p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919742.32a03c7e-7875-48c3-a59b-7db2b9724466.jpeg";
	var MSFSNVS028f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919743.68c4acca-66d5-4bc8-9759-966f8614fb2c.jpeg";
	var MSFSNVS029p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919744.02f700bd-4dab-4234-b5ac-94bcb5e43733.jpeg";
	var MSFSNVS029f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919745.7a7170fa-1b54-4981-8615-78a7f862fadb.jpeg";
	var MSFSNVS034p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919746.a88312fc-025f-4e5f-8a78-d1b526af8e5b.jpeg";
	var MSFSNVS034f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919747.e3cc5a53-2207-4781-81a0-61b0165b6a4e.jpeg";
	var MSFSNVS035p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919748.72297d22-61d5-49ba-8232-4ef0df580319.jpeg";
	var MSFSNVS035f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919749.7b043179-0101-4801-baf1-d1757078ae29.jpeg";
	var MSFSNVS036p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919750.96bdca36-a3e5-4d23-9f8d-baaf35e67177.jpeg";
	var MSFSNVS036f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919751.46493a1a-4826-477a-b680-7df351a428da.jpeg";
	var MSFSNVS037p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919752.9d0411eb-8834-4369-bfb9-262cd31210af.jpeg";
	var MSFSNVS037f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919753.fb44b10d-e514-42b8-9955-b5f7b9bbe302.jpeg";
	var MSFSNVS038p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919756.d309ab0b-3a5f-4cac-a12a-2ee54e365a88.jpeg";
	var MSFSNVS038f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919757.2f284ad3-41d3-466a-a419-569dee2bfd62.jpeg";
	var MSFSNVS039p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919760.b618cd8c-d7e2-402b-9ea0-e6b8fe5c593c.jpeg";
	var MSFSNVS039f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919761.85b11378-5220-4332-86a8-e698eae1059d.jpeg";
	var MSFSNVS040p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919762.4e49edb6-c3aa-4b62-95c1-9d1814a5e321.jpeg";
	var MSFSNVS040f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919763.f9b5a1dd-8aa6-4892-8ba0-89f94badd628.jpeg";
	var MSFSNVS041p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919764.416c2853-1af7-47b9-bd68-9a3b9d63958b.jpeg";
	var MSFSNVS041f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919765.06a4e6f9-ff13-4261-a808-66b185a88404.jpeg";
	var MSFSNVS042p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919766.f4bc4393-1ae6-4303-b354-d6136671f115.jpeg";
	var MSFSNVS042f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919767.fed189cc-1289-42c6-9cca-f239dceea1db.jpeg";
	var MSFSNVS043p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919768.56135f12-a7ce-4a52-865e-fcfc365923a2.jpeg";
	var MSFSNVS043f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919769.dadd3eb4-57a4-46e3-9779-929073e56cfc.jpeg";
	var MSFSNVS044p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919770.68342e4b-f8a0-48d5-bce9-6960e402263d.jpeg";
	var MSFSNVS044f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919771.fcab9a08-5db4-48c0-aa5d-8280eb85abff.jpeg";
	var MSFSNVS045p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919772.0dfab83c-322b-4bb5-ab05-80c0ed8769ee.jpeg";
	var MSFSNVS045f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919773.661f4908-891f-4213-b5cc-b132f7cbf3f0.jpeg";
	var MSFSNVS046p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919774.76374d15-c3af-46fe-a776-39761d4058de.jpeg";
	var MSFSNVS046f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919775.a62539cf-216e-434c-89d3-c4a676ae1c3b.jpeg";
	var MSFSNVS047p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919776.d33c409a-c250-4100-a6d6-c67f4f8f7535.jpeg";
	var MSFSNVS047f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919777.4eec0d14-1abb-4811-9d94-00d00beae1cb.jpeg";
	var MSFSNVS049p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919778.514042b8-4630-4d2a-b02e-b70eb0fe0afa.jpeg";
	var MSFSNVS049f = "http://img.netprintmanager.com/red2gouk/i/695/6834/919779.1ae382de-da2a-4383-9081-8d55446bb626.jpeg";
	var M481 = "";
	var M482 = "";
	var M483 = "";
	var M484 = "";
	var M485 = "";
	var M487 = "";
	var M488 = "";
	var M489 = "";
	var M481p = "";
	var M482p = "";
	var M483p = "";
	var M484p = "";
	var M485p = "";
	var M486p = "";
	var M487p = "";
	var M488p = "";
	var M489p = "";
	var M491 = "";
	var M492 = "";
	var M493 = "";
	var M494 = "";
	var M496 = "";
	var M497 = "";
	var M498 = "";
	var M501 = "";
	var M507 = "";
	var M508 = "";
	var M509 = "";
	var M510 = "";
	var M201 = "";
	var M202 = "";
	var M203 = "";
	var M205 = "";
	var M206 = "";
	var M207 = "";
	var M208 = "";
	var M209 = "";
	var M212 = "";
	var M213 = "";
	var M214 = "";
	var M215 = "";
	var M216 = "";
	var M217 = "";
	var M218 = "";
	var M219 = "";
	var M220 = "";
	var M221 = "";
	var M222 = "";
	var M587 = "";
	var M593 = "";
	var M594 = "";
	var M595 = "";
	var M596 = "";
	var M597 = "";
	var M598 = "";
	var M599 = "";
	var M560b = "";
	var M561 = "";
	var M563 = "";
	var M564 = "";
	var M565 = "";
	var M567 = "";
	var M575 = "";
	var M576 = "";
	var M579 = "";
	var M580 = "";
	var M600 = "";
	var M601 = "";
	var M602 = "";
	var M603 = "";
	var M604 = "";
	var M605 = "";
	var M606 = "";
	var M607 = "";
	var M198 = "";
	var M608 = "";
	var M609 = "";
	var M610 = "";
	var M611 = "";
	var M581 = "";
	var M582 = "";
	var M583 = "";
	var M584 = "";
	var M585 = "";
	var M586 = "";
	var MECO001 = "";
	var MECO003 = "";
	var MECO004 = "";
	var MECO006 = "";
	var MECO007 = "";
	var MECO011 = "";
	var MECO022 = "";
	var MPWHA2 = "";
	var MPWHA1 = "";
	var M403 = "";
	var MPUP001 = "";
	var M001 = "";
	var M002 = "";
	var M003 = "";
	var M004 = "";
	var M006 = "";
	var M007 = "";
	var M010 = "";
	var M011 = "";
	var M012 = "";
	var M014 = "";
	var M015 = "";
	var M016 = "";
	var M017 = "";
	var M018 = "";
	var M019 = "";
	var M020 = "";
	var M021 = "";
	var M022 = "";
	var M023 = "";
	var M025 = "";
	var M026 = "";
	var M027 = "";
	var M030 = "";
	var M031 = "";
	var M032 = "";
	var M033 = "";
	var M035 = "";
	var M036 = "";
	var M037 = "";
	var M040 = "";
	var M041 = "";
	var M044 = "";
	var M046 = "";
	var M047 = "";
	var M049 = "";
	var M577 = "";
	var M223 = "";
	var M228 = "";
	var M229 = "";
	var M230 = "";
	var M231 = "";
	var M232 = "";
	var M233 = "";
	var M235 = "";
	var M236 = "";
	var M237 = "";
	var M238 = "";
	var M239 = "";
	var M240 = "";
	var M241 = "";
	var M244 = "";
	var M247 = "";
	var M248 = "";
	var M249 = "";
	var M250 = "";
	var M251 = "";
	var M252 = "";
	var M253 = "";
	var M254 = "";
	var M255 = "";
	var M256 = "";
	var M257 = "";
	var M258 = "";
	var M259 = "";
	var M260 = "";
	var M261 = "";
	var M262 = "";
	var M263 = "";
	var M264 = "";
	var M388 = "";
	var M389 = "";
	var M392 = "";
	var M393 = "";
	var M396 = "";
	var M056 = "";
	var M057 = "";
	var M058 = "";
	var M059 = "";
	var M060 = "";
	var M063 = "";
	var M065 = "";
	var M066 = "";
	var M067 = "";
	var M068 = "";
	var M071 = "";
	var M072 = "";
	var M073 = "";
	var M074 = "";
	var M078 = "";
	var M080 = "";
	var M384 = "";
	var M275 = "";
	var M276 = "";
	var M277 = "";
	var M278 = "";
	var M279 = "";
	var M281 = "";
	var M282 = "";
	var M284 = "";
	var M285 = "";
	var M286 = "";
	var M287 = "";
	var M290 = "";
	var M291 = "";
	var M292 = "";
	var M293 = "";
	var M295 = "";
	var M296 = "";
	var M297 = "";
	var M298 = "";
	var M299 = "";
	var M300 = "";
	var M533 = "";
	var M367 = "";
	var M368 = "";
	var M369 = "";
	var M372 = "";
	var M373 = "";
	var M374 = "";
	var M375 = "";
	var M378 = "";
	var M379 = "";
	var M380 = "";
	var M093 = "";
	var M096 = "";
	var M097 = "";
	var M098 = "";
	var M099 = "";
	var M101 = "";
	var M102 = "";
	var M103 = "";
	var M106 = "";
	var M111 = "";
	var M117 = "";
	var M119 = "";
	var M120 = "";
	var M121 = "";
	var M122 = "";
	var M123 = "";
	var M124 = "";
	var M125 = "";
	var M126 = "";
	var M127 = "";
	var M128 = "";
	var M129 = "";
	var M130 = "";
	var M134 = "";
	var M136 = "";
	var M137 = "";
	var M138 = "";
	var M139 = "";
	var M140 = "";
	var M141 = "";
	var M572 = "";
	var M082 = "";
	var M083 = "";
	var M084 = "";
	var M085 = "";
	var M086 = "";
	var M087 = "";
	var M088 = "";
	var M089 = "";
	var M090 = "";
	var M301 = "";
	var M303 = "";
	var M309 = "";
	var M310 = "";
	var M312 = "";
	var M314 = "";
	var M315 = "";
	var M317 = "";
	var M318 = "";
	var M319 = "";
	var M320 = "";
	var M321 = "";
	var M322 = "";
	var M324 = "";
	var M325 = "";
	var M326 = "";
	var M327 = "";
	var M328 = "";
	var M329 = "";
	var M330 = "";
	var M331 = "";
	var M332 = "";
	var M333 = "";
	var M334 = "";
	var M335 = "";
	var M336 = "";
	var M337 = "";
	var M338 = "";
	var M340 = "";
	var M397 = "";
	var M399 = "";
	var M404 = "";
	var M535 = "";
	var M536 = "";
	var M405 = "";
	var M406 = "";
	var M407 = "";
	var M408 = "";
	var M409 = "";
	var M410 = "";
	var M411 = "";
	var M412 = "";
	var M413 = "";
	var M414 = "";
	var M416 = "";
	var M417 = "";
	var M418 = "";
	var M443 = "";
	var M421 = "";
	var M422 = "";
	var M423 = "";
	var M424 = "";
	var M425 = "";
	var M426 = "";
	var M427 = "";
	var M428 = "";
	var M429 = "";
	var M430 = "";
	var M431 = "";
	var M432 = "";
	var M433 = "";
	var M434 = "";
	var M435 = "";
	var M436 = "";
	var M437 = "";
	var M438 = "";
	var M439 = "";
	var M440 = "";
	var M446 = "";
	var M447 = "";
	var M448 = "";
	var M449 = "";
	var M450 = "";
	var M451 = "";
	var M452 = "";
	var M441 = "";
	var M442 = "";
	var M143 = "";
	var M144 = "";
	var M150 = "";
	var M154 = "";
	var M155 = "";
	var M156 = "";
	var M158 = "";
	var M159 = "";
	var M160 = "";
	var M161 = "";
	var M162 = "";
	var M167 = "";
	var M177 = "";
	var M178 = "";
	var M179 = "";
	var M180 = "";
	var M181 = "";
	var M182 = "";
	var M183 = "";
	var M186 = "";
	var M187 = "";
	var M188 = "";
	var M190 = "";
	var M191 = "";
	var M192 = "";
	var M194 = "";
	var M195 = "";
	var M557 = "";
	var M558 = "";
	var M559 = "";
	var M342 = "";
	var M344 = "";
	var M345 = "";
	var M346 = "";
	var M347 = "";
	var M348 = "";
	var M350 = "";
	var M351 = "";
	var M352 = "";
	var M353 = "";
	var M354 = "";
	var M356 = "";
	var M361 = "";
	var M362 = "";
	var M363 = "";
	var M365 = "";
	var M366 = "";
	var M381 = "";
	var M382 = "";
	var M383 = "";
	var MCLOCSPoster1 = "";
	var MCLOCSPoster2 = "";
	var MCLOCSPopup = "";
	var MCLOCSBanner = "";


    switch (productCode) {
	case "M-224":
    iconLocation = M224;
    break;
    case "M-FORS":
    iconLocation = MFORS;
    break;
    case "M-SFSN-001":
    iconLocation = MSFSN01;
    break;
    case "M-DAB001":
    iconLocation = MDAB001;
    break;
    case "M-131":
    iconLocation = M131;
    break;
    case "M-132":
    iconLocation = M132;
    break;
    case "M-486":
    iconLocation = M486;
    break;
    case "M-495":
    iconLocation = M495;
    break;
    case "M-SFSN-VS007":
    iconLocation = MSFSN007;
    break;
    case "M-390":
    iconLocation = M390;
    break;
    case "M-SFSN-VS008":
    iconLocation = MSFSN008;
    break;
    case "M-SFSN-VS009":
    iconLocation = MSFSN009;
    break;
    case "M-552":
    iconLocation = M552;
    break;
    case "M-265":
    iconLocation = M265;
    break;
    case "M-343":
    iconLocation = M343;
    break;
    case "M-349":
    iconLocation = M349;
    break;
    case "M-WALL":
    iconLocation = MWALL;
    break;
    case "M-499":
    iconLocation = M499;
    break;
    case "M-592":
    iconLocation = M592;
    break;
    case "M-210":
    iconLocation = M210;
    break;
    case "M-588":
    iconLocation = M588;
    break;
    case "M-589":
    iconLocation = M589;
    break;
    case "M-590":
    iconLocation = M590;
    break;
    case "M-591":
    iconLocation = M591;
    break;
case "M-SFSN-VS001f":
    iconLocation = MSFSNVS001f;
    break;
 case "M-226":
    iconLocation = M226;
    break;
case "M-400 Defibrillator loacation":
    iconLocation = M400;
    break;
    case "M-SFSN-004":
    iconLocation = MSFSN004;
    break;
    case "M-SFSN-011":
    iconLocation = MSFSN011;
    break;
    case "M-415":
    iconLocation = M415;
    break;
    case "M-455":
    iconLocation = M455;
    break;
    case "M-PROG1A":
    iconLocation = MPROG1A;
    break;
case "M-142":
    iconLocation = M142;
    break;
case "M-149":
    iconLocation = M149;
    break;
case "M-151":
    iconLocation = M151;
    break;
case "M-152":
    iconLocation = M152;
    break;
case "M-157":
    iconLocation = M157;
    break;
case "M-169":
    iconLocation = M169;
    break;
case "M-170":
    iconLocation = M170;
    break;
case "M-171":
    iconLocation = M171;
    break;
case "M-172":
    iconLocation = M172;
    break;
case "M-173":
    iconLocation = M173;
    break;
case "M-174":
    iconLocation = M174;
    break;
case "M-175":
    iconLocation = M175;
    break;
case "M-176":
    iconLocation = M176;
    break;
case "M-184":
    iconLocation = M184;
    break;
case "M-185":
    iconLocation = M185;
    break;
case "M-341":
    iconLocation = M341;
    break;
case "M-359":
    iconLocation = M359;
    break;
case "M-554":
    iconLocation = M554;
    break;
case "M-555":
    iconLocation = M555;
    break;
case "M-556":
    iconLocation = M556;
    break;
case "M-560a":
    iconLocation = M560a;
    break;
case "M-834":
    iconLocation = M834;
    break;
case "09181":
    iconLocation = M091;
    break;
case "M-092":
    iconLocation = M092;
    break;
case "M-095":
    iconLocation = M095;
    break;
case "M-100":
    iconLocation = M100;
    break;
case "M-104":
    iconLocation = M104;
    break;
case "M-107":
    iconLocation = M107;
    break;
case "M-133":
    iconLocation = M133;
    break;
case "M-311":
    iconLocation = M311;
    break;
case "M-574":
    iconLocation = M574;
    break;
case "M-081":
    iconLocation = M081;
    break;
case "M-005":
    iconLocation = M005;
    break;
case "M-391":
    iconLocation = M391;
    break;
case "M-612":
    iconLocation = M612;
    break;
case "M-055":
    iconLocation = M055;
    break;
case "M-062":
    iconLocation = M062;
    break;
case "M-070":
    iconLocation = M070;
    break;
case "M-071":
    iconLocation = M071;
    break;
case "M-076":
    iconLocation = M076;
    break;
case "M-077":
    iconLocation = M077;
    break;
case "M-079":
    iconLocation = M079;
    break;
case "M-080":
    iconLocation = M080;
    break;
case "M-289":
    iconLocation = M289;
    break;
case "M-294":
    iconLocation = M294;
    break;
case "M-389b":
    iconLocation = M389b;
    break;
case "M-533":
    iconLocation = M533;
    break;
case "M-008":
    iconLocation = M008;
    break;
case "M-013":
    iconLocation = M013;
    break;
case "M-024":
    iconLocation = M024;
    break;
case "M-391":
    iconLocation = M391;
    break;
case "M-612":
    iconLocation = M612;
    break;
case "M-401":
    iconLocation = M401;
    break;
case "M-402":
    iconLocation = M402;
    break;
case "M-ESP":
    iconLocation = MESP;
    break;
case "M-196":
    iconLocation = M196;
    break;
case "M-197":
    iconLocation = M197;
    break;
case "M-199":
    iconLocation = M199;
    break;
case "M-200":
    iconLocation = M200;
    break;
case "M-204":
    iconLocation = M204;
    break;
case "M-211":
    iconLocation = M211;
    break;
case "M-502":
    iconLocation = M502;
    break;
case "M-503":
    iconLocation = M503;
    break;
case "M-505":
    iconLocation = M505;
    break;
case "M-506":
    iconLocation = M506;
    break;
case "M-SFSN-VS001p":
    iconLocation = MSFSNVS001p;
    break;
case "M-SFSN-VS002f":
    iconLocation = MSFSNVS002f;
    break;
case "M-SFSN-VS002p":
    iconLocation = MSFSNVS002p;
    break;
case "M-SFSN-VS003f":
    iconLocation = MSFSNVS003f;
    break;
case "M-SFSN-VS003p":
    iconLocation = MSFSNVS003p;
    break;
case "M-SFSN-VS020f":
    iconLocation = MFSNVS020f;
    break;
case "M-SFSN-VS020f":
    iconLocation = MSFSNVS020f;
    break;
case "M-SFSN-VS021f":
    iconLocation = MSFSNVS021f;
    break;
case "M-SFSN-VSOO3p":
    iconLocation = MSFSNVSOO3p;
    break;
case "Tool tethers must be worn A3":
    iconLocation = ToolTethersMustBeWornA3;
    break;
case "M-WAH_4STEPS":
    iconLocation = MWAH4STEPS;
    break;
case "M-SOSCARD":
    iconLocation = MSOSCARD;
    break;
case "M-SOS-001":
    iconLocation = MSOS001;
    break;
case "M-SFSN-800":
    iconLocation = MSFSN800;
    break;
case "M-SFSN-700":
    iconLocation = MSFSN700;
    break; 
case "M-SFSN-600":
    iconLocation = MSFSN600;
    break;    
case "M-SFSN-500":
    iconLocation = MSFSN500;
    break;
case "M-SFSN-200":
    iconLocation = MSFSN200;
    break;
case "M-SFSN-400":
    iconLocation = MSFSN400;
    break;
case "M-SFSN-120":
    iconLocation = MSFSN120;
    break;
case "M-480":
    iconLocation = M480;
    break;
case "M-SFSN-003":
    iconLocation = MSFSN003;
    break;
case "M-SFSN-005":
    iconLocation = MSFSN005;
    break;
case "M-SFSN-010":
    iconLocation = MSFSN010;
    break;
case "M-SFSN-012":
    iconLocation = MSFSN012;
    break;
case "M-SFSN-015":
    iconLocation = MSFSN015;
    break;
case "M-SFSN-016":
    iconLocation = MSFSN016;
    break;
case "M-SFSN-100":
    iconLocation = MSFSN100;
    break;
case "M-SFSN-1000":
    iconLocation = MSFSN1000;
    break;
case "M-4STEPSA1":
    iconLocation = M4STEPSA1;
    break;
case "M-4STEPSA3":
    iconLocation = M4STEPSA3;
    break;
case "M-SFSN-1100":
    iconLocation = MSFSN1100;
    break;
  case "M-480-2":
    iconLocation = M4802;
    break;
  case "Business card DEMO 1":
    iconLocation = BusinesscardDEMO1;
    break;  
  case "M-020":
    iconLocation = M020;
    break;  
  case "M-095":
    iconLocation = M095;
    break;  
  case "M-275":
    iconLocation = M275;
    break;  
  case "M-482":
    iconLocation = M482;
    break;  
  case "Mace Demo Joint Venures":
    iconLocation = MaceDemoJointVenures;
    break; 
  case "M-SFSN-100":
    iconLocation = MSFSN100;
    break;
  case "M-SFSN-1000":
    iconLocation = MSFSN1000;
    break;
    case "M-479":
    iconLocation = M479;
    break;  
 case "M-480-3":
iconLocation = M4803;
break;
case "M-479-3":
iconLocation = M4793;
break;
case "M-478-3":
iconLocation = M4783;
break;
case "M-477-3":
iconLocation = M4773;
break;
case "M-478":
iconLocation = M478;
break;
case "M-477-3":
iconLocation = M4773;
break;
case "M-479-2":
iconLocation = M4792;
break;
case "M-478-2":
iconLocation = M4782;
break;
case "M-477-2":
iconLocation = M4772;
break;
case "M-551":
iconLocation = M551;
break;
case "M-MMC-480":
iconLocation = MMMC480;
break;
case "M-MMC-479":
iconLocation = MMMC479;
break;
case "M-MMC-478":
iconLocation = MMMC478;
break;
case "M-MMC-477":
iconLocation = MMMC477;
break;
case "M-SFSN-006":
iconLocation = MSFSN006;
break;
case "M-SFSN-013":
iconLocation = MSFSN013;
break;
case "M-SFSN-100a":
iconLocation = MSFSN100a;
break;
case "M-SFSN-701":
iconLocation = MSFSN701;
break;
case "M-MEWP02":
iconLocation = MMEWP02;
break;
case "M-TTM-A2":
iconLocation = MTTMA2;
break;
case "M-TTMYT-A2":
iconLocation = MTTMYTA2;
break;
case "M-TTMYT-A3":
iconLocation = MTTMYTA3;
break;
case "M-SFSN-VS004p":
iconLocation = MSFSNVS004p;
break;
case "M-SFSN-VS004f":
iconLocation = MSFSNVS004f;
break;
case "M-SFSN-VS006p":
iconLocation = MSFSNVS006p;
break;
case "M-SFSN-VS006f":
iconLocation = MSFSNVS006f;
break;
case "M-SFSN-VS007p":
iconLocation = MSFSNVS007p;
break;
case "M-SFSN-VS007f":
iconLocation = MSFSNVS007f;
break;
case "M-SFSN-VS008p":
iconLocation = MSFSNVS008p;
break;
case "M-SFSN-VS008f":
iconLocation = MSFSNVS008f;
break;
case "M-SFSN-VS009p":
iconLocation = MSFSNVS009p;
break;
case "M-SFSN-VS009f":
iconLocation = MSFSNVS009f;
break;
case "M-SFSN-VS010p":
iconLocation = MSFSNVS010p;
break;
case "M-SFSN-VS010f":
iconLocation = MSFSNVS010f;
break;
case "M-SFSN-VS011p":
iconLocation = MSFSNVS011p;
break;
case "M-SFSN-VS011f":
iconLocation = MSFSNVS011f;
break;
case "M-SFSN-VS012p":
iconLocation = MSFSNVS012p;
break;
case "M-SFSN-VS012f":
iconLocation = MSFSNVS012f;
break;
case "M-SFSN-VS013p":
iconLocation = MSFSNVS013p;
break;
case "M-SFSN-VS013f":
iconLocation = MSFSNVS013f;
break;
case "M-SFSN-VS014p":
iconLocation = MSFSNVS014p;
break;
case "M-SFSN-VS014f":
iconLocation = MSFSNVS014f;
break;
case "M-SFSN-VS015p":
iconLocation = MSFSNVS015p;
break;
case "M-SFSN-VS015f":
iconLocation = MSFSNVS015f;
break;
case "M-SFSN-VS016p":
iconLocation = MSFSNVS016p;
break;
case "M-SFSN-VS016f":
iconLocation = MSFSNVS016f;
break;
case "M-SFSN-VS017p":
iconLocation = MSFSNVS017p;
break;
case "M-SFSN-VS017f":
iconLocation = MSFSNVS017f;
break;
case "M-SFSN-VS018p":
iconLocation = MSFSNVS018p;
break;
case "M-SFSN-VS018f":
iconLocation = MSFSNVS018f;
break;
case "M-SFSN-VS019p":
iconLocation = MSFSNVS019p;
break;
case "M-SFSN-VS019f":
iconLocation = MSFSNVS019f;
break;
case "M-SFSN-VS020p":
iconLocation = MSFSNVS020p;
break;
case "M-SFSN-VS021p":
iconLocation = MSFSNVS021p;
break;
case "M-SFSN-VS022p":
iconLocation = MSFSNVS022p;
break;
case "M-SFSN-VS022f":
iconLocation = MSFSNVS022f;
break;
case "M-SFSN-VS024p":
iconLocation = MSFSNVS024p;
break;
case "M-SFSN-VS024f":
iconLocation = MSFSNVS024f;
break;
case "M-SFSN-VS026p":
iconLocation = MSFSNVS026p;
break;
case "M-SFSN-VS026f":
iconLocation = MSFSNVS026f;
break;
case "M-SFSN-VS027p":
iconLocation = MSFSNVS027p;
break;
case "M-SFSN-VS027f":
iconLocation = MSFSNVS027f;
break;
case "M-SFSN-VS028p":
iconLocation = MSFSNVS028p;
break;
case "M-SFSN-VS028f":
iconLocation = MSFSNVS028f;
break;
case "M-SFSN-VS029p":
iconLocation = MSFSNVS029p;
break;
case "M-SFSN-VS029f":
iconLocation = MSFSNVS029f;
break;
case "M-SFSN-VS034p":
iconLocation = MSFSNVS034p;
break;
case "M-SFSN-VS034f":
iconLocation = MSFSNVS034f;
break;
case "M-SFSN-VS035p":
iconLocation = MSFSNVS035p;
break;
case "M-SFSN-VS035f":
iconLocation = MSFSNVS035f;
break;
case "M-SFSN-VS036p":
iconLocation = MSFSNVS036p;
break;
case "M-SFSN-VS036f":
iconLocation = MSFSNVS036f;
break;
case "M-SFSN-VS037p":
iconLocation = MSFSNVS037p;
break;
case "M-SFSN-VS037f":
iconLocation = MSFSNVS037f;
break;
case "M-SFSN-VS038p":
iconLocation = MSFSNVS038p;
break;
case "M-SFSN-VS038f":
iconLocation = MSFSNVS038f;
break;
case "M-SFSN-VS039p":
iconLocation = MSFSNVS039p;
break;
case "M-SFSN-VS039f":
iconLocation = MSFSNVS039f;
break;
case "M-SFSN-VS040p":
iconLocation = MSFSNVS040p;
break;
case "M-SFSN-VS040f":
iconLocation = MSFSNVS040f;
break;
case "M-SFSN-VS041p":
iconLocation = MSFSNVS041p;
break;
case "M-SFSN-VS041f":
iconLocation = MSFSNVS041f;
break;
case "M-SFSN-VS042p":
iconLocation = MSFSNVS042p;
break;
case "M-SFSN-VS042f":
iconLocation = MSFSNVS042f;
break;
case "M-SFSN-VS043p":
iconLocation = MSFSNVS043p;
break;
case "M-SFSN-VS043f":
iconLocation = MSFSNVS043f;
break;
case "M-SFSN-VS044p":
iconLocation = MSFSNVS044p;
break;
case "M-SFSN-VS044f":
iconLocation = MSFSNVS044f;
break;
case "M-SFSN-VS045p":
iconLocation = MSFSNVS045p;
break;
case "M-SFSN-VS045f":
iconLocation = MSFSNVS045f;
break;
case "M-SFSN-VS046p":
iconLocation = MSFSNVS046p;
break;
case "M-SFSN-VS046f":
iconLocation = MSFSNVS046f;
break;
case "M-SFSN-VS047p":
iconLocation = MSFSNVS047p;
break;
case "M-SFSN-VS047f":
iconLocation = MSFSNVS047f;
break;
case "M-SFSN-VS049p":
iconLocation = MSFSNVS049p;
break;
case "M-SFSN-VS049f":
iconLocation = MSFSNVS049f;
break;
case "M-481":
iconLocation = M481;
break;
case "M-482":
iconLocation = M482;
break;
case "M-483":
iconLocation = M483;
break;
case "M-484":
iconLocation = M484;
break;
case "M-485":
iconLocation = M485;
break;
case "M-487":
iconLocation = M487;
break;
case "M-488":
iconLocation = M488;
break;
case "M-489":
iconLocation = M489;
break;
case "M-481p":
iconLocation = M481p;
break;
case "M-482p":
iconLocation = M482p;
break;
case "M-483p":
iconLocation = M483p;
break;
case "M-484p":
iconLocation = M484p;
break;
case "M-485p":
iconLocation = M485p;
break;
case "M-486p":
iconLocation = M486p;
break;
case "M-487p":
iconLocation = M487p;
break;
case "M-488p":
iconLocation = M488p;
break;
case "M-489p":
iconLocation = M489p;
break;
case "M-491":
iconLocation = M491;
break;
case "M-492":
iconLocation = M492;
break;
case "M-493":
iconLocation = M493;
break;
case "M-c":
iconLocation = M493;
break;
case "M-496":
iconLocation = M496;
break;
case "M-497":
iconLocation = M497;
break;
case "M-498":
iconLocation = M498;
break;
case "M-501":
iconLocation = M501;
break;
case "M-507":
iconLocation = M507;
break;
case "M-508":
iconLocation = M508;
break;
case "M-509":
iconLocation = M509;
break;
case "M-510":
iconLocation = M510;
break;
case "M-201":
iconLocation = M201;
break;
case "M-202":
iconLocation = M202;
break;
case "M-203":
iconLocation = M203;
break;
case "M-205":
iconLocation = M205;
break;
case "M-206":
iconLocation = M206;
break;
case "M-207":
iconLocation = M207;
break;
case "M-208":
iconLocation = M208;
break;
case "M-209":
iconLocation = M209;
break;
case "M-212":
iconLocation = M212;
break;
case "M-213":
iconLocation = M213;
break;
case "M-214":
iconLocation = M214;
break;
case "M-215":
iconLocation = M215;
break;
case "M-216":
iconLocation =  M216;
break;
case "M-217":
iconLocation =  M217;
break;
case "M-218":
iconLocation =  M218;
break;
case "M-219":
iconLocation =  M219;
break;
case "M-220":
iconLocation =  M220;
break;
case "M-221":
iconLocation =  M221;
break;
case "M-222":
iconLocation =  M222;
break;
case "M-587":
iconLocation =  M587;
break;
case "M-593":
iconLocation =  M593;
break;
case "M-594":
iconLocation =  M594;
break;
case "M-595":
iconLocation =  M595;
break;
case "M-596":
iconLocation =  M596;
break;
case "M-597":
iconLocation =  M597;
break;
case "M-598":
iconLocation =  M598;
break;
case "M-599":
iconLocation =  M599;
break;
case "M-560b":
iconLocation =  M560b;
break;
case "M-561":
iconLocation =  M561;
break;
case "M-563":
iconLocation =  M563;
break;
case "M-564":
iconLocation =  M564;
break;
case "M-565":
iconLocation =  M565;
break;
case "M-567":
iconLocation =  M567;
break;
case "M-575":
iconLocation =  M575;
break;
case "M-576":
iconLocation =  M576;
break;
case "M-579":
iconLocation =  M579;
break;
case "M-580":
iconLocation =  M580;
break;
case "M-600":
iconLocation =  M600;
break;
case "M-601":
iconLocation =  M601;
break;
case "M-602":
iconLocation =  M602;
break;
case "M-603":
iconLocation =  M603;
break;
case "M-604":
iconLocation =  M604;
break;
case "M-605":
iconLocation =  M605;
break;
case "M-606":
iconLocation =  M606;
break;
case "M-607":
iconLocation =  M607;
break;
case "M-198":
iconLocation =  M198;
break;
case "M-608":
iconLocation =  M608;
break;
case "M-609":
iconLocation =  M609;
break;
case "M-610":
iconLocation =  M610;
break;
case "M-611":
iconLocation =  M611;
break;
case "M-581":
iconLocation =  M581;
break;
case "M-582":
iconLocation =  M582;
break;
case "M-583":
iconLocation =  M583;
break;
case "M-584":
iconLocation =  M584;
break;
case "M-585":
iconLocation =  M585;
break;
case "M-586":
iconLocation =  M586;
break;
case "M-ECO-001":
iconLocation =  MECO001;
break;
case "M-ECO-003":
iconLocation =  MECO003;
break;
case "M-ECO-004":
iconLocation =  MECO004;
break;
case "M-ECO-006":
iconLocation =  MECO006;
break;
case "M-ECO-007":
iconLocation =  MECO007;
break;
case "M-ECO-011":
iconLocation =  MECO011;
break;
case "M-ECO-022":
iconLocation =  MECO022;
break;
case "M-PWH-A2":
iconLocation =  MPWHA2;
break;
case "M-PWH-A1":
iconLocation =  MPWHA1;
break;
case "M-403":
iconLocation =  M403;
break;
case "M-PUP-001":
iconLocation =  MPUP001;
break;
case "M-001":
iconLocation =  M001;
break;
case "M-002":
iconLocation =  M002;
break;
case "M-003":
iconLocation =  M003;
break;
case "M-004":
iconLocation =  M004;
break;
case "M-006":
iconLocation =  M006;
break;
case "M-007":
iconLocation =  M007;
break;
case "M-010":
iconLocation =  M010;
break;
case "M-011":
iconLocation =  M011;
break;
case "M-012":
iconLocation =  M012;
break;
case "M-014":
iconLocation =  M014;
break;
case "M-015":
iconLocation =  M015;
break;
case "M-016":
iconLocation =  M016;
break;
case "M-017":
iconLocation =  M017;
break;
case "M-018":
iconLocation =  M018;
break;
case "M-019":
iconLocation =  M019;
break;
case "M-020":
iconLocation =  M020;
break;
case "M-021":
iconLocation =  M021;
break;
case "M-022":
iconLocation =  M022;
break;
case "M-023":
iconLocation =  M023;
break;
case "M-025":
iconLocation =  M025;
break;
case "M-026":
iconLocation =  M026;
break;
case "M-027":
iconLocation =  M027;
break;
case "M-030":
iconLocation =  M030;
break;
case "M-031":
iconLocation =  M031;
break;
case "M-032":
iconLocation =  M032;
break;
case "M-033":
iconLocation =  M033;
break;
case "M-035":
iconLocation =  M035;
break;
case "M-036":
iconLocation =  M036;
break;
case "M-037":
iconLocation =  M037;
break;
case "M-040":
iconLocation =  M040;
break;
case "M-041":
iconLocation =  M041;
break;
case "M-044":
iconLocation =  M044;
break;
case "M-046":
iconLocation =  M046;
break;
case "M-047":
iconLocation =  M047;
break;
case "M-049":
iconLocation =  M049;
break;
case "M-577":
iconLocation =  M577;
break;
case "M-223":
iconLocation =  M223;
break;
case "M-228":
iconLocation =  M228;
break;
case "M-229":
iconLocation =  M229;
break;
case "M-230":
iconLocation =  M230;
break;
case "M-231":
iconLocation =  M231;
break;
case "M-232":
iconLocation =  M232;
break;
case "M-233":
iconLocation =  M233;
break;
case "M-235":
iconLocation =  M235;
break;
case "M-236":
iconLocation =  M236;
break;
case "M-237":
iconLocation =  M237;
break;
case "M-238":
iconLocation =  M238;
break;
case "M-239":
iconLocation =  M239;
break;
case "M-240":
iconLocation =  M240;
break;
case "M-241":
iconLocation =  M241;
break;
case "M-244":
iconLocation =  M244;
break;
case "M-247":
iconLocation =  M247;
break;
case "M-248":
iconLocation =  M248;
break;
case "M-249":
iconLocation =  M249;
break;
case "M-250":
iconLocation =  M250;
break;
case "M-251":
iconLocation =  M251;
break;
case "M-252":
iconLocation =  M252;
break;
case "M-253":
iconLocation =  M253;
break;
case "M-254":
iconLocation =  M254;
break;
case "M-255":
iconLocation =  M255;
break;
case "M-256":
iconLocation =  M256;
break;
case "M-257":
iconLocation =  M257;
break;
case "M-258":
iconLocation =  M258;
break;
case "M-259":
iconLocation =  M259;
break;
case "M-260":
iconLocation =  M260;
break;
case "M-261":
iconLocation =  M261;
break;
case "M-262":
iconLocation =  M262;
break;
case "M-263":
iconLocation =  M263;
break;
case "M-264":
iconLocation =  M264;
break;
case "M-388":
iconLocation =  M388;
break;
case "M-389":
iconLocation =  M389;
break;
case "M-392":
iconLocation =  M392;
break;
case "M-393":
iconLocation =  M393;
break;
case "M-396":
iconLocation =  M396;
break;
case "M-056":
iconLocation =  M056;
break;
case "M-057":
iconLocation =  M057;
break;
case "M-058":
iconLocation =  M058;
break;
case "M-059":
iconLocation =  M059;
break;
case "M-060":
iconLocation =  M060;
break;
case "M-063":
iconLocation =  M063;
break;
case "M-065":
iconLocation =  M065;
break;
case "M-066":
iconLocation =  M066;
break;
case "M-067":
iconLocation =  M067;
break;
case "M-068":
iconLocation =  M068;
break;
case "M-071":
iconLocation =  M071;
break;
case "M-072":
iconLocation =  M072;
break;
case "M-073":
iconLocation =  M073;
break;
case "M-074":
iconLocation =  M074;
break;
case "M-078":
iconLocation =  M078;
break;
case "M-080":
iconLocation =  M080;
break;
case "M-384":
iconLocation =  M384;
break;
case "M-275":
iconLocation =  M275;
break;
case "M-276":
iconLocation =  M276;
break;
case "M-277":
iconLocation =  M277;
break;
case "M-278":
iconLocation =  M278;
break;
case "M-279":
iconLocation =  M279;
break;
case "M-281":
iconLocation =  M281;
break;
case "M-282":
iconLocation =  M282;
break;
case "M-284":
iconLocation =  M284;
break;
case "M-285":
iconLocation =  M285;
break;
case "M-286":
iconLocation =  M286;
break;
case "M-287":
iconLocation =  M287;
break;
case "M-290":
iconLocation =  M290;
break;
case "M-291":
iconLocation =  M291;
break;
case "M-292":
iconLocation =  M292;
break;
case "M-293":
iconLocation =  M293;
break;
case "M-295":
iconLocation =  M295;
break;
case "M-296":
iconLocation =  M296;
break;
case "M-297":
iconLocation =  M297;
break;
case "M-298":
iconLocation =  M298;
break;
case "M-299":
iconLocation =  M299;
break;
case "M-300":
iconLocation =  M300;
break;
case "M-533":
iconLocation =  M533;
break;
case "M-367":
iconLocation =  M367;
break;
case "M-368":
iconLocation =  M368;
break;
case "M-369":
iconLocation =  M369;
break;
case "M-372":
iconLocation =  M372;
break;
case "M-373":
iconLocation =  M373;
break;
case "M-374":
iconLocation =  M374;
break;
case "M-375":
iconLocation =  M375;
break;
case "M-378":
iconLocation =  M378;
break;
case "M-379":
iconLocation =  M379;
break;
case "M-380":
iconLocation =  M380;
break;
case "M-093":
iconLocation =  M093;
break;
case "M-096":
iconLocation =  M096;
break;
case "M-097":
iconLocation =  M097;
break;
case "M-098":
iconLocation =  M098;
break;
case "M-099":
iconLocation =  M099;
break;
case "M-101":
iconLocation =  M101;
break;
case "M-102":
iconLocation =  M102;
break;
case "M-103":
iconLocation =  M103;
break;
case "M-106":
iconLocation =  M106;
break;
case "M-111":
iconLocation =  M111;
break;
case "M-117":
iconLocation =  M117;
break;
case "M-119":
iconLocation =  M119;
break;
case "M-120":
iconLocation =  M120;
break;
case "M-121":
iconLocation =  M121;
break;
case "M-122":
iconLocation =  M122;
break;
case "M-123":
iconLocation =  M123;
break;
case "M-124":
iconLocation =  M124;
break;
case "M-125":
iconLocation =  M125;
break;
case "M-126":
iconLocation =  M126;
break;
case "M-127":
iconLocation =  M127;
break;
case "M-128":
iconLocation =  M128;
break;
case "M-129":
iconLocation =  M129;
break;
case "M-130":
iconLocation =  M130;
break;
case "M-134":
iconLocation =  M134;
break;
case "M-136":
iconLocation =  M136;
break;
case "M-137":
iconLocation =  M137;
break;
case "M-138":
iconLocation =  M138;
break;
case "M-139":
iconLocation =  M139;
break;
case "M-140":
iconLocation =  M140;
break;
case "M-141":
iconLocation =  M141;
break;
case "M-572":
iconLocation =  M572;
break;
case "M-082":
iconLocation =  M082;
break;
case "M-083":
iconLocation =  M083;
break;
case "M-084":
iconLocation =  M084;
break;
case "M-085":
iconLocation =  M085;
break;
case "M-086":
iconLocation =  M086;
break;
case "M-087":
iconLocation =  M087;
break;
case "M-088":
iconLocation =  M088;
break;
case "M-089":
iconLocation =  M089;
break;
case "M-090":
iconLocation =  M090;
break;
case "M-301":
iconLocation =  M301;
break;
case "M-303":
iconLocation =  M303;
break;
case "M-309":
iconLocation =  M309;
break;
case "M-310":
iconLocation =  M310;
break;
case "M-312":
iconLocation =  M312;
break;
case "M-314":
iconLocation =  M314;
break;
case "M-315":
iconLocation =  M315;
break;
case "M-317":
iconLocation =  M317;
break;
case "M-318":
iconLocation =  M318;
break;
case "M-319":
iconLocation =  M319;
break;
case "M-320":
iconLocation =  M320;
break;
case "M-321":
iconLocation =  M321;
break;
case "M-322":
iconLocation =  M322;
break;
case "M-324":
iconLocation =  M324;
break;
case "M-325":
iconLocation =  M325;
break;
case "M-326":
iconLocation =  M326;
break;
case "M-327":
iconLocation =  M327;
break;
case "M-328":
iconLocation =  M328;
break;
case "M-329":
iconLocation =  M329;
break;
case "M-330":
iconLocation =  M330;
break;
case "M-331":
iconLocation =  M331;
break;
case "M-332":
iconLocation =  M332;
break;
case "M-333":
iconLocation =  M333;
break;
case "M-334":
iconLocation =  M334;
break;
case "M-335":
iconLocation =  M335;
break;
case "M-336":
iconLocation =  M336;
break;
case "M-337":
iconLocation =  M337;
break;
case "M-338":
iconLocation =  M338;
break;
case "M-340":
iconLocation =  M340;
break;
case "M-397":
iconLocation =  M397;
break;
case "M-399":
iconLocation =  M399;
break;
case "M-404":
iconLocation =  M404;
break;
case "M-535":
iconLocation =  M535;
break;
case "M-536":
iconLocation =  M536;
break;
case "M-405":
iconLocation =  M405;
break;
case "M-406":
iconLocation =  M406;
break;
case "M-407":
iconLocation =  M407;
break;
case "M-408":
iconLocation =  M408;
break;
case "M-409":
iconLocation =  M409;
break;
case "M-410":
iconLocation =  M410;
break;
case "M-411":
iconLocation =  M411;
break;
case "M-412":
iconLocation =  M412;
break;
case "M-413":
iconLocation =  M413;
break;
case "M-414":
iconLocation =  M414;
break;
case "M-416":
iconLocation =  M416;
break;
case "M-417":
iconLocation =  M417;
break;
case "M-418":
iconLocation =  M418;
break;
case "M-443":
iconLocation =  M443;
break;
case "M-421":
iconLocation =  M421;
break;
case "M-422":
iconLocation =  M422;
break;
case "M-423":
iconLocation =  M423;
break;
case "M-424":
iconLocation =  M424;
break;
case "M-425":
iconLocation =  M425;
break;
case "M-426":
iconLocation =  M426;
break;
case "M-427":
iconLocation =  M427;
break;
case "M-428":
iconLocation =  M428;
break;
case "M-429":
iconLocation =  M429;
break;
case "M-430":
iconLocation =  M430;
break;
case "M-431":
iconLocation =  M431;
break;
case "M-432":
iconLocation =  M432;
break;
case "M-433":
iconLocation =  M433;
break;
case "M-434":
iconLocation =  M434;
break;
case "M-435":
iconLocation =  M435;
break;
case "M-436":
iconLocation =  M436;
break;
case "M-437":
iconLocation =  M437;
break;
case "M-438":
iconLocation =  M438;
break;
case "M-439":
iconLocation =  M439;
break;
case "M-440":
iconLocation =  M440;
break;
case "M-446":
iconLocation =  M446;
break;
case "M-447":
iconLocation =  M447;
break;
case "M-448":
iconLocation =  M448;
break;
case "M-449":
iconLocation =  M449;
break;
case "M-450":
iconLocation =  M450;
break;
case "M-451":
iconLocation =  M451;
break;
case "M-452":
iconLocation =  M452;
break;
case "M-441":
iconLocation =  M441;
break;
case "M-442":
iconLocation =  M442;
break;
case "M-143":
iconLocation =  M143;
break;
case "M-144":
iconLocation =  M144;
break;
case "M-150":
iconLocation =  M150;
break;
case "M-154":
iconLocation =  M154;
break;
case "M-155":
iconLocation =  M155;
break;
case "M-156":
iconLocation =  M156;
break;
case "M-158":
iconLocation =  M158;
break;
case "M-159":
iconLocation =  M159;
break;
case "M-160":
iconLocation =  M160;
break;
case "M-161":
iconLocation =  M161;
break;
case "M-162":
iconLocation =  M162;
break;
case "M-167":
iconLocation =  M167;
break;
case "M-177":
iconLocation =  M177;
break;
case "M-178":
iconLocation =  M178;
break;
case "M-179":
iconLocation =  M179;
break;
case "M-180":
iconLocation =  M180;
break;
case "M-181":
iconLocation =  M181;
break;
case "M-182":
iconLocation =  M182;
break;
case "M-183":
iconLocation =  M183;
break;
case "M-186":
iconLocation =  M186;
break;
case "M-187":
iconLocation =  M187;
break;
case "M-188":
iconLocation =  M188;
break;
case "M-190":
iconLocation =  M190;
break;
case "M-191":
iconLocation =  M191;
break;
case "M-192":
iconLocation =  M192;
break;
case "M-194":
iconLocation =  M194;
break;
case "M-195":
iconLocation =  M195;
break;
case "M-557":
iconLocation =  M557;
break;
case "M-558":
iconLocation =  M558;
break;
case "M-559":
iconLocation =  M559;
break;
case "M-342":
iconLocation =  M342;
break;
case "M-344":
iconLocation =  M344;
break;
case "M-345":
iconLocation =  M345;
break;
case "M-346":
iconLocation =  M346;
break;
case "M-347":
iconLocation =  M347;
break;
case "M-348":
iconLocation =  M348;
break;
case "M-350":
iconLocation =  M350;
break;
case "M-351":
iconLocation =  M351;
break;
case "M-352":
iconLocation =  M352;
break;
case "M-353":
iconLocation =  M353;
break;
case "M-354":
iconLocation =  M354;
break;
case "M-356":
iconLocation =  M356;
break;
case "M-361":
iconLocation =  M361;
break;
case "M-362":
iconLocation =  M362;
break;
case "M-363":
iconLocation =  M363;
break;
case "M-365":
iconLocation =  M365;
break;
case "M-366":
iconLocation =  M366;
break;
case "M-381":
iconLocation =  M381;
break;
case "M-382":
iconLocation =  M382;
break;
case "M-383":
iconLocation =  M383;
break;
case "MCLOCS-Poster1":
iconLocation =  MCLOCSPoster1;
break;
case "MCLOCS-Poster2":
iconLocation =  MCLOCSPoster2;
break;
case "MCLOCS-Popup":
iconLocation =  MCLOCSPopup;
break;
case "MCLOCS-Banner":
iconLocation =  MCLOCSBanner;
break;
      
  default:
    iconLocation = iconLocation.replace("_TNS.jpg", ".jpg");
  }

switch (titleCode) {
  case "M-SFSN-100":
    iconLocation = MSFSN100;
    break;  
  case "M-SFSN-900":
    iconLocation = MSFSN900;
    break;  
  default:
    iconLocation = iconLocation.replace("_TNS.jpg", ".jpg");
  }




   $( "body" ).append( '<div id="popup"><img src=' + iconLocation + '></div>' );
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
$( "#ponumber").before("<select name='costcode' id='costcode'><option>0149 Marketing and communications - Liam McKay</option><option>0305 Health and safety - Liam McKay</option><option>DGP Logistics - Payment in advance</option><option>1103 Major Projects - Taryn Farah</option><option>1105 Major Projects - Kele Aistrop</option><option>1105 Major Projects - Victoria Lane</option><option>1103 Major Projects - Louisa Donnelly</option><option>1103 Major Projects - Maxine Oliver</option><option>1105 Major Projects - Valerie Malcolm</option><option>1105 Major Projects - Katherine Heney</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Martina William</option><option>1105 Major Projects - Dharmini Dhushyanthan</option><option>1105 Residential / Major Projects - Donna Smith</option><option>1105 Residential / Major Projects - Maureen Watters</option><option>1105 Major Projects - TBC</option><option>1105 Major Projects - TBC</option><option>1119 Commercial - Daniela Cantir</option><option>1119 Commercial - Rebecca Penfold</option><option>1119 Commercial - Genevieve Hines</option><option>1119 Commercial - Stella Hansen</option><option>1119 Commercial - Anna Ibraeva</option><option>1119 Commercial - Hannah Wheeler</option><option>1119 Commercial - Amanda Rowney</option><option>1113 Amenities - Jonathan Kulik-Szafransk</option><option>1113 Amenities - Dawn Smith</option><option>1113 Public - Claire Marika Berryman</option><option>1113 Public - Lisa Tracey</option><option>1113 Public - Lindi Kluever</option><option>1113 Public - Angela Lewis</option><option>1113 Public - Andrew Palmer</option><option>1113 Public - Michaela de-WinterHeald</option><option>1113 Public - Dawn Smith</option><option>1113 Public - Erika Servi</option><option>1113 Public - Laura Jopson</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1104 Technology - Haley Coomer</option><option>1104 Technology - Sandra Grizzle</option><option>1104 Technology - Brogan Hollobon</option><option>1104 Technology - Karen Nayler</option><option>0411 Como - Bob Bruno</option><option>0411 Como - Sam Harding</option><option>0411 Como - Jackie Smith</option><option>0411 Como - Sam Harding</option><option>0411 Como - Robert Woodward</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Pamela Harman</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Charlie Davis</option><option>1205 Infrastructure and Aviation - Alyssa Jones</option><option>1205 Infrastructure and Aviation - Taylor Thompson</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1205 Infrastructure and Aviation - Kelly Butler</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Emma Reilly</option><option>1205 Infrastructure and Aviation - Tracy Thorp</option><option>1205 Infrastructure and Aviation - Sheila Tung</option><option>1205 Infrastructure and Aviation - Courtney Hicks</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1114 Residential - Jenny Stirling</option><option>1114 Residential - Louise Hepple</option><option>1114 Residential - Kate Saunders</option><option>1114 Residential - Lynsey Jennings</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Mick Delaney</option><option>1114 Residential - Catherine Rocha Davies</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Katherine Heney</option><option>0213 Regional - Claire Kavanagh</option><option>0910 MEP - Ian Milner</option><option>0910 MEP - Bianca Panlook</option><option>0910 MEP - Joanne Asher</option><option>0910 MEP - Mandy Farrelly</option><option>0910 MEP - Antiounette Williams</option><option>0910 MEP - Julie Aveiro</option><option>0910 MEP - Lisa Harris</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>0121 - Casey Campbell</option><option>1114 - Jenny Towers</option><option>0204 - Ian Goddard</option><option>1119 - Belinda Dowler</option><option>1113 - Snezhina Kortoci</option></select>");
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


