import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import "./DatatableScreen.css";

const DatatableScreen = () => {
  const [rows, setRows] = useState([
    { tratamiento: "PH", ph: "", tiempo: "", tds: "" },
  ]);
  const [sampleName, setSampleName] = useState("Vino 404");

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleSampleChange = (e) => {
    setSampleName(e.target.value);
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
            <option value="Vino 401">Yogurt 505</option>
            <option value="Vino 402">Yogurt 400</option>
            <option value="Vino 403">Yogurt 403</option>
            <option value="Vino 404">Vino 404</option>
            <option value="Vino 405">Vino 405</option>
            <option value="Vino 406">Vino 406</option>
          </select>
        </div>
      </header>

      <table className="datatable animated-table">
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
                  onChange={(e) => handleInputChange(index, "ph", e.target.value)}
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
                  onChange={(e) => handleInputChange(index, "tds", e.target.value)}
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
