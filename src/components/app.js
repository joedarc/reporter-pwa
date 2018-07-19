import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard/dashboard.js';
import Forms from './forms/forms.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 2
    }
  }
  render() {
    return (
      <div>
        <nav className="top-navigation nav navbar navbar-default navbar-fixed-top" style={{height: `${this.props.location.pathname.includes('/forms') && this.props.location.pathname.includes('/new') ? '100px' : '50px'}`}}>
          <div className="col-md-12 col-xs-12 text-center">{`${this.props.location.pathname.includes('/forms') && this.props.location.pathname.includes('/new') ? 'CBO' : 'Reseco Forms'}`}</div>
          {this.props.location.pathname.includes('/forms') && this.props.location.pathname.includes('/new') &&
            <div>
              <div>
                <div style={{position: 'absolute', fontSize: '16px', cursor: 'pointer', top: '7px'}}><Link to={"/forms"} className="no-blue" style={{color: '#fff'}}><i className="fa fa-chevron-left"></i> Cancel</Link></div>
                <div style={{position: 'absolute', textAlign: 'right', fontSize: '16px', cursor: 'pointer', right: '10px', top: '6px'}}><Link to={'/'} className="no-blue" style={{color: '#fff'}}><i className="fa fa-lg fa-list-ul"></i></Link></div>
              </div>
              <div>
                <ul className="progressbar">
                  <li className={`pointer complete ${this.state.activeTab == 1 ? 'active' : ''}`} style={{width: '10%'}} value={1} onClick={(e) => {this.setState({activeTab: 1})}}></li>
                  <li className={`pointer ${this.state.activeTab == 2 ? 'active' : ''}`} style={{width: '10%'}} value={2} onClick={(e) => {this.setState({activeTab: 2})}}></li>
                  <li className={`pointer ${this.state.activeTab == 3 ? 'active' : ''}`} style={{width: '10%'}} value={3} onClick={(e) => {this.setState({activeTab: 3})}}></li>
                  <li className={`pointer ${this.state.activeTab == 4 ? 'active' : ''}`} style={{width: '10%'}} value={4} onClick={(e) => {this.setState({activeTab: 4})}}></li>
                  <li className={`pointer ${this.state.activeTab == 5 ? 'active' : ''}`} style={{width: '10%'}} value={5} onClick={(e) => {this.setState({activeTab: 5})}}></li>
                  <li className={`pointer ${this.state.activeTab == 6 ? 'active' : ''}`} style={{width: '10%'}} value={6} onClick={(e) => {this.setState({activeTab: 6})}}></li>
                  <li className={`pointer ${this.state.activeTab == 7 ? 'active' : ''}`} style={{width: '10%'}} value={7} onClick={(e) => {this.setState({activeTab: 7})}}></li>
                  <li className={`pointer ${this.state.activeTab == 8 ? 'active' : ''}`} style={{width: '10%'}} value={8} onClick={(e) => {this.setState({activeTab: 8})}}></li>
                  <li className={`pointer ${this.state.activeTab == 9 ? 'active' : ''}`} style={{width: '10%'}} value={9} onClick={(e) => {this.setState({activeTab: 9})}}></li>
                  <li className={`pointer ${this.state.activeTab == 10 ? 'active' : ''}`} style={{width: '10%'}} value={10} onClick={(e) => {this.setState({activeTab: 10})}}></li>
                </ul>
              </div>
            </div>
          }
        </nav>
        <div className="content" style={{marginTop: `${this.props.location.pathname.includes('/forms') && this.props.location.pathname.includes('/new') ? '100px' : '50px'}`}}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/forms' component={Forms} />
          </Switch>
        </div>
        <div className="footer">
          <div className="col-md-12 col-xs-12">
            <Link to={"/"} className={`footer-nav ${this.props.location.pathname == "/" ? 'footer-active' : ''}`}>
              <div className="col-md-6 col-xs-6">
                <i className="fa fa-lg fa-home"></i>
              </div>
            </Link>
            <Link to={"/forms"} className={`footer-nav ${this.props.location.pathname.includes('/forms') ? 'footer-active' : ''}`}>
              <div className="col-md-6 col-xs-6">
                <i className="fa fa-lg fa-file-text-o"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({}) {
  return { };
}

export default connect(mapStateToProps, { })(App);
