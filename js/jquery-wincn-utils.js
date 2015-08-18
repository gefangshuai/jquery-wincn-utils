(function($){
    $.wn = {
        /**
         * 自动高度
         * $selector: 选择器
         * offsetH: 减少的高度
         */
        autoHeight: function ($selector, offsetH) {
            var winHeight = $(document).height();
            if (offsetH) {
                winHeight -= offsetH;
            }
            $selector.height(winHeight);
        },
        ajaxDelete: function($selector, message, callback) {
            $('body').on('click', $selector, function (e) {
                e.preventDefault();
                var $this = $(this);
                if (confirm(message)) {
                    $.get($this.attr('href'), function (data) {
                        callback(data);
                    });
                }
            });
        }
    };

})(jQuery);