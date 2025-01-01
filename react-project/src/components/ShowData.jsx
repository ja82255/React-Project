import React from 'react'
import { app } from '../Firebase'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react'
import { data } from 'autoprefixer'
import { useState } from 'react'

import "../../src/styles/ShowData.css"

const ShowData = () => {
    const [facultyData, setFacultyData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const db = getFirestore(app)
        const docRef = collection(db, "Users")
        const docSnap = await getDocs(docRef)

        const data = docSnap.docs.map(doc => ({
            id: doc.id,
             ...doc.data()

        }))
        console.log(data)
        setFacultyData(data);
    }

    return (

        <div className='faculty-table'>
        <table>
             <thead>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Course</th>
            </tr>
        </thead>
        <tbody>
            {facultyData.map((faculty)=>{
                 return(<tr key={faculty.id}>
                 <td>{faculty.name}</td>
                 <td>{faculty.phone}</td>
                 <td>{faculty.course}</td>
               </tr>)
            })

            }
          
            
        </tbody>
        </table>
        </div>
    )
}

export default ShowData