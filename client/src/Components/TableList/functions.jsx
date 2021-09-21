export function RowClassName(params) {
  if (params.row.endDate) {
    const date = new Date();
    const rowEndDate = new Date(params.row.endDate);
    if (rowEndDate < date) {
      return `super-app-theme--eliminado`;
    } else {
      return `super-app-theme--activo`;
    }
  }
  if (params.row.isAdmin === "Si") {
    return `super-app-theme--ocupado`;
  }
  
  if (params.row.status === "Pago") {
    return `super-app-theme--activo`;
  }
  if (params.row.status === "Liquidación") {
    return `super-app-theme--eliminado`;
  }

  if (params.row.Contract?.id && params.row.status === "activo") {
    return `super-app-theme--ocupado`;
  } else if (params.row.premium && params.row.status === "activo") {
    return `super-app-theme--destacado`;
  } else if (params.row.status) {
    return `super-app-theme--${params.row.status}`;
  } else {
    return `super-app-theme--white`;
  }

}

export function rowData(rows, user) {
  const newrow = rows?.map((e) => {
    let newrow = e;

    if (e.isAdmin) newrow = { ...newrow, isAdmin: "Si" };
    if (!e.isAdmin) newrow = { ...newrow, isAdmin: "No" };
    if (e.Contracts || e.Contract)
      newrow = { ...newrow, contract: "Ver contrato" };
    if (e.User) newrow = { ...newrow, UserId: e.User.name };
    if (e.Property) newrow = { ...newrow, PropId: e.Property.name };
    if (e.premium) newrow = { ...newrow, premium: "Destacado" };
    if (!e.premium) newrow = { ...newrow, premium: "" };
    if (e.startDate && user) newrow = { ...newrow, contract: "Ver contrato" };
    if (e.Contract?.name)
      newrow = {
        ...newrow,
        Contract: e.Contract.name,
        ContractId: e.Contract.id,
      };
    if (e.User?.name)
      newrow = { ...newrow, User: e.User.name, UserId: e.User.id };

    if (e.status === "approved") newrow = { ...newrow, status: "Pago" };
    if (e.date) newrow = { ...newrow, date: new Date(e.date).toLocaleDateString() };
    if (e.amount) newrow= {...newrow, amount:`$ ${e.amount}`}

    return newrow;
  });
  return newrow;
}
