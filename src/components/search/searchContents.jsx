import { useRecoilValue } from 'recoil';
import './searchContents.css';
import { searchState } from '../../store/recoil/apiData';
import { getApiRecipientList } from '../../apis/apiRecipient';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const SearchContents = () => {
    const currentValue = useRecoilValue(searchState);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getApiRecipientList().then((response) => {
        const { results } = response;
        setUserData(results.filter((value) => {
            return value.name.includes(currentValue);
        }));
    });
    }, [currentValue]);
    console.log(userData);
    return(
        <div className="searchContainer">
            <div className='searchContents'>
                <p className='searchTopText'>"<strong>{currentValue}</strong>"에 대한 검색 결과 <strong>총 {currentValue === '' || userData?.length === 0 ? 0 : userData?.length}건</strong> 입니다.</p>
                <div className='searchResultBox'>
                    <h3>
                        <span>총 {currentValue === '' || userData?.length === 0 ? 0 : userData?.length}건</span>
                    </h3>
                    <ul>
                    {
                        currentValue === '' || userData?.length === 0 ?
                        <p className='searchNoData'>검색 결과가 없습니다.</p>
                        :
                        userData?.map(({id, name, recentMessages}) => {
                            return(
                                <li key={id}>
                                    <Link to={`/post/${id}`}>
                                        <div className='searchResultList'>
                                            <p>To.{name}</p>
                                            <span><strong>{recentMessages?.length}개</strong>의 메시지</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchContents;