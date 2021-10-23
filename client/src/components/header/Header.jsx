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
        src="https://th.bing.com/th/id/R.51fa5d3501db8e777617061aed811844?rik=dnyHADsf1zQJ9A&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
  );
}
