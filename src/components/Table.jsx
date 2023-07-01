import React from 'react'
import '../CSS/Table.css';

export default function Table() {
   
  return (
    <>
      <div className='shadow-white  mr-[40px] mt-[20px] mb-[20px] rounded-lg' style={{overflowX: 'auto'}}>
        <table>
          <tbody><tr>
              <th>No</th>
              <th>Frame</th>
              <th>HP</th>
              <th>	PCD</th>
              <th>OD</th>
              <th>	Motor Length</th>
              <th>	Nos. of Halls</th>
              
            </tr>
            <tr>
              <td>1</td>
              <td>63</td>
              <td>0.25</td>
              <td>160</td>
              <td>180</td>
              <td>210</td>
              <td>14 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>71</td>
              <td>0.5</td>
              <td>180</td>
              <td>225</td>
              <td>270</td>
              <td>14 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>80</td>
              <td>1.10</td>
              <td>230</td>
              <td>270</td>
              <td>370</td>
              <td>15 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>4</td>
              <td>90</td>
              <td>2.0</td>
              <td>230</td>
              <td>270</td>
              <td>370</td>
              <td>22 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>5</td>
              <td>100</td>
              <td>3.0</td>
              <td>270</td>
              <td>300</td>
              <td>370</td>
              <td>22 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>6</td>
              <td>112</td>
              <td>5.0</td>
              <td>300</td>
              <td>350</td>
              <td>440</td>
              <td>27 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>7</td>
              <td>132</td>
              <td>7.5</td>
              <td>360</td>
              <td>410</td>
              <td>510</td>
              <td>27 mm x 6 no 5</td>
              
            </tr>
            <tr>
              <td>8</td>
              <td>160</td>
              <td>10.0</td>
              <td>400</td>
              <td>450</td>
              <td>550</td>
              <td>27 mm x 6 no 5</td>
              
            </tr>
            
            
          </tbody></table>
      </div>
    </>
  )
}
