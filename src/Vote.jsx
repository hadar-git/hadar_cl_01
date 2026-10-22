import { useState } from 'react'
import './Vote.css'

function Vote({ name }) {
  const [votes, setVotes] = useState(0)

  function addVote() {
    setVotes(votes + 1)
  }

  function removeVote() {
    if (votes > 0) {
      setVotes(votes - 1)
    }
  }

  function resetVotes() {
    setVotes(0)
  }

  return (
    <div className={votes >= 5 ? 'vote-card popular' : 'vote-card'}>
      <h2>{name}</h2>
      <p className="votes">קולות: {votes}</p>

      {votes >= 10 && <p className="leader">המועמד מוביל!</p>}

      <div className="buttons">
        <button onClick={addVote}>הצבע</button>
        <button onClick={removeVote} disabled={votes === 0}>
          בטל קול
        </button>
        <button onClick={resetVotes}>איפוס</button>
      </div>
    </div>
  )
}

export default Vote
