// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="image"
              />
              <h1 className="dark-heading">Home</h1>
            </div>
          ) : (
            <div className="container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="image"
              />
              <h1 className="light-heading">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
