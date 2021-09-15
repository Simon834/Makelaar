import React, { useState, useEffect } from 'react'
import { DataGrid,esES } from '@material-ui/data-grid';
import {useHistory} from "react-router"
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/styles';
import { createTheme, darken, lighten } from '@material-ui/core/styles';


  
  const defaultTheme = createTheme();
  const useStyles = makeStyles(
    (theme) => {
        
      return {
        root: {
          '& .super-app-theme--activo': {
            backgroundColor: theme.palette.success.light,
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          },
          '& .super-app-theme--ocupado': {
            backgroundColor: theme.palette.warning.light,
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          },
          '& .super-app-theme--eliminado': {
            backgroundColor: theme.palette.error.light,
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          },
          
          '& .super-app-theme--destacado': {
            backgroundColor: theme.palette.primary.light,
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          },
          '& .super-app-theme--white': {
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          },

          '& .super-app-theme--header': {
            backgroundColor: theme.palette.primary.light,
            
          },
        },
        header:{ 
          backgroundColor: theme.palette.primary.light,
          }
      };
    },
     { defaultTheme },
  );
 

export default function TableList({columns, rows, user}) {
    const classes = useStyles();
    const history= useHistory();
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
        <div style={{ height: 500 }} className={classes.root}>
            <DataGrid

                onCellClick={(params, event) => {
                    
                    if(params.field==="contract" && user){
                        history.push(`/user/${id}/editcontract/${params.row.id}`)//aqui va la ruta de cada usuario en la seccion contratos
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
                localeText={esES.props.MuiDataGrid.localeText}
                getRowClassName={(params) =>{
                    if(params.row.isAdmin==="Si"){
                        return `super-app-theme--ocupado`
                    } 
                    if(params.row.Contract?.id && params.row.status === "activo"){
                        return `super-app-theme--ocupado`
                    } 
                    else if(params.row.premium && params.row.status === "activo"){return `super-app-theme--destacado`}
                    else if(params.row.status){return `super-app-theme--${params.row.status}`}
                    else{return `super-app-theme--white`}

                }
                  }
                     
            />
            
        </div>

    )
}
