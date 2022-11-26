import React from 'react'
import '/Summary.css';

const Summary = () => {
  return (
    <div>
        <div class="container">
            <h1>summary</h1>
        </div>
        <div class="small-container">

            <table>
                <tr>
                    <th>
                        <select name="address" id="location">
                            <option value="Jp nagar">jp nagar</option>
                            <option value="hsr">Hsr layout
                            </option>
                            <option value="Rt nagar">Rt nagar</option>
                            <option value="Bangalore">Central</option>
                          </select>
                    </th>
                    <th>
                        Store Address:

                    </th>
                    <th>
                        Phone<br>
                        91 9999999999
                    </th>

                </tr>
                <tr>
                    <th>
                        <h6>Order Details</h6>
                    </th>
                </tr>

                <tr>
                    <tr>
                    <td>
                        <td>Shirts</td>
                    <td> Washing,ironing</td>
                    <td><input type="number" value="5"></td>
                    <td><input type="total" value="5"></td>

                    </td>
                    </tr>
                    <tr>

                    <td>
                        <td>Jeans</td>
                        <td> Washing,ironing</td>
                        <td><input type="number" value=""></td>
                        <td><input type="total" value=""></td>
                    </td>
                    </tr>
<tr>
                    <td>
                    <td>Joggers</td>
                    <td>Chemical,wash</td>
                    <td><input type="number" value="">
                    
                    
                    </td>
                    <td><input type="total" value=""></td>
                </td>
</tr>
<div class="subtotal">
    <tr>
        <th>
            Sub total:
        </th>
    </tr>
    <tr>
        <th>Pickup Charges:</th>
    </tr>
    

    
</div>

                </tr>



                
                
            </table>
            <div class="total">
                <h6>Total:</h6>
            </div>

        </div>
    </div>

    )
}

export default Summary
    
  