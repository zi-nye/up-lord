import React, {useEffect, useState} from "react";
import FixedSidebar from "../Components/FixedSidebar";
import styles from "./AdminAuthority.module.css";
import {Api} from "../utils/Api";


/** List **/
function AuthorityListItem({item: {userId, userEmail, username, useYn}, onSelect}) {
  return (
      <tr>
        <td><input onChange={onSelect} value={userId} type="checkbox"/></td>
        <td>{userEmail}</td>
        <td>{username}</td>
        <td>{useYn}</td>
      </tr>
  );
}

function AuthorityList({onSelect}) {
  const [authorityList, setAuthorityList] = useState([]);

  useEffect(() => {
    const getAuthorityList = async () => {
      try {
        const res = await Api.get('/sysManage/userManage');

        console.log(res);
        setAuthorityList(res.data);

      } catch (e) {
        //TODO 에러 바운더리?
      }
    };

    getAuthorityList();
  }, []);

  return (
      <div className={styles.tableDiv}>
        <table>
          <thead>
          <tr>
            <th></th>
            <th>계정</th>
            <th>아이디</th>
            <th>권한</th>
          </tr>
          </thead>
          <tbody>
          {authorityList.map((item) =>
              <AuthorityListItem key={item['userId']} item={item} onSelect={onSelect}/>
          )}
          </tbody>
        </table>
      </div>
  )
}


/** PAGE **/
function Attendance() {

  const [userIds, setUserIds] = useState([]);

  const updateUserAuthority = async (userIds, useYn) => {
    const data = userIds.map((userId) => ({
      userId: userId,
      useYn: useYn,
    }));

    const res = await Api.put('/sysManage/userManage', data);
  };


  const onItemSelect = (e) => {
    if(e.target.checked) {
      setUserIds([...userIds, e.target.value]);
    } else {
      setUserIds(userIds.filter((id) => id !== e.target.value));
    }
  }

  const onSaveButtonClick = async (e) => {
    const useYn = e.target.value
    await updateUserAuthority(userIds, useYn)
  }


  return (
      <div>
        <h1>출석부</h1>
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <FixedSidebar/>
          </div>
          <div className={styles.contents}>
            <div className={styles.searching}>
              <div className={styles.searching_}>
                <span>계정 :&nbsp;</span>
                <input/>
              </div>
              <div className={styles.searching_}>
                <button>검색</button>
              </div>
            </div>
            <AuthorityList onSelect={onItemSelect}/>
            <div className={styles.saving}>
              <div>
                <button onClick={onSaveButtonClick} value="Y">권한 부여</button>
                <button onClick={onSaveButtonClick} value="N">권한 취소</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Attendance;
