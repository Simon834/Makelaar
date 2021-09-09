import React from "react";
import NewContractForm from "../../Components/FormContract/FormContract";
import ViewBase from "../ViewBase/view-base";

export default function VierwRegister() {
  return (
    <div>
      <ViewBase content={<NewContractForm />} />
    </div>
  );
}
