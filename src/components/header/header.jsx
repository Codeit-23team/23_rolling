import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import './search.css';
import logoImg from '@/logo.png';
import searchIcon from '@/search_icon.svg';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchState } from '../../store/recoil/apiData';
import { CSSTransition } from 'react-transition-group';

const SearchBox = ({ open }) => {
  const setSearchValue = useSetRecoilState(searchState);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const handleSearchValue = (event) => {
    event.preventDefault();
    if (searchRef.current.value !== '') {
      setSearchValue(searchRef.current.value);
      navigate('/search');
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      <CSSTransition in={open} timeout={300} classNames="searchBox" unmountOnExit>
        <div className="searchBox">
          <div>
            <form action="/search" onSubmit={handleSearchValue}>
              <input ref={searchRef} type="search" placeholder="이름을 입력해주세요." />
              <button onClick={handleSearchValue} type="submit">
                <img src={searchIcon} alt="검색 하기" />
              </button>
            </form>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

const Header = ({ button }) => {
  const [open, setOpen] = useState(false);
  const handleSearch = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header className={`${styles.headerBox} ${button ? '' : styles.header}`}>
        <div>
          <h1>
            <Link to={'/'} style={{ backgroundImage: `url(${logoImg})` }}>
              홈으로
            </Link>
          </h1>
          <div className={styles.utillBox}>
            {button ? <Link to={'/post'}>롤링페이퍼 만들기</Link> : null}
            <button type="button" onClick={handleSearch}>
              <img src={searchIcon} alt="검색하기" />
            </button>
          </div>
        </div>
      </header>
      <SearchBox open={open} />
    </>
  );
};

export default Header;
