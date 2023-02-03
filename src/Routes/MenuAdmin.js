import React from "react";
import FixedSidebar from "../Components/FixedSidebar";

function MenuAdmin() {
  return (
    <div>
      <div>
        <FixedSidebar />
      </div>
      <div>
        <div>
          <table>
            <th>메뉴명</th>
            <th>메뉴설명</th>
            <th>URL</th>
          </table>
        </div>
      </div>
      <div>
        <div>
          <div>
            <span>*사용자명 :</span>
            <input />
          </div>
          <div>
            <span>*사용자ID :</span>
            <input />
          </div>
          <div>
            <span>직책 :</span>
            <input />
          </div>
          <div>
            <span>셀 명 :</span>
            <input />
          </div>
          <div>
            <span>전화번호 :</span>
            <input />
          </div>
          <div>
            <span>권한 :</span>
            <input />
          </div>
        </div>
        <div>
          <button>저장</button>
        </div>
      </div>
    </div>
  );
}

export default MenuAdmin;
