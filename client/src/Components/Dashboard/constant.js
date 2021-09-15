import Button from "@material-ui/core/Button";

export function dashConstant(id, history) {
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
          field: "address",
          headerName: "Dirección",
          flex: 1,
          headerClassName: "super-app-theme--header",
        },
        {
          field: "price",
          headerName: "$",
          flex: 0.6,
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
            field: "PropId",
            headerName: "Propiedad",
            flex: 1,
            headerClassName: "super-app-theme--header",
          },
          {
              field: "UserId",
              headerName: "Usuario",
              flex: 1,
              headerClassName: "super-app-theme--header",
            },
      ];
    
      return { columnsUserList, columnsPropertyList, columnsContratList };
}