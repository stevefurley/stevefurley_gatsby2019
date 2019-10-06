import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "header-menu" } }
        ) {
          edges {
            node {
              slug
              name
              items {
                title
                url
                object_id
                object_slug
                wordpress_children {
                  title
                  url
                  object_id
                  classes
                  wordpress_parent
                  xfn
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <NavWrapper className="nav-wrapper">
          <nav className="main-menu">
            <ul>
              {data &&
                data.allWordpressWpApiMenusMenusItems &&
                data.allWordpressWpApiMenusMenusItems.edges &&
                data.allWordpressWpApiMenusMenusItems.edges[0] &&
                data.allWordpressWpApiMenusMenusItems.edges[0].node &&
                data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
                data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                  prop => {
                    return (
                      <li className="nav-item" key={prop.object_id}>
                        <a
                          className="nav-link "
                          href={prop.url.replace(
                            "https://stevefurley.co.uk/wordpress_site/",
                            "/"
                          )}
                          alt={prop.title}
                        >
                          {prop.title}
                        </a>

                        {prop &&
                          prop.wordpress_children &&
                          prop.wordpress_children.map((child, i) => (
                            // console.log("child ", child.wordpress_parent)
                            // console.log("parent ", prop.object_id)
                            <ul key={child.object_id}>
                              >
                              {child.classes !== "sub-menu-item" ? (
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href={child.url.replace(
                                      "https://stevefurley.co.uk/wordpress_site/",
                                      "/"
                                    )}
                                    alt={child.title}
                                  >
                                    {child.title}
                                  </a>
                                </li>
                              ) : null}
                            </ul>
                          ))}
                      </li>
                    )
                  }
                )}
            </ul>
          </nav>
        </NavWrapper>
      )
    }}
  />
)

const NavWrapper = styled.div`
      .main-menu {
        display: inline-block;
        padding: 0;
        margin: 0;
        text-align: left;
        display: flex;
        ul {
            display: flex;
        }
        li {
          display: block;
          text-align: right;
          a {
            display: inline-block;
            clear: both;
            text-decoration: none;
            font-size: 18px;
            line-height: 42px;
            color: #9F9F9F;
            text-transform: uppercase;
            font-weight: 700;
            text-decoration: none;
            transition: color 0.3s ease;
            position: relative;
            padding: 0 10px;
            @media screen and (min-width: 1600px) {
              font-size: 1.8vw;
              line-height: 2.6vw;
            }
            @media screen and (min-width: 1921px) {
              font-size: 2vw;
              line-height: 2.6vw;
            }
            &:after {
              content: "";
              display: block;
              height: 4px;
              width: 100%;
              background: #ff4447;
              transform: scaleX(0);
              transition: transform 300ms ease;
              transform-origin: right;
            }
            &.active {
              color: #ff4447;
              transition: color 300ms ease;
            }
            &:hover {
              color: #2b343e;
              transition: color 300ms ease;
            }
          }

          ul {
              display: none;
          }
        }
      }
    }
  }
`
