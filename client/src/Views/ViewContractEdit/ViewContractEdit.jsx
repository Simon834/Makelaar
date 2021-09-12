import React from "react";
import ContractFormEdit from "../../Components/FormContractEdit/FormContractEdit";
import ViewBase from "../ViewBase/view-base";

export default function ViewContractedit() {
  return (
    <div>
      <ViewBase content={<ContractFormEdit />} />
    </div>
  );
}
