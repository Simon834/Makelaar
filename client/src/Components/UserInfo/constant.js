export function userInfoConstant() {
  const columnsContratList = [
    {
      field: "name",
      headerName: "Titulo",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "PropId",
      headerName: "Propiedad",
      flex: 1.5,
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
      headerName: "Firma",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];

  return { columnsContratList };
}
