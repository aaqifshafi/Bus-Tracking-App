import React, { useState } from "react";
import { Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const coordinatePair = z.tuple([
  z.number().min(-90).max(90),
  z.number().min(-180).max(180),
]);

const routeSchema = z.array(coordinatePair).min(2);

const busSchema = z.object({
  driver: z.string().min(1, { message: "Driver is required." }),
  mobile: z
    .string()
    .length(10, { message: "Mobile number must be 10 digits." }),
  startPoint: z.string().refine(
    (val) => {
      try {
        return coordinatePair.parse(JSON.parse(val));
      } catch {
        return false;
      }
    },
    { message: "Start point must be a valid coordinate pair [lat, lon]." }
  ),
  endPoint: z.string().refine(
    (val) => {
      try {
        return coordinatePair.parse(JSON.parse(val));
      } catch {
        return false;
      }
    },
    { message: "End point must be a valid coordinate pair [lat, lon]." }
  ),
  route: z.string().refine(
    (val) => {
      try {
        return routeSchema.parse(JSON.parse(val));
      } catch {
        return false;
      }
    },
    {
      message:
        "Route must be a valid array of coordinate pairs [[lat, lon], ...].",
    }
  ),
});

const CustomFormLabel = ({ children }) => (
  <Label className="text-foreground">{children}</Label>
);

export default function AddBus() {
  const form = useForm({
    resolver: zodResolver(busSchema),
    defaultValues: {
      driver: "",
      mobile: "",
      startPoint: "",
      endPoint: "",
      route: "",
    },
  });
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);

  const onSubmit = (data) => {
    try {
      const parsedData = {
        ...data,
        startPoint: JSON.parse(data.startPoint),
        endPoint: JSON.parse(data.endPoint),
        route: JSON.parse(data.route),
      };
      console.log("New Bus Details:", parsedData);
      toast({
        title: "Bus Added",
        description: `The bus request has been successfully raised.`,
        variant: "default",
      });
      setDialogOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error processing your request. Please check your input.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-center p-2">
          <Button onClick={() => setDialogOpen(true)}>
            <Bus className="mr-2 h-7 w-5" />
            Add Bus
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Bus</DialogTitle>
          <DialogDescription>
            Enter the details of the bus you want to add. For coordinates, use
            format [latitude, longitude].
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="driver"
              render={({ field }) => (
                <FormItem>
                  <CustomFormLabel>Driver</CustomFormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <CustomFormLabel>Mobile</CustomFormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1234567890" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startPoint"
              render={({ field }) => (
                <FormItem>
                  <CustomFormLabel>Start Point</CustomFormLabel>
                  <FormControl>
                    <Input {...field} placeholder="[latitude, longitude]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endPoint"
              render={({ field }) => (
                <FormItem>
                  <CustomFormLabel>End Point</CustomFormLabel>
                  <FormControl>
                    <Input {...field} placeholder="[latitude, longitude]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="route"
              render={({ field }) => (
                <FormItem>
                  <CustomFormLabel>Route</CustomFormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="[[lat1, lon1], [lat2, lon2], ...]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Now</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
