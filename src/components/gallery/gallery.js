import React from "react"
import Gallery from "react-photo-gallery"
import styles from "./gallery.module.css"

const GalleryPage = props => {
  const photos = props.images.allS3ImageAsset.edges.map((image, index) => {
    return {
      src: image.node.childImageSharp.original.src,
      width:
        image.node.childImageSharp.original.width /
        image.node.childImageSharp.original.height,
      height: 1,
    }
  })
  return (
    <div className={styles.gallery}>
      <Gallery photos={photos}></Gallery>
    </div>
  )
}

export default GalleryPage
