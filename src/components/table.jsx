import Table from 'react-bootstrap/Table';
import DynamicTR from './DynamicTR';

function TableExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <DynamicTR />
      </tbody>
    </Table>
  );
}

export default TableExample;