import * as React from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import LoadingBar from 'react-redux-loading';

import Poll from './Poll';
import Nav from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Dashboard from './Dashboard';
import AddPoll from './AddPoll';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/polls/:id" component={Poll} />
                <Route path="/add" component={AddPoll} />
              </div>
            )}
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authenticatedUser === null,
  };
}

const mapDispatchToProps = {
  handleInitialData,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
