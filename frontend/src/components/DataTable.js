import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import '../App.css';

const rows = [
  { id: 1, matricule: '12345', nomPrenom: 'John Doe', poste: 'Manager', direction: 'Sales', anciennite: '5 years', etat: 'Actif' },
  { id: 2, matricule: '67890', nomPrenom: 'Jane Smith', poste: 'Developer', direction: 'Engineering', anciennite: '2 years', etat: 'Départ' },
  // ... add more rows as needed
];

function DataTable() {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Nom et Prénom</th>
            <th>Poste de Travail</th>
            <th>Direction</th>
            <th>Anciennité</th>
            <th>État</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.matricule}</td>
              <td>{row.nomPrenom}</td>
              <td>{row.poste}</td>
              <td>{row.direction}</td>
              <td>{row.anciennite}</td>
              <td style={{ color: row.etat === 'Actif' ? 'green' : 'red' }}>
                {row.etat}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
