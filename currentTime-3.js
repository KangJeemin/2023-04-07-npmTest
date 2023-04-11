const timeExmaple = {
  currentTime: function() {
    let value = "new Date() 에서 뽑아져나온 어떤 값";
    return value;   
  },
  timer : setInterval(() => {
    let time = this.currentTime();
    return time;
  },1000)
}

timeExmaple.timer();



function currentTime() {

  let value = "new Date() 에서 뽑아져나온 어떤 값";
  return value;


}

let jeemin = [];
sevInterval(() => {
  let time = currentTime();
  jeemin.push(time);
},1000);