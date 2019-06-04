const env = require("../shared/env");
const request = require("request");
var Request = require("request");

SubmitToServer = batchListBytes => {
    request.post({
            url: env.urlToPost,
            body: batchListBytes,
            headers: { "Content-Type": "application/octet-stream" }
        },
        (err, response) => {
            if (err) return console.log(err);
            console.log("response from processor", response.body);
            // return "gotIt"

            // Request.get(JSON.parse(response.body).link, (error, response, body) => {
            //     if (error) {
            //         return console.dir(error);
            //     }
            //     console.dir(JSON.parse(body).data[0].status);
            // });
        }
    );
};

// getAllData =()=>{
//   let API_URL='http://localhost:8008';
//   let PREFIX = '697ed8';
//  request.get({
//     url: `${API_URL}/state?address=${PREFIX}`
//   }, (err, response) => {
//     if (err) return  console.log(err)
//     let length = JSON.parse(response.body).data.length;
//     for(i=0;i<length;i++){
//       console.log(JSON.parse(response.body).data[i].address);
//      if(JSON.parse(response.body).data[i].address[6] === '2'){
//     var buffer = new Buffer(JSON.parse(response.body).data[i].data, 'base64');
//     var string = buffer.toString();
//     console.log(string)
//      }
//     }

//   })
// }

module.exports = { SubmitToServer };