function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}


function addcopyrightText(){
  var copyrightHtml = '<div class="container-fluid"><div class="row"><div class="col-12 d-flex checkout-copyright-cont"><div class="col-6 ts-copyright"><span><a href="https://techsembly.com/" target="_blank">Techsembly&copy;</a></span><span class="ml-1">2022</span></div><div class="col-6 tc-rights-reserved text-right pr-0"></div></div></div></div>'
  var elem = $(".checkout-footer")[0]
  elem.insertAdjacentHTML('afterend', copyrightHtml)
}

(function () {
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);
  var newStyle = document.createElement('style');

  // ===================== 
  // ===================== 
  // ===================== 
  // ===================== 


  document.head.appendChild(newStyle);
  // Poll for jQuery to come into existence
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function () { checkReady(callback); }, 20);
    }
  };
  checkReady(function ($) {
    $('head').append('<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>');
      // $('head').append('<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>');


      newStyle.appendChild(document.createTextNode("\
      @font-face {\
        font-family: 'f37_attilaregular';\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/6be2939608ec7960039bbfa0ae61605dd28ca255/fonts/f37/f37attila-regular-webfont.woff2') format('woff2'),\ url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/6be2939608ec7960039bbfa0ae61605dd28ca255/fonts/f37/f37attila-regular-webfont.woff') format('woff');\
        font-weight: normal;\
        font-style: normal;\
      }\
      "));
      // =========================================== 

      




    $(function() {
      waitForElm('app-footer-checkout').then((elm) => {
        addcopyrightText()
      }).catch((error) => {});

      waitForElm('.cart-right-cont').then((elm) => {
        addLoginCartNote();
        addGuestCheckoutNote();
      }).catch((error) => {});

      waitForElm('.checkout-container.complete').then((elm) => {
        addcompleteText();
      }).catch((error) => {});



      $(window).on('load', function(){
        setTimeout(function () {
          var attr = $('body').attr('data-pagetype');

          // For some browsers, `attr` is undefined; for others,
          // `attr` is false.  Check for both.
          if (typeof attr !== 'undefined' && attr !== false) {
            //console.log(attr);
          }
          if(attr === 'product' && $('header .head-links li .cart-qty').length){
            $(document).scrollTop( $(".cart-bag").offset().top );
            console.log('items added to cart');
          }
        }, 2000);
      });
      setTimeout(function () {
        $('.products-container .products-holder-main .products-holder').append('<i aria-hidden="true"></i><i aria-hidden="true"></i>');
      }, 2000);

      setInterval(function() {
        $('.custom-container.login-signup').each(function () {
          if (!$(this).closest('body').attr('data-pagetype', 'login-signup')) {
            $(this).closest('body').attr('data-pagetype', 'login-signup');
          }
        });
        $('.container.user-container').each(function () {
          if (!$(this).closest('body').attr('data-pagetype', 'user-login-modified')) {
            $(this).closest('body').attr('data-pagetype', 'user-login-modified');
          }
        });
        $('header.header .menu-holder>li>div').each(function(){
          if(!$(this).children().length){
            $(this).addClass('empty');
          }
        });

        $('.product-detail-container .product-detail').closest('.col-lg-5:not(.modified)').addClass('product-inner modified');
        $('.product-detail-container .product-carousel').closest('.col-lg-7:not(.modified)').addClass('product-carousel-cont modified');
        $('.product-detail-container .personalise-form .form-group .order-btn').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('add to cart');
          }
        });
        $('app-product-detail app-related-products[title="More items from"]').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).find('h3').html('More Like This');
          }
        });
        $('.custom-container.cart-container .vendor-items-cont a img[alt="edit"]:not(.modified)').addClass('modified').attr('src','https://static.techsembly.com/uPjNo3rYoN3JJt36hPiFPuUn');
        // $('.custom-container.cart-container .vendor-items-cont a img[alt="gift"]:not(.modified)').addClass('modified').attr('src','https://static.techsembly.com/vg23BokHkdx4WrwPDtVBsAGu');
        $('.delivery-methods-cont .card .card-body .text-right a img[alt="edit"]:not(.edit-img)').addClass('edit-img').attr('src', 'https://static.techsembly.com/uPjNo3rYoN3JJt36hPiFPuUn');
        $('.custom-container.checkout a img[alt="edit"]:not(.edit-img)').addClass('edit-img').attr('src', 'https://static.techsembly.com/uPjNo3rYoN3JJt36hPiFPuUn');
        $('.custom-container.cart-container').each(function(){
          if (!$(this).closest('body').attr('data-pagetype','cart')){
            $(this).closest('body').attr('data-pagetype','cart');
          }
        });
        $('.custom-container.cart-container .cart-item.new .pro-badges-cont .pro-badge span:contains("GiveX Product")').each(function(){
          if(!$(this).hasClass('modified')){
            $(this).addClass('modified');
            $(this).html('Digital Product');
          }
        });
        $('.custom-container.cart-container .card .cart-login-cont #guest-btn span:contains("Continue to Shipping")').each(function() {
          if(!$(this).hasClass('guest-login')){
            $(this).addClass('guest-login');
            $(this).html('Continue to Checkout');
          }
        });
        $('.checkout-container.complete .total-cont.section-cont .col-3:contains(" Total: ")').each(function(){
          if(!$(this).hasClass('modified')){
            $(this).addClass('modified');
            $(this).html('Total');
          }
        });
        
        $('.checkout-container.complete .section-cont.customer-note').each(function(){
          if(!$(this).hasClass('total-delivery')){
            $(this).addClass('total-delivery');
            var newTxt = 'Your order is being confirmed and we will be shipping it soon';
            $(".customer-note:contains('Your order is being confirmed and we will be shipping it soon')").html(function(_, html) {
               return  html.replace(/(Your order is being confirmed and we will be shipping it soon)/g, '<div class="updated-string">'+newTxt+'</div>')
            });
          }
        });
        $('.cart-item.new .underline:contains("Add Gift Options")').each(function(){
          if(!$(this).hasClass('modified')){
            $(this).addClass('modified');
            $(this).html('Add Gift Message');
          }
        });
        $('.login-signup .custom-container .breadcrumb-heading:contains("Log In")').each(function() {
          if(!$(this).hasClass('log-modified')){
            $(this).addClass('log-modified');
            $(this).html('My Gift Cards');
          }
        });
        $('.custom-container.cart-container .btn.continue-btn-new').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Return to shopping');
            }
        });
        $('.custom-container.checkout .payment-form-container .checkbox-cont .checkbox-note:contains("Get exclusive updates via email")').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).closest('.col-12.px-0').addClass('exl-offer').removeClass('pt-4');
            }
        });

        // login page heading changes
        $('.custom-container.login-signup .login-signup-tabs-cont .left-panel .panel-heading').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Existing Gift Card Account');
          }
        });
        $('.custom-container .login-signup-tabs-cont .right-panel form.signup-form .btn.submit').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('create gift card account');
          }
        });
        $('.custom-container.login-signup .login-signup-tabs-cont .right-panel .panel-heading').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('New Gift Card Account');
          }
        });
        $('.user-wrapper .container.user-container .user-heading:contains("My Orders")').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('My Gift Cards');
          }
        });
        $('.auth-user .user-wrapper .container.user-container .user-heading:contains("My Account")').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('My Gift Card Account');
          }
        });
        $('.custom-container.login-signup label:contains("Create a password*")').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Create Password*');
          }
        });
        $('.custom-container .login-signup-tabs-cont form.login-form .forget-psw-link:contains("Forgot your password?")').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Forgot Password?');
          }
        });

        $('#delivery-options-popup').each(function(){
          var radios = document.querySelectorAll('#delivery-options-popup .radio-container input[type="radio"]');

          for (const radioButton of radios) {
            radioButton.addEventListener('change', showSelected);
          }

          function showSelected(e) {
            //console.log(e);
            if (this.checked) {
              var val = this.value;
              var clickEvent = new Event('click');
              for (var j = 0; j < radios.length; j++) {
                  if (radios[j].value == val) {
                    radios[j].click();
                    radios[j].checked = true;

                      //console.log(radios[j]);
                  }
                  else {
                    radios[j].checked = false;
                  }
              }
            }
          }

        });

        $('.nav-ship-details .breadcrumb-heading:not(.modified)').addClass('modified').html('Shipping Details');
        $('.shipping-form-container .form-control#last-name').each(function(){
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).closest('.col-md-6').addClass('last-name-cont');
          }
        });
        $('.checkout.digital .shipping-form h1.breadcrumb-heading:contains("Shipping Details")').each(function() {
          if(!$(this).closest('.shipping-form').hasClass('shipp-details')){
            $(this).closest('.shipping-form').addClass('shipp-details');
            $(this).html('Billing Details');
          }
        });
        
        $('.custom-container.checkout .payment-form-container .section-heading:contains("Details")').each(function() {
          if(!$(this).hasClass('modified')){
            $(this).addClass('modified');
            $(this).html('Billing Details');
          }
        });
        $('.custom-container.checkout .payment-form-container .form-group .card-images-holder .cards-desc').each(function() {
          if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Accepted Cards - Visa, Mastercard, and American Express.');
          }
        });
        $('.footer .footer-widget .widget-title:contains("KEEP IN TOUCH")').each(function() {
          if(!$(this).closest('.footer-widget').hasClass('capitalize')){
            $(this).closest('.footer-widget').addClass('capitalize');
            $('.footer-widget.capitalize .widget-title').html("Keep In Touch");
          }
        });
        $('.mobile-footer .footer-widget .widget-content .social-links').each(function () {
          if (!$(this).closest('.widget-content').hasClass('title-added')) {
            $(this).closest('.widget-content').addClass('title-added')
            $(this).closest('.widget-content').prepend('<h5 class="widget-title">Keep In Touch</h5>')
          }
        });
        $('.footer .copyright-cont .pay-methods-avail ').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).find('.meth-link:not(.new)').addClass('d-none');
                $(this).append('<div class="meth-link new"><img alt="amex" src="https://static.techsembly.com/kUKvmo4RsRJxLvZa1tcDZdW4" width="52"></div>'+
                '<div class="meth-link new"><img alt="master-card" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" width="52"></div>'+
                '<div class="meth-link new"><img alt="visa" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" width="52"></div>');
            }
        });
        $('.products-container .products-holder-main').removeClass('pt-lg-2');
        $('.products-container .products-holder-main .products-holder').removeClass('pt-5');
        $('.products-holder .product-column .product-content .d-flex').addClass('flex-row-reverse');
        $('.products-container .products-holder-main .products-holder .product-list .product-image').removeClass('mb-2');
        $('.footer .copyright-cont .powered-by').removeClass('col-lg-6 text-center align-items-center').addClass('col-lg-9 pr-0');
        $('.products-holder-main .products-holder .product-column .product-list a.wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
        $('.products-holder-main .products-holder .product-column .product-list a.wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
        $('.product-detail-container .product-holder .product-detail .product-info .product-heading .product-rating a.wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
        $('.product-detail-container .product-holder .product-detail .product-info .product-heading .product-rating a.wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
        $('.related-products .related-products-holder .product-content .product-rating .wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
        $('.related-products .related-products-holder .product-content .product-rating .wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
        $('.wishlist-container .products-container .products-holder .product-column .product-list .product-content .product-rating .wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
        $('.wishlist-container .products-container .products-holder .product-column .product-list .product-content .product-rating .wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
        $('.custom-container.cart-container .vendor-items-cont .cart-item.new .edit-item-new img[alt="edit"]').attr('src', 'https://static.techsembly.com/qybpFodMN5K2dVgfN6qvXtsk');
        $('.custom-container.checkout .delivery-methods-cont .card .card-body img[alt="edit"]').attr('src', 'https://static.techsembly.com/qybpFodMN5K2dVgfN6qvXtsk');
        $('.user-container .balance-form').closest('.user-container:not(.d-none)').addClass('d-none');

        $('.user-container .user-heading:contains("Check TS Gift Card Balance")').each(function(){
          if(!$(this).hasClass('gift-card-heading')){
            $(this).addClass('gift-card-heading');
            $(this).html('Check Gift Card Balance');
          }
        });
        $('.user-container .user-heading:contains("My TS Card Balance")').each(function(){
          if(!$(this).hasClass('gift-card-heading')){
            $(this).addClass('gift-card-heading');
            $(this).html('My Gift Card Balance');
          }
        });
        $('.ts-balance-form label[for="gift-card-no"]:not(.modified)').addClass('modified').html('Gift card number');
        $('.ts-balance-form input[name="gift-card-no"]:not(.modified)').addClass('modified').attr('placeholder','Enter gift card number');

        // $('.product-pricing.w-100').appendTo('.product-title');
        $('.footer a:contains("+65")').each(function(){
          var string_phone= $(this).html();
          var result_phone = string_phone.substring(string_phone.indexOf(':') + 1);
          var phone_no = "tel:" + result_phone;
          if(!$(this).hasClass('tel-link')){
            $(this).addClass('tel-link');
            $(this).attr('href', phone_no);
          }
        });
        $('.footer a:contains("@")').each(function(){
          var string_email= $(this).html();
          var result_email = string_email.substring(string_email.indexOf(':') + 1);
          var email_link = "mailto:" + result_email;
          if(!$(this).hasClass('email-link')){
            $(this).addClass('email-link');
            $(this).attr('href', email_link);
          }
        });
        $('.footer a:contains("Song Saa")').each(function(){
          if(!$(this).hasClass('hotel-link')){
            $(this).addClass('hotel-link');
            $(this).attr('target', '_blank');
          }
        });
        $('.footer a:contains("Privacy")').each(function(){
          if(!$(this).hasClass('privacy-link')){
            $(this).addClass('privacy-link');
            $(this).attr('target', '_blank');
          }
        });
        $('.footer a:contains("Terms")').each(function(){
          if(!$(this).hasClass('tnc-link')){
            $(this).addClass('tnc-link');
            $(this).attr('target', '_blank');
          }
        });
        $('.social-links img[alt="instagram"]:not(.modified)').addClass('modified order-1').attr('src', 'https://static.techsembly.com/RGdeyZ3YnywXf5cHFfJgrZsp');
        $('.social-links img[alt="fb"]:not(.modified)').addClass('modified order-2').attr('src', 'https://static.techsembly.com/jGaGHLJdvHZmi2wNCdFKa5WX');
        // $('.social-links img[alt="line"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/DbagWxWtnirkAZvKRVzP6nRR');
        // $('.social-links img[alt="twitter"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/1GxGxiASKq3sBVE5oAqhLJA9');
        // $('.social-links img[alt="pinterest"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/5m9ZX7FgjVkefsjn5vknzpYg');
        $('.social-links img[alt="linkedin"]:not(.modified)').addClass('modified order-3').attr('src', 'https://static.techsembly.com/jehdz3Q66fx6qWGLRiSRRdWf');
        // $('.social-links img[alt="fb"]').closest('li:not(.fb-link-cont)').addClass('fb-link-cont');
        // $('.footer .footer-widget .social-links:not(.modified)').addClass('modified').append('<li><a href="#" rel="nofollow"><img class="modified" alt="wechat" src="https://static.techsembly.com/EwPvwkEi4KevdgMTz6pZpK6D"></a></li>');
        // $('.footer .footer-widget .social-links:not(.youtube-edded)').addClass('youtube-edded').append('<li><a href="https://www.youtube.com/channel/UCD2SAPmWBuhqDx47xNx0A0Q" rel="nofollow"><img class="modified" alt="youtube" src="https://static.techsembly.com/BG9TZFpBZ8jXFq9FGwEpyk2L"></a></li>');
        // $('.social-links img[alt="instagram"]').closest('li:not(.insta-link-cont)').addClass('insta-link-cont').insertBefore($('.social-links .fb-link-cont'));

        
      })
    })


  })
})();



