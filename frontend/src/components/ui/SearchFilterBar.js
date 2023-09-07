

function SearchFilterBar({ onSearch, onFilter }) {
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    onSearch(searchValue);
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    onFilter(filterValue);
  };

  return (
    <div className="search-filter-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="filter1">Filter 1</option>
        <option value="filter2">Filter 2</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
}

export default SearchFilterBar;
