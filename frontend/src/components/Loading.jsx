import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = ({loading}) => {
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    )
}

export default Loading