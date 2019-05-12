import React from "react"
import styled from "styled-components"
class MobileMenuButton extends React.Component {
  //   menuClick(e) {
  //     const menuClass = this.state.menuClass === "" ? "active" : ""
  //     this.setState({ menuClass })
  //   }
  updateParent() {
    this.props.indextoggle()
  }
  render() {
    /* the passes the open close menu all the way back up to index */
    return (
      <MobileButton
        className="hamburger"
        onClick={this.updateParent.bind(this)}
      >
        <span />
      </MobileButton>
    )
  }
}

const MobileButton = styled.div`
  width: 44px;
  height: 30px;
  cursor: pointer;
  padding: 5px;
  z-index: 10;
  display: inline-block;
  margin-left: 20px;
  position: relative;
  text-align: right;
  span {
    transition-duration: 0s;
    margin: 0 auto;
    position: relative;
    top: 8px;
    width: 32px;
    border-radius: 2px;
    height: 3px;
    background: white;
    display: block;
    &:before {
      transition-property: margin, transform;
      transition-duration: 0.2s;
      position: absolute;
      content: "";
      width: 32px;
      height: 3px;
      background: white;
      left: 0;
      margin-top: -8px;
    }
    &:after {
      transition-property: margin, transform;
      transition-duration: 0.2s;
      position: absolute;
      content: "";
      width: 32px;
      height: 3px;
      background: white;
      left: 0;
      margin-top: 8px;
    }
  }
  &.open {
    span {
      background-color: red;
      &:before {
        margin-top: 0;
        transform: rotate(45deg);
        background-color: lightgrey;
      }
      &:after {
        margin-top: 0;
        transform: rotate(-45deg);
        background-color: lightgrey;
      }
    }
  }
`

export default MobileMenuButton
