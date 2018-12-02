// server.js

// BASE SETUP
// =============================================================================

"use strict";
// call the packages we need
require('dotenv').config();
const express       = require('express');
const apiai         = require('apiai');
const bodyParser    = require('body-parser');
const app           = express();
const chat          = apiai("cf4a4ee03d3e415ca5973c9bcbca3daf");
const socket = require('socket.io');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8082;

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); 

const ServiceChatbot = require('./serviceChatbot');

// test route to make sure everything is working (accessed at GET http://localhost:5000)
app.get('/', function(req, res) {
    res.json({ message: 'Wellcome to chatbot' });   
});

// DialogFlow API(accessed at POST http://localhost:5000/api/)
app.post('/api/', function(req, res) {
    const msg = req.body.msg;
     
    chat.textRequest(msg, {
        sessionId: "process.env.DEVELOPER_ACCESS_TOKEN"
    }).on('response', function(response) {
        res.send(response);
    }).on('error', function(error) {
        res.send(error);
    }).end();
});

// START THE SERVER
// =============================================================================
var server = app.listen(5001, function(){
    console.log("Express server listening on port " + 5001);
  });


  //_____initialize socket to be used for realtime functions _______________//
const io = socket(server);

io.set('origins', '*:*');



//______open connection________
io.on('connection', (socket) => {


    
    console.log('there is connection man sockjet !!')
    
    
    //______socket.on event SEND_MESSAGE
        socket.on('SEND_MESSAGE', function(data){
            var msg ={text :''}
          console.log('there is message !!' + data)

          ServiceChatbot.askQuestion(data)
	.then(response => {

         //_____switch intent Name we will execute the correct function __________//
        
         switch (response.result.metadata.intentName) {
           case "search_jobs":
               console.log("search by jobs here !!!")
     
               msg.text  = response.result.fulfillment.speech;
               console.log('resposne jobs' +response.result.fulfillment.speech);
               console.log('msg to be send '+ JSON.stringify(msg));
               io.emit('RECEIVE_MESSAGE',msg); 
               
               
               break;
          
     
     
     
     
           default:
               console.log('default message !')
               if(response.result.fulfillment.speech){  msg.text =response.result.fulfillment.speech;}
               else {
                 msg.text = "Sorry I don't understand !"
               }  
              
               io.emit('RECEIVE_MESSAGE',msg); 
            }


    }).catch(err =>{
        console.log('err' + err);
     })   
     
       
         
      
    
    
       
      
    
    
    
    
        })
         
    })
   

