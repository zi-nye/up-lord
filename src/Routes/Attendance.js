import React, {useEffect, useState} from "react";
import {Api} from "../utils/Api";
import {useParams} from "react-router-dom";
import {Button, Container, Form, InputGroup, Table} from "react-bootstrap";


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
      <Table>
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
      </Table>
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
      <Container>
        <h1>출석부</h1>
        {attendanceList.length ?
            <>
              <InputGroup className="mb-3">
                <Form.Control
                    placeholder="계정 검색하기"
                    aria-describedby="basic-addon2"
                />
                {/* TODO 검색 API 추가 */}
                <Button variant="outline-secondary" id="button-addon2">
                  검색
                </Button>
              </InputGroup>
              <AttendanceList list={attendanceList}/>
            </>
            :
            <Button onClick={onCreateBtnClick} variant="outline-primary">출석부 생성</Button>
        }

      </Container>
  );
}

export default Attendance;
