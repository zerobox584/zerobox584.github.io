
$(document).ready(function () {
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('src')
        var modal = $(this)
        modal.find('#recipient-img').attr('src', recipient);
    })
});