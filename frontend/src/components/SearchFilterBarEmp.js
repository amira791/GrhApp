
import React, { useState } from 'react';
import { Box, Select } from '@chakra-ui/react'; 

const [selectedFilter, setSelectedFilter] = useState(""); // Initialize with an initial value if needed
const [selectedFilterValue, setSelectedFilterValue] = useState(""); // Initialize with an initial value if needed



const FilterBy = [
  { value: "Collectif", label: "Collectif.." },
  { value: "Unite", label: "Unite" },
  { value: "Structure", label: "Structure" },
  { value: "Status", label: "Status" },
  { value: "PosteTravail", label: "PosteTravail" },
  { value: "Etat", label: "Etat" },

];

const FilterValue  = {
  Collectif: [
    { value: "", label: "Collectif.." },
    { value: "Siege", label: "Siege" },
    { value: "Antenne Locale", label: "Antenne Locale" },
  ],
  Unite : [
    { value: "", label: "Commune.." },
    { value: "ADRAR", label: "ADRAR" },
    { value: "CHLEF", label: "CHLEF" },
    { value: "LAGHOUAT", label: "LAGHOUAT" },
    { value: "OUM E -BOUAGHI", label: "OUM E -BOUAGHI" },
    { value: "BATNA", label: "BATNA" },
    { value: "BISKRA", label: "BISKRA" },
    { value: "BECHAR", label: "BECHAR" },
    { value: "BLIDA", label: "BLIDA" },
    { value: "BOUIRA", label: "BOUIRA" },
    { value: "TMANRASSET", label: "TAMANRASSET" },
    { value: "TEBESSA", label: "TEBESSA" },
    { value: "TLEMCEN", label: "TLEMCEN" },
    { value: "TIARET", label: "TIARET" },
  ],
  Structure : [
    { value: "", label: "Structure.." },
    { value: "S.D.DE LA PUBLICATION", label: "S.D.DE LA PUBLICATION" },
    { value: "BUREAU BOAL LANGUE NATION", label: "BUREAU BOAL LANGUE NATION" },
    { value: "BUREAU BOAL LANGUE FRANCE", label: "BUREAU BOAL LANGUE FRANCE" },
    { value: "BUREAU DIFFUSION", label: "BUREAU DIFFUSION" },
    { value: "BUREAU TRADUCTION", label: "BUREAU TRADUCTION" },
  ],
  Status : [
    { value: "", label: "Status.." },
    { value: "APR", label: "APR" },
    { value: "CDD", label: "CDD" },
    { value: "CDI", label: "CDI" },
    { value: "CDI/P", label: "CDI/P" },
    { value: "DEC", label: "DEC" },
  ],
   PosteTravail: [
    { value: "", label: "PosteTravail.." },
    { value: " Directeur", label: " Directeur" },
    { value: "Ingenieur", label: "Ingenieur" },
    { value: " Sous Directrice", label: "Sous Directrice" },
  ],
  Etat: [
    { value: "", label: "Etat.." },
    { value: " Actif", label: " Actif" },
    { value: "Inactif", label: "Inactif" },
    { value: "MiseEnDispo", label: "MiseEnDispo" },
    { value: "FinFonction", label: "FinFonction" },
  ],
};

const SearchFilterBarEmp = () => {
  const [selectedFilterBy, setSelectedFilterBy] = useState("");
  const handleClick=()=>{
    console.log("hello") ;

  }
 
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" padding="1rem">
      <Select
        placeholder="Filtrer par..."
        value={selectedFilter}
        onChange={(e) => onSelectFilter(e.target.value)}
      >
        {FilterBy.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Valeur..."
        value={selectedFilterValue}
        onChange={(e) => onSelectFilterValue(e.target.value)}
      >
        {FilterValue[selectedFilter]?.map((value) => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};


export default SearchFilterBarEmp;
