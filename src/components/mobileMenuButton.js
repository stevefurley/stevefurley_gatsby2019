import React from "react"
class MobileMenuButton extends React.Component {
  //   menuClick(e) {
  //     const menuClass = this.state.menuClass === "" ? "active" : ""
  //     this.setState({ menuClass })
  //   }
  updateParent() {
    this.props.indextoggle()
  }
  render() {
    /* the passes the open close menu all the wau back up to index */
    return (
      <div onClick={this.updateParent.bind(this)}>open close menu button</div>
    )
  }
}

export default MobileMenuButton
