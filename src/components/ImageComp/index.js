import React from 'react'
import "./index.css"
const ImageComp = (props) => {
    const {urls} = props
    const {thumb} = urls
    // console.log(urls)
  return (
    <div className='imageContainer'>
       <img src={thumb} />
    </div>
  )
}

export default ImageComp
