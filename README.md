# React-express_inflearn
인프런 - "React &amp; Express 를 이용한 웹 어플리케이션 개발하기"


ReactJS 

장점
- 프레임워크가 아닌 라이브러리 
- 가상돔을 사용 
- component 개념 
- <b>뛰어난</b> garbage collection / 메모리 관리 / 성능
- 서버 & 클라이언트 렌더링
- UI 재사용화
- 다른 프레임워크나 라이브러리와 혼용가능


단점
- VIEW ONLY (데이터 모델링, 라우팅, AJAX 등등 X) -> 다른 라이브러리를 추가하여 구현
- IE8 이하 지원 X
<br>
<b>개발환경 설정</b>

- babel (javascript preprocessor) - ES6를 ES5 이전 버전으로 변환
- react 컴파일 담당
- react-dom - 렌더링 담당
- react <b>JSX</b> - xml 같은 문법을 native javascript로 변환시켜줌

--------
- 컴포넌트에서 여러 Element를 렌더링 할 때 꼭 container element 안에 포함시켜야 함

``` react.js
    render() { 
      return ( 
        <div>
          <h1>Hi<hi>
        </div>
      ) 
    }
```
 

