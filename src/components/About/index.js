// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="image"
              />
              <h1 className="dark-heading">About</h1>
            </div>
          ) : (
            <div className="container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="image"
              />
              <h1 className="light-heading">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
