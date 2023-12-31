import { Component } from 'react';
import React from 'react';

class Input extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <div className='Input'>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            value={this.state.text}
            type='text'
            placeholder='Enter your message and press ENTER'
            autoFocus={true} />
          <button>Send</button>
        </form>
      </div>
    );
    // Render vraća obrazac s poljem za unos, gumbom i tekstom za prikaz u praznom polju. Kad se obrazac pošalje, poziva se onSubmit,
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }
}

export default Input;
