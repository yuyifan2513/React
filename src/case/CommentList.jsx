import dayjs from 'dayjs';
const CommentList = (props) => {
  // 格式时间
  const formatTime = (time) => dayjs(time).format('YYYY/MM/DD HH:mm:ss');
  // 浅拷贝一个新数组保存父组件props传来的comments
  // 方便在排序时不需要操作父组件里的状态，在子组件即可完成
  const newComments = [...props.comments]
  // 随着 排序的方式来进行变化 default time(倒叙)
  if (props.active === "default"){
      // 排序
      newComments.sort((a, b) =>b.id - a.id) // id倒叙
  }else if (props.active === "time"){
      newComments.sort((a, b) =>b.time - a.time) // 时间倒叙
  }
  return (
    <ul className="comm-list">
      {newComments.map((item) => (
        <li className="comm-item" key={item.id}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${item.avatar})` }}
          ></div>
          <div className="info">
            <p className={`name ${item.vip ? 'vip' : ''}`}>
              {item.name}
              {item.vip && (
                <img
                  alt=""
                  src={
                    'https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png'
                  }
                />
              )}
            </p>
            <p className="time">
              <span>{formatTime(item.time)}</span>
              <span
                className={`iconfont icon-collect${item.collect ? '-sel' : ''}`}
              ></span>
              {item.name === props.user.name && (
                <span className="del">删除</span>
              )}
            </p>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;