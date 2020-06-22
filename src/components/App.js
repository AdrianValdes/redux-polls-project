import * as React from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return <div>Redux Polls</div>;
  }
}

const mapDispatchToProps = {
  handleInitialData,
};
export default connect(null, mapDispatchToProps)(App);
