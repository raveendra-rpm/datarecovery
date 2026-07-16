'use client';

import { Editor, type IAllProps } from '@tinymce/tinymce-react';

// Self-hosted TinyMCE (GPL) fallback, or use Cloud CDN if API key is provided in .env.local
export default function TinyMCEEditor({ init, ...rest }: IAllProps) {
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

  if (apiKey && apiKey !== 'your-tinymce-api-key-here' && apiKey.trim() !== '') {
    return (
      <Editor
        apiKey={apiKey}
        init={{ ...init }}
        {...rest}
      />
    );
  }

  return (
    <Editor
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      licenseKey="gpl"
      init={{ ...init }}
      {...rest}
    />
  );
}
