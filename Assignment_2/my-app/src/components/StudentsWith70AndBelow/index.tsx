import { StudentsProps } from '../StudentGrade/interface';

export default function StudentsWith70AndBelow({ students }: StudentsProps) {
  return (
    <div>
      <h1>StudentsWith70AndBelow</h1>
      <ul>
        {students
          .filter((student) => student.grade <= 70)
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
