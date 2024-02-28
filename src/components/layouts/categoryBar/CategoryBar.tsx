import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import classes from "./category.module.css";

const CategoryBar = () => {
  return (
    <div>
      {/* <Nav
        className="justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Link</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <br />
      <div
        id="base"
        style={{
          margin: "1rem auto",
          textAlign: "center",
          height: "34px",
        }}
      >
        <ButtonGroup
          style={{ width: "300px", boxShadow: "0 3px 3px 0px #db6a6a" }}
        >
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #db6a6a",
              fontWeight: "500",
            }}
          >
            전체
          </Button>
          <Button
            style={{
              borderLeft: "none",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #db6a6a",
              fontWeight: "500",
            }}
          >
            업종별
          </Button>
          <Button
            style={{
              borderLeft: "none",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #db6a6a",
              fontWeight: "500",
            }}
          >
            지역별
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default CategoryBar;
