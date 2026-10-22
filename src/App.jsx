import Vote from './Vote.jsx'
import './App.css'

function App() {
  const candidates = ['דני', 'רותי', 'יוסי']

  return (
    <div className="app">
      <h1>בחירות</h1>
      <div className="candidates">
        {candidates.map((candidate) => (
          <Vote key={candidate} name={candidate} />
        ))}
      </div>
    </div>
  )
}

export default App
