import React from 'react' 
import './Table.css'



const dataArray = [
    {Enroll:'013',Name:'Maryam',Contact:'0307-3781740',Address:'F8/3,Islamabad',Semester:'5th'},
    {Enroll:'028',Name:'Talha',Contact:'0307-3781740',Address:'F8/3,Islamabad',Semester:'5th'}
]

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            data:dataArray,
            Enroll:'',
            Name:'',
            Contact:'',
            Address:'',
            Semester:''
        })
    }
    AddRecord=()=>{
        const addTemp = {Enroll:this.state.Enroll,
        Name:this.state.Name,
        Contact:this.state.Contact,
        Address:this.state.Address,
        Semester:this.state.Semester}
        dataArray.push(addTemp)
        console.log(dataArray)
        this.setState({data:dataArray})
        
        
        this.setState({
            Enroll:'',
            Name:'',
            Contact:'',
            Address:'',
            Semester:''

        })
    }
    handleDelete=(index)=>
    {
        dataArray.splice(index,1)
        this.setState({
            data:dataArray
        })
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
            <div  style={{marginLeft:60,height:600,width:'90%',backgroundColor:'#FFFCE5',borderRadius:30,marginTop:0}}>
                <h1 style={{textAlign:'center'}}>Student Record</h1>
                <div style={{borderColor:'#008080', marginLeft:100,display:'block',marginTop:60 ,width:1100}}>
                <input style={{fontSize:20,width:200,height:45,outline:'none',border:'1px solid #D3D3D3',paddingLeft:5}} type="text"  name="Enroll" value={this.state.Enroll} placeholder="Enrolllment" onChange={e=>this.onChangeHandler(e)} />
                <input style={{ fontSize:20,width:200,height:45,outline:'none',border:'1px solid #D3D3D3',paddingLeft:5,marginLeft:10}}type="text" name="Name" value={this.state.Name} placeholder="Name" onChange={e=>this.onChangeHandler(e)}/>
                <input style={{ fontSize:20,width:200,height:45,outline:'none',border:'1px solid #D3D3D3',paddingLeft:5,marginLeft:10}} type="text" name="Contact" value={this.state.Contact} placeholder="Contact" onChange={e=>this.onChangeHandler(e)}/>
                <input style={{ fontSize:20,width:200,height:45,outline:'none',border:'1px solid #D3D3D3',paddingLeft:5,marginLeft:10}} type="text" name="Address" value={this.state.Address} placeholder="Address" onChange={e=>this.onChangeHandler(e)}/>
                <input style={{ fontSize:20,width:160,height:45,outline:'none',border:'1px solid #D3D3D3',paddingLeft:5,marginLeft:10}}type="text" name="Semester" value={this.state.Semester} placeholder="Semester" onChange={e=>this.onChangeHandler(e)}/>
                </div>
                <input  style={{marginLeft:960,display:'block' ,marginTop:20,borderRadius:'3px',border:'none',outline:'none',width:170,height:50,backgroundColor:'#2E8B57',fontSize:20,color:'white'}} className="Button" type="button" value="Add Record" onClick={this.AddRecord}/>
               <table className="Table">
                    <tr >
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
                                    <td>{obj.Enroll}</td>
                                    <td>{obj.Name}</td>
                                    <td>{obj.Contact}</td>
                                    <td>{obj.Address}</td>
                                    <td style={{float:'left',width:'192px',height:'40px',paddingTop:20}}>{obj.Semester}
                                    <img onClick={e=>this.handleDelete(index)}style={{outline:'none',display:'block',width:"40px" ,float:'right',marginTop:0,marginRight:4,marginBottom:15}}src={process.env.PUBLIC_URL +"/del (2).png"}
                                    alt="Mypic" /> </td>
                                    
                
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