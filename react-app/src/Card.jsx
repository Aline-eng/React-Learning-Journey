import profilePic from './assets/profile.jpg'
function Card() {

    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Karlie</h2>
            <p className='card-text'>I am a Software Engineering Student </p>
        </div>
    ); 
}
export default Card