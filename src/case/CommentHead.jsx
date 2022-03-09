const CommentHead = (props) => {
    const { active,updateActive,commentsLength } = props;
    return (
      <h3 className="comm-head">
        热门评论<sub>({commentsLength})</sub>
        <span 
         onClick={() => updateActive("default")}
         className={active === "default" ? "active" : ""}
        >
            默认
        </span>
        <span
         onClick={() => updateActive("time")}
         className={active === "time" ? "active" : ""}
        >
            时间
        </span>
      </h3>
    );
  };

  export default CommentHead;