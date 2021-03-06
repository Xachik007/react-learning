import  React from 'react';

import style from './users.module.css';
import * as  axios from "axios";
import userPhote from '../../assets/images/pngtree-user-vector-avatar-png-image_1541962.jpg';

class Users extends React.Component {

       componentDidMount() {
           axios.get("https://social-network.samuraijs.com/api/1.0/users")
               .then(response => {
                   this.props.setUsers(response.data.items);
               })
       }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key ={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small === null ? userPhote: '' } className={style.usersPhote} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {this.props.unfollow(u.id)}} > follow</button>
                            : <button onClick={() => {this.props.follow(u.id)}} >unfollow</button> }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;
