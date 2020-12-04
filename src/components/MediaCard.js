import React from 'react'
    const MediaCard = ({title,body,imageUrl}) => {
        return(<div style = {{border:'2px solid purple'}}>
            <h1>{title}</h1>
            <p>{body}</p>
            <img width = "500px" src = {imageUrl} />
        </div>
        )
        
    }

export default MediaCard;
