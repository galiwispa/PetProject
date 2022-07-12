import React from "react";
import Preloader from "../../common/preloader/preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div className={classes.background}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt='sunset'></img>
            </div> */}
            <div className={classes.describtionBlock}>
                <img className={classes.userPhoto} src={props.profile.photos.large != null ? props.profile.photos.large : "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" } alt='usersphoto'></img>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob ? 'I am looking for a job' : null}</div>
                <div>You can find me in:
                    <div>Facebook: {props.profile.contacts.facebook}</div>
                    <div>Vk {props.profile.contacts.vk}</div>
                    <div>Twitter: {props.profile.contacts.twitter}</div>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
