import './card.css'


    export default function card ({imageurl,courseName,Description})
{
    return(
        <>
         <div className="card">
            <div className="card-image">
                <img src={imageurl} alt={courseName} />
            </div>
            <div className="card-content">
                <h2>{courseName}</h2>
                <p>{Description}</p>
            </div>
         </div>
        </>
    )
}
