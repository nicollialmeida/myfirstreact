import Table from 'react-bootstrap/Table';

function Order(props) {
const flag = true;

    return (
<Table striped bordered hover>
          <thead>
            <tr>
              <th>Items</th>
              <th>Total Price Per Item</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>  {/* Vai ser dinâmico de acordo com o que eu escolhi no checkout*/}  
              <td>{props.itemQuantity}x {props.itemName}</td>
              <td>{props.totalPricePerItem}</td>
              <td>{props.totalDiscountPerItem}</td>
           </tr>
            <tr>
              <td colSpan="3" className="Price" >Total Order Price: {props.totalOrderPrice} </td>
            </tr>
            <tr>
              <td colSpan="3" className="Price">Total Order Price With Discounts: {props.totalOrderPriceWithDiscounts} </td>
            </tr>
          </tbody>
        </Table>
    );
}

export default Order;