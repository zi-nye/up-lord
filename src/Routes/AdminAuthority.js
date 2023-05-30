import React, {useEffect, useState} from "react";
import {Api} from "../utils/Api";
import {Table, Form, Button, InputGroup, Container, ButtonGroup, Row, Col} from "react-bootstrap";


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
        //TODO.md 에러 바운더리?
      }
    };

    getAuthorityList();
  }, []);

  return (
      <Table striped bordered hover>
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
      </Table>
  )
}


/** PAGE **/
function AdminAuthority() {
  //TODO.md:
  // 2. 검색
  // 3. 페이징
  // 4. PUT 호출
  // 5. 권한 부여 / 권한 취소 식으로 버튼을 바꾸자.

  const [userIds, setUserIds] = useState([]);

  const updateUserAuthority = async (userIds, useYn) => {
    const data = userIds.map((userId) => ({
      userId: userId,
      useYn: useYn,
    }));

    const res = await Api.put('/sysManage/userManage', data);
  };


  const onItemSelect = (e) => {
    if (e.target.checked) {
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
      <Container>
        <h1>권한관리</h1>
        <Row className="justify-content-center" >
          <Col lg>
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
            <AuthorityList onSelect={onItemSelect}/>
            <ButtonGroup>
              <Button onClick={onSaveButtonClick} value="Y" variant="outline-primary">권한 부여</Button>
              <Button onClick={onSaveButtonClick} value="N" variant="outline-danger">권한 취소</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
  );
}

export default AdminAuthority;
