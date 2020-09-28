import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allS3ImageAsset {
      edges {
        node {
          id
          absolutePath
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  return (
    <div>
      {data.allS3ImageAsset.edges.map(image => (
        <img src={image.node.childImageSharp.original.src}></img>
      ))}
    </div>
  )
}
export default HomePage
