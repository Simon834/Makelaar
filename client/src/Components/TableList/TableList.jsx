import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {useHistory} from "react-router"
import { useParams } from 'react-router';

 

export default function TableList({columns, rows, user}) {
    const history= useHistory();
    console.log("contratos",rows)
    const {id}=useParams()
    const rowsMod=rows.map(e=>{
        let newrow = e
        
        if(e.isAdmin) newrow = {...newrow,isAdmin:"Si"}
        if(!e.isAdmin) newrow = {...newrow,isAdmin:"No"}    
        if(e.Contracts || e.Contract ) newrow = {...newrow,contract:"Ver contrato"}    
        if(e.User) newrow = {...newrow, UserId:e.User.name}
        if(e.Property) newrow = {...newrow,PropId:e.Property.name}
        if(e.premium) newrow = {...newrow,premium: "Destacado"}
        if(!e.premium) newrow = {...newrow,premium: ""}
        if(e.startDate && user ) newrow = {...newrow,contract:"Ver contrato"}    
        
        return newrow
    })

      return (
        <div style={{ height: 500, width: '70vw' }}>
            <DataGrid

                onCellClick={(params, event) => {
                    console.log(params)
                    if(params.field==="contract" && user){
                        history.push(`/user/${id}/editcontract/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
                    }
                    if(params.field==="contract" && !user){
                        history.push(`/admin/${id}/editcontract/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
                    }
                    else if(params.row.User){
                        history.push(`/admin/${id}/editcontract/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
                    }
                    else if(params.row.price){
                        history.push(`/admin/${id}/editproperty/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
                    };
                }}
                
                rows={rowsMod}
                columns={columns}
                pageSize={10}
                     
            />
            
        </div>

    )
}
