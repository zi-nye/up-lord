import React from "react";
import FixedSidebar from "../Components/FixedSidebar";

function UserAdmin() {
  return (
    <div>
      <div>
        <FixedSidebar />
      </div>
      <div>
        <div>
          <div>
            <span>사용자명 :</span>
            <input />
          </div>
          <div>
            <span>사용자ID :</span>
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
          <button>검색</button>
        </div>
        <div>
          <table>
            <th>이름</th>
            <th>ID</th>
            <th>전화번호</th>
            <th>직책</th>
            <th>셀</th>
            <th>권한</th>
          </table>
        </div>
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

export default UserAdmin;
