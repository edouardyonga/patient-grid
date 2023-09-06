import React from 'react';
import PatientGrid from './components/PatientsGrid';
import patientData from './patients.json';

function App() {
  return (
    <div className="App" style={{ margin: "25px" }}>
      <h1>Patient Grid</h1>
      <PatientGrid patientData={patientData.result.value[0]} />
    </div>
  );
}

export default App;
