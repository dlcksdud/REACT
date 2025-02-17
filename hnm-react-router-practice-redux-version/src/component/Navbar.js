import React, {useEffect, useState} from 'react'
// fontawesome icon 사용하기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import cylogoImg from "../Image/CYlogo.png";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * [Navbar 구성]
 * <div/> 3개
 * 1번 <div/>에는 아이콘, 로그인/아웃 버튼
 * 2번 <div/>에는 HNM 로고
 * 3번 <div/>에는 카테고리, 검색창
 * 
 * 숙제 : 제품검색 기능
 */
const Navbar = ({authenticate, setAuthenticate}) => {
    const navigate = useNavigate();
    const memuList = ['여성', 'Divided', '남성', "유아", "아동", "CY Home", "Sale", "지속가능성"];
    const [isOpen, setIsOpen] = useState(false);

    const goToLoinPage =() => {
        navigate('/login')
    }
    const goToProductAllPage = () => {
        navigate('/')
    }

    /**
     * 선생님 코드
     */
    const search = (e) => {
        if(e.key === 'Enter') {
            console.log("We click this key : ", e.key); // Enter
            // 입력한 검색어를 읽어와서 url을 바꿔준다.
            navigate(`/?q=${e.target.value}`)
        }
    }

    const logout = () => {
        setAuthenticate(false);
    }
    
  return (
    <div>
        <div>
            <div className='login-button'>
                {authenticate ? (
                    <>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <div className='login-out-text' onClick={logout}>로그아웃</div>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faRightToBracket} />
                        <div className='login-out-text' onClick={goToLoinPage}>로그인</div>
                    </>
                    
                )}
            </div>
        </div>
        <div className='nav-section'>
            <img onClick={goToProductAllPage} width={150} src={cylogoImg}></img>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {memuList.map(menu => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-input'>
                <FontAwesomeIcon icon={faSearch} />
                <input 
                    type='text' 
                    placeholder='제품검색'
                    onKeyDown={(e) => search(e)}                      
                >
                </input>
            </div>
        </div>
    </div>
  )
}

export default Navbar