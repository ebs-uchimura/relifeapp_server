const showEdit = () => {
    toggleFlg = !toggleFlg
    if (toggleFlg) {
        $('.edit').hide();
        $('.mainedit').html('予約編集');

    } else {
        $('.edit').show();
        $('.mainedit').html('予約編集終了');
    }
}