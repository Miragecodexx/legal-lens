
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  documentType: z.string({
    required_error: "Please select a document type",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  parties: z.string().min(2, {
    message: "Please enter the parties involved.",
  }),
  requirements: z.string().min(10, {
    message: "Please provide detailed requirements (minimum 10 characters).",
  }),
  jurisdiction: z.string().min(2, {
    message: "Please specify the jurisdiction.",
  }),
  language: z.string({
    required_error: "Please select a language",
  }),
});

const DocumentGenerator = () => {
  const [generatedDocument, setGeneratedDocument] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentType: "",
      title: "",
      parties: "",
      requirements: "",
      jurisdiction: "Nigeria",
      language: "English",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here we would integrate with an API to generate the document
    setGeneratedDocument("Your document is being generated...");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Type</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a document type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="agreement">Agreement</SelectItem>
                    <SelectItem value="mou">Memorandum of Understanding</SelectItem>
                    <SelectItem value="letter">Legal Letter</SelectItem>
                    <SelectItem value="policy">Policy Document</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter document title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parties"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parties Involved</FormLabel>
                <FormControl>
                  <Input placeholder="Enter parties involved" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Detailed Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter detailed requirements for the document"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jurisdiction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jurisdiction</FormLabel>
                <FormControl>
                  <Input placeholder="Enter jurisdiction" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="yoruba">Yoruba</SelectItem>
                    <SelectItem value="hausa">Hausa</SelectItem>
                    <SelectItem value="igbo">Igbo</SelectItem>
                    <SelectItem value="pidgin">Nigerian Pidgin</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Generate Document</Button>
        </form>
      </Form>

      {generatedDocument && (
        <div className="mt-8 p-4 border rounded-lg bg-white">
          <h2 className="text-xl font-bold mb-4">Generated Document</h2>
          <p className="whitespace-pre-wrap">{generatedDocument}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentGenerator;
