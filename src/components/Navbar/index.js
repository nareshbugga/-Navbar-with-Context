// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggle = () => {
        toggleTheme()
      }
      return (
        <>
          {isDarkTheme ? (
            <div className="nav-container-dark">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <ul className="item-container">
                <li>
                  <Link to="/" className="item-dark">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="item-dark">
                    About
                  </Link>
                </li>
              </ul>
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={onToggle}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="logo"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="nav-container-light">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <ul className="item-container">
                <li>
                  <Link to="/" className="item-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="item-light">
                    About
                  </Link>
                </li>
              </ul>
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={onToggle}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="logo"
                  />
                </button>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
