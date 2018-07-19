import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class FormFiller extends Component {
  render() {
    return (
      <div>
        <div className="support-scrollsnap">
        </div>
        <div className="col-md-12 scroll-container no-padding">

          {// <div className="col-md-12 col-xs-12 text-center no-padding">
          //   <div className="col-md-12 col-xs-12 no-padding">
          //     <h2 style={{fontSize: '6vw', marginTop: '3px', marginBottom: '20px'}}>Critical Behavior Observation</h2>
          //   </div>
          // </div>
          }
          <div className="outer-container scroll-area">
            <div className="col-md-12 col-xs-12 text-left inner-content">
              <div className="col-md-12 col-xs-12 no-padding">
                <h4>2. Protection</h4>
              </div>
              <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>A Safety Zone is established using danger tape around the loading activities to prevent unauthorized people or equipment into the hazard area. Activites are paused when the Safety Zone is compromised until protection can be re-established</div>
              <div className="col-md-12 col-xs-12 text-center no-padding">
                <button className="circle-button">Begin</button>
              </div>

              {// FOR TESTING PURPOSES
              // <div className="col-md-12 col-xs-12 no-padding">
              //   <h4>1. Inspection</h4>
              // </div>
              // <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</div>
              // <div className="col-md-12 col-xs-12 text-center no-padding">
              //   <button className="circle-button">Begin</button>
              // </div>
              //
              // <div className="col-md-12 col-xs-12 no-padding">
              //   <h4>1. Inspection</h4>
              // </div>
              // <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</div>
              // <div className="col-md-12 col-xs-12 text-center no-padding">
              //   <button className="circle-button">Begin</button>
              // </div>
              //
              // <div className="col-md-12 col-xs-12 no-padding">
              //   <h4>1. Inspection</h4>
              // </div>
              // <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</div>
              // <div className="col-md-12 col-xs-12 text-center no-padding">
              //   <button className="circle-button">Begin</button>
              // </div>
              //
              // <div className="col-md-12 col-xs-12 no-padding">
              //   <h4>1. Inspection</h4>
              // </div>
              // <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</div>
              // <div className="col-md-12 col-xs-12 text-center no-padding">
              //   <button className="circle-button">Begin</button>
              // </div>
              }


            </div>
          </div>

          <div className="outer-container scroll-area">
            <div className="col-md-12 col-xs-12 text-left inner-content">
              <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>
                <h3>Add Person</h3>
                <h5>Complete the following fields</h5>
              </div>
              <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>
                <input className="col-md-12 col-xs-12 no-padding" placeholder="Name" style={{borderRadius: '10px', marginBottom: '5%'}}/>
                <div>
                  <button className={`btn toggle-style-button active`}><b>Safe</b></button>
                  <button className={`btn toggle-style-button`}><b>Not Safe</b></button>
                </div>
              </div>

            </div>
          </div>

          {// <div className="outer-container scroll-area">
          //   <div className="col-md-12 col-xs-12 text-left inner-content">
          //     <div className="col-md-12 col-xs-12 no-padding">
          //       <h4>2. Protection</h4>
          //     </div>
          //     <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>A Safety Zone is established using danger tape around the loading activities to prevent unauthorized people or equipment into the hazard area. Activites are paused when the Safety Zone is compromised until protection can be re-established</div>
          //     <div className="col-md-12 col-xs-12 text-center no-padding">
          //       <button className="circle-button">Begin</button>
          //     </div>
          //   </div>
          // </div>
          //
          // <div className="outer-container scroll-area">
          //   <div className="col-md-12 col-xs-12 text-left inner-content">
          //     <div className="col-md-12 col-xs-12 no-padding">
          //       <h4>1. Inspection</h4>
          //     </div>
          //     <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</div>
          //     <div className="col-md-12 col-xs-12 text-center no-padding">
          //       <button className="circle-button">Begin</button>
          //     </div>
          //   </div>
          // </div>
          //
          // <div className="outer-container scroll-area">
          //   <div className="col-md-12 col-xs-12 text-left inner-content">
          //     <div className="col-md-12 col-xs-12 no-padding">
          //       <h4>1. Inspection</h4>
          //     </div>
          //     <div className="col-md-12 col-xs-12 no-padding" style={{marginBottom: '10%'}}>Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</div>
          //     <div className="col-md-12 col-xs-12 text-center no-padding">
          //       <button className="circle-button">Begin</button>
          //     </div>
          //   </div>
          // </div>
          }
        </div>
      </div>
    )
  }
}


export default connect(null, {})(FormFiller);
