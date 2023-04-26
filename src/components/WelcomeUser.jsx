const WelcomeUser = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users'))
    console.log(existingUsers)
    return(
        existingUsers !== null ? <>
                {
                    existingUsers.map((value) => {
                    return (
                        <h1>Hello {value.firstName}</h1>
                    )
                    })
                }
                </> : <></>
        
    )
}
export default WelcomeUser;
