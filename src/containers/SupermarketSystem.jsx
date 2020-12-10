import React, { useState, useEffect } from 'react'
import { listRepositories } from '../api/mock'
import Item from '../components/Item'
import Order from '../components/Order'
import Product from '../components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function SupermarketSystem() {
const [data, setData] = useState([]);
//useEffect(() => {
 //   listRepositories().then( data => {
 //       setData(data);
//    });
//}, [])

return (
  //    <ul>
 // {data.map(item => <Item key={item.id} {...item}/>)}
 //  </ul> 
<div>
<h4> Choose items to add the basket. </h4>
<Alert variant="danger" className="Msg">
  Attention: Add the item in the basket before Checkout!
</Alert>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Item</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>

  <Product name="Amazing Pizza!" price="￠45,00" />

</Table>
<Container>
  <Row> 
    <Col md={{ span: 3, offset: 9 }}><Button variant="success">Checkout!</Button></Col>
  </Row>
</Container>
<br />   
<Order itemQuantity="3" itemName="Amazing Pizza!" totalPricePerItem="￠45,00" totalDiscountPerItem="- ￠15,00" totalOrderPrice="￠22,00" totalOrderPriceWithDiscounts="- ￠15,00"/>
    </div> 
    );
}


  export default SupermarketSystem;