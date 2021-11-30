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

function make() {
  const m = "철새 꿈 가뭄 거짓말 가시 비둘기 닭 호랑이 범 사자 표범 별 명왕성 우주비행사 리코더 춤 돈다발 고래 바람 희망 봄 꿈 하늘 들꽃 호수 사랑".split(" ");
  let kw = m[Math.floor(Math.random() * m.length)];
  const s = "나 너 당신 그 그녀 그녀석 운명 세상 우리들".split(" ");
  let ks = s[Math.floor(Math.random() * s.length)];
  const s2 = "너 당신 그 그녀 그녀석 선생님 스승님 옛친구".split(" ");
  let ks2 = s2[Math.floor(Math.random() * s2.length)];
  let leng = Math.floor(Math.random() * 10) + 5;

  while(leng >= 0){
    let b = 1;
    let a = Math.floor(Math.random() * 5);
      if(a == 0){
        let m = "바람 희망 별 햇빛 봄 꿈 하늘 들꽃 호수 사랑 생명".split(" ");
        let h = "아름다운 기쁜 가련한 신비한 몽환적인 밝은 힘찬 활기찬".split(" ");
        let s = "나 너 당신 그 그녀 그녀석 운명 세상".split(" ");
        let v1 = "껴안는 생각하는 꿈꾸는 사랑하는 바라보는 좋아하는 노래하는".split(" ");
        let v2 = "안길까 빠질까 나아갈까 다가갈까 노래할까 가까워질까".split(" ");
        for(let i = 0; i < m.length; i++) {
          if(m[i] === kw)  {
            m.splice(i, 1);
            i--;
          }
        }
        let j = m[Math.floor(Math.random() * m.length)]
        let k = chb(kw)?"을 ":"를 ";
        //(형용사한) 명사의 명사를 동사하는 누군가도 언젠가는 누군가의 명사에 동사할까
        message += h[Math.floor(Math.random() * h.length)] + " " + m[Math.floor(Math.random() * m.length)] + "의 " + kw + k + v1[Math.floor(Math.random() * v1.length)] + " " + ks + "도 언젠가는 " + ks2 + "의 " + m[Math.floor(Math.random() * m.length)] + "에 " + v2[Math.floor(Math.random() * v2.length)] + "<br>";
      } else if(a == 1){
        const m = "이른 아침.황혼의 시간.나날이.밤이 되면.해가 떠오르면.이른 새벽길".split(".");
        let j = m[Math.floor(Math.random() * m.length)]
        let k = chb(j)?"을 ":"를 ";
        //형용사한 누군가의 무엇을 동사했다.
        message += m[Math.floor(Math.random() * m.length)] + "<br>";
      } else if(a == 2 && b != 0 && leng > 1){
        b = 0;
        const m = "편지 명함 기억 소식 소리 노래 휘파람소리 향기".split(" ");
        const h = "아름다운 기쁜 가련한 신비한 몽환적인 밝은 힘찬 활기찬".split(" ");
        const s = "너 당신 그 그녀 그녀석 세상".split(" ");
        const v1 = "사랑하는/좋아하는/아름다운/오랫동안 잊고 있던/기다리던".split("/");
        const v2 = "들었다 받았다 읽었다 맡았다 보았다 찾았다".split(" ");
        for(let i = 0; i < m.length; i++) {
          if(m[i] === kw)  {
            m.splice(i, 1);
            i--;
          }
        }
        let j = m[Math.floor(Math.random() * m.length)]
        let k = chb(j)?"을 ":"를 ";
        //언제
        message += v1[Math.floor(Math.random() * v1.length)] + " " + ks2 + "의 " + j + k + v2[Math.floor(Math.random() * v2.length)] + "<br>";
      } else if(a == 3){
        const m = "편지 명함 기억 소식 소리 노래 휘파람소리 향기".split(" ");
        const h = "필요한 존재.아름다운 꽃이.들꽃이.잊혀지지 않는 존재.기억 속의 술 한 방울이".split(".");
        const s = "너 당신 그 그녀 그녀석 세상".split(" ");
        const v1 = "사랑하는/좋아하는/아름다운/오랫동안 잊고 있던/기다리던".split("/");
        const v2 = "들었다 받았다 읽었다 맡았다 보았다 찾았다".split(" ");
        for(let i = 0; i < m.length; i++) {
          if(m[i] === kw)  {
            m.splice(i, 1);
            i--;
          }
        }
        let k = chb(ks)?"은 ":"는 ";
        //주어1은 주어2에게 형용사한 명사였으면 했다
        message += ks + k + ks2 + "에게 " + h[Math.floor(Math.random() * h.length)] + "였으면 했다." + "<br>";
      } else if(a == 4){
        let m = "바람 희망 별 햇빛 봄 꿈 하늘 들꽃 호수 사랑 생명".split(" ");
        let h = "아름다운 기쁜 가련한 신비한 몽환적인 밝은 힘찬 활기찬".split(" ");
        let s = "나 너 당신 그 그녀 그녀석 운명 세상".split(" ");
        let v1 = "껴안고 생각하고 꿈꾸고 사랑하고 바라보고 좋아하고 노래하고".split(" ");
        let v2 = v1[Math.floor(Math.random() * v1.length)]
        for(let i = 0; i < m.length; i++) {
          if(m[i] === kw)  {
            m.splice(i, 1);
            i--;
          }
        }
        let j = m[Math.floor(Math.random() * m.length)];
        let k0 = chb(j)?"을 ":"를 ";
        let k3 = chb(ks2)?"을 ":"를 ";
        let k = chb(ks)?"은 ":"는 ";
        let k2 = chb(j)?"은 ":"는 ";
        //주어1은 명사를 동사하고 명사는 주어2를 동사한다
        message += ks + k + j + k0 + v2 + " " + j + k2 + ks2 + k3 + v2 + "." + "<br>";
      }
      leng -= 1;
  }
  
}

let repl = "";
function test1co() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  make();
  document.getElementById('result').innerHTML = message + "<br><button type='button' class='btn btn-info' onclick='share1();'>결과 공유</button><br />";
  
  repl = message.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
  message = "";
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
  message = "";
}

function share1(){
  var tempElem = document.createElement('textarea');
  let passre = ((result * 10) + 231) * 21;
  tempElem.value = repl;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  alert('복사 완료! 친구들에게 마음껏 공유해보세요!');

}
function share2(){
  var tempElem = document.createElement('textarea');
  let passre = ((result * 10) + 231) * 21
  tempElem.value = document.getElementById('result').innerHTML;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  alert('복사 완료! 친구들에게 마음껏 공유해보세요!');
}
