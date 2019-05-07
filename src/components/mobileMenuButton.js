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
    /* the passes the open close menu all the wau back up to index */
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
  .hamburger {
    width: 34px;
    height: 34px;
    cursor: pointer;
    padding: 9px 5px 5px 5px;
    z-index: 10;
    display: block;
    margin-left: 20px;
    background: green;
    span {
      transition-duration: 0s;
      margin: 0 auto;
      position: relative;
      top: 5px;
      width: 32px;
      border-radius: 2px;
      &:before {
        transition-property: margin, transform;
        transition-duration: 0.2s;
        margin-top: 5px;
        position: absolute;
        content: "";
        width: 32px;
      }
      &:after {
        transition-property: margin, transform;
        transition-duration: 0.2s;
        margin-top: 5px;
        position: absolute;
        content: "";
        width: 32px;
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
  }
`

export default MobileMenuButton
