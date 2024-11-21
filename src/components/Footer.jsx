import { FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CodeGate</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Privacy-focused local prompt gateway for AI Code Generation
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/stacklok/codegate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 flex items-center space-x-2"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/stacklok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 flex items-center space-x-2"
                >
                  <FaDiscord className="w-5 h-5" />
                  <span>Discord</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="/docs/getting-started"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CodeGate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
