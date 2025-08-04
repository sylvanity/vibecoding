// Snippet 38 from Chapter 7
// Section: Supabase Features in Practice
// Subsection: Storage API (upload)
// Language: typescript
// Description: import React, { useState, ChangeEvent } from 'reac...
// 
import React, { useState, ChangeEvent } from 'react';
// Assume 'supabase' client is initialized

function FileUploader(): JSX.Element {
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setFileUrl(null);
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const filePath = `public/${Date.now()}_${file.name}`; // Example path

    // Upload the file to the 'user_uploads' bucket (ensure bucket exists and policies are set)
    const { error: uploadError } = await supabase.storage
      .from('user_uploads')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Upload error:', uploadError);
      setError(uploadError.message);
    } else {
      console.log('Upload successful, path:', filePath);
      // Get public URL (assuming 'user_uploads' is public)
      const { data: urlData } = supabase.storage
        .from('user_uploads')
        .getPublicUrl(filePath);

      console.log('Public URL data:', urlData);
      setFileUrl(urlData?.publicUrl ?? null);

      // --- OR --- Generate signed URL for a private bucket/file
      // const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      //   .from('private_uploads')
      //   .createSignedUrl(filePath, 3600); // Expires in 1 hour (3600 seconds)
      // if (signedUrlError) console.error('Signed URL error:', signedUrlError);
      // else setFileUrl(signedUrlData?.signedUrl ?? null);
    }
    setUploading(false);
  };

  // Example download (implementation depends on how you want to use the blob)
  // const handleDownload = async (path: string) => {
  //   const { data: blob, error } = await supabase.storage.from('user_uploads').download(path);
  //   if (error) console.error('Download error:', error);
  //   else if (blob) {
  //     const url = URL.createObjectURL(blob);
  //     // Use the url, e.g., trigger download link
  //     URL.revokeObjectURL(url); // Clean up object URL
  //   }
  // };

  return (
    <div>
      <label htmlFor="fileInput">Upload File:</label>
      <input type="file" id="fileInput" onChange={handleFileChange} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {fileUrl && (
        <div>
          <p>File uploaded successfully!</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
          {/* Or display image: <img src={fileUrl} alt="Uploaded file" width="200" /> */}
        </div>
      )}
    </div>
  );
}
export default FileUploader;