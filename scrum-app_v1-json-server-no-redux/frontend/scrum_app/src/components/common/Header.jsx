import './Header.css';


function Header(props) {
  return (
    <header className="header">
        <div className="title">
            <i className={props.icon} /> {props.title}
        </div>
    </header>
  );
}

export default Header;
