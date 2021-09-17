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
    },
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

  const userReference = [
    { name: "Administrador", color: "super-app-theme--ocupado" },
  ];

  const propertyReference = [
    { name: "Activo", color: "super-app-theme--activo" },
    { name: "Destacado", color: "super-app-theme--destacado" },
    { name: "Ocupado", color: "super-app-theme--ocupado" },
    { name: "Eliminado", color: "super-app-theme--eliminado" },
  ];

  const contractReference = [
    { name: "Activo", color: "super-app-theme--activo" },
    { name: "Caducado", color: "super-app-theme--eliminado" },
  ];
  return {
    columnsUserList,
    columnsPropertyList,
    columnsContratList,
    userReference,
    propertyReference,
    contractReference,
  };
}
