import { useEffect, useState } from "react";
import './messageBox.css';
import { dateChange } from "../../../utils/utilsFunction";
import ButtonOutlined40 from "../../button/buttonOutlined/buttonOutlined40/buttonOutlined40";

const MessageBox = ({handleDeleteClick, optionDeleteButton, id, content, createdAt, profileImageURL, relationship, sender}) => {
    const [relationClass, setRelationClass] = useState('');
    
    useEffect(() => {
        if(relationship === '지인') {
            setRelationClass('acquaintance');
        } else if(relationship === `친구`) {
            setRelationClass('friend');
        } else if(relationship === '동료') {
            setRelationClass('colleague');
        } else if(relationship === '가족') {
            setRelationClass('family');
        }
    }, [])
    
    return(
        <>
            <div className="messageBoxTop">
                <div className="messageBoxContents">
                    <img src={profileImageURL}/>
                    <div>
                        <p>From.<strong>{sender}</strong></p>
                        <span className={`badge ${relationClass}`}>{relationship}</span>
                    </div>
                    {
                        optionDeleteButton ? <ButtonOutlined40 iconUrl="/images/deleted.svg" onClick={() => handleDeleteClick(id)}/> : null
                    }
                </div>
                <div className="messageTextBox" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
            <p className="messageDate">{dateChange(createdAt)}</p>
        </>
    )
}

export default MessageBox;