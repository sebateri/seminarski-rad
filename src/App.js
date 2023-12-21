import Input from './Input';
import Messages from './Messages';
import randomName from './helpers/random-name.js';
import randomColor from './helpers/random-color';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    messages: [],
    chatmember: {
      username: randomName(),
      color: randomColor(),
    },
  };

  /* Component definira početno stanje chata sa nasumično generiranim usernameom i pripadajućom bojom.
  Koristi se Scaledrone library za stvaranje veze s chat prostorijom. */

  constructor() {
    super();

    /* super() se upotrebljava da se definira constructor za podrazred koji proširuje nadređeni razred (parent, child), 
    jer osigurava da se constructor nadređenog razreda pozove prije constructora podrazreda 
    i da se obavi potrebno podešavanje ili inicijalizacija. */

    this.drone = new window.Scaledrone('Y6mFZoHjiBvHeBtA', { // Scaledrone channelID bi se trebao nalazi unutar .env da se ostvari privatnost
      data: this.state.chatmember,
    });

    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      console.log('Connected to Scaledrone');
      if (this.state) {
        const chatmember = this.state.chatmember;
        chatmember.id = this.drone.clientId;
        this.setState({ chatmember });
      }
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data }); //clientData se nalazi unutar member
      if (messages.length > 0) { // Prazne vrijednosti se ne spremaju u state
        this.setState({ messages });
      }
    });
  }
  /* Constructor inicijalizira instancu Scaledronea s podacima chat membera i spaja se na kanal "observable-room" kako bi slušao dolazne poruke. 
  Kada stigne nova poruka, dodaje je u niz poruka stanja, što pokreće ponovno iscrtavanje komponente. */

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Sebateri Chat</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.chatmember}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
  /* Render vraća raspored aplikacije za chat, koji uključuje zaglavlje, komponentu Messages i komponentu Input. 
  Komponenti Messages prosljeđuje se trenutno stanje poruka i člana chata, 
  dok se komponenti Input prosljeđuje povratni pozivna funkcija za slanje poruke. */

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default App;
