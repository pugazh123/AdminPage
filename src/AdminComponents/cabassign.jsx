import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'

function Cabassign() {
  const assign = () => {
    window.alert("Booked successfully")
  }
  return (
    <div classname="cabavail">

      <Card className="bg-dark text-white">
        <Card.ImgOverlay>
          <Card.Title><center>Cab Assign</center></Card.Title><hr /> <br />
          <Card.Title>Shift Timing (8.00 am - 5.00 pm)</Card.Title>
          <Card.Text>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee Name</th>
                  <th>Location</th>
                  <th>Confirm cab number</th>
                  <th>Cab Driver Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ajith</td>
                  <td>Thiruvallur</td>
                  <td><input type="text" name=" "></input></td>
                  <td>9077653899</td>

                </tr>
                <tr>
                  <td>2</td>

                  <td>Sivakarthikeyan</td>
                  <td>Taramani</td>
                  <td><input type="text" name=" "></input></td>
                  <td>8589546738</td>
                </tr>
                <tr>
                  <td>3</td>

                  <td>Samantha</td>
                  <td>Urapakkam</td>
                  <td><input type="text" name=" " Required></input></td>
                  <td>9789546780</td>
                </tr>
                <tr>
                  <td>4</td>

                  <td>Teju</td>
                  <td>Guindy</td>
                  <td><input type="text" name=" "></input></td>
                  <td>7089546566</td>
                </tr>
                <tr>
                  <td>5</td>

                  <td>kevin</td>
                  <td>Guduvanchery</td>
                  <td><input type="text" name=" "></input></td>
                  <td>9567765659</td>
                </tr>
                <tr>
                  <td>6</td>

                  <td>Parama</td>
                  <td>Chrompet</td>
                  <td><input type="text" name=" "></input></td>
                  <td>7789546677</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Pugazh barathi</td>
                  <td>Tambaram</td>
                  <td><input type="text" name=" " /></td>
                  <td>9789546733</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="light" onClick={() => assign()}>Submit</Button>

          </Card.Text>
          <Card.Title>Shift Timing (3.00 pm - 11.00 pm)</Card.Title>
          <Card.Text>
            <Table striped bordered hover variant="dark">

              <thead>
                <tr>
                  <th>#</th>

                  <th>Employee Name</th>
                  <th>Location</th>
                  <th>Confirm cab number</th>
                  <th>Cab Driver Number</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vijay</td>
                  <td>Thiruvallur</td>
                  <td><input type="text" name=" "></input></td>
                  <td>8077653898</td>

                </tr>
                <tr>
                  <td>2</td>

                  <td>Bala</td>
                  <td>Tambaram</td>
                  <td><input type="text" name=" "></input></td>
                  <td>9589546736</td>
                </tr>
                <tr>
                  <td>3</td>

                  <td>Prakash</td>
                  <td>Urapakkam</td>
                  <td><input type="text" name=" " Required></input></td>
                  <td>9789546782</td>
                </tr>
                <tr>
                  <td>4</td>

                  <td>Ashwini</td>
                  <td>Urapakkam</td>
                  <td><input type="text" name=" "></input></td>
                  <td>8089546567</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Bharathi</td>
                  <td>Guindy</td>
                  <td><input type="text" name=" "></input></td>
                  <td>7867765646</td>
                </tr>
                <tr>
                  <td>6</td>

                  <td>Pushparaj</td>
                  <td>Chrompet</td>
                  <td><input type="text" name=" "></input></td>
                  <td>8789546672</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Pugazh</td>
                  <td>Tambaram</td>
                  <td><input type="text" name=" " /></td>
                  <td>6789546732</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="light" onClick={() => assign()}>Submit</Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div>
        <span></span>
      </div>
    </div>
  )
}

export default Cabassign