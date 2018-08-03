const randomstring = require("randomstring");

exports.handler = function({
    path,
    queryStringParameters
}, context, callback) {
    const id = queryStringParameters.id;
    if (isNaN(id)) {
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: 'invalid id'})
        });
        return;
    }
    const res = {
        path,
        id,
        chara: randomstring.generate(),
    };
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res)
    });
}
