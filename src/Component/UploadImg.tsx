import React, { useEffect, useRef, useState, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import ClearIcon from '@material-ui/icons/Clear'
import { useHomeStyle } from '../pages/Home/theme'
import { ImagesFileType } from './TweetForm'
import { ImageList } from './ImageList'

interface UploadImgProps {
  classes: ReturnType<typeof useHomeStyle>
  images: ImagesFileType[]
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
    onChangeImages((prev) => prev.filter((image) => image.url !== url))
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
      <ImageList
        classes={classes}
        handleRemoveImages={handleRemoveImages}
        images={images.map((img) => img.url)}
      />
      <IconButton onClick={handlerClickImg} className={classes.tweetFormFooterIcon}>
        <ImageOutlinedIcon />
      </IconButton>
      <input ref={inputRef} type="file" hidden />
    </>
  )
}
