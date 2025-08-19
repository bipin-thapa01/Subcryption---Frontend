import { useState, useEffect } from "react";

export default function DescriptionCard({ desc }) {
  const [descCard, setDescCard] = useState(null);
  useEffect(() => {
    if (desc) {
      setDescCard(
        <div className="description-card item-card" style={{ whiteSpace: "pre-line" }}>
          {`${desc.description}\n\n Note: If topup hasn't been completed within a day then you will be refunded.`}
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