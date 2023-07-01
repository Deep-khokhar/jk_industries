import React from 'react'
import '../CSS/Table.css';

export default function Table2() {
  return (
    <>
      <div className='shadow-white  mr-[40px] mt-[20px] mb-[20px] rounded-lg' style={{overflowX: 'auto'}}>
        <table>
          <tbody><tr>
              <th>No</th>
              <th>Frame</th>
              <th>HP</th>
              <th colSpan={3}>	Hole Center</th>
              <th colSpan={2}>	Motor</th>
              <th>Holl & Drill Size</th>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>A</td>
              <td>B</td>
              <td>L</td>
              <td>W</td>
              <td>H</td>
              <td></td>
              
            </tr>
            <tr>
              <td>1</td>
              <td>63</td>
              <td>0.25</td>
              <td>85</td>
              <td>85</td>
              <td>270</td>
              <td>150</td>
              <td>170</td>
              <td>4 - 14 mm</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>71</td>
              <td>0.5</td>
              <td>120</td>
              <td>85</td>
              <td>320</td>
              <td>180</td>
              <td>195</td>
              <td>4 - 14 mm</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>80</td>
              <td>1.0</td>
              <td>140</td>
              <td>108</td>
              <td>360</td>
              <td>200</td>
              <td>215</td>
              <td>4 - 14 mm</td>
              
            </tr>
            <tr>
              <td>4</td>
              <td>90</td>
              <td>2.0</td>
              <td>152</td>
              <td>130</td>
              <td>460</td>
              <td>220</td>
              <td>270</td>
              <td>4 - 18 mm</td>
              
            </tr>
            <tr>
              <td>5</td>
              <td>100</td>
              <td>3.0</td>
              <td>200</td>
              <td>130</td>
              <td>540</td>
              <td>260</td>
              <td>320</td>
              <td>6 - 22 mm</td>
              
            </tr>
            <tr>
              <td>6</td>
              <td>112</td>
              <td>5.0</td>
              <td>210</td>
              <td>170</td>
              <td>610</td>
              <td>270</td>
              <td>355</td>
              <td>6 - 22 mm</td>
              
            </tr>
            <tr>
              <td>7</td>
              <td>132</td>
              <td>7.5</td>
              <td>280</td>
              <td>200</td>
              <td>650</td>
              <td>350</td>
              <td>425</td>
              <td>6 - 22 mm</td>
              
            </tr>
            <tr>
              <td>8</td>
              <td>160</td>
              <td>10.0</td>
              <td>395</td>
              <td>325</td>
              <td>720</td>
              <td>380</td>
              <td>450</td>
              <td>6 - 40 mm</td>
              
            </tr>
            
            
          </tbody></table>
      </div>
    </>
  )
}
