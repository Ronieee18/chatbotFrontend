import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ content }) => {
  const [isCodeBlock, setIsCodeBlock] = useState(false);

  useEffect(() => {
    // Regular expression to detect code blocks
    const codeBlockRegex = /```(?:\w+)?\n([\s\S]+?)\n```/g;

    // Check if the content matches the code block regex
    setIsCodeBlock(codeBlockRegex.test(content));
  }, [content]);

  // Render syntax-highlighted code block if detected, otherwise render plain text
  return (
    <div className="code-block-container">
      {isCodeBlock ? (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {content}
        </SyntaxHighlighter>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};

export default CodeBlock;
