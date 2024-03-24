import '../styles/App.css'
import Header from './Header'
import SearchFood from './SearchFood'
import pancakesImg from '../img/pancakes.jfif'
import Footer from './Footer'

function App() {

  return (
    <>
    <div className='pageWrapper'>
      <Header />
      <SearchFood />
        <div className='welcomeTextImg'>
          <div className='welcomeText'>
            <h1>Welcome!</h1><br />
            <p>Here you find delicious recipies!</p><br />
            <p>From a food lover, <br />
             to all other food lovers!</p><br />
             <p>Eat, Sleep, <span style={{color: "rgba(218,102,123,1)"}}><b>Repeat!</b></span></p>
          </div>
          <img src={pancakesImg} alt="tacos" />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default App
