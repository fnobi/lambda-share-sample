/*
- requireを直接的に使うのは難しそう
  - netlify-lambda をつっこもう その方がデバッグもやりやすそう
- env的なものがない？
- 外部ファイル読み込める？
*/

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
        id
    };
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res)
    });
}
