import * as React from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/polls';

class AddPoll extends React.Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    history.push('/');
    dispatch(handleAddPoll(this.state));
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === '' || a === '' || b === '' || c === '' || d === '';
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name="question"
          className="input"
          type="text"
        />

        <h3>What are the options?</h3>

        <label className="label" htmlFor="a">
          A.
        </label>
        <input
          value={a}
          onChange={this.handleInputChange}
          name="a"
          className="input"
          type="text"
        />

        <label className="label" htmlFor="input">
          B.
        </label>
        <input
          value={b}
          onChange={this.handleInputChange}
          name="b"
          className="input"
          type="text"
        />

        <label className="label" htmlFor="input">
          C.
        </label>
        <input
          value={c}
          onChange={this.handleInputChange}
          name="c"
          className="input"
          type="text"
        />

        <label className="label" htmlFor="input">
          D.
        </label>
        <input
          value={d}
          onChange={this.handleInputChange}
          name="d"
          className="input"
          type="text"
        />

        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
