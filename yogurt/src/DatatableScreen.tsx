import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import "./DatatableScreen.css";
import DropdownMenu from "./DropdownMenu.tsx";

const DatatableScreen = () => {
  const [rows, setRows] = useState([
    { tratamiento: "PH", ph: "", tiempo: "", tds: "" },
  ]);
  const [sampleName, setSampleName] = useState("Vino 404");
  const [samples, setSamples] = useState([
    "Yogurt 505",
    "Yogurt 400",
    "Yogurt 403",
    "Vino 404",
    "Vino 405",
    "Vino 406",
  ]);
  const [newSampleName, setNewSampleName] = useState("");

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleSampleChange = (e) => {
    setSampleName(e.target.value);
  };

  const handleNewSampleNameChange = (e) => {
    setNewSampleName(e.target.value);
  };

  const addSample = () => {
    if (newSampleName.trim() && !samples.includes(newSampleName)) {
      setSamples([...samples, newSampleName]);
      setNewSampleName("");
    }
  };

  const addRow = () => {
    setRows([...rows, { tratamiento: "", ph: "", tiempo: "", tds: "" }]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const saveAsExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja de Datos");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, `${sampleName}.xlsx`);
  };

  return (
    <div className="datatable-container">
      <DropdownMenu/>
      <header className="datatable-header">
        <h1 className="datatable-title">HOJA DE DATOS</h1>
        <div className="sample-selector">
          <label htmlFor="sample-select">Seleccione la muestra:</label>
          <select
            id="sample-select"
            className="sample-dropdown"
            value={sampleName}
            onChange={handleSampleChange}
          >
            {samples.map((sample, index) => (
              <option key={index} value={sample}>
                {sample}
              </option>
            ))}
          </select>
        </div>
        <div className="add-sample">
          <input
            type="text"
            className="input-field"
            placeholder="Nueva muestra"
            value={newSampleName}
            onChange={handleNewSampleNameChange}
          />
          <button className="add-sample-button" onClick={addSample}>
            Agregar Muestra
          </button>
        </div>
      </header>

      <div className="datatable">
        <table className="animated-table">
          <thead>
            <tr>
              <th>TRATAMIENTO</th>
              <th>PH</th>
              <th>TIEMPO</th>
              <th>TDS</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Tratamiento"
                    value={row.tratamiento}
                    onChange={(e) =>
                      handleInputChange(index, "tratamiento", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="PH"
                    value={row.ph}
                    onChange={(e) =>
                      handleInputChange(index, "ph", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Tiempo"
                    value={row.tiempo}
                    onChange={(e) =>
                      handleInputChange(index, "tiempo", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="TDS"
                    value={row.tds}
                    onChange={(e) =>
                      handleInputChange(index, "tds", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    className="action-button delete"
                    onClick={() => deleteRow(index)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="datatable-footer">
        <button className="add-treatment-button" onClick={addRow}>
          Agregar Tratamiento
        </button>
        <button className="save-all-button" onClick={saveAsExcel}>
          Descargar Excel
        </button>
      </footer>
    </div>
  );
};

export default DatatableScreen;
