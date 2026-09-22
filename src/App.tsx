import background from './assets/background.webp'
import counter from './assets/counter.webp'

function App() {
  return (
    <div
      style={{
        position: 'relative',
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
          bottom: '-20vh',
          left: '-8vw',
          width: '60%',
          transform: 'rotate(-0.4deg)',
        }}
      />
    </div>
  )
}

export default App
