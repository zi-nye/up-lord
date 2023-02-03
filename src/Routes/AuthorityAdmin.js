import React from "react";
import FixedSidebar from "../Components/FixedSidebar";

function AuthorityAdmin() {
  return (
    <div>
      <div>
        <FixedSidebar />
      </div>
      <div>
        <div>
          <table>
            <th>순서</th>
            <th>권한명</th>
            <tr>
              <td>1</td>
              <td>개발자</td>
            </tr>
            <tr>
              <td>2</td>
              <td>목사님</td>
            </tr>
            <tr>
              <td>3</td>
              <td>운영위</td>
            </tr>
            <tr>
              <td>4</td>
              <td>셀장</td>
            </tr>
          </table>
        </div>
        <div>
          <span>전체메뉴</span>
          <table>
            <th>check</th>
            <th>메뉴명</th>
          </table>
        </div>
        <div>
          <div>화살표 왼쪽</div>
          <div>화살표 오른쪽</div>
        </div>
        <div>
          <span>권한메뉴</span>
          <table>
            <th>check</th>
            <th>메뉴명</th>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AuthorityAdmin;
