// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <div>
            <Navbar />
            {isDarkTheme ? (
              <div className="not-found-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="heading">Lost Your Way?</h1>
                <p className="heading">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            ) : (
              <div className="not-found-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image"
                />
                <h1>Lost Your Way?</h1>
                <p>We cannot seem to find the page you are looking for.</p>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
