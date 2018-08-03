exports.handler = function({ path, queryStringParameters }, context, callback) {
    const res = {
        path: event.path,
        id: queryStringParameters.id,
    };
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application.json',
        },
        body: JSON.stringify(res)
    });
}
