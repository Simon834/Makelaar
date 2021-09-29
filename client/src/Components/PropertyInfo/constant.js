export function propertyInfoConstant() {
  const columnsContratList = [
    {
      field: "name",
      headerName: "Titulo",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "UserId",
      headerName: "Usuario",
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

  return { columnsContratList };
}
