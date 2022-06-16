import React from 'react'
import { Card, Table } from 'react-bootstrap'



export default function Employee() {
  return (
    <div classname="cabavail">

      <Card className="bg-dark text-white">
      
      <Card.ImgOverlay>
        <Card.Title><center>Employee Details</center></Card.Title><hr /><br/>
        <Card.Text >

    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>30</h1>
              <p>IT</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>50</h1>
              <p>Non IT</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>10</h1>
              <p>HR</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>50</h1>
              <p>Managers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        
       
    
        <Table striped bordered hover variant="dark">
      
        <thead>
        <tr>
          <th>#</th>
          
          <th>Employee Name</th>
          <th>Location</th>
          <th>Co-ordinaters</th>
          <th>Employee Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Pugazh</td>
          <td>Tambaram</td>
          <td>Vikram(southzone)</td>
          <td>6789546732</td>
          <td> Present </td>
        </tr>
        <tr>
        <td>2</td>
          
          <td>Pushparaj</td>
          <td>Chithalapakam</td>
          <td>Santhanam</td>
          <td>6789546732</td>
          <td> Absent </td>
        </tr>
        <tr>
        <td>3</td>
          
          <td>Ashwini</td>
          <td>Chrompet</td>
          <td>Santhanam</td>
          <td>6789678923</td>
          <td> Present </td>
        </tr>
        <tr>
        <td>4</td>
          
          <td>Ram</td>
          <td>Guindy</td>
          <td>Santhanam</td>
          <td>6789545566</td>
          <td> Absent </td>
        </tr>
        <tr>
        <td>5</td>
          
          <td>Suresh</td>
          <td>Guindy</td>
          <td>Santhanam</td>
          <td>7543446732</td>
          <td> Present </td>
        </tr>
        <tr>
        <td>6</td>
          
          <td>Ramesh</td>
          <td>Chrompet</td>
          <td>Santhanam</td>
          <td>9845646732</td>
          <td> Absent </td>
        </tr>
        <tr>
        <td>7</td>
          
          <td>Suman</td>
          <td>Guduvanchery</td>
          <td>Vikram</td>
          <td>6489546783</td>
          <td> Present </td>
        </tr>
        <tr>
        <td>8</td>
          
          <td>Prakash</td>
          <td>Urapakkam</td>
          <td>Vikram</td>
          <td>6489546789</td>
          <td> Present </td>
        </tr>
 
        
      </tbody>
    </Table>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
      
</div>
  )
}
