import React from 'react';

const dataTable = (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Naveen</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Sunil</td>
        <td>24</td>
      </tr>
    </table>
  );

  export const LowerBody = ()=>{
      return (
          <div>
              {dataTable}
          </div>
      )
  }