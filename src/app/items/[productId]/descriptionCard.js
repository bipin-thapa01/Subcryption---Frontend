import { useState, useEffect } from "react";

export default function DescriptionCard({ desc }) {
  const [descCard, setDescCard] = useState(null);
  useEffect(() => {
    if (desc) {
      setDescCard(
        <div className="description-card card" style={{ whiteSpace: "pre-line" }}>
          {desc.description}
        </div>
      );
    }
  }, [desc]);
  return (
    <>
      {descCard}
    </>
  );
}