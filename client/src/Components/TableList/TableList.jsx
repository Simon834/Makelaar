import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {useHistory} from "react-router"

 

export default function TableList({columns, rows}) {
    const history= useHistory();
    const rowsMod=rows.map(e=>{
        
        if(e.isAdmin){
            return {...e,isAdmin:"Si"}
        }else{
            return {...e,isAdmin:"No", contract:"Ver contrato"}
        }
        
    })

      return (
        <div style={{ height: 500, width: '70vw' }}>
            <DataGrid

                onCellClick={(params, event) => {
                    if(params.field==="contract"){
                        history.push(`/user/:id/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
                    };
                }}
                
                rows={rowsMod}
                columns={columns}
                pageSize={10}
                
            />
            
        </div>

    )
}
