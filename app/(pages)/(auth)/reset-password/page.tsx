import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 w-full">
      <div className="w-full max-w-[400px] space-y-8">
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Reset password
            </h1>
            <p className="text-muted-foreground">
              Enter your email address and we will send you a verification code
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="rodneymullen180@gmail.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>

            <Button className="w-full" type="submit">
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
