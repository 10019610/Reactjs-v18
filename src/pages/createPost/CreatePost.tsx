const CreatePost = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        style={{
          width: "800px",
          marginBottom: "1rem",
          fontSize: "40px",
          outline: "none",
          border: "none",
          borderBottom: "1px solid #db6a6a",
          padding: "10px",
        }}
      />
      <div>
        <textarea
          style={{
            width: "800px",
            height: "400px",
            border: "none",
            padding: "10px",
            resize: "none",
            outline: "none",
          }}
          placeholder="내용을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default CreatePost;
