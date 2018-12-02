import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
 
import logo from './chatbot.png';
 
class Chatbot extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div className="Chatbot">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="TanitBot"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}
 
export default Chatbot;