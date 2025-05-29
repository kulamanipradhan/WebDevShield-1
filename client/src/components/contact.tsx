import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-cyber-blue font-mono">echo</span> "Let's Connect"
          <span className="text-cyber-green"> > contact.txt</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyber-green">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to collaborate on your next project? Whether you need a security assessment,
                a web application, or cybersecurity consulting, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-cyber-green" />
                <span className="font-mono">security.dev@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-cyber-blue" />
                <span className="font-mono">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-cyber-green" />
                <span className="font-mono">Available for Remote Work</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <Button variant="ghost" size="icon" className="hover:text-cyber-green">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyber-blue">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyber-green">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="mt-2 bg-secondary border-border focus:border-cyber-green"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 bg-secondary border-border focus:border-cyber-blue"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-mono text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className="mt-2 bg-secondary border-border focus:border-cyber-green"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or security needs..."
                  rows={5}
                  required
                  className="mt-2 bg-secondary border-border focus:border-cyber-blue resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-cyber-green text-black hover:bg-cyber-green/90 font-semibold"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
