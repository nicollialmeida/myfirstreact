import Button from 'react-bootstrap/Button';

function Product(props) {
    return (
    <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><input type="number" id="itemQuantity" min="0" max="100" /></td>
            <td><Button variant="primary">Add to the basket!</Button></td>
          </tr>
    </tbody>
    );
}

export default Product;