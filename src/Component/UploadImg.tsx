import React, { useEffect, useRef, useState, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import ClearIcon from '@material-ui/icons/Clear'
import { useHomeStyle } from '../pages/Home/theme'
import { ImagesFileType } from './TweetForm'
import { Callback } from 'yup/lib/types'

interface UploadImgProps {
  classes: ReturnType<typeof useHomeStyle>
  images: ImagesFileType[],
  onChangeImages: (callback: (prev: ImagesFileType[]) => ImagesFileType[]) => void
}

export const UploadImg: React.FC<UploadImgProps> = ({ classes, images, onChangeImages }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handlerClickImg = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleChangeFileInput = useCallback((event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]

      if (file) {
        const imageUrl = URL.createObjectURL(new Blob([file]))
        onChangeImages((prev) => [...prev, { image: file, url: imageUrl }])
      }
    }
  }, [])
  const handleRemoveImages = (url: string) => {
    // setImages(images.filter((image) => image.url !== url))
    onChangeImages((prev) => prev.filter(image => image.url !== url ))
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChangeFileInput)
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('change', handleChangeFileInput)
      }
    }
  })

  return (
    <>
      <IconButton onClick={handlerClickImg} className={classes.tweetFormFooterIcon}>
        <ImageOutlinedIcon />
      </IconButton>
      <input ref={inputRef} type="file" hidden />
      <div className={classes.imagesList}>
        {images.map((image, index) => (
          <div>
            <img key={`${image.url}${index}`} src={image.url} />
            <IconButton
              className={classes.imagesListItemRemove}
              color="primary"
              onClick={() => handleRemoveImages(image.url)}>
              <ClearIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </>
  )
}
