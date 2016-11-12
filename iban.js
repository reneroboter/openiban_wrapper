(function ($) {
    $.fn.getBankAndBicWithIBAN = function (options) {
        var inputValue, lengthOfInput, ibanServiceUrl;
        this.on("change", function () {
            inputValue = $(this).val();
            lengthOfInput = inputValue.length;
            if (lengthOfInput >= 22) {
                ibanServiceUrl = 'https://openiban.com/validate/' + $(this).val() + '?getBIC=true&validateBankCode=true';
                $.getJSON(ibanServiceUrl, function (data) {
                    console.log(data);
                    if (options) {
                        if (options.targetBank) {
                            options.targetBank.val(data.bankData.name);
                        }
                        if (options.targetBic) {
                            options.targetBic.val(data.bankData.bic);
                        }
                    }
                });
            }
        });
    };
})(jQuery);
