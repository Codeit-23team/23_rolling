import { Link } from "react-router-dom";
import './header.css';

const Header = ({button}) => {
    return(
        <header>
            <div>
                <h1>
                    <Link to={'/'} style={{backgroundImage: `url(images/logo.png)`}}>
                        홈으로
                    </Link>
                </h1>
                {
                    button ? 
                    <Link to={'/post'}>롤링페이퍼 만들기</Link>
                    : null
                }
            </div>
        </header>
    )
}

export default Header;