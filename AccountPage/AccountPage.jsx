import { getProfileInfo } from "../../actions/user";
import ProfileInfo from "./ProfileInfo";

const AccountPage = () => {
    return (
        <div className='container'>
            <div className='sideNav'>
                <ProfileInfo clickEvent={() => getProfileInfo()}/>
            </div>
            <div className='main'></div>
        </div>
    );
}

export default AccountPage;