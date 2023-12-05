import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const EnquireForm = () => {
  return (
    <div className="h-full mt-10 w-full flex justify-center">
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Enquire</CardTitle>
          <CardDescription>
            Have a question about this artwork?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid lg:grid-cols-2 w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="grid lg:col-span-2 w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
         
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
