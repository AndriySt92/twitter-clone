import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export const Preloader = () => {
  return (
    <div style={{ margin: '50px', display: 'block', textAlign: 'center' }}>
      <CircularProgress />
    </div>
  )
}

export default Preloader
