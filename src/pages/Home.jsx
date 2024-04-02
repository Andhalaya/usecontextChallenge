import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
        <Link to={'/profile'}>Profile</Link>    
        <Link to={'/myjob'}>MiJob</Link>
      <Button />
    </div>
  );
};

export default Home;