import React from "react"
import Link from "gatsby-link"

class Navbar extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const menuActive = this.state.showMenu ? "is-active" : ""
    const burgerActive = this.state.showMenu ? "is-active" : ""
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" />
          <div
            className={`navbar-burger burger ${burgerActive}`}
            onClick={this.toggleMenu}
          >
            <span />
            this is a icon thing
            <span />
            <span />
          </div>
        </div>

        <div className={`navbar-menu ${menuActive}`}>
          <div className="navbar-start">
            <Link className="navbar-link" to="/" onClick={this.toggleMenu}>
              Home
            </Link>
            <Link
              className="navbar-link"
              to="/services"
              onClick={this.toggleMenu}
            >
              Services
            </Link>
            <Link
              className="navbar-link"
              to="/contact"
              onClick={this.toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
