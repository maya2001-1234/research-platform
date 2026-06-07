import { useState } from "react";
import { Upload, X, FileText, Image as ImageIcon, Code, Database } from "lucide-react";

export function PostProblem() {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    "Machine Learning", "Data Science", "Web Development", "Python",
    "JavaScript", "Algorithms", "Database", "Cloud Computing",
    "Security", "DevOps", "Research", "Optimization"
  ];

  const addFile = (fileName: string) => {
    setFiles([...files, fileName]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-900">Post a Problem</h1>
        <p className="text-gray-600">Share your challenge with the research community</p>
      </div>


