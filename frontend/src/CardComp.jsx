import profilepic from './assets/peka.png'
function CardComp(){

    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="Profile pic"></img>
            <h2>Myself</h2>
            <p>I play league and watch anime</p>
        </div>
    )
}


export default CardComp
