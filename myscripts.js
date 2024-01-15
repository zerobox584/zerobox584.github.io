
$(document).ready(function () {
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('src')
        var modal = $(this)
        modal.find('#recipient-img').attr('src', recipient);
    })

    $(".more_info").click(function () {
        var $title = $(this).find(".title");
        if (!$title.length) {
            $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
        } else {
            $title.remove();
        }
    });
});


