
import { useState } from "react";
import { Upload, FileText, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    setError(null);
    
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a PDF, DOCX, or TXT file");
      return;
    }
    
    // Check file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB");
      return;
    }
    
    setFile(file);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-5">
        <h2 className="text-xl font-medium text-naija-blue mb-3">
          Upload Legal Document
        </h2>
        
        {error && (
          <div className="mb-3 p-2 bg-red-50 text-red-700 rounded-md flex items-center text-sm">
            <AlertTriangle className="h-4 w-4 mr-1" />
            <span>{error}</span>
          </div>
        )}

        {!file ? (
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center ${
              dragging ? "border-naija-blue bg-naija-blue/5" : "border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="h-10 w-10 mx-auto text-gray-400 mb-3" />
            <h3 className="text-base font-medium mb-1">Drag and drop your document here</h3>
            <p className="text-sm text-gray-500 mb-3">
              Supports PDF, DOCX, and TXT files up to 10MB
            </p>
            
            <div className="relative">
              <Button 
                type="button" 
                variant="outline" 
                className="relative z-10"
                size="sm"
              >
                Browse Files
              </Button>
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept=".pdf,.docx,.doc,.txt"
              />
            </div>
          </div>
        ) : (
          <div className="bg-naija-blue/5 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-naija-blue mr-2" />
                <div>
                  <p className="font-medium text-sm">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="text-gray-500 hover:text-red-500"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="mt-3">
              <Button className="w-full bg-naija-blue hover:bg-naija-blue/90" size="sm">
                Analyze Document
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4">
          <p className="text-xs text-gray-600 mb-1">Your document will be analyzed for:</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-naija-blue/10 text-naija-blue px-2 py-1 rounded-full">Plain Language</span>
            <span className="text-xs bg-naija-blue/10 text-naija-blue px-2 py-1 rounded-full">Key Clauses</span>
            <span className="text-xs bg-naija-blue/10 text-naija-blue px-2 py-1 rounded-full">Risk Analysis</span>
            <span className="text-xs bg-naija-blue/10 text-naija-blue px-2 py-1 rounded-full">Legal References</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentUpload;
