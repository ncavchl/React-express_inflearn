import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        //핸들링 - 데이터 없을시 홈으로
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        console.log(location);
        // console.log(location.state.title, 'id', location.state.id);
        if (location.state) {
            return <span>{location.state.title}</span>;
        }
        else {
            return null;
        }
    }
}


export default Detail;