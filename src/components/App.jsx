import '../styles/App.css'
import Header from './Header'
import SearchFood from './SearchFood'
import pancakesImg from '../img/pancakes.jfif'

function App() {

  return (
    <div className='pageWrapper'>
      <Header />
      <SearchFood />
        <div className='welcomeTextImg'>
          <div className='welcomeText'>
            <h1>Welcome!</h1><br />
            <p>Here you find delicious recipies!</p>
          </div>
          <img src={pancakesImg} alt="tacos" />
        </div>
    </div>
  )
}

export default App
