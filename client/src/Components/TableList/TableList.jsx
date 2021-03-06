import React from "react";
import { DataGrid, esES } from "@material-ui/data-grid";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { RowClassName, rowData, CellClassName } from "./functions";

const defaultTheme = createTheme({
  palette: {
    activo: "#c0dbb2",
    ocupado: "#F0E5D0",
    eliminado: "#EFCBE2",
    destacado: "#D7D3EB",
    header: "#E5E4E4",
    rechazado: "#c0b7a6",
    modificado: "#98b9e3",
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
        "& .super-app-theme--rechazado": {
          backgroundColor: theme.palette.rechazado,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },
        "& .super-app-theme--modificado": {
          backgroundColor: theme.palette.modificado,
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

        "& .super-app-theme--negativenumber": {
          color: "red",
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
    if (params.row.endDate && user) {
      history.push(`/user/${id}/editcontract/${params.row.id}`);
    } else if (params.row.endDate && params.field !== "UserId") {
      history.push(`/admin/${id}/editcontract/${params.row.id}`);
    } else if (params.row.price && params.field !== "contract") {
      history.push(`/admin/${id}/editproperty/${params.row.id}`);
    } else if (params.row.email) {
      history.push(`/admin/${id}/user/${params.row.id}`);
    } else if (params.field === "UserId") {
      history.push(`/admin/${id}/user/${params.row.User.id}`);
    } else if (params.field === "User" && params.row.UserId) {
      history.push(`/admin/${id}/user/${params.row.UserId}`);
    } else if (params.field === "Contract" && params.row.ContractId) {
      history.push(`/admin/${id}/editcontract/${params.row.ContractId}`);
    }
  }

  return (
    <div style={{ height: "80vh", width: "100%" }} className={classes.root}>
      <div className={classes.ref}>
        {reference?.map((e) => (
          <div className={e.color} style={{ padding: "4px" }} key={e.name}>
            {e.name}
          </div>
        ))}
      </div>
      <DataGrid
        onCellClick={handleRoutes}
        rows={rowsMod}
        columns={columns}
        autoPageSize={true}
        localeText={esES.props.MuiDataGrid.localeText}
        getRowClassName={RowClassName}
        getCellClassName={CellClassName}
      />
    </div>
  );
}
