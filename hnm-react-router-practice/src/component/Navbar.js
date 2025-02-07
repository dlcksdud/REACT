import React from 'react'
// fontawesome icon 사용하기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import cylogoImg from "../Image/CYlogo.png";

/**
 * [Navbar 구성]
 * <div/> 3개
 * 1번 <div/>에는 아이콘, 로그인/아웃 버튼
 * 2번 <div/>에는 HNM 로고
 * 3번 <div/>에는 카테고리, 검색창
 */
const Navbar = () => {
    const memuList = ['여성', 'Divided', '남성', "유아", "아동", "CY Home", "Sale", "지속가능성"];

  return (
    <div>
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faRightToBracket} />
                <div className='login-out-text'>로그인</div>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <div className='login-out-text'>로그아웃</div>
            </div>
        </div>
        <div className='nav-section'>
            <img width={150} src={cylogoImg}></img>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {memuList.map(menu => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-input'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text'></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar