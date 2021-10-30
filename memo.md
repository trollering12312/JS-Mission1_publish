## 개발 진행 과정

기존 프로젝트를 `fork`해서 진행하려고 했지만, private한 저장소는 `Github page` 기능을 사용 못함

`Netlify`에서 배포해보려고 했으나 오류로인해 별도로 저장소를 생성해 진행

<br>


### 0. 기타 세팅

`.gitignore` : https://www.toptal.com/developers/gitignore

---

### 1. `Webpack` 세팅

실패 : https://poiemaweb.com/es6-babel-webpack-1

성공 : https://velog.io/@decody/Webpack-%EC%84%A4%EC%A0%95#npm-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0

작동하려면 `npm run build` 명령어 실행후 push 해야한다

---

### 2. `API` 테스트

https://www.daleseo.com/js-window-fetch/

[사용할 API](http://www.omdbapi.com/)

`index.js`에서 정의한 함수를 전역으로 할당해야 사용 가능했음
https://stackoverflow.com/questions/64514235/how-to-keep-all-functions-after-webpack-build

---

## 3. UI 구현

---

## 4. 배포

`fork-pr` : https://chanhuiseok.github.io/posts/git-3/

배포 주소와 원본 저장소 넘기기

---

## 5. 추가사항 처리

- [x] 클라이언트에서 API Key가 노출되지 않도록 만들어 보세요.(4점)

github에 API_KEY 숨기는 방법 : https://velog.io/@code-bebop/Front%EC%97%90%EC%84%9C-API-Key%EB%A5%BC-%EC%88%A8%EA%B8%B0%EB%8A%94-%EB%B2%95

위 튜토리얼을 따라하면 되는데 중간에 `plugin`이 아니라 `plugins`로 오타가 있다

위 방법을 사용하더라도 결국 개발자 도구로 확인한 `main.js`에서 키가 노출됬다

내가 찾아본 방법으로는 proxy같은 중간관리자를 둬서 특정 도메인만 허용하는 방식처럼 백엔드의 도움 없이는 힘들 것 같았다
<br>

- [x] 'Intersection Observer'를 활용해 보세요.(3점)

스크롤 기능 관련으로 주로 `동적 이미지 로딩`과 `무한 스크롤`에 사용함(여기선 이미지 로딩에만 사용)

https://baeharam.netlify.app/posts/javascript/intersection-observer
http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
<br>

- [x] 최초 API 요청(Request)에 대한 로딩 애니메이션을 추가해 보세요.(2점)

로딩 과정이 짧아서 굳이 progress를 보여주는 방식보단 짧은 애니메이션 추가

[fetch전에 추가하고 종료시 요소를 삭제하는 방식](https://stackoverflow.com/questions/53799108/how-to-add-a-loading-animation-while-fetch-data-from-api-vanilla-js)
[CSS를 사용한 진동](https://www.w3schools.com/howto/howto_css_shake_image.asp)
<br>

- [ ] SCSS, Bootstrap 등을 구성해 프로젝트를 최대한 예쁘게(?) 만들어 보세요.(2점)

SKIP

[SCSS 적용](https://yoohl.medium.com/%EC%9B%B9%ED%8C%A94-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-e4130fc7cd80)

- [x] 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하세요.(1점)

`replace`사용

<br>

- [x] 실시간으로 이미지의 크기를 다르게 요청하는 것이 어떤 원리로 가능한지 조사해 보세요.(1점)

하나의 고해상도 이미지를 가지고 URL의 요구사항에 따라 동적으로 수정된 이미지를 response하기 때문에 가능하다

https://stackoverflow.com/questions/46035474/how-to-change-image-resolution-by-url

<br>

- [x] 요청 주소에 HTTP가 아닌 HTTPS 프로토콜을 사용해야 하는 이유를 조사해 보세요.(1점)

`HTTP`는 기본적으로 신뢰관계를 전제로하기 때문에, 요청을 보낸 기계나 사람을 인증(Authentication)하는 과정이 없음

`HTTPS`는 **개인 키**로 서버의 신원을 확인함

> 클라이언트가 서버와 통신하기위해 채널을 열었을 때(=웹사이트 탐색), 웹사이트의 `SSL 인증서`가 가지는 `public key`와 일치하는 `private key`를 서버가 가짐으로서 해당 서버가 그 웹 사이트의 합법적인 호스트임을 증명할 수 있음

이 과정을 통해 여러 공격 시도를 차단할 수 있음

https://www.cloudflare.com/ko-kr/learning/ssl/why-is-http-not-secure/

