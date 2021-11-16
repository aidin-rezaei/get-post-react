function Header({searchRes}) {
  return (
    <nav className="nav">
      <p className="resnum">Search Result:{searchRes}</p>
      <div>
        <a className="nameuse" href="/">
          Aidin Rezaei
        </a>
        <a className="exit" href="/">
          LogOut
        </a>
      </div>
    </nav>
  );
}

export default Header;