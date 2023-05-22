(function($, Drupal, drupalSettings) {

    Drupal.behaviors.webform = {
      attach: function(context, settings) {
        $(window).on('load',function() {
            const urlParams = new URLSearchParams(window.location.search);
            // Get a specific parameter by name.
            let  getCid = urlParams.get('cid');
            if (getCid) {
                getCid = getCid.split('?')[0]
                if (window.location.href.includes('formulaire-pour-adherent')) {
                    console.log('ajax loaded')
                    $.ajax({
                        url: '/form/formulaire-pour-adherent/confirmation/back_link',
                        data: {id: getCid},
                        success: (successResult, val, ee) => {
                            console.log('successs', successResult)
                            $('.webform-confirmation__back a').attr('href', successResult)
                            
                        },
                        error: function(error) {
                            console.log(error, 'ERROR')
                        }
                    });
                    
                }
            }
        })
      }
    }
})(jQuery, Drupal, drupalSettings);    