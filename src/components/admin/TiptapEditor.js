// src/components/TiptapEditor.js

import { EditorContent } from '@tiptap/react';
import { useBlogEditor } from '@/hooks/useBlogEditor'; 
import {
  Bold, Italic, List, ListOrdered, Code, Quote, Link, Image, Trash2, Heading1, Heading2, Heading3, Heading4
} from 'lucide-react';
import React from 'react';

// TipTap Editor Toolbar Component
const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };
  
  // Custom button style
  const buttonClass = (isActive) => 
    `p-1 rounded transition-colors ${
      isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-200 text-gray-700'
    }`;

  return (
    <div className="flex flex-wrap gap-1 p-2 border rounded-t bg-gray-50">
      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
        className={buttonClass(editor.isActive('heading', { level: 1 }))}
        title="Heading 1"
      >
        <Heading1 size={18} />
      </button>
      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
        className={buttonClass(editor.isActive('heading', { level: 2 }))}
        title="Heading 2"
      >
        <Heading2 size={18} />
      </button>

      <div className="h-full w-px bg-gray-300 mx-1"></div>

      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleBold().run()} 
        className={buttonClass(editor.isActive('bold'))}
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleItalic().run()} 
        className={buttonClass(editor.isActive('italic'))}
        title="Italic"
      >
        <Italic size={18} />
      </button>
      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleBlockquote().run()} 
        className={buttonClass(editor.isActive('blockquote'))}
        title="Blockquote"
      >
        <Quote size={18} />
      </button>
      
      <div className="h-full w-px bg-gray-300 mx-1"></div>

      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleBulletList().run()} 
        className={buttonClass(editor.isActive('bulletList'))}
        title="Bullet List"
      >
        <List size={18} />
      </button>
      <button 
        type="button" 
        onClick={() => editor.chain().focus().toggleOrderedList().run()} 
        className={buttonClass(editor.isActive('orderedList'))}
        title="Ordered List"
      >
        <ListOrdered size={18} />
      </button>

      <div className="h-full w-px bg-gray-300 mx-1"></div>

      {/* Link Button */}
      <button 
        type="button" 
        onClick={setLink} 
        className={buttonClass(editor.isActive('link'))}
        title="Set Link"
      >
        <Link size={18} />
      </button>
      {editor.isActive('link') && (
        <button 
          type="button" 
          onClick={() => editor.chain().focus().unsetLink().run()} 
          className={buttonClass(false)}
          title="Remove Link"
        >
          <Trash2 size={18} />
        </button>
      )}

      {/* Image Button: Calls the handler exposed in the hook */}
      <button 
        type="button" 
        onClick={editor.imageHandler} 
        className={buttonClass(editor.isActive('image'))}
        title="Insert Image"
      >
        <Image size={18} />
      </button>
    </div>
  );
};

// Main TipTapEditor component
export default function TiptapEditor({ content, onContentChange }) {
  // Pass content and handler to the custom hook
  const editor = useBlogEditor(content, onContentChange);

  // Styling for the editor is handled in useBlogEditor's editorProps
  return (
    <div className="border rounded">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} /> 
    </div>
  );
}