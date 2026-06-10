import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { loginUser } from "../services/authService";
import { AppAlert } from "../components/AppAlert";

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        await loginUser(formData);
        navigate("/app");
      } catch (err) {
        setError(err.message || "Login failed");
      } finally {
        setLoading(false);
      }
    };
  };
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#f3efff] text-slate-900 flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:80px_80px] opacity-45" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-blue-200/70 blur-3xl" />
        <div className="absolute top-52 -right-40 h-[460px] w-[460px] rounded-full bg-violet-200/70 blur-3xl" />
        <div className="absolute bottom-[-140px] -left-40 h-[460px] w-[460px] rounded-full bg-cyan-200/70 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-slate-200 bg-white/80 text-sm font-semibold text-slate-700 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all"
        >
          ← Back to Home
        </Link>
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 bg-white">
              <img
                src="/collabsolve-logo.png"
                alt="CollabSolve Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              CollabSolve
            </span>
          </Link>
          <h1 className="text-3xl mb-2 text-gray-900">Welcome Back</h1>
          <p className="text-gray-600">
            Sign in to continue your research journey
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl p-8 shadow-xl">
          <form className="space-y-5">
            <div className="form-1">
              <label className="block mb-2 text-sm text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                />
              </div>
              <div className="form-2">
                <label className="block mb-2 text-sm text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#0ea5e9] hover:underline">
                  Forgot password?
                </a>
              </div>
              <Link
                to="/app"
                className="block w-full py-3 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity text-center shadow-lg shadow-blue-500/30"
              >
                Sign In
              </Link>
            </div>
          </form>
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <FaGoogle className="w-5 h-5" />
              Google
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#0ea5e9] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
