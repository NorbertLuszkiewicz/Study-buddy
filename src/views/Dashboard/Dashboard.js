import React, { useState } from 'react';
import { Header } from 'components/atoms/Header/Header.js';
import { Wrapper, SelectStyled, FlexBox, StyledViewWrapper } from './Dashboard.styles.js';
import { useAuth } from 'hooks/useAuth.js';
import StudentList from 'components/organisms/StudentList/StudentList.js';
import OptionsBox from 'components/organisms/OptionsBox/OptionsBox.js';
import GradeList from 'components/organisms/GradeList/GradeList.js';

const Dashboard = () => {
  const { user } = useAuth();
  const options = user.classes
    .map((className) => {
      return { value: className, label: className };
    })
    .sort((a, b) => {
      if (a.value > b.value) return 1;
      if (a.value < b.value) return -1;
      return 0;
    });
  const [selectedClasses, setSelectedClasses] = useState(options[0]);

  if (user.classes?.length === 0) {
    return (
      <Wrapper>
        <Header>You have no class assigned</Header>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <FlexBox style={{ flexDirection: 'row' }}>
        <Header>{selectedClasses.value}</Header>
        <SelectStyled
          classNamePrefix="Select"
          value={{ value: selectedClasses.value, label: 'Change class' }}
          options={options}
          onChange={setSelectedClasses}
        />
      </FlexBox>
      <FlexBox align={'flex-start'}>
        <StyledViewWrapper isLong>
          {user.isTeacher ? (
            <StudentList name={selectedClasses.value}></StudentList>
          ) : (
            <GradeList name={selectedClasses.value}></GradeList>
          )}
        </StyledViewWrapper>
        {user.isTeacher && <OptionsBox className={selectedClasses.value} />}
      </FlexBox>
    </Wrapper>
  );
};

export default Dashboard;
