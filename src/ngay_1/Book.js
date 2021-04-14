const Boook = ({book, name, firstName, lastName, gendar}) => {
    return (
        <>
        <div>
            <div>Book: {book}</div>
            <div>name: {name}</div>
            <div>firstName: {firstName}</div>
            <div>lastName: {lastName}</div>
            <div>gendar: {gendar}</div>
        </div>
        </>
    )
}
 
export default Boook;