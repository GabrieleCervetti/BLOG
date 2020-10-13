class RestController {

    constructor() {}

    get(url, onSuccess, onError) {
        $.get({
            url: url,
            success: onSuccess,
            dataType: 'json'
        });

    }

    post(url, data, onSuccess, onError) {
        $.post({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            dataType: 'json',
            success: onSuccess,
            contentType: "application/json"
        });


    }

    delete(url, data, onSuccess, onError) {
        $.delete({
            type: "DELETE",
            url: url,
            success: onSuccess,
            dataType: 'json'
        });
    }


    put(url, data, onSuccess, onError) {
        $.put({
            url: url,
            type: "put",
            success: onSuccess,
            dataType: 'json'
        });


    }
}