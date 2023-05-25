import React, {useEffect, useState} from "react";
import FixedSidebar from "../Components/FixedSidebar";
import styles from "./AdminAuthority.module.css";
import {Api} from "../utils/Api";
import {useParams} from "react-router-dom";


/** List **/
function AttendanceListItem({item: {attendanceId, nthYear, cellName, memberIdx, memberName, attendanceYn}}) {
  const [isPresented, setIsPresented] = useState(attendanceYn === 'Y');
  const {date} = useParams();
  //TODO
  // 1. attendanceYn에 따라 버튼 달리하기
  // 2. 버튼 이벤트 달기 (API 호출)
  const onPresent = async function (event) {

    const res = await Api.put(`/attendance`, {memberIdx, attendanceDate: date});
    if (res.data.result) {
      setIsPresented(true);
    }

  }

  const onCancel = async function (event) {

    const res = await Api.put(`/attendance/cancel`, {memberIdx, attendanceDate: date});
    console.log(res);
    if (res.data.result) {
      setIsPresented(false);
    }

    console.log(res);
  }


  return (
      <tr>
        <td>{nthYear}</td>
        <td>{cellName}</td>
        <td><b>{memberName}</b></td>
        <td>
          <button onClick={isPresented ? onCancel : onPresent}>{isPresented ? "취소" : "출석"}</button>
        </td>
      </tr>
  );
}

function AttendanceList({list}) {

  return (
      <div className={styles.tableDiv}>
        <table>
          <thead>
          <tr>
            <th>기수</th>
            <th>셀</th>
            <th>이름</th>
            <th>버튼</th>
          </tr>
          </thead>
          <tbody>
          {list.map((item) =>
              <AttendanceListItem key={item['attendanceId']} item={item}/>
          )}
          </tbody>
        </table>
      </div>
  )
}


/** PAGE **/
function Attendance() {
  const {date} = useParams();
  const [attendanceList, setAttendanceList] = useState([]);

  const getAttendanceList = async () => {
    try {
      const res = await Api.get('/attendance', {date});

      setAttendanceList(res.data);
    } catch (e) {
      //TODO 에러 바운더리?
    }
  };

  const onCreateBtnClick = async (event) => {
    const res = await Api.post('/attendance', {attendanceDate: date});
    console.log(res);

    await getAttendanceList();
  }

  useEffect(() => {
    getAttendanceList();
  }, []);

  return (
      <div>
        <h1>출석부</h1>
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <FixedSidebar/>
          </div>
          <div className={styles.contents}>
            {attendanceList.length ?
                <>
                  <div className={styles.searching}>
                    <div className={styles.searching_}>
                      <span>계정 :&nbsp;</span>
                      <input/>
                    </div>
                    <div className={styles.searching_}>
                      <button>검색</button>
                    </div>
                  </div>
                  <AttendanceList list={attendanceList}/>
                </>
                :
                <button onClick={onCreateBtnClick}>
                  출석부 생성
                </button>
            }

          </div>
        </div>
      </div>
  );
}

export default Attendance;
