//v1.0
//Copyright 2015 Octink. All rights reserved.

$(document).ready(function(){

	
	//which page I see?
	var pathname = window.location.pathname;

  /*
  //Add class to navigation active tab
     $("#navivert li a").each(function(){
          if($(this).attr("href")==pathname){
            $(this).addClass("activemenuitem");
      } else if (pathname.indexOf('product') > -1){
       	$( "#navivert li:nth-child(5) a" ).addClass("activemenuitem");
  	} else if (pathname.indexOf('order-confirm') > -1){
        $( "#navivert li:nth-child(6) a" ).addClass("activemenuitem");
      }
  	})
  */

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

  //On basket page add breadcrump steps and change "Continue Order" to "Proceed to checkout"
  if (pathname.indexOf('basket') > -1){
       $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select &nbsp;your Items</p></div><div class="stepsPlain" style="float: left;" ><p>2. Edit </p></div><div class="stepsHighlight" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Confirm order &#38; payment</p></div></div><br style="clear: both" /><p class="underSteps"><a href="http://8buildstore.octink.com/products">CLICK HERE TO CONTINUE SHOPPING</a></p>');
       $("span#ORDER_CONTINUE_TEXT").html('Proceed to checkout'); 
  }


  //Change breadcrump 4 to "Checkout"
  $( "p#step4text" ).html('4. Checkout');
  $( "div.stepsPlain p:contains(4. Confirm order & payment)").html('4. Checkout');
  $( "div.stepsHighlight p:contains(4. Confirm order & payment)").html('4. Checkout');

  //Change style of Checkout breadcrum and add wider gap between cells
  if (!(pathname.indexOf('order-confirm') > -1)){
          $( ".stepsPlain:nth-of-type(4)" ).addClass('noAfter');
        } else if (pathname.indexOf('order-confirm') > -1){
          $( ".stepsHighlight" ).addClass('noAfter');
          $(".centrealign_split table tbody tr:nth-of-type(3) td form table").attr({cellspacing:"4"});
          $(".centrealign_split table tbody tr:nth-of-type(3) td form table tr td:not(.bgmed)").addClass('notBgmed');
        }

  if (pathname == "/8build/confirm-my-details") {
          $( ".stepsHighlight" ).addClass('noAfter');
        }

  if (pathname.indexOf('products') > -1) {
          $( ".stepsHighlight" ).addClass('noBefore');
        }

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
    if(pathname == "/8build/order-history") {
       $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(4)').remove();
       $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(3)').remove();
       $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(2) table tbody tr td:nth-child(3)').remove();
       $('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr td:nth-child(1) a strong').each( function(){
        var textToChange = this.firstChild.nodeValue;
        this.firstChild.nodeValue = textToChange.replace( /INVOICE/g, 'ORDER');
         });
      $('.centrealign_split table:nth-of-type(2) tbody tr td:nth-child(1) table tbody tr td:nth-child(1)').each( function(){
        this.innerHTML = this.innerHTML.replace( /PO No./g, 'Customer order reference -');
         });

    }


    //If customer is logged out
    if ($('td.displayboxheading').length) {
     $("#homeContent img").remove();
     $( "#homeLogin" ).after( '<div id="loggedOutText"><p>< Please sign-up or login<br>to access the webstore</p></div>' );
    }

    //Add class to products-welcome page text
    if (pathname.indexOf('products-welcome') > -1) {
      $('.centrealign_split div:nth-of-type(6)').addClass('welcomePageText');
     } 

    //Add bespoke welcome page text
    $('.leftalign.welcomePageText strong').html('Welcome to the 8build webstore. Choose a category below to start ordering products...');

    //Point Footer T&C to Octink PDF T&C
    $('#footContent p a:nth-of-type(4)').attr({ href:"http://octink.com/dev/wp-content/uploads/2014/04/Octink_Standard-terms-of-business_April-2014.pdf", target:"nw"});

    //Add Octink logo to footer
    $( "#footContent" ).append( "<a href='http://www.octink.com' target='_blank' id='footer-image'><img src='https://cdn.rawgit.com/OctAE/Public/master/8build-footerOctink.jpg' alt='Octink'></a>");

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


       //Change "start_from_scratch" button. Add .alphabutton style into it
    $("img[src$='start_from_scratch.gif']").hide().parent().wrapInner("<span>Remove saved projects</span>").wrap("<div class='alphabutton' id='startFromScratch'></div>");


    //Remove "Your data will not be shared with any 3rd parties other than Protx for payment processing." from Edit my details page and add class to "* Mandatory"
    $('strong:contains(Protx)').hide().next().addClass('mandatory');

    //Add "Thank you" add the begining of message on Order complete page
    $('.invoiceback p:nth-of-type(1)').before('<h2>Thank you</h2>'); 

     //Change text of message on Order complete page
    $('.invoiceback p:nth-of-type(3)').html('Your Octink Account Handler<br>will be in touch to confirm your delivery date').after('<p>visit <a href="http://www.octink.com">octink.com</a> to find out more about your signage supplier</p>'); 

    //Add navigation text below order complete message
    $('.invoiceback').after('<p id="afterCompleteMsg">Click <a href="/8build/products">Open Catalogue</a> to place another order, or <a href="/8build/logout">Log Out</p>');

    //Add PDF Cataloque link to footer
    $('#footContent p').append('<span> | </span><a href="https://cdn.rawgit.com/OctAE/Public/master/8build%20Catalogue.pdf" target="_blank">PDF Cataloque</a>');

    //Add breadcrumbs to edit-kit and edit-product page, BUT NOT ON PRODUCT WHICH IS PART OF A KIT
    if (pathname.indexOf('product-edit') > -1 || pathname.indexOf('kit-edit') > -1 ) {

      if ($('a#addToKit span:contains(kit)').length == 0) {
          
            var breadcrumbHtml = "<div style='padding: 30px 0px 30px 4px; display: block'><strong>You are at: > > <a href='/8build/products'>8build</a>"
            var pathArray = pathname.split("/");
            var pathBefore = "";
            for (i = 2; i < pathArray.length-1; i++) {
               pathBefore = pathBefore + "/" + pathArray[i]; 
                   breadcrumbHtml = breadcrumbHtml + " > <a href='/8build/products" + pathBefore + "'>" + pathArray[i] + "</a>";
          }
          breadcrumbHtml = breadcrumbHtml + " > product selection</strong></div>";
          $('.stepsPlain').parent().after(breadcrumbHtml);
      }
    }


//G022 - Customizable product
if (pathname.indexOf('g022') > -1) {
  $('p:contains(OctinkText16)').html('Contact 8 - Telephone');
  $('p:contains(OctinkText15)').html('Contact 8 - Position');
  $('p:contains(OctinkText14)').html('Contact 7 - Telephone');
  $('p:contains(OctinkText13)').html('Contact 7 - Position');
  $('p:contains(OctinkText12)').html('Contact 6 - Telephone');
  $('p:contains(OctinkText11)').html('Contact 6 - Position');
  $('p:contains(OctinkText10)').html('Contact 5 - Telephone');
  $('p:contains(OctinkText9)').html('Contact 5 - Position');
  $('p:contains(OctinkText8)').html('Contact 4 - Telephone');
  $('p:contains(OctinkText7)').html('Contact 4 - Position');
  $('p:contains(OctinkText6)').html('Contact 3 - Telephone');
  $('p:contains(OctinkText5)').html('Contact 3 - Position');
  $('p:contains(OctinkText4)').html('Contact 2 - Telephone');
  $('p:contains(OctinkText3)').html('Contact 2 - Position');
  $('p:contains(OctinkText2)').html('Contact 1 - Telephone');
  $('p:contains(OctinkText1)').html('Contact 1 - Position');
  $('strong:contains(OctinkImage8)').html('Contact 8');
  $('strong:contains(OctinkImage7)').html('Contact 7');
  $('strong:contains(OctinkImage6)').html('Contact 6');
  $('strong:contains(OctinkImage5)').html('Contact 5');
  $('strong:contains(OctinkImage4)').html('Contact 4');
  $('strong:contains(OctinkImage3)').html('Contact 3');
  $('strong:contains(OctinkImage2)').html('Contact 2');
  $('strong:contains(OctinkImage1)').html('Contact 1');
  $('input[value="Enter telephone number"]').addClass('add30bottom');
}

//G020 - Customizable product
if (pathname.indexOf('g020') > -1) {
   $('p:contains(OctinkText11)').html('Contractor 5 - Position');
  $('p:contains(OctinkText10)').html('Contractor 5 - Company Name');
  $('p:contains(OctinkText9)').html('Contractor 4 - Position');
  $('p:contains(OctinkText8)').html('Contractor 4 - Company Name');
  $('p:contains(OctinkText7)').html('Contractor 3 - Position');
  $('p:contains(OctinkText6)').html('Contractor 3 - Company Name');
  $('p:contains(OctinkText5)').html('Contractor 2 - Position');
  $('p:contains(OctinkText4)').html('Contractor 2 - Company Name');
  $('p:contains(OctinkText3)').html('Contractor 1 - Position');
  $('p:contains(OctinkText2)').html('Contractor 1 - Company Name');
  $('p:contains(OctinkText1)').html('Site name');
  $('strong:contains(OctinkImage5)').html('Contractor 5 - Logo');
  $('strong:contains(OctinkImage4)').html('Contractor 4 - Logo');
  $('strong:contains(OctinkImage3)').html('Contractor 3 - Logo');
  $('strong:contains(OctinkImage2)').html('Contractor 2 - Logo');
  $('strong:contains(OctinkImage1)').html('Contractor 1 - Logo');
  $('input[value="Enter position"], input[value="Enter site name"]').addClass('add30bottom');
  $('p:contains(Images)').html('Make company name blank if you want to use logo!').css( "color", "red" );
}


if (pathname.indexOf('g022-') > -1) {
  //G022 Text Area clean REDTIE style on Click
  $('[id*="cartText"]').click(function() {
    $(this).attr('placeholder','NAME SURNAME\nPOSITION\n_(underline)\nTELEPHONE');
    var element = $(this).attr('id');
    var caretPosStart = document.getElementById(element).selectionStart;
    var caretPosEnd = document.getElementById(element).selectionEnd;
    var str = $(this).val();
    str = str.replace(/{......}/g, '');
    str = str.replace(/{.......}/g, '');
    var name = str.split('\n')[0];
    var position = str.split('\n')[1];
    var underline = str.split('\n')[2];
    var tel = str.split('\n')[3];
    if ((name == "") || (name == "POSITION")) {
        name = "NAME SURNAME";
    }
    if ((position == undefined) || (position == "_") || (position == "NAME SURNAME")) {
      position = "POSITION";
    }
    if ((underline == undefined) || (underline != "_")) {
      underline = "_";
    }
    if ((tel == undefined) || (tel == "_") || (tel == "")) {
     tel = "00000000000";
    }
    var newStr = name + "\n" + position + "\n" + underline + "\n" + tel;
    $(this).val(newStr);
    document.getElementById(element).setSelectionRange(caretPosStart, caretPosEnd);
   });


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



})// End document ready !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




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

