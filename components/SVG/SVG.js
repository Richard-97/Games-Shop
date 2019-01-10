import React from 'react';

const SVG = ({className, alt, src}) => {
    return(
        <img className={className} alt={alt} src={src} />
    );
}

export default SVG;