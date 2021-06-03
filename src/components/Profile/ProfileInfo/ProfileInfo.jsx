import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src="https://media.gettyimages.com/photos/armenia-yerevan-republic-square-dancing-fountains-picture-id1068746262?s=612x612"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>

                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;