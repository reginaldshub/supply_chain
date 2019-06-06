const env = require("../shared/env");
const request = require("request");
var Request = require("request");

function SubmitToServer(batchListBytes) {
    return new Promise(function(resolve, reject) {
        request.post({
                url: env.urlToPost,
                body: batchListBytes,
                headers: { "Content-Type": "application/octet-stream" }
            },
            (err, response) => {
                if (err) reject(err);
                console.log("response from processor", response.body);
                setTimeout(() => {
                    // parseUrl(response.body)
                    Request.get(
                        JSON.parse(response.body).link,
                        (error, response, body) => {
                            if (error) {
                                reject(error);
                            }
                            console.log(JSON.parse(body).data[0].status);
                            resolve(JSON.parse(body).data[0].status);
                        }
                    );
                }, 1000);
            }
        );
    });
}

// parseUrl = (url) => {
//     request.get({
//         url: JSON.parse(url).link
//     }, (err, response) => {
//         if (err) return console.log(err)
//         console.log(JSON.parse(response.body).data[0].status)
//         return JSON.parse(response.body).data[0].status
//     })
// }

module.exports = { SubmitToServer };