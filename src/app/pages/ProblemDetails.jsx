import { useParams } from "react-router";
import {
  ThumbsUp, MessageSquare, Share2, Bookmark, CheckCircle,
  Clock, TrendingUp, Award, FileText, Download, Eye
} from "lucide-react";
import { useState } from "react";

export function ProblemDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"discussion" | "solutions">("discussion");

  const problem = {
    title: "Optimizing Neural Network Training on Limited Hardware",
    author: "Sarah Chen",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    reputation: 2340,
    postedAt: "2 hours ago",
    difficulty: "Advanced",
    tags: ["Machine Learning", "Optimization", "Python"],
    description: `I'm working on training a large transformer model (500M parameters) but only have access to a single GPU with 16GB VRAM. The model requires at least 24GB for standard training.

I've tried:
- Gradient accumulation (helps but training is very slow)
- Mixed precision training (FP16)
- Reducing batch size to 1 (still OOM errors)

Looking for optimization techniques or alternative architectures that could work within these constraints while maintaining model performance. Any experience with gradient checkpointing or model parallelism on limited hardware?`,
    files: [
      { name: "training_config.py", size: "4.2 KB", type: "code" },
      { name: "memory_profile.pdf", size: "890 KB", type: "pdf" }
    ],
    stats: {
      views: 1240,
      upvotes: 34,
      responses: 23,
      solutions: 5
    }
  };

  const discussions = [
    {
      id: 1,
      author: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      reputation: 1890,
      content: "Have you considered using DeepSpeed's ZeRO optimization? It can significantly reduce memory footprint while maintaining training efficiency.",
      upvotes: 12,
      timeAgo: "1 hour ago",
      replies: 3
    },
    {
      id: 2,
      author: "Dr. Emily Watson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      reputation: 4560,
      verified: true,
      content: "I'd recommend gradient checkpointing with PyTorch's checkpoint wrapper. We reduced memory usage by 40% on similar models. Here's a code snippet...",
      upvotes: 28,
      timeAgo: "45 minutes ago",
      isVerified: true,
      replies: 1
    }
  ];

  const solutions = [
    {
      id: 1,
      author: "Alex Rivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      reputation: 3200,
      verified: true,
      title: "Gradient Checkpointing + LoRA Fine-tuning",
      summary: "Achieved 60% memory reduction using gradient checkpointing combined with LoRA for parameter-efficient training.",
      upvotes: 45,
      timeAgo: "30 minutes ago",
      code: true
    }
  ];
