export const SELECT_STUDENT = "SELECT_STUDENT";
export const UPDATE_STUDENT = "UPADATE_STUDENT";

const tableData = [
  {
    title: 'Lớp Mầm',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },
  {
    title: 'Lớp Chồi',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },
  {
    title: 'Lớp Lá',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },

  {
    title: 'Lớp 5 tuổi',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },
];

const initialStudent = {
  students: tableData,
}

export default function actionReducer(state = initialStudent, payload) {
  switch (payload.type) {
    case UPDATE_STUDENT:
      const updatedStudents = state.students.map((student) =>
        student.stt === action.payload.stt ? { ...student, ...action.payload } : student
      );

      return {
        ...state,
        students: updatedStudents,
      };
    case SELECT_STUDENT:
      return {
        ...state,
        selectedStudent: action.student, // Lưu thông tin của học sinh được chọn
      }

    default:
      return state;
  }
}