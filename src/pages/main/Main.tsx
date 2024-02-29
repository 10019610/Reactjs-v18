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
  }

  const [list, setList] = useState<listObject[]>([]);
  const listSearch = async () => {
    const result = await axios.get<listObject[]>(
      "http://localhost:8080/post/list"
    );
    setList(result.data);
  };

  console.log(list);

  useEffect(() => {
    listSearch();
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     region1: "경기",
  //     region2: "안양시",
  //     title: "호계3동에서 맛보는 일본",
  //     content: "신멘. 그저 갓.",
  //     likeCount: 89,
  //     viewCount: 32222,
  //     regDateTime: "2024-02-21",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 2,
  //     region1: "서울",
  //     region2: "광진구",
  //     title: "광진구에서 맛보는 미국",
  //     content: "스테이크. 그저 갓.",
  //     likeCount: 77,
  //     viewCount: 1222,
  //     regDateTime: "2024-02-21",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 3,
  //     region1: "경기",
  //     region2: "의왕시",
  //     title: "오전동에서 맛보는 참치",
  //     content: "참치창고. 그저 갓.",
  //     likeCount: 819,
  //     viewCount: 3222,
  //     regDateTime: "2024-02-23",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 4,
  //     region1: "경기",
  //     region2: "의왕시",
  //     title: "오전동에서 맛보는 참치",
  //     content: "참치창고. 그저 갓.",
  //     likeCount: 77,
  //     viewCount: 6454,
  //     regDateTime: "2024-02-24",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 5,
  //     region1: "경기",
  //     region2: "포천시",
  //     title: "이동에서 맛보는 갈비",
  //     content: "이동갈비. 그저 갓.",
  //     likeCount: 319,
  //     viewCount: 3222,
  //     regDateTime: "2024-02-26",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 6,
  //     region1: "경기",
  //     region2: "수원",
  //     title: "구운동에서 맛보는 왕갈비",
  //     content: "수원왕갈비. 그저 갓.",
  //     likeCount: 19,
  //     viewCount: 5778,
  //     regDateTime: "2024-02-26",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 7,
  //     region1: "서울",
  //     region2: "강남구",
  //     title: "압구정에서 맛보는 소고기",
  //     content: "참치창고. 그저 갓.",
  //     likeCount: 8,
  //     viewCount: 459,
  //     regDateTime: "2024-02-26",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 8,
  //     region1: "서울",
  //     region2: "성동구",
  //     title: "성동구에서 맛보는 파스타",
  //     content: "파스타. 그저 갓.",
  //     likeCount: 75,
  //     viewCount: 12,
  //     regDateTime: "2024-02-26",
  //     image: "/ramen.png",
  //   },
  //   {
  //     id: 9,
  //     region1: "경기",
  //     region2: "안양시",
  //     title: "범계에서 맛보는 이자카야",
  //     content: "이자카야. 그저 갓.",
  //     likeCount: 42,
  //     viewCount: 331,
  //     regDateTime: "2024-02-27",
  //     image: "/ramen.png",
  //   },
  // ];
  const data1 = {
    id: 9,
    region1: "경기",
    region2: "안양시",
    title: "범계에서 맛보는 이자카야",
    content: "이자카야. 그저 갓.",
    likeCount: 42,
    viewCount: 331,
    regDateTime: "2024-02-27",
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
  console.log();
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
            <div>
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
                      <div>좋아요{data1.likeCount}</div>
                      <div>조회수{data1.viewCount}</div>
                      <div style={{ color: "gray", marginLeft: "10px" }}>
                        {customDate(data1.regDateTime)}일전
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
