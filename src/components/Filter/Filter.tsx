import React from "react";

type FilterProps = {
  selected: string;
  onChange: (category: string) => void;
};

const categories = ["Все", "Электроника", "Одежда"];

const Filter: React.FC<FilterProps> = ({ selected, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            marginRight: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: selected === cat ? "#50a5f5" : "#cecece",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filter;