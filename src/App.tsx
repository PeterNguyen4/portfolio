import background from './assets/background.webp'
import counter from './assets/counter.webp'

function App() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: 1,
      }}
    >
      <img
        src={counter}
        alt=""
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'clamp(240px, 60vw, 1000px)',
          transform: 'translate(-8%, 25%)',
        }}
      />
    </div>
  )
}

export default App
