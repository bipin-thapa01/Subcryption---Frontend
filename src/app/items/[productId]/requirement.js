import { useState, useEffect } from "react";

export default function Requirement({ requirement, requirementCard, setRequirementCard, onEnter }) {
  const [desc, setDesc] = useState(null);

  const updateData = () => {
    const obj = {};
    const req = document.getElementsByClassName('input');
    for (let r of req) {
      obj[r.name] = r.value;
    }
    onEnter(obj);
  };

  useEffect(() => {
    if (requirement) {
      setDesc(requirement[0].requirement_desc);
      setRequirementCard(
        requirement.map((item, index) => {
          return <input onChange={updateData} autoComplete="off" type="text" placeholder={item.requirement} name={item.requirement} key={index} className="input" />
        })
      );
    }
  }, [requirement]);

  return (
    <div className="item-card requirement-card">
      <div className="requirement-title title">
        <span>1. </span>
        {desc}</div>
        {
          requirementCard
        }
    </div>
  );
}