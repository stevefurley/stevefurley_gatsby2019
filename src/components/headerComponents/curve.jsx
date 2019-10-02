import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class Curve extends Component {
  render() {
    const json = this.props.frontmatter
    const shape1 =
      "M8828,2466.49219 C8912.54921,2461.70208 8984.50234,2452.15 9043.85938,2437.83594 C9132.89493,2416.36485 9160.16945,2505.1614 9277.15625,2474.76172 C9298.48546,2469.81134 9325.43338,2476.89077 9358,2496 L9358,2534.3477 L9358,2662 L8828,2662 L8828,2466.49219 Z;"
    const shape2 =
      "M8828,2600.24984 C8964.49452,2578.03276 9062.4203,2559.76718 9121.77734,2545.45312 C9210.8129,2523.98204 9123.50539,2670.40749 9240.49219,2640.00781 C9261.8214,2635.05744 9300.99067,2635.05744 9358,2640.00781 L9358,2534.3477 L9358,2662 L8828,2662 L8828,2600.24984 Z;"
    const shape3 =
      "M8828,2600.24984 C8977.84896,2543.56943 9081.57161,2536.48615 9139.16797,2579 C9225.5625,2642.77077 9010.04055,2642.77077 9127.02734,2612.37109 C9148.35656,2607.42072 9225.34744,2616.63296 9358,2640.00781 L9358,2534.3477 L9358,2662 L8828,2662 L8828,2600.24984 Z;"
    const shape4 =
      "M8828,2600.24984 C8919.08282,2625.31234 8994.30275,2630.68655 9053.65979,2616.37249 C9142.69535,2594.90141 9160.55702,2536.47275 9277.54381,2506.07308 C9298.87303,2501.1227 9325.69176,2497.76501 9358,2496 L9358,2534.3477 L9358,2662 L8828,2662 L8828,2600.24984 Z;"

    //console.log(json)
    return (
      <CurveWrapper className="curve">
        <svg width="530px" height="166px" viewBox="0 0 530 166">
          <path
            d={shape4}
            fill="#2183b2"
            transform="translate(-8828.000000, -2496.000000)"
          >
            <animate
              dur="5s"
              repeatCount="1"
              attributeName="d"
              begin="1s"
              //Value 1 is the same as above
              //value 2 is the new one
              // value 3 is the same as above
              // 4 shapes means 3 below
              values={shape4 + shape2 + shape3 + shape4}
              fill="freeze"
              //   calcMode="spline"
              //   keySplines="0.2 0 0.2 0; 0.2 0 0.2 0; 0.2 0 0.2 0"
            />
            {/* <animate
              attributeName="fill"
              dur="5s"
              begin="1.5s"
              repeatCount="1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
              calcMode="spline"
              values="
              #eaecf1;
                    #ff4447;
                     #21b2a6;
                     #eaecf1;"
            /> */}
          </path>
        </svg>
      </CurveWrapper>
    )
  }
}

export default Curve

const CurveWrapper = styled.div`
  background: transparent;
  width: 100%;
  opacity: 1;
  left: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  svg {
    width: 100%;
    display: block;
    height: auto;
  }
`
