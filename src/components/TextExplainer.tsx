
import { useState } from "react";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const TextExplainer = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  
  const handleExplain = () => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis process - in production this would call your API
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-5">
        <h2 className="text-xl font-medium text-naija-blue mb-3">
          Explain Legal Text
        </h2>
        
        <div className="space-y-4">
          <Textarea
            placeholder="Paste legal text here..."
            className="min-h-32 resize-none"
            value={text}
            onChange={handleTextChange}
          />
          
          <Button 
            className="w-full bg-naija-blue hover:bg-naija-blue/90"
            onClick={handleExplain}
            disabled={!text.trim() || isAnalyzing}
          >
            {isAnalyzing ? "Analyzing..." : "Explain This Text"}
          </Button>
        </div>
        
        <div className="mt-4 bg-naija-blue/5 rounded-lg p-3">
          <div className="flex items-start">
            <Lightbulb className="h-4 w-4 text-naija-blue mr-2 mt-0.5" />
            <p className="text-sm text-gray-600">
              Our AI analyzes Nigerian legal terminology, identifies key concepts, and provides plain language explanations.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TextExplainer;
