import React from "react";
import FixedSidebar from "../Components/FixedSidebar";

function SystemCommonCodeAdmin() {
  return (
    <div>
      <div>
        <FixedSidebar />
      </div>
      <div>
        <div>
          <table>
            <th>코드명</th>
            <th>코드설명</th>
            <th>코드</th>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SystemCommonCodeAdmin;
