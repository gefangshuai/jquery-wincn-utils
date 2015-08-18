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

    $.wmIni = {
        deleteToggle: function () {

            $('a[data-toggle="confirm"]').on('click', function (e) {
                e.preventDefault();
                var $this = $(this);
                var msg = $this.data('message');
                if (msg && msg != "") {
                    if (confirm(msg)) {
                        location.href = $this.attr('href');
                    }
                } else {
                    location.href = $this.attr('href');
                }
            });
        }
    };
    $.wmIni.deleteToggle();
})(jQuery);