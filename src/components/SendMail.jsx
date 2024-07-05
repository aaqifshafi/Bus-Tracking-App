import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/mail.send.js";

export default function SendMail() {
  const { toast } = useToast();

  const handleSendMail = () => {
    sendEmail("zargarfaarid@gmail.com,aaqifshafi@gmail.com", "IUST, Awantipora")
      .then(() => {
        toast({
          title: "Mail Sent",
          description: "The mail has been successfully sent.",
          status: "success",
        });
      })
      .catch((error) => {
        console.error("Error sending mail:", error);
        toast({
          title: "Error",
          description: "Failed to send mail.",
          status: "error",
        });
      });
  };

  return (
    <div className="flex justify-center p-2">
      <Button onClick={handleSendMail}>
        <Mail className="mr-2 h-7 w-5" />
        Send Mail
      </Button>
    </div>
  );
}
