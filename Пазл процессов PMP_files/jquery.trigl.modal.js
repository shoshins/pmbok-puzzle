var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {


    var triglModalMethods = {
        init: function (options) {

            var modal = this;
            $.triglModal.currentModal = this;
            var defaults = {
                dragable: true,
                width: null,
                height: null,
                noContainer: false,
                disableClose: false,
                onShow: function (data, thismodal) {
                },
                onClose: function (data) { },
                onCancel: function (data) { },
                isCanceled: false,
            };


            var o = $.extend(defaults, options);
            var data = this;
            var zindex = $.triglModal.curZIndex;
            var overlay;
            var wrap = $('<div class="' + (o.noContainer ? 'triglModalNoWrap' : 'triglModalWrap') + ' triglCenter"></div>');


            overlay = $('<div class="triglModalOverlay"></div>');
            overlay.css({
                display: 'none',
                opacity: 0.4,
                height: $(document).height(),
                width: $(document).width(),
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: zindex + 1
            }).appendTo('body');
            if (!o.disableClose) {

                var closeblock = $('<a class="modalCloseImg" title="Close"><img src="/assets/img/icons/close.png" alt="X" /></a>');
                wrap.append(closeblock);
                overlay.bind('click.triglModal', function (e) {
                    e.stopPropagation();
                    o.onCancel(data);
                    o.isCanceled = true;
                    modal.triglModal('close');
                });

                $(document).unbind('keydown.triglModal').bind('keydown.triglModal', function (e) {
                    if (e.keyCode === 27) {
                        e.stopPropagation();
                        o.onCancel(data);
                        o.isCanceled = true;
                        modal.triglModal('close');
                    }
                });

                closeblock.bind('click.triglModal', function (e) {
                    e.stopPropagation();
                    o.onCancel(data);
                    o.isCanceled = true;
                    modal.triglModal('close');
                });

            }


            wrap.append(data).hide();


            wrap.appendTo('body');


            wrap.show();

            if (data.height() >= $(document).height() - 50) {

                data.addClass('triglScroll600');
            }

            var width = o.width == null ? data.width() : o.width;
            var height = o.height == null ? data.height() < parseInt(wrap.css('min-height')) ? parseInt(wrap.css('min-height')) : data.height() : o.height;

            $.validator.unobtrusive.parse(data.find('form'));
            wrap.hide();

            $(window).resize(function () {
                overlay.css({
                    height: $(document).height(),
                    width: $(document).width()
                });
                wrap.triglModal('relocate');
            });
            wrap.resize(function () {
                wrap.triglModal('relocate');
            });


            var marginTop = (height / 2) * -1;
            var marginLeft = (width / 2) * -1;
            wrap.css({ zIndex: zindex + 1 });

            $(this).data('triglModal', { wrap: wrap, overlay: overlay, options: o });
            overlay.show();
            wrap.show();
            o.onShow(wrap);


            if (o.dragable) {
                modal.parent().draggable({ handle: 'h1', containment: "parent", cursor: "move" });
            }
            return modal;
        },
        close: function () {
            var d = this.data('triglModal');
            if (d != undefined) {
                d.options.onClose(d);
                d.wrap.remove();
                d.overlay.fadeOut(200).remove();
            }
            d = null;
        },
        relocate: function () {

        }
    };


    $.triglModal = { curZIndex: 9999, modals: [] };

    $.fn.triglModal = function (method) {

        if (triglModalMethods[method]) {
            return triglModalMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return triglModalMethods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on triglModal');
        }


    };



    $.fn.triglPopup = function () {

        var popBlock = $('<div style="position:absolute;padding:20px;right:0px;bottom:0px; border:2px solid gray;display:none;"></div>');
        popBlock.append($(this));
        $('body').append(popBlock);
        popBlock.fadeIn(500).fadeOut(1000);
    };


})(jQuery);





}
/*
     FILE ARCHIVED ON 20:00:17 Jul 19, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:49:39 Jun 29, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.011
  PetaboxLoader3.resolve: 54.524
  CDXLines.iter: 12.358 (3)
  RedisCDXSource: 11.061
  LoadShardBlock: 66.163 (3)
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.14
  PetaboxLoader3.datanode: 137.5 (4)
  captures_list: 92.504
  load_resource: 142.864
*/