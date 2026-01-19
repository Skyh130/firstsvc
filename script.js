// 예제용 계정 데이터 (임시)
const accountData = [
  {
    studentId: "10101",
    name: "김민수",
    googleId: "minsukim@school.go.kr",
    googlePw: "abc1234"
  },
  {
    studentId: "10102",
    name: "이서연",
    googleId: "seoyeonlee@school.go.kr",
    googlePw: "pass5678"
  },
  {
    studentId: "10103",
    name: "박지훈",
    googleId: "jihoonpark@school.go.kr",
    googlePw: "pw9999"
  }
];

// 요소 가져오기
const form = document.getElementById("searchForm");
const inputId = document.getElementById("studentId");
const inputName = document.getElementById("studentName");
const resultId = document.getElementById("resultId");
const resultPw = document.getElementById("resultPw");
const resetBtn = document.getElementById("resetBtn");

// 검색 처리
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 새로고침 방지

  const studentId = inputId.value.trim();
  const studentName = inputName.value.trim();

  // 데이터 검색
  const result = accountData.find(account =>
    account.studentId === studentId &&
    account.name === studentName
  );

  if (result) {
    resultId.textContent = result.googleId;
    resultPw.textContent = result.googlePw;
    createPetals(); // 🌸 검색 성공 시 꽃잎 효과
  } else {
    resultId.textContent = "검색 결과 없음";
    resultPw.textContent = "검색 결과 없음";
  }
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  // 입력값 초기화
  inputId.value = "";
  inputName.value = "";

  // 결과 초기화
  resultId.textContent = "-";
  resultPw.textContent = "-";

  // 포커스 이동
  inputId.focus();
});
