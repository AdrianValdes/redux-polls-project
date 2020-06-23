import * as React from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import LoadingBar from 'react-redux-loading';

import Poll from './Poll';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Poll match={{ params: { id: 'loxhs1bqm25b708cmbf3g' } }} />
        )}
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
