import { Link, useNavigate } from "react-router-dom";
import './header.css';
import logoImg from '@/logo.png';
import searchIcon from '@/search_icon.svg';
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../store/recoil/apiData";

const SearchBox = ({open}) => {
    const setSearchValue= useSetRecoilState(searchState);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const handleSearchValue = (event) => {
        event.preventDefault();
        if(searchRef.current.value !== '') {
            setSearchValue(searchRef.current.value);
            navigate('/search');
        } else {
            alert('검색어를 입력해주세요.');
        }
    }
    return(
        <>    
            <div style={{ height: open ? '68px' : '0', borderBottom: open ? `1px solid #EDEDED` : 'none' }} className="searchBox">
                <div>
                    <form action="/search" onSubmit={handleSearchValue}>
                        <input ref={searchRef} type="search" placeholder="이름을 입력해주세요."/>
                        <button type="button">
                            <img src={searchIcon} alt="검색 하기"/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

const Header = ({button}) => {
    const [open, setOpen] = useState(false);
    const handleSearch = () => {
        if(open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }
    return(
        <>
            <header>
                <div>
                    <h1>
                        <Link to={'/'} style={{backgroundImage: `url(${logoImg})`}}>
                            홈으로
                        </Link>
                    </h1>
                    <div className="utillBox">
                        {
                            button ? 
                            <Link to={'/post'}>롤링페이퍼 만들기</Link>
                            : null
                        }
                        <button type="button" onClick={handleSearch}>
                            <img src={searchIcon} alt="검색하기"/>
                        </button>
                    </div>
                </div>
            </header>
            <SearchBox open={open}/>
        </>
    )
}

export default Header;