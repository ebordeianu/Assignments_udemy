import { ChangeEvent, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import StudentsWith70AndBelow from '../StudentsWith70AndBelow';
import StudentsWith90AndAbove from '../StudentsWith90AndAbove';
import { StudentGradeDetails } from './interface';
import './style.css';

export default function StudentGrade() {
  const [students, setStudents] = useState<StudentGradeDetails[]>([
    {
      studentName: 'Darius',
      grade: 100,
    },
    {
      studentName: 'Vlad',
      grade: 80,
    },
    {
      studentName: 'Carl',
      grade: 50.5,
    },
  ]);

  const [name, setName] = useState<string>('');
  const [grade, setGrade] = useState<number>(0);
  const [errMsgName, setErrMsgName] = useState<string>();
  const [errMsgGrade, setErrMsgGrade] = useState<string>();
  const [clickable, setClickable] = useState(false);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (String(e.target.value).length === 0) {
      setErrMsgName('Please fill name field');
      return;
    } else {
      console.log(e.target.value);
      setName(e.target.value);
      setErrMsgName('');
    }
  };

  const handleGradeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      setErrMsgGrade('Please introduce only numbers');
      return;
    } else if (
      (!isNaN(+e.target.value) && +e.target.value > 100) ||
      +e.target.value < 1
    ) {
      setErrMsgGrade('Please introduce numbers between 1 and 100');
      return;
    } else if (e.target.value.length === 0) {
      setErrMsgGrade('Please fill grade field');
      return;
    }
    console.log(e.target.value);
    setGrade(+e.target.value);
    setErrMsgGrade('');
  };

  const handleAddStudent = () => {
    setClickable(true);
    const newStudent: StudentGradeDetails = {
      studentName: name,
      grade: grade,
    };
    console.log('newStudent', newStudent);
    setStudents([...students, newStudent]);
    console.log('Button pressed');
    setName('');
    setGrade(0);
  };

  return (
    <div className='main_container'>
      <h1>Students Grade</h1>
      <ul id='list'>
        {students.map((student, index) => {
          return (
            <li key={index}>
              {student.studentName} - {student.grade}
            </li>
          );
        })}
      </ul>

      <Input
        labelText='Student Name'
        value={name}
        change={(e) => handleNameInputChange(e)}
        error={errMsgName}
      />
      <Input
        labelText='Grade'
        value={grade}
        change={(e) => handleGradeInputChange(e)}
        error={errMsgGrade}
      />
      {clickable ? (
        <Button
          type={'primary'}
          click={() => handleAddStudent()}
          buttonName='Add'
        />
      ) : (
        <Button type='default' buttonName='Add' />
      )}
      <StudentsWith90AndAbove students={students} />
      <StudentsWith70AndBelow students={students} />
    </div>
  );
}
