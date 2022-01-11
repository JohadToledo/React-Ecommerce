import React from "react";
import { Spinner } from "reactstrap";

export default function Loader() {
  return (
    <div className="spine">
      <div className="row vh-50 m-0 text-center aling-items-center justify-content-center">
        <Spinner color="dark" />
      </div>
    </div>
  );
}
