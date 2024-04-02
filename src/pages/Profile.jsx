import Button from '../components/Button';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
        <Link to={'/'}>Home</Link>    
        <Link to={'/myjob'}>MiJob</Link>
      <Button />
    </div>
  );
};

export default Profile;