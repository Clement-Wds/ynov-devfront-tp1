import React from 'react';
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="/public/assets/images/clement-wds-white.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}