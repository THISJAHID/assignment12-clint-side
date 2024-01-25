import PhotoAlbum from "react-photo-album";
import "./Gellary.css"



const Gallary = () => {
    const photos = [
        { src: "https://i.postimg.cc/Wz8FtxD4/bd-1.jpg", width: 800, height: 600 },
        { src: "https://i.postimg.cc/SxJ2NTmy/bd-2.jpg", width: 1600, height: 900 },
        { src: "https://i.postimg.cc/vZgTd4vT/blog-1.jpg", width: 1600, height: 900 },
        { src: "https://i.postimg.cc/WbVxvC6k/blog-2.jpg", width: 1600, height: 900 },
        { src: "https://i.postimg.cc/N0KzDcYW/blog-3.jpg", width: 1600, height: 900 },
        { src: "https://i.postimg.cc/RZFsCB3N/blog-4.jpg", width: 800, height: 600 },
    ];
    
    return (
        <div>
            
            
            <PhotoAlbum layout="rows" photos={photos} />
       
        </div>
    );
};

export default Gallary;