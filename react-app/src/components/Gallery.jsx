import Picture from "./Picture";
import "./Gallery.css";

function Gallery(props) {
    return ( 
        <div>
            <h1>Image Gallery</h1>
            <div id='gallery' className='gallery'>
                {props.images.map((image, index) => (
                    <Picture key={index} imageUrl={image.image_url} />
                ))}
            </div>
        </div>

    );
}

export default Gallery;