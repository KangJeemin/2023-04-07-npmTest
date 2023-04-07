import timestamp from 'time-stamp'

function currentTime(){
let time;
let today = new Date();
let day = today.getDay();
let h = today.getHours() < 12 ? "오전" : "오후";
let realday= ""
switch(day) {
  case 1:
   realday = "월요일"
   break;
  case 2:
    realday= "화요일"
    break;
  case 3:
    realday = "수요일"
    break;
  case 4:
    realday= "목요일"
    break;
  case 5:
    realday = "금요일"
    break;
  case 6:
    realday = "토요일"
    break;
  case 0:
    realday= "일요일"
    break;
  default:
    realday="존재하지 않는 요일입니다."
    break
}
time= timestamp('YYYY년 MM월 DD일 '+h+' HH시 mm분 ss초 '+realday);
  };


console.log(time)
export default currentTime();