import * as React from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import LoadingBar from 'react-redux-loading';

import AddPoll from './AddPoll';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : <AddPoll />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser === null,
  };
}

const mapDispatchToProps = {
  handleInitialData,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
