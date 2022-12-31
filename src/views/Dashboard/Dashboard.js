import React, { useState } from 'react';
import { Header } from 'components/atoms/Header/Header.js';
import { Wrapper, SelectStyled, FlexBox } from './Dashboard.styles.js';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { useAuth } from 'hooks/useAuth.js';
import StudentList from 'components/organisms/StudentList/StudentList.js';
import OptionsBox from 'components/molecules/OptionsBox/OptionsBox.js';

const Root = () => {
  const { user } = useAuth();
  const options = user.classes.map((className) => {
    return { value: className, label: className };
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
      <FlexBox>
        <Header>{selectedClasses.value}</Header>
        <SelectStyled
          classNamePrefix="Select"
          value={{ value: selectedClasses.value, label: 'Change class' }}
          options={options}
          onChange={setSelectedClasses}
        />
      </FlexBox>
      <FlexBox align={'flex-start'}>
        <ViewWrapper isLong style={{ marginRight: '0' }}>
          <StudentList name={selectedClasses.value}></StudentList>
        </ViewWrapper>
        <OptionsBox className={selectedClasses.value} />
      </FlexBox>
    </Wrapper>
  );
};

export default Root;
