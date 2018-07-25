import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { } from '../../actions/index';
import Form from '!json-loader!../../../assets/json/script.json';

class ScriptFiller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: [],
      inputToggle: false,
      input: '',
      currentElement: {}
    }

    this.createInitialInstance = this.createInitialInstance.bind(this);
    this.createNewSection = this.createNewSection.bind(this);
    this.advancePrompt = this.advancePrompt.bind(this);
  }

  componentWillMount() {
    var instance = this.createInitialInstance();
    this.setState({currentForm: instance});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentForm.length == this.state.currentForm.length) {
      let elmnt = document.getElementById("last-element");
      elmnt.lastChild.scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  createInitialInstance() {
    var formInstance = [];
    var doneWithSection = false;
    var firstPrompt = false;
    Form.data.elements.map((element) => {
      if (_.isEmpty(element.attributes.paths) && !doneWithSection) {
        formInstance.push(element);
      }
      else if (!doneWithSection && !firstPrompt) {
        firstPrompt = true;
        if (element.attributes.category == 'text') {
          this.setState({inputToggle: true, currentElement: element});
        }
        else {
          this.setState({inputToggle: false, currentElement: {}})
        }
        formInstance.push(element);
      }
      else {
        doneWithSection = true;
      }
    })
    return formInstance;
  }

  createNewSection(instance, position) {
    var doneWithSection = false;
    var firstPrompt = false;
    Form.data.elements.map((element, index) => {
      if (index > position) {
        if (_.isEmpty(element.attributes.paths) && !doneWithSection) {
          instance.push(element);
        }
        else if (!doneWithSection && !firstPrompt) {
          firstPrompt = true;
          if (element.attributes.category == 'text') {
            this.setState({inputToggle: true, currentElement: element});
          }
          else {
            this.setState({inputToggle: false, currentElement: {}})
          }
          instance.push(element);
        }
        else {
          doneWithSection = true;
        }
      }
    })
    return instance;
  }

  advancePrompt(index, answer, path) {
    let instance = this.state.currentForm;
    instance[index].value = answer;
    var next_element = _.find(Form.data.elements, function(e) {return e.id == path});
    var inputToggle = this.state.inputToggle;
    var currentElement = this.state.currentElement;
    if (next_element) {
      if (!_.isEmpty(next_element.attributes.paths)) {
        if (next_element.attributes.category == 'text') {
          inputToggle = true;
          currentElement = next_element;
        }
        else {
          inputToggle = false;
          currentElement = {};
        }
        instance.push(next_element);
      }
      else {
        if (next_element.attributes.category == 'text') {
          inputToggle = true;
        }
        else {
          inputToggle = false;
        }
        instance.push(next_element);
        var elementPos = Form.data.elements.map(function(x) {return x.id; }).indexOf(next_element.id);
        instance = this.createNewSection(instance, elementPos);
      }
    }
    else {

    }
    this.setState({currentForm: instance, inputToggle: inputToggle, currentElement: currentElement, input: ''});
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  displayConversation() {
    return this.state.currentForm.map((element, index) => {
      switch(element.attributes.category){
        case 'header':
          return (
            <div key={`element-${element.id}-${index}`} className="col-md-12 col-xs-12 no-padding" id={`${this.state.currentForm.length - 1 == index ? 'last-element' : ''}`}>
              <div>
                <h2>{element.attributes.label}</h2>
              </div>
            </div>
          )
        case 'instruction':
          return (
            <div key={`element-${element.id}-${index}`} className="col-md-12 col-xs-12 no-padding" id={`${this.state.currentForm.length - 1 == index ? 'last-element' : ''}`}>
              <div className="section-header">
                <p className="small-text text-light">{element.attributes.label}</p>
                <hr/>
              </div>
            </div>
          )
        case 'toggle':
          return (
            <div key={`element-${element.id}-${index}`} id={`${this.state.currentForm.length - 1 == index ? 'last-element' : ''}`}>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="system-response-box response">
                  <p className="small-text">{element.attributes.label}</p>
                </div>
              </div>
              <div className="col-md-12 col-xs-12 no-padding">
                <div className="col-md-12 col-xs-12 no-padding system-toggle">
                  <button className="col-md-12 col-xs-12 no-padding system-toggle-button" onClick={() => {this.advancePrompt(index, element.attributes.metadata["value-true"], element.attributes.paths["value-true"])}}>{element.attributes.metadata["value-true"]}</button>
                  <button className="col-md-12 col-xs-12 no-padding system-toggle-button" onClick={() => {this.advancePrompt(index, element.attributes.metadata["value-false"], element.attributes.paths["value-false"])}}>{element.attributes.metadata["value-false"]}</button>
                </div>
              </div>
              {element.value &&
                <div className="col-md-12 col-xs-12 no-padding user-response">
                  <div className="user-response-box" style={{textAlign: 'center'}}>
                    <p className="small-text">{element.value}</p>
                  </div>
                </div>
              }
            </div>
          )
        case 'text':
          return (
            <div key={`element-${element.id}-${index}`} className="col-md-12 col-xs-12 no-padding" id={`${this.state.currentForm.length - 1 == index ? 'last-element' : ''}`}>
              <div className="system-response-box">
                <p className="small-text">{element.attributes.label}</p>
              </div>
              {element.value &&
                <div className="col-md-12 col-xs-12 no-padding user-response">
                  <div className="user-response-box" style={{textAlign: 'center'}}>
                    <p className="small-text">{element.value}</p>
                  </div>
                </div>
              }
            </div>
          )
        default:
          return (
            <div key={`element-${element.id}-${index}`} className="col-md-12 col-xs-12 no-padding" id={`${this.state.currentForm.length - 1 == index ? 'last-element' : ''}`}>
              <div>
                <div>{element.attributes.label}</div>
              </div>
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
        {this.state.inputToggle &&
          <div className="message-footer">
            <div className="no-padding" style={{height: '35px', width: '98vw'}}>
              <div className="button-inside">
                <input className="col-md-12 col-xs-12 user-text-field" placeholder="Response..." name="input" value={this.state.input} onChange={(e) => {this.onChange(e)}} />
                {this.state.input &&
                  <button className="user-text-field-button" onClick={() => {this.advancePrompt(this.state.currentForm.map(function(e) {return e.id}).indexOf(this.state.currentElement.id), this.state.input, this.state.currentElement.attributes.paths.input)}}><i className="fa fa-lg fa-arrow-circle-up" aria-hidden="true"></i></button>
                }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}


export default connect(null, { })(ScriptFiller);
