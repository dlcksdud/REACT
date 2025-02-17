import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem_t'

const ContactList = () => {

    const constactList = useSelector(state => state.contactList);

  return (
    <div className='contactList-div'>
        <p>총 개수 : </p>
        {constactList.map((item) => (
            <ContactItem item={item}/>
        ))}
    </div>
  )
}

export default ContactList