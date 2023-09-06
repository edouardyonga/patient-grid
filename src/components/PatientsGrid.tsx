import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { PatientGridProps } from '../types/PatientData';

const columns = [
    { field: 'ID', headerName: 'ID', width: 60, editable: false, sortable: true },
    { field: 'SURNAME', headerName: 'Surname', width: 150, editable: true, sortable: false },
    { field: 'OTHERNAMES', headerName: 'Other Names', width: 150, editable: true, sortable: false },
];

const initialColumns = columns.map((col) => ({
    ...col,
    visible: true,
    draggable: true,
    sortable: true

}));

const PatientGrid: React.FC<PatientGridProps> = ({ patientData }) => {
    const [gridColumns, setGridColumns] = useState(initialColumns);

    const handleColumnVisibilityChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedColumns = gridColumns.map((col) => {
            if (col.field === field) {
                return {
                    ...col,
                    visible: event.target.checked,
                };
            }
            return col;
        });

        setGridColumns(updatedColumns);
    };

    return (
        <div>
            <div>
                {gridColumns.map((col) => (
                    <FormControlLabel
                        key={col.field}
                        control={
                            <Checkbox
                                checked={col.visible}
                                onChange={handleColumnVisibilityChange(col.field)}
                            />
                        }
                        label={col.headerName}
                    />
                ))}
            </div>
            <div className="ag-theme-alpine mx-auto" style={{ height: 400, maxWidth: '30%' }}>
                <AgGridReact
                    rowData={patientData}
                    columnDefs={gridColumns.filter((col) => col.visible) as any}
                    suppressDragLeaveHidesColumns={true}
                    defaultColDef={{
                        editable: true,
                    }}
                />
            </div>
        </div>
    );
};

export default PatientGrid;
