let hr, mn, sec;

function date() {
  let time = new Date();
  hr = time.getHours();
  mn = time.getMinutes();
  sec = time.getSeconds();

  hr = hr < 10 ? "0" + hr : hr;
  mn = mn < 10 ? "0" + mn : mn;
  sec = sec < 10 ? "0" + sec : sec;

  return {
    hr: hr,
    mn: mn,
    sec: sec,
  };
}

function updateTime() {
  let timeinfo = date();
  document.getElementById("hour").innerHTML = timeinfo.hr;
  document.getElementById("min").innerHTML = timeinfo.mn;
  document.getElementById("sec").innerHTML = timeinfo.sec;
}
setInterval(updateTime, 1000);
updateTime();
