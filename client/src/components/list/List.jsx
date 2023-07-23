import { ArrowBackIosOutlined, ArrowForwardIosOutlined, Translate } from '@mui/icons-material';
import './list.scss';
import Listitem from '../listItem/Listitem';
import { useRef, useState } from 'react';

const List = ({list}) => {
    //function for slider to left and right side

    //set the arrow to show after move to right side
    const [isMoved, setIsMoved] = useState(false)
    //set slide number
    const [sliderNumber, setSlideNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && sliderNumber > 0) {
            setSlideNumber(sliderNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right" && sliderNumber < 5) {
            setSlideNumber(sliderNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
            className='sliderArrow left' 
            onClick={() => handleClick("left")}
            style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
            {list.content.map((item, i) => (
            <Listitem index={i} item={item} />
          ))}
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default List