import background from './assets/background.webp'

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: 1,
      }}
    >
      ...
    </div>
  )
}

export default App
