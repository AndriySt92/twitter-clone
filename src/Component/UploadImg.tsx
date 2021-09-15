import React, { useEffect, useRef, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import { useHomeStyle } from '../pages/Home/theme'
import { ImagesFileType } from './TweetForm'

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
    </>
  )
}
