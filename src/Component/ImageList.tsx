import React from 'react'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'
import { useHomeStyle } from '../pages/Home/theme'
import mediumZoom from 'medium-zoom'

interface ImageListPropsType {
  images: string[]
  classes: ReturnType<typeof useHomeStyle>
  handleRemoveImages?: (url: string) => void
}

export const ImageList: React.FC<ImageListPropsType> = ({
  images,
  classes,
  handleRemoveImages,
}) => {

  if (!images) {
    return null
  }

  return (
    <div className={classes.imagesList}>
      {images.map((url, index) => (
        <div className={classes.imagesListItem} key={`${url}_${index}`}>
          <img key={`${url}${index}`} src={url} />
          {handleRemoveImages && (
            <IconButton
              className={classes.imagesListItemRemove}
              color="primary"
              onClick={() => handleRemoveImages(url)}>
              <ClearIcon />
            </IconButton>
          )}
        </div>
      ))}
    </div>
  )
}
