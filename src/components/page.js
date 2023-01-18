import React from "react";
import "../../src/components/page.css";

export default function Page(props) {
  return (
    <div className="pictures" key={props.keys}>
      <a href={props.dloads} target="_blank">
        <img src={props.url} alt=".." className="images" />
      </a>
      <p>User: {props.users}</p>
      <p>Created at: {props.created}</p>
    </div>
  );
}
