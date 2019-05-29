import { createGlobalStyle } from "styled-components"

const Colors = {
  red: "#89d8bc",
  lightred: "#fb6566",
}
// //option 1 lightblue
// $red: #89d8bc;
// $darkblue: #273773;

// // //option2 pink
// $red: #eb2088;
// $darkblue: #080a51;

// // //option3 yellow
// $red: #fbcc00;
// $darkblue: #4484cb;

// const Colors = {
//   red: "#ff4547",
//   lightred: "#fb6566",
// }

const GlobalStyle = createGlobalStyle`
  //* this used as global but can't be pull into components styling *//
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
.relative {
  position: relative;
}
@import url("https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,900");

body {
  font-family: "Titillium Web", sans-serif;
  color: #333;
  padding: 0;
  margin: 0;
}

.wrapper {
  max-width: calc(100% - 30px);
  margin: auto;
  @media only screen and (min-width: 1140px) {
    max-width: calc(100% - 180px);
  }
}

.no-padding {
  padding: 0;
}

p {
    margin: 0 0 20px;
    font-weight: normal;
}


.fluid-img {
  max-width: 100%;
  height: auto;
}

.text-center {
  text-align: center;
}

.redbutton {
  font-weight: bold;
  font-size: 30px;
  width: 280px;
  height: 61px;
  color: #fff;
  text-align: center;
  border: 4px solid ${Colors.red};
  text-decoration: none;
  line-height: 46px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: 300ms border ease;
  span {
    position: relative;
    z-index: 2;
    color: ${Colors.red};
    transition: color 300ms ease;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: ${Colors.red};
    transform: translate(-100%, 0);
    transition: transform 300ms ease;
  }
  &:hover {
    transition: 300ms border ease;
    border: 4px solid #fff;
    span {
      color: #fff;
      transition: color 300ms ease;
    }
    &:after {
      transition: transform 300ms ease;
      transform: translate(100%, 0);
    }
  }
}

body,
a,
p {
  font-family: "Titillium Web", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Titillium Web", sans-serif;
  //margin: 0;
}
h1,
.fs-1 {
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 0.5em;
}
h2,
.fs-2 {
   font-size: 26px;
  line-height: 32px;
  margin-bottom: 0.2em;
}
h3,
.fs-3 {
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 0.2em;
}
h4,
.fs-4 {
  font-size: 18px;
  line-height: 24px;
    margin-bottom: 0.1em;
}
h5,
.fs-5 {
  font-size: 16px;
  line-height: 22px;
    margin-bottom: 0.1em;
}
h6,
.fs-6 {
   font-size: 14px;
  line-height: 20px;
    margin-bottom: 0.1em;
}


b,
strong,
.strong {
  font-weight: 700;
}

.flex-column {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex {
  display: flex;
}
.flex-grow-1 {
flex-grow: 1;
}



`
export default GlobalStyle
