"use client";

import { useState } from "react";
import { Camera, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20">
              <Image
                src="/placeholder.svg"
                alt="Profile picture"
                className="rounded-full object-cover w-full h-full"
              />
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0 rounded-full"
              >
                <Camera className="h-4 w-4" />
                <span className="sr-only">Change profile picture</span>
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground">Admin</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="account">Account Settings</TabsTrigger>
              <TabsTrigger value="password">Change Password</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us a little about yourself"
                    defaultValue="E-commerce enthusiast and admin extraordinaire."
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="account">
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account.
                    </p>
                  </div>
                  <Button variant="outline">
                    <Shield className="mr-2 h-4 w-4" />
                    Enable
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Language Preference</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred language for the admin portal.
                    </p>
                  </div>
                  <select className="border rounded p-2">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Notification Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Manage how you receive notifications.
                    </p>
                  </div>
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Configure
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4 mt-4"
              >
                <div className="grid gap-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button type="submit">Update Password</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
