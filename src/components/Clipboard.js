import React, { Component } from 'react';
import ClipboardHistory from './ClipboardHistory';
import Header from './Header';

class Clipboard extends Component {
  render() {
    return (
      <div className="clipboard-shell">
        <Header></Header>
        <ClipboardHistory></ClipboardHistory>
      </div>
    );
  }
}

export default Clipboard;
