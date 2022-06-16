import React from 'react'
import { Card, Table } from 'react-bootstrap'



export default function Cabcord() {
  return (
    <div classname="cabavail">

      <Card className="bg-dark text-white">
      
      <Card.ImgOverlay>
        <Card.Title><center>Cab Co-ordinators</center></Card.Title><hr /><br/>

        <Card.Text >
          <Table striped bordered hover variant="dark">
      
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Zone</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          
          <td>Vikram</td>
          <td>Chennai-South</td>
          <td> 7887988790 </td>
        </tr>
        <tr>
        <td>2</td>
          
         
          <td>Santhanam</td>
          <td>Chennai-North</td>
          <td> 6789546732 </td>
        </tr>
        <tr>
        <td>3</td>
          
          
          <td>Shivarajan</td>
          <td>Chennai-West</td>
          <td> 6789678923 </td>
        </tr>
        <tr>
        <td>4</td>
          
         
          <td> Virat </td>
          <td> Chennai-East </td>
          <td> 6789545566 </td>
        </tr>
        
        
        
      </tbody>
    </Table>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
      
</div>
  )
}
