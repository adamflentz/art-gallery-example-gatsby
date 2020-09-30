import React from "react"
import GalleryPage from "../components/gallery/gallery.js"

export const query = graphql`
  {
    allS3ImageAsset {
      edges {
        node {
          id
          absolutePath
          childImageSharp {
            original {
              height
              width
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
      <GalleryPage images={data}></GalleryPage>
    </div>
  )
}
export default HomePage
