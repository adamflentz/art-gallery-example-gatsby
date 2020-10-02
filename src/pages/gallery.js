import React from "react"
import GalleryPage from "../components/gallery/gallery.js"
import Header from "../components/header/header.js"
import Palette from "../components/palette/palette.js"
import "fontsource-roboto/100.css"

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

const ArtGallery = ({ data }) => {
  return (
    <Palette>
      <Header>
        <GalleryPage images={data}></GalleryPage>
      </Header>
    </Palette>
  )
}
export default ArtGallery
