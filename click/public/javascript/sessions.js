var Sessions = {
    getData: function () {
        return $.getJSON('/sessions');
    },
    insert: function (data) {
        return $.post('/sessions', data);
    }
};
$(document).ready(function () {
    $('#click').on("click", function () {
        var btn_value = $(this).val();
        btn_value++;
        $(this).val(btn_value);
        $(this).text(btn_value)
        
        Sessions.insert({value: btn_value});
        alert(req.sessions.value);
    });
});