import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return(
        <header>
            <div>
                <h1>
                    <Link style={{backgroundImage: `url(images/logo.png)`}}>
                        홈으로
                    </Link>
                </h1>
                <Link>롤링페이퍼 만들기</Link>
            </div>
        </header>
    )
}

export default Header;