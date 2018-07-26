import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class FormsOuterList extends Component {
  render() {
    return (
      <div style={{marginTop: `${this.props.location.pathname.includes('/forms') && this.props.location.pathname.includes('/new') ? '110px' : '60px'}`}}>
          {[0, 1, 2, 3].map((form) => {
            return (
              <div key={`outer-form-${form}`} className="col-md-6 col-xs-6" style={{marginBottom: '15px'}}>
                <Link to={`/forms/${form}/new_conversation`} className="no-blue">
                  <div className="form-card">
                    <h5>Critical Behavior Observation</h5>
                    {[0, 1, 2].map((i) => {
                      return (
                        <div key={`form-${i}`}>_________</div>
                      )
                    })}
                    <div style={{marginTop: '5px', fontSize: '14px'}}>Completed: 3/5</div>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }
}


export default connect(null, {})(FormsOuterList);
