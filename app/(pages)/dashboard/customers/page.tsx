"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Users,
  ShoppingCart,
  TrendingUp,
  UserPlus,
} from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  orders: number;
  spent: string;
}

export default function CustomersPage() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const customers: CustomerProps[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      orders: 5,
      spent: "$1,200",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      orders: 3,
      spent: "$800",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      orders: 7,
      spent: "$2,100",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      orders: 2,
      spent: "$450",
    },
    {
      id: "5",
      name: "Charlie Wilson",
      email: "charlie@example.com",
      orders: 4,
      spent: "$950",
    },
    {
      id: "6",
      name: "Eva Davis",
      email: "eva@example.com",
      orders: 6,
      spent: "$1,500",
    },
    {
      id: "7",
      name: "Frank Miller",
      email: "frank@example.com",
      orders: 1,
      spent: "$200",
    },
    {
      id: "8",
      name: "Grace Taylor",
      email: "grace@example.com",
      orders: 8,
      spent: "$2,400",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const customersPerPage = 5;

  useEffect(() => {
    const filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
    setCurrentPage(1);
  }, [searchTerm, customers]);

  // Calculate statistics
  const totalCustomers = customers.length;
  const totalOrders = customers.reduce(
    (sum, customer) => sum + customer.orders,
    0
  );
  const averageOrders = (totalOrders / totalCustomers).toFixed(1);
  const newCustomersThisMonth = 24;

  // Pagination
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  return (
    <div className="p-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
            <p className="text-xs text-muted-foreground">
              +{newCustomersThisMonth} this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              {averageOrders} orders per customer
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="w-full max-w-[350px]">
            <CardTitle>Customer List</CardTitle>
            <CardDescription>
              You have {totalCustomers} registered customers
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
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-between">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <PaginationItem key={number}>
                      <PaginationLink
                        onClick={() => setCurrentPage(number)}
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
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
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
