import Button from '../components/Button';
import { Link } from 'react-router-dom';
const MyJob = () => {
  return (
    <div>
      <h1>My Job page</h1>
        <Link to={'/profile'}>Profile</Link>    
        <Link to={'/'}>Home</Link>
      <Button />
    </div>
  );
};

export default MyJob;

