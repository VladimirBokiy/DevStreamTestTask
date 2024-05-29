import { useEffect, useRef, useState } from "react";
import "./Picture.css"
import SaveButton from "./SaveButton";

const baseUrl = "http://188.166.203.164";

function Picture(props) {
    const [canvas, setCanvas] = useState(null);


    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = baseUrl + props.imageUrl;

        img.addEventListener("load", () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            setCanvas(ctx.canvas);
        });
    }, [props.imageUrl]);

    const saveImage = () => {
        const link = document.createElement('a');
        link.download = props.imageUrl.split("/").slice(-1);
        link.href = canvas.toDataURL('image/png')
        link.click();
    };

    return (
        <div className='picture'>
            {canvas && <img src={canvas.toDataURL('image/png')} alt="" />}
            {canvas && <SaveButton saveImage={saveImage}/>}
        </div>
    );
}

export default Picture;