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
   if (pathname.indexOf('index') < 0) {
	         $('#footContent p').append('<span> | </span><a href="https://googledrive.com/host/0BwH8qt4hNhT5cXpRZDFOYnVwVUU" target="_blank">Mace Catalogue</a>');
	          }
		

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
    $('#editImage .img_trash img').attr({src:"https://googledrive.com/host/0BwH8qt4hNhT5ZjNmYUxCVWt3RVk/"});

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
	var M495 = "http://img.netprintmanager.com/red2gouk/i/695/6834/789769.413a56d2-2187-4c88-8be8-fed3c3a2da3b.jpeg"




    


    switch (productCode) {
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
if (pathname.indexOf('edit-my-details') > -1){
$( "#ponumber").before("<select name='costcode' id='costcode'><option>0149 â€“ Marketing and communications â€“ Liam McKay</option><option>0305 â€“ Health and safety â€“ Liam McKay</option><option>DGP Logistics - Payment in advance</option><option>1103 Major Projects - Taryn Farah</option><option>1105 Major Projects - Kele Aistrop</option><option>1105 Major Projects - Victoria Lane</option><option>1103 Major Projects - Louisa Donnelly</option><option>1103 Major Projects - Maxine Oliver</option><option>1105 Major Projects - Valerie Malcolm</option><option>1105 Major Projects - Katherine Heney</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Adrian Alfano</option><option>1105 Major Projects - Dharmini Dhushyanthan</option><option>1105 Residential / Major Projects - Donna Smith</option><option>1105 Residential / Major Projects - Maureen Watters</option><option>1105 Major Projects - TBC</option><option>1105 Major Projects - TBC</option><option>1119 Commercial - Daniela Cantir</option><option>1119 Commercial - Rebecca Penfold</option><option>1119 Commercial - Genevieve Hines</option><option>1119 Commercial - Tara O'Donoghue</option><option>1119 Commercial - Anna Ibraeva</option><option>1119 Commercial - Hannah Wheeler</option><option>1119 Commercial - Amanda Rowney</option><option>1113 Amenities - Jonathan Kulik-Szafransk</option><option>1113 Amenities - Dawn Smith</option><option>1113 Public - Claire Marika Berryman</option><option>1113 Public - Lisa Tracey</option><option>1113 Public - Lindi Kluever</option><option>1113 Public - Angela Lewis</option><option>1113 Public - Andrew Palmer</option><option>1113 Public - Michaela de-WinterHeald</option><option>1113 Public - Dawn Smith</option><option>1113 Public - Erika Servi</option><option>1113 Public - Laura Jopson</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1104 Technology - Haley Coomer</option><option>1104 Technology - Sandra Grizzle</option><option>1104 Technology - Brogan Hollobon</option><option>1104 Technology - Karen Nayler</option><option>0411 Como - Bob Bruno</option><option>0411 Como - Sam Harding</option><option>0411 Como - Jackie Smith</option><option>0411 Como - Sam Harding</option><option>0411 Como - Robert Woodward</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Pamela Harman</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Charlie Davis</option><option>1205 Infrastructure and Aviation - Alyssa Jones</option><option>1205 Infrastructure and Aviation - Taylor Thompson</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1205 Infrastructure and Aviation - Kelly Butler</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Emma Reilly</option><option>1205 Infrastructure and Aviation - Tracy Thorp</option><option>1205 Infrastructure and Aviation - Sheila Tung</option><option>1205 Infrastructure and Aviation - Courtney Hicks</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1114 Residential - Jenny Stirling</option><option>1114 Residential - Louise Hepple</option><option>1114 Residential - Kate Saunders</option><option>1114 Residential - Lynsey Jennings</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Mick Delaney</option><option>1114 Residential - Catherine Rocha Davies</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Katherine Heney</option><option>0213 Regional - Claire Kavanagh</option><option>0910 MEP - Ian Milner</option><option>0910 MEP - Bianca Panlook</option><option>0910 MEP - Joanne Asher</option><option>0910 MEP - Mandy Farrelly</option><option>0910 MEP - Antiounette Williams</option><option>0910 MEP - Julie Aveiro</option><option>0910 MEP - Lisa Harris</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>0121 - Casey Campbell</option><option>1114 - Jenny Towers</option><option>0204 - Ian Goddard</option><option>1119 - Belinda Dowler</option></select>");
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


