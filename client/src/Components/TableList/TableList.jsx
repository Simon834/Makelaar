import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@material-ui/data-grid";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { RowClassName, rowData } from "./functions";

const defaultTheme = createTheme({
  palette: {
    activo: "#C4D7F0",
    ocupado: "#F0E5D0",
    eliminado: "#EFCBE2",
    destacado: "#D7D3EB",
    header: "#E5E4E4",
  },
});
const useStyles = makeStyles(
  (theme) => {
    return {
      root: {
        "& .super-app-theme--activo": {
          backgroundColor: theme.palette.activo,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },
        "& .super-app-theme--ocupado": {
          backgroundColor: theme.palette.ocupado,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },
        "& .super-app-theme--eliminado": {
          backgroundColor: theme.palette.eliminado,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },

        "& .super-app-theme--destacado": {
          backgroundColor: theme.palette.destacado,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },
        "& .super-app-theme--white": {
          backgroundColor: theme.palette.background.paper,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },

        "& .super-app-theme--header": {
          backgroundColor: theme.palette.header,
        },
      },
      ref: {
        display: "flex",
      },
      header: {
        backgroundColor: theme.palette.primary.light,
      },
    };
  },
  { defaultTheme }
);

export default function TableList({ columns, rows, user, reference }) {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  const rowsMod = rowData(rows, user);

  function handleRoutes(params, event) {
    if (params.field === "contract" && user) {
      history.push(`/user/${id}/editcontract/${params.row.id}`);
    } else if (params.row.endDate && params.field !== "UserId") {
      history.push(`/admin/${id}/editcontract/${params.row.id}`);
    } else if (params.row.price && params.field !== "contract") {
      history.push(`/admin/${id}/editproperty/${params.row.id}`);
    } else if (params.row.email || params.field === "UserId") {
      history.push(`/admin/${id}/user/${params.row.id}`);
    } else if (params.field === "UserId") {
      history.push(`/admin/${id}/user/${params.row.User.id}`);
    }
  }

  return (
    <div style={{ height: 500, width: "100%" }} className={classes.root}>
      <div className={classes.ref}>
        {reference?.map((e) => (
          <div className={e.color} style={{ padding: "4px" }}>
            {e.name}
          </div>
        ))}
      </div>
      <DataGrid
        onCellClick={handleRoutes}
        rows={rowsMod}
        columns={columns}
        pageSize={10}
        localeText={esES.props.MuiDataGrid.localeText}
        getRowClassName={RowClassName}
      />
    </div>
  );
}
