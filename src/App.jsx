import Header from "./Header.jsx"
import Newsfeed from "./Newsfeed.jsx"
import Stats from "./Stats.jsx"
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        {/* Header */}
        <div className="app__header">
          <Header />
        </div>
        <div className="app__body">
          <div className="app__container">
            <Newsfeed />
            {/* Stats */}
            <Stats />
          </div>
        </div>
        { /* Body*/}
      </div>

    </>
  )
}

export default App
