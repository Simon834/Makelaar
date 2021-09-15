import Button from "@material-ui/core/Button";




export function adminConstant(id, history) {
  
  
  const columnsUserList = [
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "Telefono",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "whatsapp",
      headerName: "WhatsApp",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      flex: 1,
      headerClassName: "super-app-theme--header",
    }
  ];

  const columnsPropertyList = [
    {
      field: "name",
      headerName: "Titulo",
      flex: 1.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "transaction",
      headerName: "Relación",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "address",
      headerName: "Dirección",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "type",
      headerName: "Tipo",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "price",
      headerName: "Precio",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "premium",
      headerName: "Destacado",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "contract",
      headerName: "Contratos",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.Contract?.id) {
          return (
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() =>
                  history.push(`/admin/${id}/editcontract/${params.row.id}`)
                }
              >
                Ver contrato
              </Button>
            </strong>
          );
        }
      },
    },
  ];

  const columnsContratList = [
    {
      field: "name",
      headerName: "Titulo",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "UserId",
      headerName: "Usuario",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "PropId",
      headerName: "Propiedad",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "startDate",
      headerName: "Inicio",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "endDate",
      headerName: "Fin",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "amount",
      headerName: "Monto",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "paymentDate",
      headerName: "Pago",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];

  return { columnsUserList, columnsPropertyList, columnsContratList };
}
