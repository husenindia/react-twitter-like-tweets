import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom'
import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <p className="flex justify-end w-full">
        <Link 
        to="/create-post"
        className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;