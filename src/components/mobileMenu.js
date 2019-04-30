import React from "react"
class MobileMenu extends React.Component {
  //   menuClick(e) {
  //     const menuClass = this.state.menuClass === "" ? "active" : ""
  //     this.setState({ menuClass })
  //   }
  updateParent() {
    this.props.callbackFromParent()
  }
  render() {
    return (
      <div onClick={this.updateParent.bind(this)}>
        im returning this in mobile mneu
      </div>
    )
  }
}
export default MobileMenu
