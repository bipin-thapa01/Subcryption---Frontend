import { FaFilter } from "react-icons/fa";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter-by">
        <FaFilter />
        <div>Filter</div>
      </div>
      <div className="filter-container">
        <div id="all">All</div>
        <div id="games">Games</div>
        <div id="subscription">Subscription</div>
        <div id="services">Services</div>
      </div>
    </div>
  );
}