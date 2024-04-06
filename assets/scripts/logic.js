function resetGroups() {

    $('ol.processesCellDropItem li')
        .removeClass('ProcessCorrectPosition ProcessIncorrectPosition ProcessIncorrectGroup')
        .appendTo("ul.processesDragList");
    return false;
}

function showCorrect() {
    resetGroups();
    $('ul.processesDragList li').each(function (a, s) {

        var list = $("ol.processesCellDropItem[r='" + $(this).attr("r") + "'][c='" + $(this).attr("c") + "']");
        $(this).appendTo(list);
        list.find("li").sort(sortgroups).appendTo(list);

    });
    checkCorrection();

    return false;
}

function checkCorrection() {
    $('ol.processesCellDropItem li').removeClass('ProcessCorrectPosition ProcessIncorrectPosition ProcessIncorrectGroup');

    $('ol.processesCellDropItem li').each(function (a, s) {
        var obj = $(this);
        var td = $(this).parent();
        var g_c = td.attr('c');
        var g_r = td.attr('r');
        var p_c = obj.attr('c');
        var p_r = obj.attr('r');
        obj.removeClass('ProcessCorrectPosition ProcessIncorrectPosition ProcessIncorrectGroup');
        obj.text(obj.text());
        if (g_c == p_c && g_r == p_r) {

            if (obj.index() == obj.attr("p")) {
                obj.addClass('ProcessCorrectPosition');
            } else {
                obj.addClass('ProcessIncorrectPosition');

            }
        } else {

            obj.addClass('ProcessIncorrectGroup');
        }

    });
}

function sortgroups(a, b) {
    return $(a).attr("p") > $(b).attr("p") ? 1 : -1;
}

(function ($) {

    $("ul.processesDragList").shuffle();
    $("ul.processesDragList li").draggable({revert: true});
    $(".processesCellDropItem, .processesDragList").droppable({
        hoverClass: "processesCellDropItemHover",
        drop: function (event, ui) {
            $(ui.draggable).appendTo(this);
            $(ui.draggable).css("left", "").css("top", "");

            checkCorrection();

        }
    });

    $.fn.shuffle = function () {
        return this.each(function () {
            var items = $(this).children();
            return (items.length)
                ? $(this).html($.shuffle(items))
                : this;
        });
    };

    $.shuffle = function (arr) {
        for (
            var j, x, i = arr.length; i;
            j = parseInt(Math.random() * i),
                x = arr[--i], arr[i] = arr[j], arr[j] = x
        ) ;
        return arr;
    };
})(jQuery);

var tran = new Translater({
    lang:"en",
    lang:"ru",
    lang:"ge"
});
tran.setLang('default');