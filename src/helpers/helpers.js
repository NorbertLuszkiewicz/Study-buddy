export const getSubjectsOptions = (subjects, className) => {
  if (!subjects) return;
  if (className) subjects = subjects.filter((x) => x.class === className);

  const subjectList = subjects
    .map((subject) => {
      return { value: subject.name, label: subject.name };
    })
    .sort((a, b) => {
      if (a.value > b.value) return 1;
      if (a.value < b.value) return -1;
      return 0;
    });

  return subjectList;
};

export const calcGradeAverage = (subjects, className, subjectName) => {
  let gradeAverage = '-';
  subjects.forEach((subject) => {
    if (subject.class === className && subject.name === subjectName && subject.grades.length !== 0) {
      const gradeSum = subject.grades.reduce((acc, grade) => acc + grade.value, 0);
      gradeAverage = (gradeSum / subject.grades.length).toFixed(2);
    }
  });

  return gradeAverage;
};

export const getGradeOptions = () => {
  const grades = [
    { value: 1, label: '1' },
    { value: 1.5, label: '1+' },
    { value: 1.75, label: '2-' },
    { value: 2, label: '2' },
    { value: 2.5, label: '2+' },
    { value: 2.75, label: '3-' },
    { value: 3, label: '3' },
    { value: 3.5, label: '3+' },
    { value: 3.75, label: '4-' },
    { value: 4, label: '4' },
    { value: 4.5, label: '4+' },
    { value: 4.75, label: '5-' },
    { value: 5, label: '5' },
    { value: 5.5, label: '5+' },
    { value: 5.75, label: '6-' },
    { value: 6, label: '6' },
  ];

  return grades;
};
