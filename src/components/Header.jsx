import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaGithub, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-primary-600">CodeGate</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/docs" className="hover:text-primary-600 transition-colors">
              Documentation
            </Link>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/stacklok/codegate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              
              <a
                href="https://discord.gg/stacklok"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                <FaDiscord className="w-6 h-6" />
              </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
