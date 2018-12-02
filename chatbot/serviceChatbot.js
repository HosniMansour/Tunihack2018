
const apiai = require('apiai');
const chat          = apiai("cf4a4ee03d3e415ca5973c9bcbca3daf");


exports.askQuestion = function(text,options)
{

//__________Run our code as a Promise ( asynchronous code )   
return new Promise((resolve, reject) => {
   var defaultOptions = {
      sessionId: '<unique session id>', // use any arbitrary id - doesn't matter
};

//_________get the request from the chatbot agent_______//     
let request = chat.textRequest(text, Object.assign(defaultOptions, options));

//______  if there is response ----> resolve it________//
request.on('response', (response) => {
return resolve(response);
});

//______  if there is error  ----> reject-it________//
request.on('error', (error) => {
  return reject(error);
});

//____end of request____________________//
request.end();
  })
}