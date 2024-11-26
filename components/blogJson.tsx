type Mark = {
    type: 'bold' | 'italic' | 'underline' | 'strike';
};

type TextAlign = 'left' | 'right' | 'center' | 'justify';

type TextNode = {
    type: 'text';
    text: string;
    marks?: Mark[];
};

type HeadingNode = {
    type: 'heading';
    attrs: {
        level: number;
        textAlign?: TextAlign;
    };
    content: Node[];
};


type ParagraphNode = {
    type: 'paragraph';
    attrs: {
        textAlign?: TextAlign;
    };
    content: Node[];
};

type BulletListNode = {
    type: 'bulletList';
    attrs: {
        textAlign?: TextAlign;
    };
    content: Node[];
};

type ListItemNode = {
    type: 'listItem';
    attrs: {
        textAlign?: TextAlign;
    };
    content: Node[];
};

type OrderedListNode = {
    type: 'orderedList';
    attrs: {
        textAlign?: TextAlign;
    };
    content: Node[];
};

type CodeNode = {
    type: 'codeBlock';
    attrs: {
        textAlign?: TextAlign;
    };
    content: Node[];
};

type LinkNode = {
    type: 'link';
    attrs: {
        href: string;
        textAlign?: TextAlign;
    };
    content: Node[];
};

type DocNode = {
    type: 'doc';
    content: Node[];
};

type Node = TextNode | HeadingNode | ParagraphNode | BulletListNode | ListItemNode | OrderedListNode | CodeNode | LinkNode | DocNode;

// Tipos definidos previamente
type Props = {
    jsonContent: DocNode;
};

function renderContent(node: Node): React.ReactNode {
    switch (node.type) {
        case 'doc':
            return <div>{node.content.map((child, index) => renderContent(child))}</div>;

        case 'heading':
            const HeadingTag = `h${node.attrs.level}` as keyof JSX.IntrinsicElements;
            return (
                <HeadingTag key={JSON.stringify(node)} style={{ textAlign: node.attrs.textAlign }}>
                    {node.content.map((child, index) => renderContent(child))}
                </HeadingTag>
            );

        case 'paragraph':
            return (
                <p key={JSON.stringify(node)} style={{ textAlign: node.attrs.textAlign }}>
                    {node.content.map((child, index) => renderContent(child))}
                </p>
            );

        case 'text':
            let textElement: React.ReactNode = <span>{node.text}</span>;

            if (node.marks) {
                node.marks.forEach((mark) => {
                    if (mark.type === 'bold') {
                        textElement = <strong key={mark.type}>{textElement}</strong>;
                    }
                    if (mark.type === 'italic') {
                        textElement = <em key={mark.type}>{textElement}</em>;
                    }
                    if (mark.type === 'underline') {
                        textElement = <u key={mark.type}>{textElement}</u>;
                    }
                    if (mark.type === 'strike') {
                        textElement = <s key={mark.type}>{textElement}</s>;
                    }
                });
            }
            return textElement;

        case 'bulletList':
            return (
                <ul key={JSON.stringify(node)} style={{ textAlign: node.attrs.textAlign }}>
                    {node.content.map((child, index) => renderContent(child))}
                </ul>
            );

        case 'listItem':
            return (
                <li key={JSON.stringify(node)} style={{ textAlign: node.attrs.textAlign }}>
                    {node.content.map((child, index) => renderContent(child))}
                </li>
            );

        case 'orderedList':
            return (
                <ol key={JSON.stringify(node)} style={{ textAlign: node.attrs.textAlign }}>
                    {node.content.map((child, index) => renderContent(child))}
                </ol>
            );

        case 'codeBlock':
            return (
                <pre key={JSON.stringify(node)} >
                    <code className="text-pretty" style={{ textAlign: node.attrs.textAlign }}>{node.content.map((child, index) => renderContent(child))}</code>
                </pre>
            );

        case 'link':
            return (
                <a key={JSON.stringify
                    (node)} href={node.attrs.href}
                    style={{ textAlign: node.attrs.textAlign }}>
                    {node.content.map((child, index) => renderContent(child))}
                </a>
            );
        default:
            return null;
    }
};

export default function RenderJSON({ jsonContent }: Props) {
    return <div className="prose prose-xl w-full max-w-4xl dark:prose-invert">{renderContent(jsonContent)}</div>;
};
