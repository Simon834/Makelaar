import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {useHistory} from "react-router"

 

export default function TableList({columns, rows}) {
    const history= useHistory();
    console.log("contratos",rows)
    const rowsMod=rows.map(e=>{
        let newrow = e
        if(e.isAdmin){
            newrow = {...newrow,isAdmin:"Si"}
        }else{
            newrow = {...newrow,isAdmin:"No", contract:"Ver contrato"}
        }

        if(e.User){
            newrow = {...newrow,UserId:e.User.name}
        }

        if(e.Property){
            newrow = {...newrow,PropId:e.Property.name}
        }


        return newrow
    })

      return (
        <div style={{ height: 500, width: '70vw' }}>
            <DataGrid

                onCellClick={(params, event) => {
                    if(params.field==="contract"){
                        history.push(`/user/:id/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
                    };
                    if(params.field==="premium"){
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
