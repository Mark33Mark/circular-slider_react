import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ code, language = 'javascript' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            // Strips trailing newlines often introduced by markdown parsers
            await navigator.clipboard.writeText(code.trim());
            setCopied(true);

            // Reset button state after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div style={{ position: 'relative', marginTop: '1em' }}>
            {/* Absolute positioned Copy Button */}
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    zIndex: 10,
                    padding: '6px 12px',
                    fontSize: '12px',
                    backgroundColor: copied ? '#4CAF50' : '#2d3748',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                }}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>

            {/* Syntax Highlighter Component */}
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{ marginTop: 0, paddingRight: '60px' }} // Padding prevents text overlap with the button
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
