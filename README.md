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
### JSX
>1.Nested Element
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



>2.JavaScript Expression
- JSX안에서 JavaScript를 표현하는 방법 - { } 로 wrapping
- let : 블록 유효 범위를 갖는 지역 변수 선언 구문, 임의로 값을 초기화 가능, 한번 선언후 재선언 불가
``` react.js
    render() {
        let text = "Hello React!";
        return (
            <div>{text}</div>
        );
    }
```
- if else 문은 JSX에서 사용불가 - 이에 대한 대안은 tenary expression 
> condition ? true : false
``` react.js
    render() {
       return (
        <p> {1==1 ? 'True' : 'False'} </p>
       );
    }
```
3.Inline Style
- JSX안에서 Style 설정시 string 형식을 사용하지 않고 key가 CamelCase인 객체 사용
``` react.js
    render() { 
      let style = {
        color:'aqua',
        backgroundColor:'black'
      };
      
      return ( 
        <div style={styls}>React CodeLab</div>
      ); 
    }
 ```
 
 
 - JSX안에서 class 설정 시 class = 가 아닌 className = 을 사용
``` react.js
    render() { 
      return ( 
        <div className="box">React CodeLab</div>
      ); 
    }
