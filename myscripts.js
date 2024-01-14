
$(document).ready(function () {
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('src')
        var modal = $(this)
        modal.find('#recipient-img').attr('src', recipient);
    })
    $('#mongoIcon').tooltip({
        trigger: 'manual', // กำหนดให้ tooltip แสดงผลเมื่อถูกเรียกด้วย JavaScript
    });

    // เพิ่ม event listener เมื่อนำนิ้วไปที่ icon
    $('#mongoIcon').on('mousedown', function () {
        $(this).tooltip('show'); // แสดง tooltip เมื่อนำนิ้วไปที่ icon
    });

    // เพิ่ม event listener เมื่อปล่อยนิ้ว
    $('#mongoIcon').on('mouseup', function () {
        $(this).tooltip('hide'); // ซ่อน tooltip เมื่อปล่อยนิ้ว
    });
});