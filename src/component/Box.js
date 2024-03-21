import React from 'react';
// const Box = (props) =>{
//     // console.log("넘어오니?", props)
// console.log(props.userBoxColor, props.computerBoxColor)

// return (
        
//         <div className='center'>
//            <h1 className='title'>{props.title}</h1>
//            <img className='img' src={props.item && props.item.img} alt=''></img>          
//            {/* 명확하게 정해지지 않는 값일경우 앞에 가드 넣어줘야 해 (props.item && ) */}
//             <p className={`boxColor${props.computerBoxColor}`}></p>
//             <p className={`boxColor${props.userBoxColor}`}></p>
//             <h1 className='title'>{props.userResult}</h1>
//             <h1 className='title'>{props.computerResult}</h1>
             
//         </div>
//     );
// }; 

// export default Box;


///class///
import { Component } from 'react';


class Box extends Component {

    render() {
                                                                        // class는 this.props를 통해 props에 접근
        const { title, item, userBoxColor, computerBoxColor, userResult, computerResult } = this.props;
        // console.log(userBoxColor, computerBoxColor);

        return (
            <div className='center'>
                <h1 className='title'>{title}</h1>
                <img className='img' src={item && item.img}></img>
                {/* 명확하게 정해지지 않는 값일 경우 앞에 가드 넣어줘야 해 (item && ) */}
                
                {/* <div className='boxshow'><div className='blackbox'></div></div> */}
                <p className={`boxColor${computerBoxColor}`}></p>
                
                
                <p className={`boxColor${userBoxColor}`}></p>
                <h1 className='title'>{userResult}</h1>
                <h1 className='title'>{computerResult}</h1>
            </div>
        );
    }
}

export default Box;