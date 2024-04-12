import RegisterPageTable  from "./RegisterPageTable";
import RegisterationPageForm  from "./RegisterationPageForm";
import React from "react";
import "../Styles/neonEffect.css";

export default function RegisterationPage() {
    return(
    <React.Fragment>
        <div className="headerText"></div>
        <RegisterPageTable />
        <RegisterationPageForm />
    </React.Fragment>
    )
}