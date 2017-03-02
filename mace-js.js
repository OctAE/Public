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
  
    var M480 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948289.1f72086c-0722-4087-8cc5-3738240686ab.jpeg";
    var MSFSN01 = "http://img.netprintmanager.com/red2gouk/imgLibTool/705542399_APRV.jpg";
    var M4802 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948291.eebc8dbd-5bfb-467c-8100-5bafddc394e4.jpeg";
    var BusinesscardDEMO1 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616509.d91c16c1-8263-48bf-9644-cb100539af36.jpeg";
    var M020 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616516.4d9a62c6-5cf0-4b1a-b344-ede9c90210e0.jpeg";
    var M095 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616522.9db5eac8-375a-474b-9654-5bfb7a22ae62.jpeg";
    var M275 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616525.a61e000b-376c-4667-8a16-4ef555b19a74.jpeg";
    var MaceDemoJointVenures = "http://img.netprintmanager.com/red2gouk/i/695/6834/616530.3c6845d9-6919-4929-8685-cdc9003e593f.jpeg";
    var M482 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616537.a6d4193a-9dbb-427b-8daa-1e7c119f17d5.jpeg";
    var MSFSN900 = "http://img.netprintmanager.com/red2gouk/i/695/6834/616579.efa7a0ac-129b-45e5-8240-546bf229bc1c.jpeg";
    var M479 ="http://img.netprintmanager.com/red2gouk/imgLibTool/693446325_APRV.jpg";
    var MSFSN003 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948293.017fe307-0770-4dd7-b30a-6cbbd3804ff0.jpeg";
    var MSFSN005 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948295.1df1c7dc-3b59-41cf-be11-95be476a8456.jpeg";
    var MSFSN010 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948297.f4086a90-8dd3-4331-8be4-e050f5cff969.jpeg";
    var MSFSN012 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948299.8679f095-c20c-44d7-9400-84fbcfa172f4.jpeg";
    var MSFSN015 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948300.024bdd8d-f431-448a-bca9-2f6e22a7340c.jpeg";
    var MSFSN016 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948301.b44f1482-8771-4bf0-bc64-0f2b2e9ce4dd.jpeg";
    var MSFSN100 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948303.cf62f727-315d-49da-a9ee-fb8833da4503.jpeg";
    var MSFSN1000 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948305.6b4f36d2-e16d-4033-94ad-207cce08f394.jpeg";
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
    var MSFSN004 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948294.2305d6d6-5a3b-4845-8ead-176590499703.jpeg";
    var MSFSN011 = "http://img.netprintmanager.com/red2gouk/i/695/6834/948298.a9c82060-8c8b-45fb-b6cc-d2febec404f7.jpeg";
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
	var MTTMA2 = "http://img.netprintmanager.com/red2gouk/i/695/6834/925811.890492fa-d6f6-4b08-a7bb-99820a9cef12.jpeg";
	var MTTMYTA2 = "http://img.netprintmanager.com/red2gouk/i/695/6834/925813.1148b262-e519-472a-945a-b6bb71e3132d.jpeg";
	var MTTMYTA3 = "http://img.netprintmanager.com/red2gouk/i/695/6834/925816.8a86bef1-75a0-42f4-8be0-7af4c2784dbe.jpeg";
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
	var M481 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919786.709f28eb-359b-426c-b00e-84e336b19e9a.jpeg";
	var M482 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919788.d2a9b436-7932-4465-a298-e86be29dd4b4.jpeg";
	var M483 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919789.94a8660e-f7e3-4878-9c38-883e9c6dd1ef.jpeg";
	var M484 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919790.99a3494a-3e39-42dd-933e-f0b4baedb7b9.jpeg";
	var M485 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919791.7e3a24ce-c6ce-4e2d-a078-f85954e2ed92.jpeg";
	var M487 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919792.e6c9190d-9b00-488f-91f0-3fb4fb2ddb36.jpeg";
	var M488 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919793.85f9490d-92be-45eb-b42c-871423e6d48c.jpeg";
	var M489 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919794.ec8afb2d-bcf9-489a-9026-4039c26ee8a8.jpeg";
	var M481p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919795.fcb34f63-2845-439e-935c-dce725e304d5.jpeg";
	var M482p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919796.58d2e956-c251-47ed-9b3f-1c603efc93cb.jpeg";
	var M483p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919797.7f24fff1-0f80-45b9-85e6-95236a8db2e0.jpeg";
	var M484p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919798.c9397c21-9e3e-448e-8e0b-9537d7b5efd2.jpeg";
	var M485p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919799.a5928818-46d5-47ce-8a22-f25eb45c4b8a.jpeg";
	var M486p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919800.74658ab0-ea1b-4ad6-a983-e5f021b17e6d.jpeg";
	var M487p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919801.fb2cce31-9f49-4caa-8134-521eb9ca7354.jpeg";
	var M488p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919803.b935cb7e-ada3-4cfb-800a-c91d4cccf855.jpeg";
	var M489p = "http://img.netprintmanager.com/red2gouk/i/695/6834/919804.d34c9e31-bce1-458a-8b24-ab41dffc6a2b.jpeg";
	var M491 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919805.9a076715-701e-45e1-83e4-556b22be9c34.jpeg";
	var M492 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919808.d8e42396-c6cd-4226-bc5e-e96c03705dd1.jpeg";
	var M493 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919809.2f52e7ef-b79b-448c-9774-96fe6b46dee9.jpeg";
	var M494 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919810.d8604fe7-13a4-432d-b8db-09d1f4b0a11e.jpeg";
	var M496 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919811.3ede434d-851d-4699-b492-259970f2998a.jpeg";
	var M497 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919813.5c6e252a-2b27-473d-a25c-034fe99fdefb.jpeg";
	var M498 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919814.08cf4973-c1b6-447c-b734-c78d4c9d6a6b.jpeg";
	var M501 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919815.14097141-9b10-467d-85f6-91645e7f31d9.jpeg";
	var M507 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919816.3b315f7b-1760-43e5-8a05-60004b983345.jpeg";
	var M508 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919817.da3d3245-123f-4916-a66c-c4de446b7d71.jpeg";
	var M509 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919818.603bb412-5b8b-4e42-b5fe-5f67d8832061.jpeg";
	var M510 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919819.5c77b0ae-7844-482a-b86d-07673dff564c.jpeg";
	var M201 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919821.48de5865-570b-4201-86fd-4b0480f393c6.jpeg";
	var M202 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919823.13c8ada9-5caa-4c0f-989e-16958861576a.jpeg";
	var M203 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919824.f19db374-bfaa-44e2-af73-3d670dca775a.jpeg";
	var M205 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919825.4c811705-4649-4b44-a444-cfa04a8ecc20.jpeg";
	var M206 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919826.8f483530-7f5f-47f9-afc6-90778c26a09d.jpeg";
	var M207 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919830.41a98cf9-e48b-411f-ae27-8e69390a0c68.jpeg";
	var M208 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919831.e6e32af8-f9fd-4d06-a8a1-250d3b7ddfbc.jpeg";
	var M209 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919832.bac7f574-b1d1-4d93-898e-8de74ae6c98c.jpeg";
	var M212 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919833.eecaf654-32ca-4be6-9c6f-ba7a3281f53a.jpeg";
	var M213 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919835.73a7c6ad-6022-4e2b-baa2-65f54acfdf0e.jpeg";
	var M214 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919836.c5b741c5-699c-402b-b53d-40750344efa7.jpeg";
	var M215 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919838.fe371c21-68a8-49b1-b51f-f9c5eab9f107.jpeg";
	var M216 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919840.6f238814-2edf-45df-bcea-2846cbeff556.jpeg";
	var M217 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919841.3e772ad4-f653-4a0b-a6c2-cd3d905e5c19.jpeg";
	var M218 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919842.820d3446-6410-47b7-a61e-8f9285ce45da.jpeg";
	var M219 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919843.83936d99-4509-4155-af22-755051bdf251.jpeg";
	var M220 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919844.f7f0341d-6653-469a-b099-7f45ea8191a4.jpeg";
	var M221 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919845.a58305b4-4323-40fb-a057-9069e30c1421.jpeg";
	var M222 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919846.1e47f46e-6f8c-4e18-979d-a3fa27329bd2.jpeg";
	var M587 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919847.2900b760-9ecf-4ac0-82f4-d5989563f354.jpeg";
	var M593 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919848.49f6734f-6e0b-4756-aad0-aa70b4ee7b60.jpeg";
	var M594 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919849.30decd96-2e06-4cdf-9504-6d9fc923f42d.jpeg";
	var M595 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919850.9d91c668-f051-479e-8477-cd2564a93cf7.jpeg";
	var M596 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919851.36f2ba0c-039b-4f42-8003-909e88953484.jpeg";
	var M597 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919852.5c9b7d5d-005b-4a4b-88cf-75afcb6dd1fc.jpeg";
	var M598 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919853.064d4840-11af-4c19-8248-7463b50ca6d0.jpeg";
	var M599 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919854.99323437-6c33-48a6-9b80-ce7b110885fc.jpeg";
	var M560b = "http://img.netprintmanager.com/red2gouk/i/695/6834/919855.a1772c0a-c750-4541-be5a-356158c32e1d.jpeg";
	var M561 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919856.673bbf36-6325-40e9-b5b2-4d44a23dc8ee.jpeg";
	var M563 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919857.912542c0-b225-41c5-bddd-7e1d5bd53554.jpeg";
	var M564 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919858.66e43fab-cb58-4712-9733-a67d941603cf.jpeg";
	var M565 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919859.66804d0c-da69-4624-8928-c8afd9ad9b75.jpeg";
	var M567 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919860.17b09e69-1466-4782-8791-2dd7c29c46b4.jpeg";
	var M575 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919861.57f15d46-7cae-49f3-b7c9-264110c237c7.jpeg";
	var M576 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919862.0a9f8466-e7ff-45fd-aa6f-914b95beb6ca.jpeg";
	var M579 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919863.2d331903-963c-440e-b16c-7cb9458e6b8a.jpeg";
	var M580 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919864.50b2a3c7-f1d3-45a2-9db9-da2070aac5be.jpeg";
	var M600 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919865.24c71757-678c-46a0-8637-254f0f77fcb3.jpeg";
	var M601 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919867.cbe4cdc0-da3e-418d-aafb-fd11d6211e6f.jpeg";
	var M602 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919870.9206a26f-573a-42b5-b618-d46efbdffb0c.jpeg";
	var M603 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919871.8357b4c3-cef9-4ae9-aeda-f9cfd4ae5823.jpeg";
	var M604 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919872.fd4c38ad-046f-4913-b1e8-9af7d4f576f9.jpeg";
	var M605 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919873.d1604f4e-203f-4e3c-a70a-38fc4ba8e5b4.jpeg";
	var M606 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919874.7550d282-3cbe-4698-ac9f-83116ab2536b.jpeg";
	var M607 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919875.2c1089e5-af97-482e-918e-3483dc41a726.jpeg";
	var M198 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919876.a5c42030-7221-45be-9371-29dd8e913ed1.jpeg";
	var M608 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919879.2e56dd71-fb1c-4a1b-a810-19347738a86e.jpeg";
	var M609 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919880.e5bcc29c-0279-46c5-8e5c-4f2d7e67c984.jpeg";
	var M610 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919881.54a6386a-3187-489d-9717-056710566ba1.jpeg";
	var M611 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919882.68383c4b-d935-4d72-855d-0ce5b740f66f.jpeg";
	var M581 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919883.6aad9631-7162-4240-a881-6707a0ed7a66.jpeg";
	var M582 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919884.0cbaa386-a39f-4599-beef-1f6036ca58b8.jpeg";
	var M583 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919887.f30828fd-bc36-4a0d-a666-84280b0a8693.jpeg";
	var M584 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919888.f3597645-fe0c-4ea3-8bbd-36ee916aedb5.jpeg";
	var M585 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919890.eb56e6cf-d4bf-4a00-ac40-4e1f20b845d0.jpeg";
	var M586 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919892.42bc9fd1-d62f-4ca5-ab8a-0bb5cb7682c4.jpeg";
	var MECO001 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919895.db928aed-12a9-4772-b17d-95111a23b4b2.jpeg";
	var MECO003 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919896.327f0dde-c182-4c0a-8b4e-62ba85dee94d.jpeg";
	var MECO004 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919899.1686ff48-429f-45a8-b8b2-54302e0e1db0.jpeg";
	var MECO006 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919900.38c45804-9f3d-4a10-8902-007298444e28.jpeg";
	var MECO007 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919901.141d71a9-a2e5-4486-8edd-2e6eb063a97d.jpeg";
	var MECO011 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919902.f6cbe069-b9f5-41e5-9efc-df8b6dd3d2ce.jpeg";
	var MECO022 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919903.5765e6cc-2931-4492-ab6a-6208f5dc249f.jpeg";
	var MPWHA2 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919905.f4771954-73f7-4ad0-9b6e-d0f8672123b9.jpeg";
	var MPWHA1 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919906.36375024-b5a0-4112-879a-0fe884942784.jpeg";
	var M403 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919907.d6fee8f1-851e-4282-b950-795e32c6f766.jpeg";
	var MPUP001 = "http://img.netprintmanager.com/red2gouk/imgLibTool/206551981_ASRC.jpg";
	var M001 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919910.54b8c009-c6ff-4071-9755-434afc5270a6.jpeg";
	var M002 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919911.15094b9e-9e85-448a-93cf-5ed800483df5.jpeg";
	var M003 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919914.3a0af690-6a5f-40bb-af2f-0b53e0a59aae.jpeg";
	var M004 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919915.9bc5c525-b09e-445d-9450-6b8485f7f2e6.jpeg";
	var M006 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919916.f1e32748-2694-4c71-b5b4-ddfae2715a6d.jpeg";
	var M007 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919917.8d4b9538-e558-4648-ac59-41f530f22c52.jpeg";
	var M010 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919919.6028946d-bbc3-4594-bfd7-def36d5669eb.jpeg";
	var M011 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919920.e8f6a6eb-4118-4e34-8be1-1254198939c8.jpeg";
	var M012 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919921.c882489c-781a-4a13-9061-39b131b05e54.jpeg";
	var M014 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919922.4cf144a3-f0fc-451b-9f50-2c80ce2cf498.jpeg";
	var M015 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919924.7cff37eb-7921-4382-b18a-aa6375537f1e.jpeg";
	var M016 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919927.29730f34-b056-4121-843d-3e4190aa4538.jpeg";
	var M017 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919928.7be8ee6c-c0f4-4eb8-b983-ea7af5a34b9e.jpeg";
	var M018 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919929.ba58ed71-cd4f-4f42-8313-8f2d255b3b00.jpeg";
	var M019 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919931.878003ae-6ed8-498f-b09c-b853d446cbe4.jpeg";
	var M020 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919932.4abe53cf-3f33-4d83-ab1a-db84724e8946.jpeg";
	var M021 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919934.a7e72612-c416-440b-941e-6c86e2410344.jpeg";
	var M022 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919935.aed8d73b-0510-48ae-892f-6b1f8df66fe7.jpeg";
	var M023 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919936.3a4ae114-8a0a-455f-9cbb-10382e24afa8.jpeg";
	var M025 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919938.8bfdbf93-f486-4c73-87a8-0de0063a6d31.jpeg";
	var M026 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919939.27c93799-f84f-4119-a56b-ce62d1035cc3.jpeg";
	var M027 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919941.f80ad2a9-bbfd-4e8a-bdf1-815116ce4672.jpeg";
	var M030 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919942.5e9f0dca-3123-452d-b411-faf41e54d8db.jpeg";
	var M031 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919943.6a9f4284-7bee-49e7-a432-1e064e3f303b.jpeg";
	var M032 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919944.4d500674-3286-4de5-9b66-5cb240882d4b.jpeg";
	var M033 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919945.0cda56e0-df34-4a28-b378-390311cbb2df.jpeg";
	var M035 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919946.ce7e27a7-57d3-4517-a19d-594d964231e8.jpeg";
	var M036 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919947.87753ace-7d4b-4cdb-8d9c-0866f3d8a0c2.jpeg";
	var M037 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919975.3c534c5d-35b6-4156-8bfc-e7439c099e8e.jpeg";
	var M040 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919976.e5cf4203-76d2-45c0-adf8-28fde4e910ee.jpeg";
	var M041 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919978.33bf055d-2d70-4ecb-82f9-c9439881d3e1.jpeg";
	var M044 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919979.00f8bd3f-e2a8-44ca-a548-41a8c065461b.jpeg";
	var M046 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919980.b8fabe1f-4f2b-489c-9d0e-9d1d806d7f95.jpeg";
	var M047 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919981.d1223e20-928b-49ea-a548-e76e3195fc2d.jpeg";
	var M049 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919982.8220b908-58aa-4854-ad1e-4fdf7b3863bf.jpeg";
	var M577 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919983.c67254ac-302b-4dae-b9fb-c62fa48abe84.jpeg";
	var M223 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919985.363422e3-ba8c-47c1-bc09-3d347cd397f1.jpeg";
	var M228 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919986.c3d3d829-2db6-4399-99fe-4a032c97fe43.jpeg";
	var M229 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919987.379cd554-b1f4-4b45-9883-0274e9ffa383.jpeg";
	var M230 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919989.8ff6f2a9-eff6-4f4a-832c-db3ab63cceb0.jpeg";
	var M231 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919990.41704c50-cb00-41c8-b510-d9ff744c3140.jpeg";
	var M232 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919991.8b23450a-7f4f-4188-a3d6-66597af04b09.jpeg";
	var M233 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919992.2fac370f-2466-4d64-ae4d-65480ab68195.jpeg";
	var M235 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919993.73c6c8d2-838f-4378-b15f-1a6c9abf67f8.jpeg";
	var M236 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919994.c387df55-5790-4f92-ab57-a72afbb21126.jpeg";
	var M237 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919995.814bdcef-7878-4816-a481-11192764f47c.jpeg";
	var M238 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919996.3a601785-180c-4142-8b66-7457a412a2c3.jpeg";
	var M239 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919997.5255130e-47fb-46d4-a1ba-394cab637e9a.jpeg";
	var M240 = "http://img.netprintmanager.com/red2gouk/i/695/6834/919999.4f018298-af41-4f39-bf65-d9217b72bb1c.jpeg";
	var M241 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920000.58b29be1-50a1-44b5-b41f-95253a809f9b.jpeg";
	var M244 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920001.167191fb-d1d6-4521-a2b3-7b567a781a4d.jpeg";
	var M247 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920002.fb0ef7ff-ea1e-403b-9c8d-4085293110a6.jpeg";
	var M248 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920003.7582ea19-82a0-49c4-81c9-8af32726e4f8.jpeg";
	var M249 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920004.c1246441-aa21-41ad-8a6a-04fd59c40c1f.jpeg";
	var M250 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920005.67bfe759-f5b6-4164-9aa5-d897581de56f.jpeg";
	var M251 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920006.a50d667a-28ea-426f-9344-21b28c965756.jpeg";
	var M252 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920007.68a5203b-35ab-4986-8167-c406b8e78671.jpeg";
	var M253 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920008.51825494-26f0-4bad-bb33-b31db70030b6.jpeg";
	var M254 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920009.aeb27008-13f4-4316-8a3f-2b081a6886d5.jpeg";
	var M255 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920010.30b937c2-c6fc-4b69-b196-83071e824daa.jpeg";
	var M256 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920011.b48e44d5-bcc0-4a76-8820-ef1547d5e31c.jpeg";
	var M257 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920012.76e61a33-9b69-4f36-a86b-5a1a46db9465.jpeg";
	var M258 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920013.1ccfcfc3-3c15-4ef7-827c-3c838be22168.jpeg";
	var M259 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920014.81703140-976c-4351-a21d-328649ab30d8.jpeg";
	var M260 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920015.90e5eae7-dd47-439d-ae34-683200ea5a47.jpeg";
	var M261 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920016.2697f915-1421-47e4-8605-a37ceabab7d6.jpeg";
	var M262 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920017.3741e89b-faef-4f05-9e03-11f17420933d.jpeg";
	var M263 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920018.5f1202e2-cfb5-4cfa-88ac-ba31346a8a20.jpeg";
	var M264 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920019.16acb9af-2abb-4de8-b0b1-00f0c5512779.jpeg";
	var M388 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920020.7fe2ce4f-97bf-46f2-8b76-f2c8bd245314.jpeg";
	var M389 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920021.d3059ef4-7b03-4d50-b350-6d87207ddede.jpeg";
	var M392 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920022.6e4be477-2d66-436a-a48e-c7f910a6d3a9.jpeg";
	var M393 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920023.b0c2eddf-993d-428a-aefe-376f44ce2d99.jpeg";
	var M396 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920024.742602fc-28f9-4668-aa90-e2bcb68d2833.jpeg";
	var M056 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920025.2b3968a9-06d0-4f6c-99d2-1ab02e7b5391.jpeg";
	var M057 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920026.8fe785f2-7cf0-489e-afb8-bb662bb900b8.jpeg";
	var M058 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920027.3d1728b0-0d34-4315-a651-053976312cb9.jpeg";
	var M059 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920028.30600111-62c8-488b-9da7-4c2ce010e9a5.jpeg";
	var M060 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920029.5b973b53-da25-4fed-8e73-0d72ee621b03.jpeg";
	var M063 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920032.1cfb1fc5-8dff-450c-9c84-2693be41e6b2.jpeg";
	var M065 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920033.1183a6d6-74f3-4b36-88d8-2c65cbc306e5.jpeg";
	var M066 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920034.01ef872b-b701-497b-9dd1-d0ebaf836c96.jpeg";
	var M067 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920035.226867f8-1ffc-44df-83d9-f4bcc81ec3f4.jpeg";
	var M068 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920036.3b2d2b73-8473-46d9-a598-6f52830aae4c.jpeg";
	var M071 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920037.1072e34e-e649-4303-b24b-bae0702e958a.jpeg";
	var M072 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920038.51477d00-ace7-4bc1-b382-4398b6a0ad5a.jpeg";
	var M073 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920039.09d03f6f-df99-4e74-9f50-3d24995c562c.jpeg";
	var M074 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920040.5e183caa-d828-4ba2-8cf8-2323ad31d3b5.jpeg";
	var M078 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920041.4776b0ea-91e8-4411-95ee-b586c7171101.jpeg";
	var M080 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920042.972c5ded-9966-4700-9f79-6848c2de6a22.jpeg";
	var M384 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920043.72423c8e-8dbc-4ae5-a733-000b67967ce1.jpeg";
	var M275 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920044.3a6c7321-b95a-42c5-bf05-4a2ebf7131a8.jpeg";
	var M276 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920045.6e837959-bb8a-4679-9950-a5536c0e4603.jpeg";
	var M277 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920046.3aaba833-0128-4baf-9599-06fb44064ce3.jpeg";
	var M278 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920047.bfbdd434-cf66-4e2f-a3c7-3aba39fd5bd5.jpeg";
	var M279 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920048.54161017-18df-4bc4-96cb-7d8536237233.jpeg";
	var M281 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920049.6deac9b1-5893-4766-bb43-62e114e4c9c1.jpeg";
	var M282 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920050.9f596c54-a825-4c9b-af32-171f7c13c2a2.jpeg";
	var M284 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920051.52d31586-0247-4cc9-952a-6f22f2c1dacd.jpeg";
	var M285 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920052.60f232bd-abbf-47f6-ac45-d8b8f44baea1.jpeg";
	var M286 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920053.2315c468-5494-4d62-acbe-9728a9cfb833.jpeg";
	var M287 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920054.c449a770-d109-44f4-8544-f42c2ced7c41.jpeg";
	var M290 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920055.f5dc740c-4287-4218-ba9e-309b4c2d33fb.jpeg";
	var M291 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920056.f30b18ba-3511-4f55-aac3-f45d2d9c0bc3.jpeg";
	var M292 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920057.78a22780-29df-4445-9d3f-f461798b40c3.jpeg";
	var M293 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920058.d4f9debb-b4ab-4341-9ed8-ce3ccf86e488.jpeg";
	var M295 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920060.2cba6244-8c6d-4b73-a2e1-06729f574f28.jpeg";
	var M296 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920061.238c6060-0b2d-4f73-b37d-0da0dbe2d442.jpeg";
	var M297 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920062.940beaf0-bbcb-498b-9853-c3353004f84e.jpeg";
	var M298 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920063.14728d65-f127-4a2a-9972-27d4db246100.jpeg";
	var M299 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920064.32744119-416c-4709-b1a5-3d027cb6a509.jpeg";
	var M300 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920065.ebf86332-c255-46c5-aef1-7b8121047059.jpeg";
	var M533 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920066.6345c3fa-07aa-473c-b893-581721789d21.jpeg";
	var M367 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920067.733836b5-7870-459d-9a6e-03708d217547.jpeg";
	var M368 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920068.ed41df65-f7d1-4b8d-a075-8d0584f5039c.jpeg";
	var M369 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920069.12c126a0-5a86-4f86-92e2-70d5acadac35.jpeg";
	var M372 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920070.74f23108-a8ed-472a-942f-89bb7a46234b.jpeg";
	var M373 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920071.95931cf0-15c4-4325-99f0-9b35f61632ea.jpeg";
	var M374 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920072.c0337f19-cbff-4023-abc0-52fc3bf4bfca.jpeg";
	var M375 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920073.4ea0e9c3-d9e9-442a-b964-d872df9c4ca0.jpeg";
	var M378 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920074.9a395eba-424a-4f5f-acce-3839b1f02374.jpeg";
	var M379 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920075.03670f39-e74b-4354-a436-e292b5050747.jpeg";
	var M380 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920076.d75f7f02-c351-4ee9-978b-e046b8fe14c5.jpeg";
	var M093 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920077.f71b4385-a122-47aa-88dc-ebc078ec2fb0.jpeg";
	var M096 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920078.c69d199f-f338-4a04-b7dc-f9f4eb3ce4f5.jpeg";
	var M097 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920079.56fb5c68-b685-4937-8d50-7841af83e5bb.jpeg";
	var M098 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920080.a38b66e7-da61-4c35-963c-1b46a7fa97b5.jpeg";
	var M099 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920082.cf71cc34-013e-4295-83a6-9f5bada28b1d.jpeg";
	var M101 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920083.4a5b24a6-142a-4b49-b4a7-2c98b0ded5e4.jpeg";
	var M102 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920084.0597b335-8820-4d7e-9bd9-6c24fc073e9c.jpeg";
	var M103 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920085.5579cd5b-92bb-49fe-8cd0-f54f858a6198.jpeg";
	var M106 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920086.bef6848c-59df-46cc-ac99-9f1cbda89e7e.jpeg";
	var M111 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920087.062c7174-3afa-466f-a853-8b501e24c25d.jpeg";
	var M117 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920089.034d435e-2ddb-4dca-bd29-fb46a636e4af.jpeg";
	var M119 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920090.0a0febaa-e184-4653-9737-e31058576885.jpeg";
	var M120 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920091.1251e1dd-f97a-4aa1-8cdd-60c0a38c986e.jpeg";
	var M121 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920092.80d16359-e364-4aad-8636-317572b1ff38.jpeg";
	var M122 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920094.4e570de8-a3b7-41d4-bd4a-f3a1b336c0ef.jpeg";
	var M123 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920095.35f9a048-c4cc-4ab7-8355-634127bd1ea9.jpeg";
	var M124 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920096.cf0f9e90-0f04-47bb-8d02-b9634a7fdc82.jpeg";
	var M125 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920097.46ff1cdd-8aab-4d07-b3aa-a8caff7a61fb.jpeg";
	var M126 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920098.8d3c1fd2-fa4e-447c-8951-28dc3e0b36be.jpeg";
	var M127 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920099.473fa3d6-ecb3-4186-88b1-0205bff81c3a.jpeg";
	var M128 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920100.414bfa54-fc71-4a18-b200-9ecd0ef85ae6.jpeg";
	var M129 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920101.082bc98f-1247-43ba-8c65-57a8c690c7b0.jpeg";
	var M130 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920102.d5fe7323-768f-47e6-b9a4-cf7b7f58c7a1.jpeg";
	var M134 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920103.9d3aa1cf-33b5-40e1-9e40-bd716826dc65.jpeg";
	var M136 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920104.fa03cdee-66a3-41cd-8a5e-8055715aa3ba.jpeg";
	var M137 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920105.0eb48492-2fd3-47e0-9d18-017d15e693bf.jpeg";
	var M138 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920106.e9d03fc5-8725-481b-8c54-0ffb72ef9d4c.jpeg";
	var M139 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920108.0a317f71-21c9-48e2-b989-7969def11fc6.jpeg";
	var M140 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920109.20f6bb34-0736-4a5a-a016-d0d90bdd279a.jpeg";
	var M141 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920110.53096a5e-17c7-42e7-b0e5-24ba4c17e0b1.jpeg";
	var M572 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920111.ac13ec06-1086-4ac4-afd8-5813e35e0527.jpeg";
	var M082 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920112.7e9ebdbc-43ea-4763-98d1-46ab4b5b7435.jpeg";
	var M083 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920113.96571287-4baf-4d3c-be20-5e028ea63e8b.jpeg";
	var M084 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920114.85ef8bb0-321d-4d95-b54e-de9770eccf30.jpeg";
	var M085 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920115.e13f74f1-49d3-4732-912d-fa7598b55666.jpeg";
	var M086 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920117.9a24cadc-5059-41ad-b075-7094ee57ed1c.jpeg";
	var M087 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920118.91bd8cea-ddb9-413b-ac5e-80e8641772bf.jpeg";
	var M088 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920119.4a57b1f9-36e5-4212-875c-f05d75860e38.jpeg";
	var M089 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920120.20193720-cab7-4c5a-8323-45c299f3eb35.jpeg";
	var M090 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920121.819f1a0a-7d56-4001-857f-c49f5a207814.jpeg";
	var M301 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920122.90fd87d7-0dd7-4d6d-85f6-6fdd8158526f.jpeg";
	var M303 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920123.787e0cc3-6cfd-418c-8775-755ae41b3c14.jpeg";
	var M309 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920125.80085b17-3d37-497b-ada3-179b4ce14fbc.jpeg";
	var M310 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920127.b968da2c-fdf3-4f7e-b7af-72a8f154e6c8.jpeg";
	var M312 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920128.eac75b05-db8e-4e00-8340-d3fc74ea3655.jpeg";
	var M314 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920130.2b950f35-ae0a-404b-a1f5-4f501909b3ce.jpeg";
	var M315 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920131.22429fbf-998d-4fcb-8656-12b790a134c9.jpeg";
	var M317 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920132.bc1a2354-e86d-40f4-afb2-b09e0251db2a.jpeg";
	var M318 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920135.4d973df0-acb0-4af2-a12e-c321d5497561.jpeg";
	var M319 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920137.211779a7-ef2f-4d52-ae3c-4bb29d867025.jpeg";
	var M320 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920138.74571501-2c20-4371-96c1-66adba43126e.jpeg";
	var M321 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920140.3d99e0ed-29b6-43e1-8e98-8d839e9ff7ca.jpeg";
	var M322 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920141.228ed48c-3d6d-46f8-bd2e-7be87a6ce147.jpeg";
	var M324 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920143.9429ae3f-6b67-4bba-bdf6-86458d912a46.jpeg";
	var M325 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920144.a71be540-989e-4c68-b770-06f681d3c45a.jpeg";
	var M326 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920145.0dcf86cd-6fb3-49eb-8530-4c6ceb5a5faf.jpeg";
	var M327 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920146.21c6ad7e-6ab9-44c7-90a0-312ee336b00a.jpeg";
	var M328 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920147.77ba18aa-7fa1-4890-a2a5-2c369685bb3f.jpeg";
	var M329 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920148.8711151d-1912-4342-879a-d2179bffac65.jpeg";
	var M330 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920149.8790a202-8cd0-4c97-a257-e81d1a59012e.jpeg";
	var M331 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920150.0070f175-2b9c-4d47-b426-302f43fa861f.jpeg";
	var M332 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920152.c39fb8d8-74fc-4483-8212-83226dc230a2.jpeg";
	var M333 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920153.244e1148-59e2-4bd4-b693-fe911a5e699e.jpeg";
	var M334 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920154.e6cf2c45-4dd2-4ad6-8e05-43928b99d311.jpeg";
	var M335 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920155.afb0c24c-70ac-478f-aca1-ae8272503484.jpeg";
	var M336 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920156.ea02d8f1-9b67-4b28-953d-334a31b47317.jpeg";
	var M337 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920157.0667097d-44d4-409a-8496-8fe4fb27ffe1.jpeg";
	var M338 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920158.f75296d0-9589-4554-979c-61d22fd221f8.jpeg";
	var M340 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920159.82918b66-8df1-443f-9962-40e4d97be1ff.jpeg";
	var M397 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920161.c2bd8b40-7c0e-417f-893b-4ba68a42a832.jpeg";
	var M399 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920162.f483bc37-f6ae-4703-a99f-ad6e1fe5c8e9.jpeg";
	var M404 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920163.741517e7-830f-4ab8-869e-59cb2fe12d12.jpeg";
	var M535 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920164.8223d623-c38b-4758-8d9e-9a361fc25b12.jpeg";
	var M536 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920165.6b000213-8f93-4632-a496-ffdbf26bdfe2.jpeg";
	var M405 = "http://img.netprintmanager.com/red2gouk/imgLibTool/262050894_APRV.jpg?sid=0";
	var M406 = "http://img.netprintmanager.com/red2gouk/imgLibTool/480650895_APRV.jpg?sid=0";
	var M407 = "http://img.netprintmanager.com/red2gouk/imgLibTool/793950896_APRV.jpg?sid=0";
	var M408 = "http://img.netprintmanager.com/red2gouk/imgLibTool/351650897_APRV.jpg?sid=0";
	var M409 = "http://img.netprintmanager.com/red2gouk/imgLibTool/724050898_APRV.jpg?sid=0";
	var M410 = "http://img.netprintmanager.com/red2gouk/imgLibTool/647850899_APRV.jpg?sid=0";
	var M411 = "http://img.netprintmanager.com/red2gouk/imgLibTool/175550900_APRV.jpg?sid=0";
	var M412 = "http://img.netprintmanager.com/red2gouk/imgLibTool/601750901_APRV.jpg?sid=0";
	var M413 = "http://img.netprintmanager.com/red2gouk/imgLibTool/560750902_APRV.jpg?sid=0";
	var M414 = "http://img.netprintmanager.com/red2gouk/imgLibTool/316450903_APRV.jpg?sid=0";
	var M416 = "http://img.netprintmanager.com/red2gouk/imgLibTool/909350904_APRV.jpg?sid=0";
	var M417 = "http://img.netprintmanager.com/red2gouk/imgLibTool/812950905_APRV.jpg?sid=0";
	var M418 = "http://img.netprintmanager.com/red2gouk/imgLibTool/638750906_APRV.jpg?sid=0";
	var M443 = "http://img.netprintmanager.com/red2gouk/imgLibTool/726050907_APRV.jpg?sid=0";
	var M421 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920183.58ef1ce8-7303-4a28-9f1f-e5403c12d61b.jpeg";
	var M422 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920185.9ddfb654-c189-4b58-b7ce-cd797ed652cb.jpeg";
	var M423 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920186.d861c9bd-9378-4fd6-958c-62fe8deeba4d.jpeg";
	var M424 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920187.6e865472-b976-454e-b6ba-be6366652732.jpeg";
	var M425 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920188.d59e4f44-de28-4829-8613-7d256d891241.jpeg";
	var M426 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920189.d715f9a3-6cc9-47d0-b422-653d151ba3cb.jpeg";
	var M427 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920190.2489a9e7-136a-499a-af44-4f08862df93a.jpeg";
	var M428 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920191.e65c1882-0e1b-4ee5-9307-b4d041a3fd30.jpeg";
	var M429 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920192.03a13a35-4feb-46bd-b31f-58e2effea163.jpeg";
	var M430 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920193.24c15486-4b72-4aea-9893-e81844d5dfad.jpeg";
	var M431 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920194.bd4b5a6c-9c00-4d29-8736-443d340bb919.jpeg";
	var M432 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920195.f7aa81ae-4d43-42c3-985d-ebe129ccdb7d.jpeg";
	var M433 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920196.79589cf5-83c3-4350-9405-891a431b01a9.jpeg";
	var M434 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920197.8aae08ba-c457-4257-9e68-863fffb6b917.jpeg";
	var M435 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920198.2a4c6a91-be96-4e4c-be1b-7ece3e18b1a8.jpeg";
	var M436 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920199.37d38fbd-fff1-4999-b2f5-3d4f6443367c.jpeg";
	var M437 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920202.cf6dadb7-4cda-4bb9-80bf-8af75a224d5e.jpeg";
	var M438 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920203.c1f3c512-a926-4d12-8972-c59ad98fa1ae.jpeg";
	var M439 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920205.882ba1be-a3ae-4c8e-9092-a7688c5a4c13.jpeg";
	var M440 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920206.20f8d776-b244-4c4e-9fdd-e82ce9e37630.jpeg";
	var M446 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920209.71744e9d-8928-4e6d-9c9c-8c08f9acff1e.jpeg";
	var M447 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920210.d3b88a3c-c4f5-48b3-8c54-552c6e2b8e32.jpeg";
	var M448 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920212.a5797788-f7a8-415a-ba27-22a2b62dbcee.jpeg";
	var M449 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920213.d4e4878c-b38e-4963-b3be-08f8f6f93882.jpeg";
	var M450 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920214.6a4be2f7-63d4-46f3-83b4-1e27a6b86747.jpeg";
	var M451 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920215.c41e0100-d43c-4f79-9349-5121fe2199fe.jpeg";
	var M452 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920216.35f27cf7-0f3e-4a0c-ac24-5dd7d90dc801.jpeg";
	var M441 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920217.ff2f7442-1d36-4221-89b5-452cc532c8f0.jpeg";
	var M442 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920218.c140dc34-050a-44a6-b138-404aff49cf2b.jpeg";
	var M143 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920219.fd4b3b4c-4ebf-4b3f-bd17-a7c7414517b0.jpeg";
	var M144 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920220.0507444b-f467-422e-9b8d-c752bbf8fd74.jpeg";
	var M150 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920221.6fba4f5b-5acf-4e3b-bc65-64bedb4e209f.jpeg";
	var M154 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920222.253ee0da-eb9c-4119-b5ba-408b12516610.jpeg";
	var M155 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920224.ce619d8b-57c9-41c2-8de7-a6b10a8e1bc9.jpeg";
	var M156 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920225.83a94e17-375f-4e0b-857d-b46f0dee3989.jpeg";
	var M158 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920226.582b0c70-a932-4ea3-a65c-d5bec3fd5b14.jpeg";
	var M159 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920227.17df4187-0d80-4725-b123-6969a3a056f8.jpeg";
	var M160 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920228.acb0ffd1-b563-4884-b189-ba60d2e91612.jpeg";
	var M161 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920229.75748c44-6864-44ff-95e5-5990ab5feab1.jpeg";
	var M162 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920230.3aa3c7d4-b66c-4bd1-a1db-6be74b461ab0.jpeg";
	var M167 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920231.a230c63e-1fdd-4f60-ad8f-23c5c600a8a8.jpeg";
	var M177 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920232.f5dd294e-c15c-474b-bac5-196aa41ce17e.jpeg";
	var M178 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920234.b517713f-62ca-423c-bf51-2ff2426a3673.jpeg";
	var M179 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920235.1d9213f0-2ced-4b10-b26d-ef361f649f05.jpeg";
	var M180 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920236.86a9b932-5f41-49a1-83bc-85d45d558a4d.jpeg";
	var M181 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920237.353ef8a8-5153-47e4-be09-6fdbb16796f7.jpeg";
	var M182 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920238.f16057fa-6420-484d-aee0-67f58ab679bf.jpeg";
	var M183 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920240.715d6073-9045-4f0b-a474-5c0faf0faee0.jpeg";
	var M186 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920241.4b1a895a-f9a6-4aee-81b9-6753522e0734.jpeg";
	var M187 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920242.c1220480-62d6-4705-a805-ef418a513342.jpeg";
	var M188 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920243.bb53313c-44d4-4441-b61d-ec937958407c.jpeg";
	var M190 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920244.cf974350-3426-419e-81e3-5674f8bbb045.jpeg";
	var M191 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920245.6efffd99-726b-4695-83d9-206a8d3f7c82.jpeg";
	var M192 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920246.752ffc59-6c19-4548-ac4b-17d1f59fff46.jpeg";
	var M194 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920247.7f30698d-87ff-414e-ac2f-a11134013c36.jpeg";
	var M195 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920248.3a1e3a32-f802-4ed0-a3ec-d18826d7ff3a.jpeg";
	var M557 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920250.9ff0e050-793c-4ce5-b55f-9702683f7062.jpeg";
	var M558 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920251.8eb17428-8082-4fb6-aa9e-bbb9018454c9.jpeg";
	var M559 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920252.703ca4b5-4517-43bc-825a-278a84fa3835.jpeg";
	var M342 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920253.b15377f1-0ef4-4341-9335-8e0c4eeebbde.jpeg";
	var M344 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920254.e64e7b4a-6b3b-45b5-aa01-c0805eb22f86.jpeg";
	var M345 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920255.1329a369-d7ef-49aa-ac72-005cbad5a3f0.jpeg";
	var M346 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920256.b1444683-0aa6-4693-bbb9-617dd9d36584.jpeg";
	var M347 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920259.b752ab6e-7364-41ed-908d-b83e4240a2b2.jpeg";
	var M348 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920262.a1e5a08f-9b6c-49c7-98c7-fef1e4dbc4ab.jpeg";
	var M350 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920263.55689015-a828-440c-8228-3a0e1c1132ac.jpeg";
	var M351 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920264.17579f06-f604-4a62-ba20-9033fa2a4f3c.jpeg";
	var M352 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920266.fbf718d7-7652-4c7a-b0c8-fb7b7811bb74.jpeg";
	var M353 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920267.ca12476b-a6a0-450f-8f1a-fa0ed75d81cb.jpeg";
	var M354 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920268.1aa15a41-ecba-4ff1-9d0b-db0cf9df5dc4.jpeg";
	var M356 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920269.e4672e3d-7957-4d94-b979-056d7d660bca.jpeg";
	var M361 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920270.9ec76dc3-c1bb-43f2-954e-b8000423b99c.jpeg";
	var M362 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920271.692b82cc-c0c5-4fa9-86d0-e7affb7c19f1.jpeg";
	var M363 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920272.d643c8ee-8086-467b-878f-9a99c8edca03.jpeg";
	var M365 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920274.1784af64-7267-4b95-9db0-c49d6d6cbb80.jpeg";
	var M366 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920275.7bf9d4e8-b095-4c45-8fbb-384c47e9826f.jpeg";
	var M381 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920276.00f83a69-53f5-4677-9598-bbf6d0fe5034.jpeg";
	var M382 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920277.f4f42d5c-a00a-4a18-a817-84e5e84c2693.jpeg";
	var M383 = "http://img.netprintmanager.com/red2gouk/i/695/6834/920279.7c464efd-44d8-4f61-88e6-9e7cf093b79b.jpeg";
	var MCLOCSPoster1 = "http://img.netprintmanager.com/red2gouk/imgLibTool/372551009_ASRC.jpg";
	var MCLOCSPoster2 = "http://img.netprintmanager.com/red2gouk/imgLibTool/422451011_ASRC.jpg";
	var MCLOCSPopup = "http://img.netprintmanager.com/red2gouk/imgLibTool/118151012_ASRC.jpg";
	var MCLOCSBanner = "http://img.netprintmanager.com/red2gouk/imgLibTool/326151013_ASRC.jpg";

	var MSFSN007 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925842.5012b388-9515-488d-9a95-6d3631e9582a.jpeg';
	var MSFSN008 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925844.bbbaec07-5d3b-4b15-afdd-2fc75e0d3911.jpeg';
	var MSFSN009 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925845.d9795e92-b865-4642-bb36-13bd6dd50916.jpeg';
	var MDAB001 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925846.f4529e39-c5ec-463d-a96e-bb2cdab2cda1.jpeg';
	var MHANS01 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925850.5fb3b1aa-48b8-4231-83b1-efd9e4974ef0.jpeg';
	var MMEWP01 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925851.4e70d22f-292c-4e1a-8a32-fb3ba83c01fb.jpeg';
	var TooltethersmustbewornA2 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925858.35c192a5-34db-49fc-9e20-9ae3b6c57df4.jpeg';
	var WhentotetheryourtoolsA3 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925859.5db59e12-e91b-42a7-94f9-da3e880376a7.jpeg';
	var M494 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925860.227367c1-4b6d-4e94-ad5c-d0dc6ffa4b7c.jpeg';
	var M592 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925862.df43edb3-5700-4b03-ac09-dba9a04a4ab2.jpeg';
	var M591 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925865.dceb6b33-098e-4b7f-9e0a-9cbfacfc28e4.jpeg';
	var M390 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925867.55b8f412-bb92-47a1-8727-7d21d2f185fa.jpeg';
	var M091 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925869.b63507ff-dd8b-4916-a5b0-d8dee35db7ac.jpeg';
	var M145 = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925872.9d209ca1-2efa-4e3d-8be6-c9f25db615d7.jpeg';
	var MPROG2B = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925873.383a908e-370f-4353-a325-12b54ac3593b.jpeg';
	var BM450x210i = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925875.7c150068-76f8-4e37-9e1a-163087bc8b97.jpeg';
	var BM600x280i = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925877.9608935e-9b69-43ab-a68c-7f8a30270900.jpeg';
	var BM600x420i = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925880.deee170c-713f-49bb-a22b-3b32e1219474.jpeg';
	var BMA3L = 'http://img.netprintmanager.com/red2gouk/i/695/6834/925881.20aefb86-1f41-460b-93f8-b1da70d3e105.jpeg';


    switch (productCode) {
    case "M-SFSN-007": 
	iconLocation = MSFSN007; 
	break;
	case "M-SFSN-008": 
	iconLocation = MSFSN008; 
	break;
	case "M-SFSN-009": 
	iconLocation = MSFSN009; 
	break;
	case "M-HANS01": 
	iconLocation = MHANS01; 
	break;
	case "M-MEWP01": 
	iconLocation = MMEWP01; 
	break;
	case "Tool tethers must be worn A2": 
	iconLocation = TooltethersmustbewornA2; 
	break;
	case "When to tether your tools A3": 
	iconLocation = WhentotetheryourtoolsA3; 
	break;
	case "M-494": 
	iconLocation = M494; 
	break;
	case "M-091": 
	iconLocation = M091; 
	break;
	case "M-145": 
	iconLocation = M145; 
	break;
	case "M-PROG2B": 
	iconLocation = MPROG2B; 
	break;
	case "BM-450x210i": 
	iconLocation = BM450x210i; 
	break;
	case "BM-600x280i": 
	iconLocation = BM600x280i; 
	break;
	case "BM-600x420i": 
	iconLocation = BM600x420i; 
	break;
	case "BM-A3L": 
	iconLocation = BMA3L; 
	break;

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
$( "#ponumber").before("<select name='costcode' id='costcode'><option>1205 – I&A - Rose Mackey</option><option>0149 Marketing and communications - Liam McKay</option><option>0305 Health and safety - Liam McKay</option><option>DGP Logistics - Payment in advance</option><option>1103 Major Projects - Taryn Farah</option><option>1105 Major Projects - Kele Aistrop</option><option>1105 Major Projects - Victoria Lane</option><option>1103 Major Projects - Louisa Donnelly</option><option>1103 Major Projects - Maxine Oliver</option><option>1105 Major Projects - Valerie Malcolm</option><option>1105 Major Projects - Katherine Heney</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Frances Drury</option><option>1105 Major Projects - Martina William</option><option>1105 Major Projects - Dharmini Dhushyanthan</option><option>1105 Residential / Major Projects - Donna Smith</option><option>1105 Residential / Major Projects - Maureen Watters</option><option>1105 Major Projects - TBC</option><option>1105 Major Projects - TBC</option><option>1119 Commercial - Daniela Cantir</option><option>1119 Commercial - Rebecca Penfold</option><option>1119 Commercial - Genevieve Hines</option><option>1119 Commercial - Stella Hansen</option><option>1119 Commercial - Anna Ibraeva</option><option>1119 Commercial - Hannah Wheeler</option><option>1119 Commercial - Amanda Rowney</option><option>1113 Amenities - Jonathan Kulik-Szafransk</option><option>1113 Amenities - Dawn Smith</option><option>1113 Public - Claire Marika Berryman</option><option>1113 Public - Lisa Tracey</option><option>1113 Public - Lindi Kluever</option><option>1113 Public - Angela Lewis</option><option>1113 Public - Andrew Palmer</option><option>1113 Public - Michaela de-WinterHeald</option><option>1113 Public - Dawn Smith</option><option>1113 Public - Erika Servi</option><option>1113 Public - Laura Jopson</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1113 Public - Andrea Joseph</option><option>1104 Technology - Haley Coomer</option><option>1104 Technology - Sandra Grizzle</option><option>1104 Technology - Brogan Hollobon</option><option>1104 Technology - Karen Nayler</option><option>0411 Como - Bob Bruno</option><option>0411 Como - Sam Harding</option><option>0411 Como - Jackie Smith</option><option>0411 Como - Sam Harding</option><option>0411 Como - Robert Woodward</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Pamela Harman</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Shelagh Payne</option><option>0411 Como - Rachel Gill</option><option>0411 Como - Charlie Davis</option><option>1205 Infrastructure and Aviation - Alyssa Jones</option><option>1205 Infrastructure and Aviation - Taylor Thompson</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1205 Infrastructure and Aviation - Kelly Butler</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Kate Watkins</option><option>1205 Infrastructure and Aviation - Emma Reilly</option><option>1205 Infrastructure and Aviation - Tracy Thorp</option><option>1205 Infrastructure and Aviation - Sheila Tung</option><option>1205 Infrastructure and Aviation - Courtney Hicks</option><option>1205 Infrastructure and Aviation - Ev Johnson</option><option>1114 Residential - Jenny Stirling</option><option>1114 Residential - Louise Hepple</option><option>1114 Residential - Kate Saunders</option><option>1114 Residential - Lynsey Jennings</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Mick Delaney</option><option>1114 Residential - Catherine Rocha Davies</option><option>1114 Residential - Taryn Farah</option><option>1114 Residential - Katherine Heney</option><option>0213 Regional - Claire Kavanagh</option><option>0910 MEP - Ian Milner</option><option>0910 MEP - Bianca Panlook</option><option>0910 MEP - Joanne Asher</option><option>0910 MEP - Mandy Farrelly</option><option>0910 MEP - Antiounette Williams</option><option>0910 MEP - Julie Aveiro</option><option>0910 MEP - Lisa Harris</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>1110 Retail - Lucy Fothergill</option><option>0121 - Casey Campbell</option><option>1114 - Jenny Towers</option><option>0204 - Ian Goddard</option><option>1119 - Belinda Dowler</option><option>1113 - Snezhina Kortoci</option></select>");
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


