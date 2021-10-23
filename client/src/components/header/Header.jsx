import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Share your world!</span>
        <span className="headerTitleLg">Travel memoir</span>
      </div>
      <img
        className="headerImg"
        src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppy-On-The-Beach-Background.jpg"
        alt=""
      />
    </div>
  );
}
