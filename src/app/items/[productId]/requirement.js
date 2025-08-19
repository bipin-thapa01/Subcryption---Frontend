import { useState, useEffect } from "react";

export default function Requirement({ requirement }) {
  const [requirementCard, setRequirementCard] = useState(null);
  useEffect(() => {
    if (requirement) {
      setRequirementCard(
        <div className="item-card requirement-card">
          <div className="requirement-title title">
            <span>1. </span>
            {requirement[0].requirement_desc}</div>
          {
            requirement.map((item, index) => {
              return <input type="text" placeholder={item.requirement} name={item.requirement} key={index} className="input"/>
            })
          }
        </div>
      );
    }
  }, [requirement]);
  return (
    <>
      {requirementCard}
    </>
  );
}