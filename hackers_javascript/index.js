const countDownBoxEl = document.querySelector(".container__countDownBox");
const targetDate = new Date("2025-12-31 23:59:59");

let endTime = new Date(targetDate).getTime(); //getTime() 메서드는 표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환
let period = endTime - new Date().getTime(); //타깃날짜에서 오늘 날짜를 빼주어 카운트다운의 기간을 설정한다.

// 카운트 다운 UI에 들어갈 데이터
let days = "";
let hours = "";
let minutes = "";
let seconds = "";

function countDown() {
  period = endTime - new Date().getTime(); //밀리 세컨드를 반환

  // 정적 Math.floor() 메서드는 항상 반올림하여 주어진 숫자보다 작가나 같은 가장 큰 정수를 반환
  const daysValue = Math.floor(period / (1000 * 60 * 60 * 24));
  const hoursValue = Math.floor(
    (period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60));
  const secondsValue = Math.floor((period % (1000 * 60)) / 1000);

  days = daysValue;
  hours = hoursValue;
  minutes = minutesValue;
  seconds = secondsValue;
}

setInterval(() => {
  countDown();

  countDownBoxEl.innerHTML = `<div class="container__countDownBox__countDown">
            <div class="layout">
              <span class="layout__text">마감</span>
              <div class="layout__time">${days}일</div>
              <div class="layout__time">${hours}시간</div>
              <div class="layout__time">${minutes}분</div>
              <div class="layout__time">${seconds}초</div>
              <span class="layout_text">전 이에요.</span>
            </div>
            <button class="button">이력서 열람하기</button>
          </div>`;
}, 1000);
