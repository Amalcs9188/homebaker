"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, CreditCard, ArrowRight } from "lucide-react";

const formSchema = z.object({
  paymentMethod: z.enum(["creditCard", "paypal"]),
  cardNumber: z.string().min(16, "Valid card number is required").optional(),
  cardName: z.string().min(2, "Cardholder name is required").optional(),
  expiryDate: z.string().min(5, "Valid expiry date is required").optional(),
  cvv: z.string().min(3, "Valid CVV is required").optional(),
  savePaymentInfo: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface PaymentFormProps {
  onSubmit: () => void;
  deliveryInfo: any;
}

export default function PaymentForm({ onSubmit, deliveryInfo }: PaymentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "creditCard",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
      savePaymentInfo: false,
    },
  });
  
  const paymentMethod = form.watch("paymentMethod");

  const handleSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate payment processing
    setTimeout(() => {
      onSubmit();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Payment Information
      </h2>
      
      <div className="p-4 mb-6 bg-amber-50 dark:bg-amber-900/30 rounded-md text-sm">
        <p className="font-medium text-gray-900 dark:text-white mb-1">
          Delivery Address:
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          {deliveryInfo.name}<br />
          {deliveryInfo.address}<br />
          {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.zipCode}
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="creditCard" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit / Debit Card
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="paypal" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        <svg className="h-4 w-4 mr-2 inline-block" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.483 0 6.008 0h7.632c3.855 0 6.552 2.811 6.072 6.221-.571 4.061-3.95 7.19-8.1 7.19h-3.98c-.327 0-.609.229-.676.549L5.799 20.614c-.068.32-.35.723-.677.723h-1.22z" />
                          <path d="M19.95 6.341c.566-4.011-2.403-6.221-6.037-6.221h-7.22C6.164.12 5.77.497 5.695 1.016L2.388 20.614c-.075.519.193.723.926.723h3.131l-.931 6.262c-.075.518.193.722.926.722h3.13l1.061-6.984h2.62c4.135 0 7.764-3.153 8.297-7.299l-.446 3.036c-.075.518.193.722.926.722h3.13l1.061-6.984-6.037-.199.079-.564c.015-.112.023-.226.023-.34 0-.089-.004-.177-.013-.265z" />
                        </svg>
                        PayPal
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {paymentMethod === "creditCard" && (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input placeholder="1234 5678 9012 3456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cardName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cardholder Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="savePaymentInfo"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Save this card for future purchases
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Lock className="h-4 w-4 mr-2" />
            <span>Your payment information is secure and encrypted</span>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                  <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Payment...
              </span>
            ) : (
              <span className="flex items-center">
                Place Order
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}