export interface StudentGradeDetails {
  studentName: string;
  grade: number;
}

export interface StudentsProps {
  students: StudentGradeDetails[];
}
