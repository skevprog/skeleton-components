import Nav from '../Nav';

function Header({ setUserId }) {
   return (
      <header>
         <h1>Blogs</h1>
         <Nav setUserId={setUserId} />
      </header>
   )
}

export default Header;
