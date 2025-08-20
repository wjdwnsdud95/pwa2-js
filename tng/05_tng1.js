// 아래처럼 별을 찍어주세요.
// 예시)
// *****
// *****
// *****
// *****
// *****
// for(let star = 0; star <= 4; star++) {
//   console.log('*****');
// }

// let star = '*';

// // 이중 for문 이용하여 * 출력
// for(let starNext = 1; starNext <= 5; starNext++) {
//   let makedStar = '';
//   for(let starNext2 = 1; starNext2 <= 5; starNext2++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

// 아래처럼 별을 찍어주세요.
// 예시)
// *
// **
// ***
// ****
// *****

// let star = '*';
// let makedStar = '';

// for(let lineCnt = 1; lineCnt <= 5; lineCnt++) {
//   for(let starNext = 1; starNext <= 5; starNext++) {
//     makedStar = makedStar + star;
//     console.log(`${makedStar}`);
//     break;
//   }
// }

// 강사님 풀이

// for문으로 별트리 출력
// let makedStar = '';

// for(let lineCnt = 1; lineCnt <= 5; lineCnt++) {
//   makedStar += '*';
//   console.log(makedStar);
// }


// 2중 for문으로 별트리 출력
// let star = '*';
// let makedStar = '';

// for(let lineCnt = 1; lineCnt <= 5; lineCnt++) {
//   let makedStar = '';
//   for(let starCnt = 1; starCnt <= lineCnt; starCnt++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }


// 아래처럼 별을 찍어주세요.
// 예시)
//     *
//    **
//   ***
//  ****
// *****

let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';
  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}