import React from 'react';
import { connect } from 'react-redux';
import { getPercentage } from '../utils/helpers';
import { handleAddAnswer } from '../actions/answers';

const getVotesKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

function Poll({
  poll,
  vote,
  authenticatedUser,
  authorAvatar, handleAddAnswer
}) {

  let answered;
  const handleAnswer = (answer) => {
   

     answered = true;
   
      handleAddAnswer({
        authenticatedUser,
        answer,
        id: poll.id,
      })
    
  };

  
    if (poll === null) {
      return <p>This poll does not exist</p>;
    }

   
    const totalVotes = getVotesKeys().reduce(
      (total, key) => total + poll[key].length,
      0
    );

    return (
      <div className="poll-container">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          By <img src={authorAvatar} alt="Author's avatar" />
        </div>
        <ul>
          {['aText', 'bText', 'cText', 'dText'].map((key) => {
            const count = poll[key[0] + 'Votes'].length;

            return (
              <li
                key={key}
                onClick={() => {
                  if (vote === null && !answered) {
                    handleAnswer(key[0]);
                  }
                }}
                className={`option ${vote === key[0] ? 'chosen' : ''}`}
              >
                {vote === null ? (
                  poll[key]
                ) : (
                  <div className="result">
                    <span>{poll[key]}</span>
                    <span>
                      {getPercentage(count, totalVotes)}% ({count})
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  
}

function mapStateToProps({ authenticatedUser, polls, users }, { match }) {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null,
    };
  }

  const vote = getVotesKeys().reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }

    return poll[key].includes(authenticatedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authenticatedUser,
    authorAvatar: users[poll.author].avatarURL,
  };
}

const mapDispatchToProps = {
  handleAddAnswer: handleAddAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
