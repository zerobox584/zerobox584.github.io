
$(document).ready(function () {
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('src')
        var modal = $(this)
        modal.find('#recipient-img').attr('src', recipient);
    })
    // $('#resultModal').on('show.bs.modal', function (event) {
    //     var button = $(event.relatedTarget);
    //     var text = button.data('text');
    //     var image = button.data('src')
    //     var modal = $(this)
    //     modal.find('#recipient-text').text(text);
    //     modal.find('#recipient-img').attr('src', image);
    // });

    var loader = $("#loader");

    function loadNow(opacity) {
        if (opacity <= 0) {
            displayContent();
        } else {
            loader.css("opacity", opacity);
            setTimeout(function () {
                loadNow(opacity - 0.04);
            }, 50);
        }
    }

    function displayContent() {
        loader.hide();
        $("#content").show();
    }

    loadNow(1);
});