import { Spinner, Table } from "react-bootstrap";
import { Show } from "../utils/ConditionalRendering";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { CustomerDocument } from "../pages/AddJob";

interface CustomerTableProps {
  customers: CustomerDocument[]
  isLoading: boolean
}

const CustomerTable: React.FC<CustomerTableProps> = ({customers, isLoading}) => {

  const navigate = useNavigate();

  return (
    <Table bordered responsive size="sm">
      <thead className="table-warning">
        <tr className="text-center">
          <th>Name</th>
          <th>Address</th>
          <th>Job Count</th>
        </tr>
      </thead>
      <tbody>
        <Show when={isLoading}>
          <tr>
            <td colSpan={6} className="text-center"><Spinner size="sm" /> Searching Customer...</td>
          </tr>
        </Show>
        <Show when={customers.length === 0 && !isLoading}>
          <tr>
            <td colSpan={6} className="text-center fw-bold"><FontAwesomeIcon icon={faSearch} /> No customers found.</td>
          </tr>
        </Show>
        { customers.map((customer: CustomerDocument) => (
          <tr key={customer._id} className="text-center table-item" 
            onClick={() => navigate(`/customers/${customer._id}`)}
          >
            <td>{customer.cusName}</td>
            <td>{customer.cusAddress}</td>
            <td>{customer.jobOrders.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerTable;
