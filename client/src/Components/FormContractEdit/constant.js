export function contractEditConstant(id, history) {
  const columnsPaymentList = [
    {
      field: "idPay",
      headerName: "N° Pago",
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
      field: "status",
      headerName: "Estado",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "createdAt",
      headerName: "Fecha",
      flex: 1,
      headerClassName: "super-app-theme--header",
    }

  ];

  const userReference = [
    { name: "Administrador", color: "super-app-theme--ocupado" }
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
    columnsPaymentList,

  };
}
