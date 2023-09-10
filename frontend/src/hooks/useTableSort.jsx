import { useState } from 'react';

export default function useTableSort(initialRows, initialSortColumn, initialSortDirection) {
  const [rows, setRows] = useState(initialRows);
  const [sortBy, setSortBy] = useState(initialSortColumn);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const handleColumnHeaderClick = (column) => {
    if (sortBy === column) {
      toggleSortDirection();
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }

    const sortedRows = rows.slice().sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setRows(sortedRows);
  };

  return {
    rows,
    sortBy,
    sortDirection,
    handleColumnHeaderClick,
  };
}

