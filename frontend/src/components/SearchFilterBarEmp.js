
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


];

const FilterValue  = {
  Collectif: [
    { value: "", label: "Collectif.." },
    { value: "01", label: "SIEGE" },
    { value: "02", label: "ANTENNES  LOCALES" },
  ],
  Unite : [
    { value: "", label: "Unite.." },
    { value: "01", label: "ADRAR" },
    { value: "02", label: "CHLEF" },
    { value: "03", label: "LAGHOUAT" },
    { value: "04", label: "OUM E -BOUAGHI" },
    { value: "05", label: "BATNA" },
    { value: "06", label: "BISKRA" },
    { value: "07", label: "BECHAR" },
    { value: "08", label: "BLIDA" },
    { value: "09", label: "BOUIRA" },
    { value: "10", label: "TAMANRASSET" },
    { value: "11", label: "TEBESSA" },
    { value: "12", label: "TLEMCEN" },
    { value: "13", label: "TIARET" },
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
    { value: " 01", label: " Ingenieur" },
    { value: " 02", label: "Agent Securite" },
    { value: "03", label: "DGRH" },
    { value: " 04", label: "Agent Protection" },
    { value: " 05", label: "Financier" },
  ],

};
const SearchFilterBarEmp = ({ onFilter }) => {
  const [selectedFiltre, setSelectedFiltre] = useState("");
  const [selectedValue, setSelectedValue] = useState(""); // Add this line

  const handleClick = () => {
    // Collect the selected filter values
    const selectedFilter = {
      filtre: selectedFiltre,
      value: selectedValue,
    };

    // Pass the selected filter values to the onFilter callback
    onFilter(selectedFilter);
  };

  // ... Rest of your component

  return (
    <div className="filtrage">
      <Formik
        initialValues={{ filtre: "", value: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field as="select" name="filtre" className="FilterBy" onClick={(e) => setSelectedFiltre(e.target.value)}>
              {FilterBy.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </Field>
            <Field as="select" name="value" className="FilterValue" onClick={(e) => setSelectedValue(e.target.value)}>
              {selectedFiltre ? FilterValue[selectedFiltre].map((fv) => (
                <option key={fv.value} value={fv.value}>
                  {fv.label}
                </option>
              )) : null}
            </Field>
            <button
              type="button" // Change the type to "button" to prevent form submission
              disabled={isSubmitting}
              onClick={handleClick} // Call handleClick on button click
              className="btnsubmit"
            >
              Filtrer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchFilterBarEmp;