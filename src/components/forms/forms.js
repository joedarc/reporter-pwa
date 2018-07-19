import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FormsOuterList from './forms-outer-list';
import FormFiller from './form-filler';

class Forms extends Component {
  render() {
    return (
      <div className="sub-tab-content">
        <Switch>
          <Route exact path='/forms' component={FormsOuterList} />
          <Route path='/forms/:form_id/new' component={FormFiller} />
        </Switch>
      </div>
    )  }
}


export default connect(null, {})(Forms);
