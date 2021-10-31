let pro = 0;
let point = 0;
let result = 0;
let message = "";


function chb(a) {
  if (typeof a !== 'string') return null;
  let last = a[a.length - 1];
  let uni = last.charCodeAt(0);
 
  if (uni < 44032 || uni > 55203) return null;
 
  return (uni - 44032) % 28 != 0;
}


function test1co() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  const m = "바람 희망 별 햇빛 봄 꿈 하늘 들꽃 호수 사랑 생명".split(" ");
  const h = "아름다운 기쁜 가련한 신비한 몽환적인 밝은 힘찬 활기찬".split(" ");
  const s = "나 너 당신 그 그녀 그녀석 운명 세상".split(" ");
  const v1 = "껴안는 빠져드는 나아가는 노저어가는 사랑하는 바라보는 좋아하는 노래하는".split(" ");
  const v2 = "껴안을까 빠져들까 나아갈까 사랑할까 바라볼까 좋아할까 노래할까 가까워질까".split(" ");
  let j = m[Math.floor(Math.random() * m.length)]
  let k = chb(j)?"을 ":"를 ";
  //(형용사한) 명사의 명사를 동사하는 누군가도 언젠가는 누군가의 명사에 동사할까
  message = h[Math.floor(Math.random() * h.length)] + " " + m[Math.floor(Math.random() * m.length)] + "의 " + j + k + v1[Math.floor(Math.random() * v1.length)] + " " + s[Math.floor(Math.random() * s.length)] + "도 언젠가는 " + s[Math.floor(Math.random() * s.length)] + "의 " + m[Math.floor(Math.random() * m.length)] + "에 " + v2[Math.floor(Math.random() * v2.length)];
  document.getElementById('result').innerHTML = message + "<br><button type='button' class='btn btn-info' onclick='share1();'>결과 공유</button><br />";
}
function test2co() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  
  const m = "피 죽음 얼굴 크라운 조커 성당 인간 욕망 어둠 암흑 데스 괴물".split(" ");
  const h = "두려운 고통의 끔찍한 악의 더러운 흘러내린 끝없는".split(" ");
  const s = "나 너 당신 그 그녀 그녀석 운명 세상 신 악마".split(" ");
  const v1 = "밀치는 뒤섞이는 부수는 파괴하는 미워하는 증오하는 살해하는 괴롭히는 울부짖는 외치는 더럽히는 부르짖는".split(" ");
  const v2 = "떨어질까 뒤섞일까 부서질까 파괴될까 미워하게될까 살해될까 괴롭혀질까 울부짖을까 외칠까 더럽혀질까 부르짖을까 가까워질까".split(" ");
  let j = m[Math.floor(Math.random() * m.length)]
  let k = chb(j)?"을 ":"를 ";
  //(형용사한) 명사의 명사를 동사하는 누군가도 언젠가는 누군가의 명사에 동사할까
  message = h[Math.floor(Math.random() * h.length)] + " " + m[Math.floor(Math.random() * m.length)] + "의 " + j + k + v1[Math.floor(Math.random() * v1.length)] + " " + s[Math.floor(Math.random() * s.length)] + "도 언젠가는 " + s[Math.floor(Math.random() * s.length)] + "의 " + m[Math.floor(Math.random() * m.length)] + "에 " + v2[Math.floor(Math.random() * v2.length)];

  document.getElementById('result').innerHTML = message + "<br><button type='button' class='btn btn-info' onclick='share2();'>결과 공유</button><br />";
}

function share1(){
  var tempElem = document.createElement('textarea');
  let passre = ((result * 10) + 231) * 21
  tempElem.value = message;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  alert('복사 완료! 친구들에게 마음껏 공유해보세요!');

}
function share2(){
  var tempElem = document.createElement('textarea');
  let passre = ((result * 10) + 231) * 21
  tempElem.value = message;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  alert('복사 완료! 친구들에게 마음껏 공유해보세요!');
}
