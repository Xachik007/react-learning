import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://media.gettyimages.com/photos/armenia-yerevan-republic-square-dancing-fountains-picture-id1068746262?s=612x612"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;