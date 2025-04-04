import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      window.open(`https://tally.so/r/mRjqjd?email=${encodeURIComponent(email)}`, "_blank");
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6 bg-white shadow-xl rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Stranger Listening Platform is coming soon
        </h1>
        <p className="text-lg text-gray-600">
          We’re building a space where you can feel heard — without judgment. Be the first to try it.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full text-lg py-3">
              Notify Me
            </Button>
          </form>
        ) : (
          <div className="text-green-600 flex items-center justify-center gap-2">
            <CheckCircle className="w-6 h-6" />
            You're on the list! 💙
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
