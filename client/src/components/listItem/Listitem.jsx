import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material';
import './listitem.scss';
import { useState } from 'react';

const Listitem = ({index}) => {
  //function to set size and details while hover
  const [isHover, setIsHover] = useState(false)
  const trailer = 
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div 
      className='listItem' 
      style={{left: isHover && index * 225 - 50  + index * 2.5}}
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}>
        <img 
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="movie" />

        {isHover && (
            <>
            <video src={trailer} autoPlay={true} loop/>

            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpOffAltOutlined className='icon'/>
                <ThumbDownOffAltOutlined className='icon'/>
              </div>
            <div className="itemInfoTop">
              <span>1 hrs 45 mins</span>
              <span className='limit'>+18</span>
              <span>1997</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolore ipsa dolores a aperiam laboriosam, laudantium ab corrupti blanditiis eos odit.
            </div>
            <div className="genre">Triller</div>
          </div>
          </>
        )}
    </div>
  )
}

export default Listitem