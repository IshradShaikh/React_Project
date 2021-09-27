import React, { Component } from 'react';
import axios from 'axios';


const api = axios.create({
  baseURL: `http://192.168.1.251:8000/home/home_conn`

})
class TableFile extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      users: [],
      val: false
    }
  }

  

  componentDidMount() {
   
    api.get().then(res => {

      this.setState({ users: res.data.data })
      console.log(this.state.users)
      console.log(process.env.BASE_URL)
    })
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.hostname}</td>
          <td>{user.connName}</td>
          <td>{user.user}</td>
          <td>{user.ashost}</td>
          <td>{user.sysnr} </td>
          <td>{user.client} </td>
          <td>{user.createdBy} </td>
           <td>{user.passwd} </td> 

          <td><div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" checked={user.status} id="flexSwitchCheckDefault" />
          </div> </td>
          {/* <td>
          <button type="button" class="btn btn-secondary" onClick={this.deleteRow}>Delete</button>
          </td> */}
        </tr>
      )
    })
  }

  render() {
    const { users } = this.state
   
    return (
      users.length > 0 ?
        (
          <table class="ui single line table" style={{marginTop:"2rem",textAlign: "center"}}>
            {/* <thead class="thead-dark" > */}
            <thead >
              <tr>
                <th class="text-center" scope="col">ID</th>
                <th class="text-center" scope="col">Hostname</th>
                <th class="text-center" scope="col">Connection Name</th>
                <th class="text-center" scope="col">User</th>
                <th class="text-center" scope="col">Ashost</th>
                <th class="text-center" scope="col">Sysnr</th>
                <th class="text-center" scope="col">ClientNo</th>
                <th class="text-center" scope="col">Created By</th>
                <th class="text-center" scope="col">Passwd</th>
                <th class="text-center" scope="col">Status</th>
                
                {/* <th class="text-center" scope="col">Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {this.renderTableRows()}
            </tbody>
          </table>
        )

        : (<div>no users</div>)
    );
  }
}

export default TableFile;
