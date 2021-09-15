import React, { useEffect, useRef, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CloseIcon from '@material-ui/icons/Close'
import { useHomeStyle } from '../pages/Home/theme'
import { ImagesFileType } from './TweetForm'

interface UploadImgProps {
  classes: ReturnType<typeof useHomeStyle>
  image: ImagesFileType | null
  onChangeImages: (img: ImagesFileType | null) => void
}

export const UploadImgAvatar: React.FC<UploadImgProps> = ({ classes, onChangeImages, image }) => {
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
        onChangeImages({ image: file, url: imageUrl })
        console.log()
      }
    }
  }, [])
  const handleRemoveImages = () => {
    onChangeImages(null)
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
      <div className={classes.imagesUploadButton}>
        <IconButton onClick={handlerClickImg}>
          <PhotoCameraIcon />
        </IconButton>
        {image && (
          <IconButton onClick={handleRemoveImages}>
            <CloseIcon />
          </IconButton>
        )}
        <input ref={inputRef} type="file" hidden />
      </div>
    </>
  )
}
