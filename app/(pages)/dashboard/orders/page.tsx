"use client";

import { useState, useEffect } from "react";
import { BarChart, DollarSign, Package, Truck, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Order = {
  id: string;
  customer: string;
  total: string;
  status: "Pending" | "Processing" | "Shipped" | "Completed";
};

type StatusColor = {
  [key in Order["status"]]: string;
};

const statusColors: StatusColor = {
  Pending: "bg-yellow-200 text-yellow-800",
  Processing: "bg-blue-200 text-blue-800",
  Shipped: "bg-purple-200 text-purple-800",
  Completed: "bg-green-200 text-green-800",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    { id: "1234", customer: "John Doe", total: "$129.99", status: "Completed" },
    {
      id: "1235",
      customer: "Jane Smith",
      total: "$79.99",
      status: "Processing",
    },
    {
      id: "1236",
      customer: "Bob Johnson",
      total: "$199.99",
      status: "Shipped",
    },
    { id: "1237", customer: "Alice Brown", total: "$59.99", status: "Pending" },
    {
      id: "1238",
      customer: "Charlie Davis",
      total: "$149.99",
      status: "Processing",
    },
    {
      id: "1239",
      customer: "Eva Wilson",
      total: "$89.99",
      status: "Completed",
    },
    {
      id: "1240",
      customer: "Frank Miller",
      total: "$109.99",
      status: "Shipped",
    },
    {
      id: "1241",
      customer: "Grace Taylor",
      total: "$69.99",
      status: "Pending",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const ordersPerPage = 5;

  useEffect(() => {
    const filtered = orders.filter(
      (order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(filtered);
    setCurrentPage(1);
  }, [searchTerm, orders]);

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce(
    (sum, order) => sum + parseFloat(order.total.replace("$", "")),
    0
  );
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Orders
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Order Value
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(totalRevenue / totalOrders).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="w-full max-w-[350px]">
            <CardTitle>Orders List</CardTitle>
            <CardDescription>
              You have {orders.length} registered customers
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2 max-w-[300px]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[250px] sm:w-[250px]"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[order.status]}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Update Status
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onSelect={() =>
                            updateOrderStatus(order.id, "Pending")
                          }
                        >
                          Pending
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            updateOrderStatus(order.id, "Processing")
                          }
                        >
                          Processing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            updateOrderStatus(order.id, "Shipped")
                          }
                        >
                          Shipped
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            updateOrderStatus(order.id, "Completed")
                          }
                        >
                          Completed
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <PaginationItem key={number}>
                      <PaginationLink
                        onClick={() => paginate(number)}
                        isActive={currentPage === number}
                      >
                        {number}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      paginate(Math.min(totalPages, currentPage + 1))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
