$(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        datatype: 'json',
        data: {},

        beforeSend: function (whr, settings) {
            console.group('envoi Ajax1');
            console.log('callback beforeSend()  -  objet jqXHR', xhr);
            console.log('callback beforeSend()  -  objet settings', settings);
            console.groupEnd();
        }

    })



})