import { Component } from 'react';
import React from 'react';

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <ul className='Messages-list'>
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
    // Component prima niz poruka i trenutnog membera kao props
  }
  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? 'Messages-message currentMember'
      : 'Messages-message';
    // renderMessage uzima jedan objekt poruke kao argument i vraća stavku liste koja sadrži sadržaj poruke, korisničko ime i avatar pošiljatelja.

    const randomId = Math.floor(Math.random() * 9999999999);
    /* Rješenje za grešku u konzoli jer postoji mogućnost da se brojevi ponove. 
    Isključivo korišteno da se makne greška u konzoli.
    Kod generira random ID za dodjelu svakoj poruci s ciljem da bi se izbjegle poruke pogrešaka u konzoli, 
    i postavljanjem imena klase svake poruke da bi se istaknule poruke trenutnog membera */

    return (
      <li className={className} key={randomId}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }} 
          // randomID poziva bazu podataka. clientData preuzet sa Scaledronea
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
