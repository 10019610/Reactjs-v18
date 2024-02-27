import { Link } from "react-router-dom";
import classes from "./Main.module.css";

const Main = () => {
  const data = [
    {
      id: 1,
      region1: "경기",
      region2: "안양시",
      title: "호계3동에서 맛보는 일본",
      content: "신멘. 그저 갓.",
      likeCount: 89,
      viewCount: 32222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 2,
      region1: "서울",
      region2: "광진구",
      title: "광진구에서 맛보는 미국",
      content: "스테이크. 그저 갓.",
      likeCount: 77,
      viewCount: 1222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
    {
      id: 3,
      region1: "경기",
      region2: "의왕시",
      title: "오전동에서 맛보는 참치",
      content: "참치창고. 그저 갓.",
      likeCount: 819,
      viewCount: 3222,
      regDateTime: "2024-02-26",
      image: "/ramen.png",
    },
  ];
  return (
    <div className={classes.baseForm}>
      {data.map((item, i) => (
        <div className={classes.list_item} key={i}>
          <div>
            <Link to={"/infoPost/" + item.id}>
              <img src={item.image} alt="itemImage" className={classes.img} />
            </Link>
          </div>
          <Link to={"/infoPost/" + item.id}>{item.title}</Link>
          <Link to={"/infoPost/" + item.id}>좋아요 {item.likeCount}</Link>
        </div>
      ))}
    </div>
  );
};

export default Main;
