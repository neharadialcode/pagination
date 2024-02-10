import React from "react";

const StudentCard = ({ obj, i }) => {
  return (
    <div
      className="border border-blue-400 rounded-xl p-4 max-w-[400px] mx-auto"
      key={i}
    >
      <img width="100%" src={obj.profile} alt="profile" />
      <h3 className="pt-4 pb-2 text-xl font-bold">{obj.name}</h3>
      <p>{obj.description}</p>
    </div>
  );
};

export default StudentCard;
