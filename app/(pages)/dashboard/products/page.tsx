"use client";

import { useState, useRef } from "react";
import {
  Plus,
  Package,
  DollarSign,
  BarChart,
  Trash,
  Edit,
  Search,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
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

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: string;
  stock: number;
  image: string;
  description: string;
  category: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "T-Shirt",
      price: "$19.99",
      stock: 100,
      image: "/placeholder.svg",
      description: "Comfortable cotton t-shirt",
      category: "Clothing",
    },
    {
      id: "2",
      name: "Jeans",
      price: "$49.99",
      stock: 50,
      image: "/placeholder.svg",
      description: "Classic blue jeans",
      category: "Clothing",
    },
    {
      id: "3",
      name: "Sneakers",
      price: "$79.99",
      stock: 25,
      image: "/placeholder.svg",
      description: "Stylish and comfortable sneakers",
      category: "Footwear",
    },
    {
      id: "4",
      name: "Hat",
      price: "$14.99",
      stock: 75,
      image: "/placeholder.svg",
      description: "Trendy baseball cap",
      category: "Accessories",
    },
    {
      id: "1",
      name: "T-Shirt",
      price: "$19.99",
      stock: 100,
      image: "/placeholder.svg",
      description: "Comfortable cotton t-shirt",
      category: "Clothing",
    },
    {
      id: "2",
      name: "Jeans",
      price: "$49.99",
      stock: 50,
      image: "/placeholder.svg",
      description: "Classic blue jeans",
      category: "Clothing",
    },
    {
      id: "3",
      name: "Sneakers",
      price: "$79.99",
      stock: 25,
      image: "/placeholder.svg",
      description: "Stylish and comfortable sneakers",
      category: "Footwear",
    },
    {
      id: "4",
      name: "Hat",
      price: "$14.99",
      stock: 75,
      image: "/placeholder.svg",
      description: "Trendy baseball cap",
      category: "Accessories",
    },
  ]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const steps = ["Image", "Basic Info", "Details"];

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        if (editingProduct) {
          setEditingProduct({
            ...editingProduct,
            image: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        if (editingProduct) {
          setEditingProduct({
            ...editingProduct,
            image: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    }
  };

  const handleSelectChange = (value: string) => {
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, category: value });
    }
  };

  const handleAddOrUpdateProduct = () => {
    if (editingProduct) {
      if (editingProduct.id) {
        setProducts((prev) =>
          prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
        );
      } else {
        const newId = (products.length + 1).toString();
        setProducts((prev) => [...prev, { ...editingProduct, id: newId }]);
      }
      setEditingProduct(null);
      setPreviewImage(null);
      setIsDialogOpen(false);
      setCurrentStep(0);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setPreviewImage(product.image);
    setIsDialogOpen(true);
    setCurrentStep(0);
  };

  const handleDeleteProduct = (productId: string) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );

    console.log("updated products : ", updatedProducts);

    setProducts(updatedProducts);
  };

  const handleNewProduct = () => {
    setEditingProduct({
      id: "",
      name: "",
      price: "",
      stock: 0,
      image: "",
      description: "",
      category: "",
    });
    setPreviewImage(null);
    setIsDialogOpen(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const totalProducts = products.length;
  const totalValue = products.reduce(
    (sum, product) =>
      sum + parseFloat(product.price.replace("$", "")) * product.stock,
    0
  );
  const lowStockProducts = products.filter(
    (product) => product.stock < 20
  ).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex flex-row sm:flex-col justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold w-full">Products Page</h1>
        <div className="flex flex-row-reverse sm:flex-row gap-2 w-full sm:w-auto">
          <Button onClick={handleNewProduct}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Inventory Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Low Stock Items
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lowStockProducts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Product Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(totalValue / totalProducts).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="w-full max-w-[350px]">
            <CardTitle>Products Inventory</CardTitle>
            <CardDescription>
              You have {products.length} products in your inventory.
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2 max-w-[300px]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[250px] sm:w-[250px]"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex justify-end">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editingProduct?.id ? "Edit Product" : "Add New Product"}
            </DialogTitle>
            <DialogDescription>
              {editingProduct?.id
                ? "Edit the details of the product here."
                : "Enter the details of the new product here."}{" "}
              Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-primary-600">
                    {Math.round(((currentStep + 1) / steps.length) * 100)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                <div
                  style={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-500 ease-in-out"
                ></div>
              </div>
            </div>
            {currentStep === 0 && (
              <div
                onClick={handleImageClick}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary transition-colors h-64"
              >
                {previewImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={previewImage}
                      alt="Preview"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground h-full justify-center">
                    <div className="p-4 rounded-full bg-muted">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p>Click or drag and drop</p>
                      <p className="text-sm">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            )}
            {currentStep === 1 && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={editingProduct?.name || ""}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    value={editingProduct?.price || ""}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="stock" className="text-right">
                    Stock
                  </Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    value={editingProduct?.stock || 0}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={editingProduct?.description || ""}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={editingProduct?.category || ""}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Clothing">Clothing</SelectItem>
                      <SelectItem value="Footwear">Footwear</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            <div className="flex justify-between mt-4">
              <Button onClick={prevStep} disabled={currentStep === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button onClick={handleAddOrUpdateProduct}>Save Product</Button>
              ) : (
                <Button onClick={nextStep}>
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
