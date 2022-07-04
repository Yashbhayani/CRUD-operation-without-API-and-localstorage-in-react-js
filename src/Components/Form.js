import React, { useState } from 'react';
// import ADDData from './ADDData';
import './UI/Form.css';


let btn = "Add"
let UID;
let NewDATA = []
export const Form = () => {
    let View 
    const [Data, setData] = useState([]); 
    const [fname, setFname]  = useState('');
    const [lname, setLname]  = useState('');
    const [email, setEmail]  = useState('');

   const handleSubmit = (e) =>{
        e.preventDefault();
        if(btn === "Add"){
                let  datas = {
                fname,
                lname,
                email 
                }
                setData([...Data,datas])
                NewDATA.push(datas)
                setFname('')
                setLname('')
                setEmail('')
        }else{
            btn = "Add"
            Data[UID].fname = fname
            Data[UID].lname = lname
            Data[UID].email = email
            setData([...Data])
            setFname('')
            setLname('')
            setEmail('')
        }
   }

   if(Data !== undefined && Data !== ""){

    View = Data.map((Data,index) => (
       <tr key={index}>
           <td>{Data.fname}</td>
           <td>{Data.lname}</td>
           <td>{Data.email}</td>
           <td><button className="button edit" type='button' onClick={() => handleEdit(index)}>Edit</button></td>
           <td><button className="button delete" type='button' onClick={() => handleDelete(index)}>Delete</button></td>
       </tr>
   )) 
   }  

   const handleEdit = (id) =>{
    UID = id
    console.log(id);
    console.log(Data[id]);
        setFname(Data[id].fname)
        setLname(Data[id].lname)
        setEmail(Data[id].email)
        btn = "Update"
   }

   const handleDelete= (id) =>{
        const filterData =  Data.filter((element, index) => {
          return index !== id; 
        })
        setData(filterData)
        if(btn === "Update"){
            btn = "Add"
        }
    }

    const handelSearch = (event) =>{
        if(event.target.value === ""){
            setData(NewDATA)
        }else{
            //console.log(event.target.value)
            const Datalist =  Data.filter((search) => {
               return search.fname.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()) || search.lname.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()) || search.email.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()) 
            })
            setData(Datalist)
            console.log(Datalist)
        }
    } 
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
                <div>
                    <label>
                    First Name:
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                    Last Name:
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button className={btn} type='submit'>{btn}</button>
                </div>
        </form>
        <div>

            <div>

                <nav classNameName="navbar">
                    <ul>
                        <li><input type="text" onChange={handelSearch}
                        placeholder="Search here"/></li>
                    </ul>
                </nav>
            </div>
        <div>
            {Data.length < 1 && <h2>No Data are Added</h2>}

            {Data.length > 0 && 
            <>
                <div>

                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th> 
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {View}
                        </thead>
                    </table>
                </div>
            </>
            }
        </div>
    </div>
        {/* <ADDData name={Data}/> */}
      </div>
    )
}

export default Form
