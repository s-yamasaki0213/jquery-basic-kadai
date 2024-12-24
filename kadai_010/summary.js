$(function(){
    //文字色変化ボタン押下時
    $('#change-color').on('click', function(){
        $('#target').css('color','red');
    });
    //文字内容変化ボタン押下時
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    });
    //フェードアウトボタン押下時
    $('#fade-out').on('click', function(){
        $('#target').fadeOut();
    });
    //フェードインボタン押下時
    $('#fade-in').on('click', function(){
        $('#target').fadeIn();
    });
});