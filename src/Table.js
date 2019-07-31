import React from 'react' 
import './Table.css'


const dataArray = [
    {enroll:'013',name:'Maryam',contact:'0307-3781740',address:'F8/3,Islamabad',semester:'5th'},
    {enroll:'028',name:'Talha',contact:'0307-3781740',address:'F8/3,Islamabad',semester:'5th'}
]

class Table extends React.Component{
    constructor(props){

        super(props);
        this.state=({
            data:dataArray,
            enroll:'',
            name:'',
            contact:'',
            address:'',
            semester:''
        })
    }
    AddRecord=()=>{
       
       
        const addTemp = {enroll:this.state.enroll,
        name:this.state.name,
        contact:this.state.contact,
        address:this.state.address,
        semester:this.state.semester}
        dataArray.push(addTemp)
        console.log(dataArray)
        this.setState({data:dataArray})
        

    }
    onChangeHandler=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })

       
   
    }
    render()
    {
        return(
            <div  style={{padding:50,border:'1px solid black',height:700,width:'100%',backgroundColor:'purple'}}>
                <input type="button" value="Add Record" onClick={this.AddRecord}/>
                <input type="text"  name="enroll" value={this.state.enroll} placeholder="enrolllment" onChange={e=>this.onChangeHandler(e)}/>
                <input type="text" name="name" value={this.state.name} placeholder="name" onChange={e=>this.onChangeHandler(e)}/>
                <input type="text" name="contact" value={this.state.contact} placeholder="contact" onChange={e=>this.onChangeHandler(e)}/>
                <input type="text" name="address" value={this.state.address} placeholder="address" onChange={e=>this.onChangeHandler(e)}/>
                <input type="text" name="semester" value={this.state.semester} placeholder="semester" onChange={e=>this.onChangeHandler(e)}/>

               <table className="Table">
                    <tr>
                        <th>Enrollment</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Semester</th>
                    </tr>
                    
                    {
                        this.state.data.map((obj,index)=>{
                            return(
                                <tr>
                                    <td>{obj.enroll}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.contact}</td>
                                    <td>{obj.address}</td>
                                    <td>{obj.semester}</td>
                                </tr>
                            )
                    })
                    
                    }
                       
                        </table>
             </div>
        )
    }
}
export default Table;