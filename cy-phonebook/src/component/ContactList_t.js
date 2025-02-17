import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem_t'

const ContactList = () => {

    const contactList = useSelector(state => state.contactList);
    const searchItem = useSelector(state => state.searchItem);
    const [searchItemList, setSearchItemList] = useState([]);
    
    const searchItemListFuc = () => {
        // 검색어가 있으면 필터링된 목록, 없으면 전체 목록 반환
        const filteredList = searchItem
            ? contactList.filter(
                (item) => item.name.includes(searchItem) || item.phoneNumber.includes(searchItem)
            )
            : contactList;
        setSearchItemList(filteredList);
    }
    useEffect(() => {
        searchItemListFuc();
    }, [searchItem, contactList])


  return (
    <div className='contactList-div'>
        <p>총 개수 : {searchItemList.length}</p>
        {searchItemList.map((item) => (
            <ContactItem item={item}/>
        ))}
    </div>
  )
}

export default ContactList