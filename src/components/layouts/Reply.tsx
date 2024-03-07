import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}
const Reply = ({ id, replies, getPostInfo }: any) => {
  const postId: string = id;
  const reply: any = replies;

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const addParams = {
    postId: postId,
    replyContent: content,
    replyWriter: writer,
    replyPassword: password,
  };
  const addReply = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8080/reply/add",
        addParams
      );
      console.log(result.status);
      setWriter("");
      setPassword("");
      setContent("");
      getPostInfo();
    } catch (error) {
      console.error("addReply 오류:", error);
    }
  };
  const deleteReply = async (replyId: any) => {
    try {
      const result = await axios.post("http://localhost:8080/reply/remove", {
        replyId: replyId,
        replyPassword: "12121212",
      });
      getPostInfo();
    } catch (error) {
      console.error("remove 오류:", error);
    }
  };
  const customDate = (regDate: string) => {
    const oneDay = 24 * 60 * 60 * 1000; //
    const regDateObj: any = new Date(regDate);
    const currentDateObj: any = new Date();
    const differenceMs = currentDateObj - regDateObj;
    const differenceDays = Math.round(differenceMs / oneDay);
    return differenceDays;
  };
  const [hate, setHate] = useState(false);
  const [like, setLike] = useState(false);

  const likeHandler = async (replyId: number) => {
    try {
      const response = await axios.post("http://localhost:8080/reply/like", {
        replyId,
      });
      if (response.status === 200) {
        setLike(true);
      }
      console.log(response);
    } catch (error) {
      console.error("likeHandler 오류:", error);
    }
  };

  const hateHandler = async (replyId: number) => {
    try {
      const response = await axios.post("http://localhost:8080/reply/hate", {
        replyId,
      });
      if (response.status === 200) {
        getPostInfo();
        setHate(true);
      }
      console.log(response);
    } catch (error) {
      console.error("hateHandler 오류:", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="card mb-2">
        <div className="card-header bg-light">
          <i className="fa fa-comment fa"></i> REPLY
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {reply &&
              reply.map((item: any, i: number) => (
                <div key={i} style={{ borderBottom: "1px solid #ccc" }}>
                  <div style={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
                    {item.replyWriter}
                    {/* <button
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
                    </button> */}
                  </div>
                  <span>
                    {item.replyContent}
                    <div style={{ color: "gray" }}>
                      {customDate(item.regDateTime) === 0
                        ? "오늘"
                        : customDate(item.regDateTime) + "일전"}
                      <button
                        onClick={() => deleteReply(item.replyId)}
                        style={{
                          float: "right",
                          backgroundColor: "white",
                          border: "none",
                          fontWeight: "bold",
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </span>
                </div>
              ))}
            <li className="list-group-item">
              <div className="form-inline mb-2">
                <div style={{ display: "flex" }}>
                  <label htmlFor="replyId">
                    <img
                      style={{ marginTop: "5px" }}
                      src="/user-solid.svg"
                      alt="userid"
                      height="30"
                      width="40"
                    />
                  </label>
                  <input
                    style={{ width: "300px", marginRight: "2rem" }}
                    type="text"
                    className="form-control ml-2"
                    placeholder="Enter yourId"
                    id="replyId"
                    onChange={(e) => {
                      setWriter(e.target.value);
                    }}
                  />
                  <label htmlFor="replyPassword" className="">
                    <img
                      style={{ marginTop: "5px" }}
                      src="/unlock-solid.svg"
                      alt="password"
                      height="30"
                      width="40"
                    />
                  </label>
                  <input
                    style={{ width: "300px" }}
                    type="password"
                    className="form-control ml-2"
                    placeholder="Enter password"
                    id="replyPassword"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
              <button
                type="button"
                className="btn btn-dark mt-3"
                onClick={addReply}
              >
                댓글 작성
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reply;
