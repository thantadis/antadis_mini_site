import React, {useState} from "react";
import "./Thumbnail.css";
const Thumbnail = ({images,prices}) => {
    const [largeImage,setLargeImage] = useState(images[0].original || '');
    /* Show Large Image when click on thumbnail */
    const showImage = (e,data) => {
        e.preventDefault();
        setLargeImage(data);
    }
    return (
        <div>
            <div className="thumbnail--top">
                <div className="thumbnail-reduction">
                    <div className="thumbnail-price">
                        {prices.reduction.substring(0,prices.reduction.length-1)}
                        <sup>{prices.reduction.slice(prices.reduction.length - 1)}</sup>
                    </div>
                    
                </div>
                <img  className="thumbnail--lg-img" src={largeImage} alt="thumbnail" title="thumbnail" />
            </div>
            <div className="thumbnail--bottom">
                {images && images.map((image,key) => {
                    return <img key={key} src={image.thumbnail} alt="thumbnail" title="thumbnail" onClick={(e) => showImage(e,image.original)} />
                })}
            </div>
        </div>
    )
}
export default Thumbnail;