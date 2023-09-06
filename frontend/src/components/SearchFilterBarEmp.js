
import React, { useState } from 'react';
import { Box, Select } from '@chakra-ui/react'; 
import { Formik, Form, Field } from "formik";
import '../style/SearchFilterEmp.css'




const FilterBy = [
  { value: "", label: "FilterBy.." },
  { value: "Collectif", label: "Collectif.." },
  { value: "Unite", label: "Unite" },
  { value: "Structure", label: "Structure" },
  { value: "Status", label: "Status" },
  { value: "PosteTravail", label: "PosteTravail" },
  { value: "Etat", label: "Etat" },

];

const FilterValue  = {
  Collectif: [
    { value: "", label: "FilterValue.." },
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
  const [selectedFiltre, setSelectedFiltre] = useState("");
  const [selected, setSelected] = useState("");
  const handleClick=()=>{
    console.log("hello") ;

  }

  return (
    <div className="filtrage">

  <Formik
    initialValues={{Collectif: "", Unite: "" , Structure :"", Status :"", PosteTravail :"", Etat :""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field as="select" name="f" className="FilterBy" onClick={(e) => setSelectedFiltre(e.target.value)}
        >
          {FilterBy.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </Field>
        <Field as="select" name="fv" className="FilterValue" >
          {selectedFiltre? FilterValue[selectedFiltre].map((fv) => (
            <option key={fv.value} value={fv.value}>
              {fv.label}
            </option>
          )) : null }
        </Field>
        <button type="submit" disabled={isSubmitting} onClick={handleClick} className="btnsubmit">
          Filtrer
        </button>
      </Form>
    )}
  </Formik>

  </div>
  );
};


export default SearchFilterBarEmp;
