import React from "react";
import ReactDom from "react-dom";
import profile1 from "./image/2.jpg";
import profile2 from "./image/1.JPG";
import profile3 from "./image/3.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
const App = () => {
  return (
    <div>

  
    <div className="ui comments">
      <UserCard>
        <div>
          hello there
        </div>
      </UserCard>
      <UserCard>
      <SingleComment
        name="Alex"
        date="at 5pm"
        text="Hello world"
        picture={profile1}
      />
      </UserCard>
      <UserCard>
      <SingleComment
        name="Rakib"
        date="at 4pm"
        text="hello bd"
        picture={profile2}
      />
      </UserCard>
      <UserCard>
      <SingleComment
        name="Parvej"
        date="at 3pm"
        text="hello dhaka"
        picture={profile3}
      />
      </UserCard>
    </div>
  
      {/* <UserCard
      name='remon'
      details='This is remon'
      />
      <UserCard
      name='sajib'
      details='This is sajib'
      />
      <UserCard
       name='rakib'
       details='This is rakib'
      /> */}
  

    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
