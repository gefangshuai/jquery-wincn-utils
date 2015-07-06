(function($){
    $.fn.apputils = {
        /**
         * 自动高度
         * $selector: 选择器
         * offsetH: 减少的高度
         */
        autoHeight: function($selector, offsetH) {
            var winHeight = $(document).height();
            if(offsetH) {
                winHeight -= offsetH;
            }
            $selector.height(winHeight);
        }
    }
})(jQuery);