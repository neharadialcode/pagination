import React from "react";
import profile from "../../img/profile.png";

const StudentCard = () => {
  const card = [
    {
      profile: profile,
      name: "ABC",
      description: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus
      aliquid repudiandae exercitationem distinctio, reiciendis totam quae
      deserunt repellat amet commodi rem doloribus in libero natus voluptatibus
      fuga, fugiat ad!`,
    },
    {
      profile: profile,
      name: "DEF",
      description: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus
      aliquid repudiandae exercitationem distinctio, reiciendis totam quae
      deserunt repellat amet commodi rem doloribus in libero natus voluptatibus
      fuga, fugiat ad!`,
    },
    {
      profile: profile,
      name: "GHI",
      description: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus
      aliquid repudiandae exercitationem distinctio, reiciendis totam quae
      deserunt repellat amet commodi rem doloribus in libero natus voluptatibus
      fuga, fugiat ad!`,
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-3">
        {card.map((obj, i) => (
          <div className="border border-blue-400 rounded-xl p-4 max-w-[400px] mx-auto">
            <img width="100%" src={obj.profile} alt="profile" />
            <h3 className="pt-4 pb-2 text-xl font-bold">{obj.name}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
