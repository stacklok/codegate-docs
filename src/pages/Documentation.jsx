import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import DocSidebar from '../components/DocSidebar';

export default function Documentation() {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const { '*': docPath } = useParams();

  useEffect(() => {
    if (!docPath) return;

    const fetchDoc = async () => {
      try {
        // Handle both nested and top-level paths
        const fullPath = docPath.endsWith('.md') ? docPath : `${docPath}.md`;
        const response = await fetch(`/docs/${fullPath}`);
        if (!response.ok) {
          throw new Error('Documentation not found');
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        console.error('Error loading documentation:', err);
        setError(err.message);
      }
    };

    fetchDoc();
  }, [docPath]);

  // Handle redirects
  if (!docPath) {
    return <Navigate to="/docs/introduction" replace />;
  }

  if (error) {
    return <Navigate to="/docs/introduction" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <DocSidebar />
      <div className="flex-1 py-12 px-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <article className="prose dark:prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                code({inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
                h2: (props) => <h2 className="text-3xl font-bold mt-12 mb-4" {...props} />,
                h3: (props) => <h3 className="text-2xl font-bold mt-8 mb-3" {...props} />,
                p: (props) => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
                ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                a: (props) => (
                  <a 
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    {...props}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
