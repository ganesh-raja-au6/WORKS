import React from "react";

const Sorting = ({
  genres,
  currentGenre,
  onGenreChange,
  valueProperty,
  itemProperty,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            currentGenre === genre
              ? "active list-group-item"
              : "list-group-item"
          }
          onClick={() => onGenreChange(genre)}
        >
          {genre[itemProperty]}
        </li>
      ))}
    </ul>
  );
};
Sorting.defaultProps = {
  valueProperty: "_id",
  itemProperty: "name",
};

export default Sorting;
