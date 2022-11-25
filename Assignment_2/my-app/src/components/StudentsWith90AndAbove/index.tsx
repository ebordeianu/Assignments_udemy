import { StudentsProps } from '../StudentGrade/interface';

export default function StudentsWith90AndAbove({ students }: StudentsProps) {
  return (
    <div>
      <h1>StudentsWith90AndAbove</h1>
      <ul>
        {students
          .filter((student) => student.grade >= 90)
          .map(({ studentName, grade }) => {
            return (
              <li key={studentName}>
                {' '}
                {studentName} - {grade}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
