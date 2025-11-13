// src/hooks/useBlogEditor.js
import { useEffect } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { toast } from 'react-toastify';
import generateURL from "@/utils/urlGenerater"; // Ensure this path is correct

/**
 * Custom hook to initialize and manage the TipTap editor instance.
 * @param {string} initialContent - The initial HTML content.
 * @param {function} onContentChange - Callback for content changes.
 * @returns {object} The TipTap editor instance.
 */
export const useBlogEditor = (initialContent, onContentChange) => {
  
  // Custom image handler for TipTap
  const imageHandler = async () => {
    // 1. Create an input element for file selection
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        toast.info("Uploading image...");
        try {
          // 2. Upload the image to your backend/CDN
          const { url } = await generateURL(file); 
          
          // 3. Insert the image URL into the editor
          if (editor) {
            editor.chain().focus().setImage({ src: url }).run();
            toast.success("Image uploaded successfully!");
          }

        } catch (error) {
          toast.error("Failed to upload image to the server.");
          console.error("Image upload error:", error);
        }
      }
    };
  };

  const editor = useEditor({
    immediatelyRender: false, 
    extensions: [
      StarterKit.configure({
        // Disable built-in Image handling in StarterKit to use the extended one
        history: false,
      }),
      Link.configure({
        openOnClick: true,
      }),
      Image.configure({
        inline: true,
        allowBase64: true, // You might want to disable this if you strictly use CDN
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      // TipTap provides the HTML content via editor.getHTML()
      onContentChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'custom-blog prose max-w-none focus:outline-none p-4 min-h-[300px] border border-t-0 rounded-b',
      },
    },
  }); // Reinitialize if initialContent changes
  useEffect(() => {
    if (editor && initialContent !== editor.getHTML()) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  // Expose custom handlers
  if (editor) {
    // We attach the handler to the editor instance for the custom toolbar button to call
    editor.imageHandler = imageHandler;
  }

  return editor;
};