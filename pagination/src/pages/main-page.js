import { userData } from '../data/user';

const MainPage = () => {
    const userList = userData(200);
    return <>{userList}</>;
};

export default MainPage;
