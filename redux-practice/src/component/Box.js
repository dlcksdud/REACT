import React from 'react'
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

const Box = () => {
    let level = useSelector(state => state.level);

  return (
    <div>
        THIS IS BOX {level}
        <GrandSonBox />
    </div>
  )
}

export default Box;