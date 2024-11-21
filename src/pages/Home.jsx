import { useState } from 'react';
import { FaDocker, FaCheck, FaShieldAlt, FaCode } from 'react-icons/fa';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const dockerCommand = 'docker run -d -p 8989:8989 stacklok/codegate';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dockerCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <FaShieldAlt className="w-6 h-6 text-primary-600" />,
      title: "Secret and Token Filtering",
      description: "Robust secret blocking mechanism that scans prompts for sensitive information, preventing data exfiltration while maintaining security."
    },
    {
      icon: <FaCode className="w-6 h-6 text-primary-600" />,
      title: "Secure Code Review",
      description: "Performs rigorous security checks on packages and conducts secure code reviews to ensure adherence to best practices."
    },
    {
      icon: <FaCheck className="w-6 h-6 text-primary-600" />,
      title: "IDE Support",
      description: "Seamless integration with popular IDEs including Cline and continue.dev for enhanced development workflow."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy-First AI Code Generation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              CodeGate is your secure gateway for AI-powered code generation, ensuring privacy and security in your development workflow.
            </p>
            
            {/* Docker Command */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <FaDocker className="w-6 h-6 text-primary-600" />
                  <code className="font-mono">{dockerCommand}</code>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="btn-primary"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the community and start building secure AI-powered applications today.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/docs"
              className="bg-white text-primary-600 btn-primary hover:bg-gray-100"
            >
              View Documentation
            </a>
            <a
              href="https://github.com/stacklok/codegate"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white btn-primary bg-transparent hover:bg-primary-700"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
