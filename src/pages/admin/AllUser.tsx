/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateUserStatusMutation, useUserDataQuery } from "@/redux/features/auth/auth.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const AllUser = () => {
  const { data } = useUserDataQuery(undefined);
  const [updateUserStatus, { isLoading }] = useUpdateUserStatusMutation();

  const users = data?.data?.data || [];
const handleToggleStatus = async (id: string, currentStatus: string) => {
  try {
    const newStatus = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE";
    console.log("sending:", newStatus);

    await updateUserStatus({ userId: id, status: newStatus }).unwrap();

    console.log(`✅ User ${id} status updated to ${newStatus}`);
  } catch (error) {
    console.error("❌ Error updating status:", error);
  }
};


  return (
    <div className="p-4 lg:mx-20 border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user: any) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "ACTIVE"
                        ? "text-green-600 bg-green-100"
                        : "text-red-600 bg-red-100"
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isLoading}
                    onClick={() => handleToggleStatus(user._id, user.status)}
                  >
                    {user.status === "ACTIVE" ? "Block" : "Activate"}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUser;
