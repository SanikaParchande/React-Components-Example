import './Greetings.css' 

export default function Greetings({username,age})
{
    return(
        <>
        <h2>I am {username}. I am {age} years old</h2>
        </>
    )
}