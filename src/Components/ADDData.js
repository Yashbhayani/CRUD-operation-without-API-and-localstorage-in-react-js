import React from 'react'

export default function ADDData(props) {

    const Data = props.name;
    let View ;
    if(Data !== null && Data !== ""){
     console.log(Data);
    View = Data.map(Data => (
        <tr key={Data.id}>
            <td>{Data.id + 1}</td>
            <td>{Data.fname}</td>
            <td>{Data.lname}</td>
            <td>{Data.email}</td>
        </tr>
    )) 
    }   

  return (
    <div>
        <div>
            {Data.length < 1 && <h2>No Data are Added</h2>}

            {Data.length > 0 && 
            <>
                <div>

                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                            <tbody></tbody>
                        </thead>
                        <tbody>
                            {View}
                        </tbody>
                    </table>
                </div>
            </>}
        </div>
    </div>
  )
}
