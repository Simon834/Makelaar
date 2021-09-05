import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';

export default function TableList({columns, rows}) {
    const rowsMod=rows.map(e=>{
        if(e.isAdmin){
            return {...e,isAdmin:"Si"}
        }else{
            return {...e,isAdmin:"No"}
        }
    })

      return (
        <div style={{ height: 500, width: '70vw' }}>
            <DataGrid
                rows={rowsMod}
                columns={columns}
                pageSize={10}
            />
        </div>
    )
}
