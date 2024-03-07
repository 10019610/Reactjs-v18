import axios from "axios";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";

const CreatePost = () => {
  interface AddPostParams {
    // postId: number;
    postTitle: string;
    postContent: string;
    region1: string;
    region2: string;
    region3: string;
    restaurantType: string;
    postWriter: string;
    postPassword: string;
  }
  // req data를 위한 데이터의 관리
  // useState vs useRef
  // async await?
  //async 키워드는 함수가 비동기적으로 작동함을 나타내며, await 키워드는 해당 비동기 작업의 완료를 기다림
  //axios 호출시 post 요청의 응답을 받을때까지 코드진행x
  const addPost = async () => {
    const addParam: AddPostParams = {
      postTitle: postTitleRef.current?.value || "",
      postContent: text || "",
      region1: region1Ref.current?.value || "",
      region2: region2Ref.current?.value || "",
      region3: region3Ref.current?.value || "",
      restaurantType: restaurantTypeRef.current?.value || "",
      postWriter: postWriteRef.current?.value || "",
      postPassword: postPasswordRef.current?.value || "",
    };

    try {
      const result = await axios.post(
        "http://localhost:8080/post/add",
        addParam
      );
      console.log(result);
    } catch (error) {
      console.error("add post 에러", error);
    }
  };

  const postTitleRef = useRef<HTMLInputElement>(null);
  const region1Ref = useRef<HTMLInputElement>(null);
  const region2Ref = useRef<HTMLInputElement>(null);
  const region3Ref = useRef<HTMLInputElement>(null);
  const postWriteRef = useRef<HTMLInputElement>(null);
  const postPasswordRef = useRef<HTMLInputElement>(null);
  const restaurantTypeRef = useRef<HTMLInputElement>(null);

  // react quill 설정
  const [text, setText] = useState("");
  console.log(text);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };
  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <div>
      <div>
        <div style={{ textAlign: "left", marginTop: "2rem" }}>
          <div>
            <button
              onClick={addPost}
              style={{
                float: "right",
                backgroundColor: "#db6a6a",
                color: "white",
                fontWeight: "700",
                border: "1px solid gray",
                cursor: "pointer",
                borderRadius: "4px",
                height: "40px",
              }}
            >
              작성완료
            </button>
            <div style={{ display: "flex" }}>
              <input
                ref={postTitleRef}
                type="text"
                id="title"
                style={{
                  width: "70%",
                  height: "40px",
                  border: "1px solid #ccc",
                }}
                placeholder="제목"
              />
              <input
                ref={restaurantTypeRef}
                type="text"
                id="restaurant"
                style={{
                  width: "30%",
                  height: "40px",
                  border: "1px solid #ccc",
                }}
                placeholder="음식종류"
              />
            </div>
          </div>
          <div>
            <input
              ref={postWriteRef}
              type="text"
              placeholder="Writer"
              style={{ width: "240px" }}
            />
            <input
              ref={postPasswordRef}
              type="text"
              placeholder="Password"
              style={{ width: "240px" }}
            />
            <input
              ref={region1Ref}
              type="text"
              placeholder="지역명1"
              style={{ width: "240px" }}
            />
            <input
              ref={region2Ref}
              type="text"
              placeholder="지역명2"
              style={{ width: "240px" }}
            />
            <input
              ref={region3Ref}
              type="text"
              placeholder="지역명3"
              style={{ width: "240px" }}
            />
          </div>

          <ReactQuill
            style={{
              width: "1200px",
              height: "600px",
              margin: "auto",
            }}
            theme="snow"
            formats={formats}
            modules={modules}
            onChange={setText}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
