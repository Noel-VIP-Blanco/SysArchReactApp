import React, {useState , useEffect}  from 'react';
const DynamicTR = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users'))
    console.log(existingUsers)
    return(
        existingUsers !== null ? <>
                {
                    existingUsers.map((value, index) => {
                    return (
                        
                        <tr>
                            <td>{index + 1}</td>
                            <td>{value.firstName}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                        </tr>
                    )
                    })
                }
                </> : <></>
        
    )
}
export default DynamicTR;
