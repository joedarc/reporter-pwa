import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Conversation extends Component {
  render() {
    return (
      <div className="conversation-container">
        <div className="col-md-12 col-xs-12 no-padding">
          <div className="section-header">
            <h2>2. Protection</h2>
            <p className="small-text text-light">Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</p>
            <hr/>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding">
          <div className="system-response-box response">
            <p className="small-text">Would you like to add a person?</p>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 no-padding">
          <div className="col-md-12 col-xs-12 no-padding system-toggle">
            <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Yes</button>
            <button className="col-md-12 col-xs-12 no-padding system-toggle-button">No</button>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding user-response">
          <div className="user-response-box" style={{textAlign: 'center'}}>
            <p className="small-text">Yes</p>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding">
          <div className="system-response-box response">
            <p className="small-text">Is the person safe?</p>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 no-padding">
          <div className="col-md-12 col-xs-12 no-padding system-toggle">
            <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Safe</button>
            <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Not Safe</button>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding user-response">
          <div className="user-response-box">
            <p className="small-text">Not Safe</p>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding">
          <div className="system-response-box response">
            <p className="small-text">What is their name?</p>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 no-padding">
          <div className="col-md-12 col-xs-12 no-padding system-toggle">
            <input className="system-input short" placeholder="Enter name..." />
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding user-response">
          <div className="user-response-box">
            <p className="small-text">John Smith</p>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding">
          <div className="system-response-box response">
            <p className="small-text">Do you have any additional notes?</p>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 no-padding">
          <div className="col-md-12 col-xs-12 no-padding system-toggle">
            <textarea className="system-input long" placeholder="Enter notes..." />
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding user-response">
          <div className="user-response-box">
            <p className="small-text">John Smith did not cooperate.</p>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding">
          <div className="system-response-box response">
            <p className="small-text">Would you like to add another person?</p>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 no-padding">
          <div className="col-md-12 col-xs-12 no-padding system-toggle">
            <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Yes</button>
            <button className="col-md-12 col-xs-12 no-padding system-toggle-button">No</button>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding user-response">
          <div className="user-response-box" style={{textAlign: 'center'}}>
            <p className="small-text">No</p>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 no-padding">
          <div className="system-response-box">
            <h3><b>You added 1 Response</b></h3>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel-item">
            <div className="col-md-12 col-xs-12 no-padding">
              <div className="col-md-12 col-xs-12 no-padding" style={{marginTop: '10px'}}>
                <h5 style={{textAlign: 'left', marginLeft: '10px'}}>Observation Response</h5>
                <hr style={{margin: '0px 7px 10px 7px'}}/>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Name</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>John Smith</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Safe?</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>Safe</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Notes</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right', whiteSpace: 'normal', lineHeight: '1'}}>John Smith did not cooperate</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <hr style={{margin: '15px 7px 0px 7px'}}/>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
                <div style={{color: '#0076FF'}}>Edit</div>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
                <div style={{color: '#B00000'}}>Delete</div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-12 col-xs-12 no-padding">
              <div className="col-md-12 col-xs-12 no-padding" style={{marginTop: '10px'}}>
                <h5 style={{textAlign: 'left', marginLeft: '10px'}}>Observation Response</h5>
                <hr style={{margin: '0px 7px 10px 7px'}}/>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Name</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>John Smith</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Safe?</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>Safe</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Notes</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right', whiteSpace: 'normal', lineHeight: '1'}}>John Smith did not cooperate</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <hr style={{margin: '15px 7px 0px 7px'}}/>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
                <div style={{color: '#0076FF'}}>Edit</div>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
                <div style={{color: '#B00000'}}>Delete</div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-12 col-xs-12 no-padding">
              <div className="col-md-12 col-xs-12 no-padding" style={{marginTop: '10px'}}>
                <h5 style={{textAlign: 'left', marginLeft: '10px'}}>Observation Response</h5>
                <hr style={{margin: '0px 7px 10px 7px'}}/>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Name</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>John Smith</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Safe?</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>Safe</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Notes</div>
                <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right', whiteSpace: 'normal', lineHeight: '1'}}>John Smith did not cooperate</div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <hr style={{margin: '15px 7px 0px 7px'}}/>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
                <div style={{color: '#0076FF'}}>Edit</div>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
                <div style={{color: '#B00000'}}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, {})(Conversation);
