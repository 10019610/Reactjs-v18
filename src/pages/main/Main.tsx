import { Link } from "react-router-dom";
import classes from "./Main.module.css";
import { CategoryBar } from "../../components/layouts/categoryBar";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  interface listObject {
    postId: number;
    postTitle: string;
    postContent: string;
    region1: string;
    region2: string;
    region3: string;
    postExpYn: string;
    delYn: string;
    restaurantType: string;
    likeCount: number;
    hateCount: number;
    viewCount: number;
    regDateTime: string;
  }

  const [list, setList] = useState<listObject[]>([]);
  const listSearch = async () => {
    try {
      const response = await axios.get<listObject[]>(
        "http://localhost:8080/post/list"
      );
      setList(response.data);
      console.log(response);
    } catch (error) {
      console.error("listSearch 오류:", error);
    }
  };

  console.log(list);

  const likeHandler = async (postId: number) => {
    try {
      const response = await axios.post("http://localhost:8080/post/like", {
        postId,
      });
      if (response.status === 200) {
        setLike(true);
      }
      console.log(response);
    } catch (error) {
      console.error("likeHandler 오류:", error);
    }
  };
  const [hate, setHate] = useState(false);
  const [like, setLike] = useState(false);
  const hateHandler = async (postId: number) => {
    try {
      const response = await axios.post("http://localhost:8080/post/hate", {
        postId,
      });
      if (response.status === 200) {
        setHate(true);
      }
      console.log(response);
    } catch (error) {
      console.error("hateHandler 오류:", error);
    }
  };
  useEffect(() => {
    listSearch();
  }, [like, hate]);

  const data1 = {
    image: "/ramen.png",
  };
  const customDate = (regDate: string) => {
    const oneDay = 24 * 60 * 60 * 1000; //
    const regDateObj: any = new Date(regDate);
    const currentDateObj: any = new Date();
    const differenceMs = currentDateObj - regDateObj;
    const differenceDays = Math.round(differenceMs / oneDay);
    return differenceDays;
  };
  return (
    <div>
      <CategoryBar />
      <div className={classes.baseForm}>
        {/* {list.map((item, i) => (
          <div>{item.postContent}</div>
        ))} */}
        {list.map((item, i) => (
          <div className={classes.list_item} key={i}>
            <div>
              <Link to={"/infoPost/" + item.postId}>
                <img
                  src={data1.image}
                  alt="itemImage"
                  className={classes.img}
                />
              </Link>
            </div>
            <div style={{ display: "flex" }}>
              <Link
                to={"/infoPost/" + item.postId}
                style={{ textDecoration: "none" }}
              >
                <div className={classes.itemform}>
                  <div className={classes.region}>
                    <p>{item.region1}</p>
                    <p>{item.region2}</p>
                  </div>
                  <div className={classes.itemData}>
                    <p>{item.postTitle}</p>
                    <div className={classes.subData}>
                      <div>좋아요{item.likeCount}</div>
                      <div>싫어요{item.hateCount}</div>
                      <div>조회수{item.viewCount}</div>
                      <div style={{ color: "gray", marginLeft: "10px" }}>
                        {customDate(item.regDateTime) === 0
                          ? "오늘"
                          : customDate(item.regDateTime) + "일전"}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "0",
                  }}
                  type="button"
                  onClick={() => likeHandler(item.postId)}
                >
                  👍
                </button>
                <button
                  type="button"
                  onClick={() => hateHandler(item.postId)}
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "0",
                    marginTop: "2.2rem",
                  }}
                >
                  👎🏼
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
