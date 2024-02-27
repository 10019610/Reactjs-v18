import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.baseForm}>
      <Link to="/">
        <img src="/logo.jpg" alt="logo" />
      </Link>
      <div className={classes.nav}>
        <Link
          to="/login"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          로그인
        </Link>
        <Link
          style={{ textDecoration: "none", marginRight: "20px" }}
          to="/login"
        >
          회원가입
        </Link>
        <button style={{}}>글쓰깈</button>
      </div>
      {/* <div className="">헤더에요</div> */}
    </div>
  );
};

export default Header;
