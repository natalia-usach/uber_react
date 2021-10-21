import ProfileInfo from "./ProfileInfo";
import { useState } from "react";
import { getProfileInfo } from "../../actions/user";

const AccountPage = () => {

    const [info, setInfo] = useState({});

    const getInfo = async () => {
        const data = await getProfileInfo();
        setInfo(data);
    }

    return (
        <div className='container'>
            <div className='sideNav'>
                <ProfileInfo getProfileInfo={() => getInfo()}/>
            </div>
            <div className='main'>{Object.entries(info).map((item, index) => <p key={index}>{item[0]} : {item[1]}</p>)}</div>
        </div>
    );
}

export default AccountPage;
