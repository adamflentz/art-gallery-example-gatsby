import React from "react"
import Gallery from "react-photo-gallery"
import styles from "./gallery.module.css"

const GalleryPage = props => {
  const photos = props.images.allS3ImageAsset.edges.map((image, index) => {
    if (
      image.node.childImageSharp.original.width /
        image.node.childImageSharp.original.height >
      1
    ) {
      return {
        src: image.node.childImageSharp.original.src,
        width: 4,
        height: 3,
      }
    } else if (
      image.node.childImageSharp.original.width /
        image.node.childImageSharp.original.height <
      1
    ) {
      return {
        src: image.node.childImageSharp.original.src,
        width: 3,
        height: 3,
      }
    } else {
      return {
        src: image.node.childImageSharp.original.src,
        width: 1,
        height: 1,
      }
    }
  })
  return (
    <div className={styles.gallery}>
      <Gallery photos={photos}></Gallery>
    </div>
  )
}

export default GalleryPage
