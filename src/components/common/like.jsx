import classNames from "classnames";
import React from "react";

/**
 *
 * @param {liked} boolean
 * @param {onClick} func
 * @return React Dom
 */
// class Like extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   listenEvent() {
//     return () => {
//       this.props.onClick();
//     };
//   }
//   render() {
//     const { liked, onClick } = this.props;
//     let ClassLike = classNames(
//       { "fa fa-heart-o": !liked },
//       { "fa fa-heart": liked }
//     );
//     return (
//       <i
//         style={{ cursor: "pointer" }}
//         className={ClassLike}
//         aria-hidden="true"
//         onClick={this.listenEvent()}
//       ></i>
//     );
//   }
// }

// export default Like;

const Like = ({ liked, onClick }) => {
  let ClassLike = classNames(
    { "fa fa-heart-o": !liked },
    { "fa fa-heart": liked }
  );
  return (
    <i
      style={{ cursor: "pointer" }}
      className={ClassLike}
      aria-hidden="true"
      onClick={() => onClick()}
    ></i>
  );
};

export default Like;
