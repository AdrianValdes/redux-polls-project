import React from 'react';

import { connect } from 'react-redux';

function Leaderboard({ users }) {
  return (
    <ul>
      {users.map(({ avatarURL, name, polls, answers, id }) => (
        <li className="user" key={id}>
          <img src={avatarURL} alt={`Avatar for ${name}`} />

          <div>
            <h1>{name}</h1>
            <p>{polls} Polls</p>
            <p>{answers} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, polls, answers } = users[id];
        return {
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length,
        };
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers),
  };
}

export default connect(mapStateToProps)(Leaderboard);
