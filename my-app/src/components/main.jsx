import FirstImg from './sectionImgOne'
import SecondImg from './sectionImgTwo'
import ThirdImg from './sectionImgThree'
import FourthImg from './sectionImgFour'


function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <img src={FirstImg} alt="first"/>
                <h4>Declarative</h4>
                <span> React makes it painless to create interavtive UIs.</span>
            </div>
            <div className='container'>
                <img src={SecondImg} alt="second"/>
                <h4>Components</h4>
                <span>Build encapsulated components that manage their state.</span>
            </div>
            <div className='container'>
                <img src={ThirdImg} alt="third" />
                <h4>Single-Way</h4>
                <span>Aset of immutable values are passed to the component's.</span>
            </div>
            <div className='container'>
                <img src={FourthImg} alt="forth" />
                <h4>JSX</h4>
                <span>Statically-typed, designed to run on modern browsers.</span>  
            </div>
        </div>
    )
}


export default Main;