import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    return <div>Home page</div>
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object.isRequired
}


export default connect(null, {})(Dashboard);
