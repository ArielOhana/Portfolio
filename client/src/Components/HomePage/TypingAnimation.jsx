
import { TypeAnimation } from 'react-type-animation';
const TypingAnimation = ({sequence ,speed,cursor}) => {
    return (
      <TypeAnimation
        sequence={sequence || ""}
        wrapper="span"
        cursor={cursor ||false}
        speed={ speed || 40}
        repeat={Infinity}
        className='TypeAnimation'
      />
    );
  };
  export default TypingAnimation;