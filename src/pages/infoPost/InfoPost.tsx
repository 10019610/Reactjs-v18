import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Reply from "../../components/layouts/Reply";

const InfoPost = () => {
  const navigate = useNavigate();
  interface infoData {
    postTitle: string;
    postContent: any;
    region1: string;
    region2: string;
    region3: string;
    postPinYn: string;
    postExpYn: string;
    delYn: string;
    restaurantType: string;
    replies: any;
    hateCount: number;
    likeCount: number;
    viewCount: number;
  }
  // TODO 타입스크립트 실행오류 Type 'undefined' is not assignable to type
  const query: any = useParams();
  const id: string = query.id;

  const [info, setInfo] = useState<infoData>();

  const getPostInfo = async () => {
    try {
      const result = await axios.get<infoData>(
        `http://localhost:8080/post/info/${id}`
      );
      setInfo(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("postInfo 에러:", error);
    }
  };
  const param = {
    postId: id,
  };
  const view = async () => {
    try {
      const result = await axios.post("http://localhost:8080/post/view", param);
    } catch (error) {
      console.error("view 오류:", error);
    }
  };

  const [showInput, setShowInput] = useState(false);

  const [delDescription, setDelDescription] = useState("");
  // TODO: 삭제 버튼을 누르면 삭제 이유를 적는 인풋이 나오게끔(구현필요)
  const deleteHandler = async () => {
    try {
      const result = await axios.post("http://localhost:8080/post/remove", {
        postId: param.postId,
        delDescription: delDescription,
      });
      console.log(result);
    } catch (error) {
      console.error("remove 오류:", error);
    }
  };

  const replies: string[] | undefined = info?.replies;

  useEffect(() => {
    getPostInfo();
    view();
  }, []);

  return (
    <div>
      <div style={{ height: "400px" }}>
        <div>업종:{info?.restaurantType}</div>
        <div style={{ display: "flex" }}>
          <div>지역: {info?.region1}</div>
          <div>{info?.region2}</div>
          <div>{info?.region3}</div>
        </div>
        <div>제목: {info?.postTitle}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: info?.postContent,
          }}
        />
        <div>
          <div>조회수{info?.viewCount}</div>
          <div>싫어요{info?.hateCount}</div>
          <div>좋아요{info?.likeCount}</div>
          {showInput ? (
            <div>
              <input
                placeholder="삭제사유"
                type="text"
                onChange={(e) => {
                  setDelDescription(e.target.value);
                }}
              />
              <button onClick={deleteHandler}>삭제</button>
            </div>
          ) : (
            <button onClick={() => setShowInput(!showInput)}>삭제</button>
          )}
        </div>
        <div>
          <button onClick={() => navigate(`/edit/${id}`)}>수정</button>
        </div>
      </div>

      {info && <Reply id={id} replies={replies} getPostInfo={getPostInfo} />}
    </div>
  );
};

export default InfoPost;
