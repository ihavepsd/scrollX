import HorizontalScroll from "react-horizontal-scrolling";
import { items } from "./data";
import "./Horiz.css";

export default function Horiz() {
  return (
    <HorizontalScroll>
      <div className="scroller">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img
              src={item.photo}
              alt="alt"
              style={{ width: "200px", height: "200px", borderRadius: "2%" }}
            />
            <h3>{item.name}</h3>
            <p>{item.role}</p>
            <p>{item.exp}</p>
          </div>
        ))}
      </div>
    </HorizontalScroll>
  );
}
