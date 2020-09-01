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
>3.Inline Style
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
```


>4.Comments
- JSX안에서 주석 작성시 { /* ... */ } 
- Nested Element 부분에 설명했던 것과 같이 container element 안에 주석이 작성되어야 함
``` react.js
    render() { 
      return ( 
        <div>
            { /*This is How You Comment*/}
            { /*Multi-line
                Testing*/}
            React CodeLab
        </div>
      ); 
    }
```



--------
### props
- 컴포넌트 내부의 Immutable Data
- JSX 내부에 { this.props.propsName }
- 컴포넌트를 사용할 때 , <> 괄호 안에 propsName = "value"
- <i>this.props.children</i> 은 기본적으로 갖고 있는 props로서, <Cpnt> 여기에 있는 값이 들어간다. </Cpnt>

``` react.js
class Codelab extends React.Component {
  render(){
     return (
      <div> /*~~*/
         <h1>Hello {this.props.name}</h1>
         <div>{this.props.children}</div>
      </div>
     );
  }
}

class App extends React.Component {
  render() {
    return (
      <Codelab name={this.props.name}>{this.props.children} </Codelab>  
    );
  }
}

ReactDOM.render(<App name="velopert">여기 있는 내용</App>, document.getElementById('root'));
```

>기본 값 설정 - class 선언후  
Component.defaultProps = { ... }

``` react.js
class App extends React.Component {
    render() {
        return (
            <div> {this.props.value} </div>
        );
    }
};

App.defaultProps = {
    value:0
};
```


>Type 검증
Component.propTypes = { ... }

``` react.js
class App extends React.Component {
    render() {
        return (
            <div> 
                {this.props.value} 
                {this.props.secondValue}
                {this.props.thirdValue}
            </div>
        );
    }
};

App.propTypes = {
    value:React.PropTypes.string,
    secondValue:React.PropType.number,
    thirdValue:React.PropTypes.any.isRequired /*어떤 타입이던 필수 입력*/
};
```


>proptype 예제
``` react.js
class Codelab extends React.Component {
  render(){
     return (
      <div>
         <h1>hello</h1>
         <h1>Hello {this.props.name} </h1>
         <h2> {this.props.number}  </h2>
         <div>{this.props.children}</div>
      </div>
     );
  }
}

Codelab.propTypes = {
    name: React.PropTypes.string,
    number: React.PropTypes.number.isRequired
}

Codelab.defaultProps = {
  name:'UnKnown',
};


class App extends React.Component {
  render() {
    return (
      <Codelab name={this.props.name} number={this.props.number}>{this.props.children} </Codelab>  
    );
  }
}

ReactDOM.render(<App number={5}>여기 있는 내용</App>, document.getElementById('root'));


```
