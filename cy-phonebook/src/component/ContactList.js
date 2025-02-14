import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'

const ContactList = () => {

    const name = useSelector(state => state.name);
    const phoneNumber = useSelector(state => state.phoneNumber);
    const searchInput = useSelector(state => state.searchItem);
    
    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        if(name && phoneNumber) {
            setInfoList(prevList => [...prevList, { name, phoneNumber }]);
        }
    }, [name, phoneNumber]);

  return (
    <div className='contactList-div'>
        <p>총 개수 : {infoList.length}</p>
        {infoList.map(({name, phoneNumber}, index) => (
            <ContactItem key={index} name={name} phoneNumber={phoneNumber}/>
        ))}
    </div>
  )
}

export default ContactList