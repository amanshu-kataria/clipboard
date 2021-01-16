/*global chrome*/
import React, { Component, Fragment } from 'react';
import HistoryItem from './HistoryItem';
import HistoryIcon from '../assets/history.png';
import EmptyIcon from '../assets/empty.png';

class ClipboardHistory extends Component {
  state = {
    history: []
  };

  componentDidMount() {
    this.getClipboardHistory();
  }

  getClipboardHistory = () => {
    const clipHistory = localStorage.getItem('clipHistory');
    let history = ['Default Text Copied.'];
    if (clipHistory) {
      history = JSON.parse(clipHistory);
    } else {
      localStorage.setItem('clipHistory', JSON.stringify(history));
    }
    this.setState({ history });
  };

  render() {
    return (
      <div className="history">
        {this.state.history.length > 0 ? (
          <Fragment>
            <div className="history-title">
              <img src={HistoryIcon} alt="history icon" />
              <div>Your History</div>
            </div>
            <div className="history-list">
              {this.state.history.map(item => {
                return <HistoryItem key={item} text={item}></HistoryItem>;
              })}
            </div>
          </Fragment>
        ) : (
          <div className="empty-icon-container">
            <div className="empty-icon">
              <img src={EmptyIcon} alt="Empty" />
              <p className="empty-icon-text">No Data Found</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('copy', this.copyEventHandler);
  }
}

export default ClipboardHistory;
