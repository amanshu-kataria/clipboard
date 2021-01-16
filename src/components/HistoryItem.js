import React, { Component } from 'react';
import CopyIcon from '../assets/copy.png';

class HistoryItem extends Component {
  state = {
    copied: false
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.props.text).then(
      () => {
        this.setState({ copied: true });
      },
      () => {}
    );
  };

  render() {
    return (
      <div className="history-item">
        <div className="history-item-text">{this.props.text} </div>
        <div className="copy-icon-container">
          <img className="copy-icon" src={CopyIcon} onClick={this.copyToClipboard} />
        </div>
      </div>
    );
  }
}

export default HistoryItem;
