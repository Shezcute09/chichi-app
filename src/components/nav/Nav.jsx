import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to={'/'}>Logo</Link></li>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/create'}>Create</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'*'}>Error</Link></li>
      </ul> 
    </nav>
  )
}

export default Nav