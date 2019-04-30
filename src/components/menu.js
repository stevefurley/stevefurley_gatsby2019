import React from "react"
import Link from "gatsby-link"

class Navbar extends React.Component {
  //state = { showMenu: false }

  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu,
  //   })
  // }

  // showMenu = true

  render() {
    const menuActive =
      this.props.callbackFromMenu == true ? "is-active" : "not-active"

    console.log(menuActive)
    return (
      <nav className="navbar">
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
