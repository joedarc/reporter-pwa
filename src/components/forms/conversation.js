import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { } from '../../actions/index';
import Form from '!json-loader!../../../assets/json/full_mock_form.json';

class Conversation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: Form,
      currentSection: 1,
      currentElement: 1,
      currentChild: 1,
      input: false
    }

    this.advancePrompt = this.advancePrompt.bind(this);
  }

  componentWillMount() {

  }

  advancePrompt(element, answer, level) {
    if (answer == true) {
      this.setState({[level]: element.conditions['value-true']})
    }
    else {
      if (element.conditions['value-false']) {
        this.setState({[level]: element.conditions['value-false']});
      }
      else {
        if (level == 'currentElement') {
          this.setState({currentSection: this.state.currentSection + 1});
        }
        else if (level == 'currentChild') {
          this.setState({currentElement: this.state.currentElement + 1});
        }
      }
    }
  }

  displayConversation() {
    return this.state.currentForm.elements.map((section) => {
      if (section.order <= this.state.currentSection) {
        return (
          <div key={section.id} id={`section${section.order}`} className="section-container">
            <div className="col-md-12 col-xs-12 no-padding">
              <div className="section-header">
                <h2>{section.title}</h2>
                <p className="small-text text-light">{section.subtitle}</p>
                <hr/>
              </div>
            </div>
            {section.elements.map((element) => {
              if (element.order <= parseInt(this.state.currentElement) || element.value) {
                if (element.category == 'toggle') {
                  return (
                    <div key={`element-${element.order}`}>
                      <div className="col-md-12 col-xs-12 no-padding">
                        <div className="system-response-box response">
                          <p className="small-text">{element.title}</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-xs-12 no-padding">
                        <div className="col-md-12 col-xs-12 no-padding system-toggle">
                          <button className="col-md-12 col-xs-12 no-padding system-toggle-button" onClick={() => {this.advancePrompt(element, true, 'currentElement')}}>{element.metadata["value-true"]}</button>
                          <button className="col-md-12 col-xs-12 no-padding system-toggle-button" onClick={() => {this.advancePrompt(element, false, 'currentElement')}}>{element.metadata["value-false"]}</button>
                        </div>
                      </div>
                    </div>
                  )
                }
                else if (element.category == 'section') {
                  if (element.title || element.subtitle) {
                    return (
                      <div className="col-md-12 col-xs-12 no-padding">
                        <div className="section-header">
                          <h2>{section.title}</h2>
                          <p className="small-text text-light">{section.subtitle}</p>
                          <hr/>
                        </div>
                      </div>
                    )
                  }
                  else {
                    return element.elements.map((child) => {
                      if (child.order <= parseInt(this.state.currentChild) || child.value) {
                        if (child.category == 'toggle') {
                          return (
                            <div key={`element-${child.order}`}>
                              <div className="col-md-12 col-xs-12 no-padding">
                                <div className="system-response-box response">
                                  <p className="small-text">{child.title}</p>
                                </div>
                              </div>
                              <div className="col-md-12 col-xs-12 no-padding">
                                <div className="col-md-12 col-xs-12 no-padding system-toggle">
                                  <button className="col-md-12 col-xs-12 no-padding system-toggle-button" onClick={() => {this.advancePrompt(child, true, 'currentChild')}}>{child.metadata["value-true"]}</button>
                                  <button className="col-md-12 col-xs-12 no-padding system-toggle-button" onClick={() => {this.advancePrompt(child, false, 'currentChild')}}>{child.metadata["value-false"]}</button>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        else if (child.category == 'text') {
                          return (
                            <div key={`child-${child.order}`} className="col-md-12 col-xs-12 no-padding">
                              <div className="system-response-box">
                                <p className="small-text">{child.title}</p>
                              </div>
                            </div>
                          )
                        }
                      }
                    })
                  }
                }
              }
            })
            }
          </div>
        )
      }
    })
  }

  render() {
    return (
      <div>
        <div className="conversation-container">
          {this.displayConversation()}
        </div>
        {this.state.input &&
          <div className="message-footer">
            <div className="no-padding" style={{height: '35px', width: '98vw'}}>
              <div className="button-inside">
                <input className="col-md-12 col-xs-12 user-text-field" placeholder="Response..." />
                <button className="user-text-field-button"><i className="fa fa-lg fa-arrow-circle-up" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        }
      </div>
    )


    // return (
    //   <div>
    //     <div className="conversation-container">
    //       <div className="section-container">
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="section-header">
    //             <h2>2. Protection</h2>
    //             <p className="small-text text-light">Prior to accessing the roof employees perform a work area inspection to determine roof pitch, overhead power, adequate lighting, weather conditions, safe access, pedestrian exposures and to strategize placement of materials and establish a clear path of travel</p>
    //             <hr/>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="system-response-box response">
    //             <p className="small-text">Would you like to add a person?</p>
    //           </div>
    //         </div>
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="col-md-12 col-xs-12 no-padding system-toggle">
    //             <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Yes</button>
    //             <button className="col-md-12 col-xs-12 no-padding system-toggle-button">No</button>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding user-response">
    //           <div className="user-response-box" style={{textAlign: 'center'}}>
    //             <p className="small-text">Yes</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="system-response-box response">
    //             <p className="small-text">Is the person safe?</p>
    //           </div>
    //         </div>
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="col-md-12 col-xs-12 no-padding system-toggle">
    //             <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Safe</button>
    //             <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Not Safe</button>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding user-response">
    //           <div className="user-response-box">
    //             <p className="small-text">Not Safe</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="system-response-box">
    //             <p className="small-text">What is their name?</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding user-response">
    //           <div className="user-response-box">
    //             <p className="small-text">John Smith</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="system-response-box">
    //             <p className="small-text">Do you have any additional notes?</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding user-response">
    //           <div className="user-response-box">
    //             <p className="small-text">John Smith did not cooperate.</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="system-response-box response">
    //             <p className="small-text">Would you like to add another person?</p>
    //           </div>
    //         </div>
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="col-md-12 col-xs-12 no-padding system-toggle">
    //             <button className="col-md-12 col-xs-12 no-padding system-toggle-button">Yes</button>
    //             <button className="col-md-12 col-xs-12 no-padding system-toggle-button">No</button>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding user-response">
    //           <div className="user-response-box" style={{textAlign: 'center'}}>
    //             <p className="small-text">No</p>
    //           </div>
    //         </div>
    //
    //         <div className="col-md-12 col-xs-12 no-padding">
    //           <div className="system-response-box">
    //             <h3><b>You added 3 Responses</b></h3>
    //           </div>
    //         </div>
    //
    //         <div className="carousel">
    //           <div className="carousel-item">
    //             <div className="col-md-12 col-xs-12 no-padding">
    //               <div className="col-md-12 col-xs-12 no-padding" style={{marginTop: '10px'}}>
    //                 <h5 style={{textAlign: 'left', marginLeft: '10px'}}>Observation Response</h5>
    //                 <hr style={{margin: '0px 7px 10px 7px'}}/>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Name</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>John Smith</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Safe?</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>Safe</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Notes</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right', whiteSpace: 'normal', lineHeight: '1'}}>John Smith did not cooperate</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <hr style={{margin: '15px 7px 0px 7px'}}/>
    //               </div>
    //               <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
    //                 <div style={{color: '#0076FF'}}>Edit</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
    //                 <div style={{color: '#B00000'}}>Delete</div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="carousel-item">
    //             <div className="col-md-12 col-xs-12 no-padding">
    //               <div className="col-md-12 col-xs-12 no-padding" style={{marginTop: '10px'}}>
    //                 <h5 style={{textAlign: 'left', marginLeft: '10px'}}>Observation Response</h5>
    //                 <hr style={{margin: '0px 7px 10px 7px'}}/>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Name</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>John Smith</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Safe?</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>Safe</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Notes</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right', whiteSpace: 'normal', lineHeight: '1'}}>John Smith did not cooperate</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <hr style={{margin: '15px 7px 0px 7px'}}/>
    //               </div>
    //               <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
    //                 <div style={{color: '#0076FF'}}>Edit</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
    //                 <div style={{color: '#B00000'}}>Delete</div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="carousel-item">
    //             <div className="col-md-12 col-xs-12 no-padding">
    //               <div className="col-md-12 col-xs-12 no-padding" style={{marginTop: '10px'}}>
    //                 <h5 style={{textAlign: 'left', marginLeft: '10px'}}>Observation Response</h5>
    //                 <hr style={{margin: '0px 7px 10px 7px'}}/>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Name</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>John Smith</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Safe?</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right'}}>Safe</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <div className="col-md-6 col-xs-6" style={{textAlign: 'left'}}>Notes</div>
    //                 <div className="col-md-6 col-xs-6 text-light" style={{textAlign: 'right', whiteSpace: 'normal', lineHeight: '1'}}>John Smith did not cooperate</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12 no-padding">
    //                 <hr style={{margin: '15px 7px 0px 7px'}}/>
    //               </div>
    //               <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
    //                 <div style={{color: '#0076FF'}}>Edit</div>
    //               </div>
    //               <div className="col-md-12 col-xs-12" style={{textAlign: 'right'}}>
    //                 <div style={{color: '#B00000'}}>Delete</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="message-footer">
    //       <div className="no-padding" style={{height: '35px', width: '98vw'}}>
    //         <div className="button-inside">
    //           <input className="col-md-12 col-xs-12 user-text-field" placeholder="Response..." />
    //           <button className="user-text-field-button"><i className="fa fa-lg fa-arrow-circle-up" aria-hidden="true"></i></button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}


export default connect(null, { })(Conversation);
