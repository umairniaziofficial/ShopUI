"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Store, Truck, CreditCard, Bell, Shield } from "lucide-react";

export default function EcommerceSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast({
      title: "Settings updated",
      description: "Your e-commerce settings have been saved successfully.",
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="store" className="space-y-4">
        <TabsList>
          <TabsTrigger value="store">Store</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <form onSubmit={handleSubmit}>
          <TabsContent value="store">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Store className="mr-2" />
                  Store Settings
                </CardTitle>
                <CardDescription>
                  Manage your stores basic information and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input id="storeName" placeholder="Your Store Name" />
                  </div>
                  <div>
                    <Label htmlFor="storeUrl">Store URL</Label>
                    <Input id="storeUrl" placeholder="https://yourstore.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="storeDescription">Store Description</Label>
                  <textarea
                    id="storeDescription"
                    placeholder="Brief description of your store"
                    className="w-full p-2 border rounded-md"
                    rows={3}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenanceMode" />
                  <Label htmlFor="maintenanceMode">
                    Enable Maintenance Mode
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="shipping">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2" />
                  Shipping Settings
                </CardTitle>
                <CardDescription>
                  Configure your stores shipping options and rates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="shippingZones">Shipping Zones</Label>
                  <Select>
                    <SelectTrigger id="shippingZones">
                      <SelectValue placeholder="Select shipping zones" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="domestic">Domestic</SelectItem>
                      <SelectItem value="international">
                        International
                      </SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="freeShippingThreshold">
                    Free Shipping Threshold ($)
                  </Label>
                  <Input
                    id="freeShippingThreshold"
                    type="number"
                    placeholder="0.00"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="flatRateShipping" />
                  <Label htmlFor="flatRateShipping">
                    Enable Flat Rate Shipping
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2" />
                  Payment Settings
                </CardTitle>
                <CardDescription>
                  Set up your payment gateways and options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currency">Store Currency</Label>
                  <Select>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Accepted Payment Methods</Label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="creditCard" />
                    <Label htmlFor="creditCard">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="bankTransfer" />
                    <Label htmlFor="bankTransfer">Bank Transfer</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Manage your stores notification preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="orderNotifications">
                    Order Notifications
                  </Label>
                  <Switch id="orderNotifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="stockAlerts">Low Stock Alerts</Label>
                  <Switch id="stockAlerts" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="customerReviews">
                    Customer Review Alerts
                  </Label>
                  <Switch id="customerReviews" />
                </div>
                <div>
                  <Label htmlFor="notificationEmail">Notification Email</Label>
                  <Input
                    id="notificationEmail"
                    type="email"
                    placeholder="admin@yourstore.com"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Configure your stores security options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="twoFactorAuth">
                    Two-Factor Authentication
                  </Label>
                  <Switch id="twoFactorAuth" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sslCertificate">SSL Certificate</Label>
                  <Switch id="sslCertificate" defaultChecked />
                </div>
                <div>
                  <Label htmlFor="passwordPolicy">Password Policy</Label>
                  <Select>
                    <SelectTrigger id="passwordPolicy">
                      <SelectValue placeholder="Select password policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="strong">Strong</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <div className="mt-6">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save All Settings"}
            </Button>
          </div>
        </form>
      </Tabs>
    </div>
  );
}
