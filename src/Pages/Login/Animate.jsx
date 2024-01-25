
import { Player } from '@lottiefiles/react-lottie-player';
const Animate = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src="./loging.json"
                style={{ height: '500px', width: '500px' }}
            >
               
            </Player>
        </div>
    );
};

export default Animate;