import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { customAxios } from "../../lib/axios.lib";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationComponent from "../../Components/pagination/PaginationComponent";
import DeleteProductButton from "../../Components/dashboard/products/DeleteProductButton";
import { toast } from "react-toastify";

export function UsersPage() {
  const [refresh, setRefresh] = useState(false)
  let [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  async function getAllUsers() {
    let { data } = await customAxios.get(
      `/user?pageNumber=${currentPage}&USERS_PER_PAGE=${10}`
    );
    setUsers(data.data.users);
    setTotalProducts(data.totalUserCount);
    setRefresh(st=> !st)
  }

  async function deleteUser(id) {
    try {
      await customAxios.delete(`/user/${id}`);
      toast.success(`User deleted successfully.`);
    } catch (error) {
      toast.error("Error deleting user:", error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [refresh]);

  return (
    <div className="p-4">
      <div className="shadow-sm p-2">
        <span>All Users</span>
      </div>

      <Table responsive striped bordered hover className="mt-3 text-center">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>
                <Link
                  to={`/dashboard/users/${user.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {user.username}
                </Link>
              </td>
              <td>{user.email}</td>
              <td>
                <DeleteProductButton handeler={() => deleteUser(user.id)} setRefresh={setRefresh} msg={'Do you really want to delete user ?'} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center">
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
          productsPerPage={10}
        />
      </div>
    </div>
  );
}

export default UsersPage;
