import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, FileText, Send, CheckCircle } from 'lucide-react';

interface ResumeUploadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function ResumeUploadPopup({ isOpen, onClose, jobTitle = '' }: ResumeUploadPopupProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setMessage(jobTitle ? `Applying for: ${jobTitle}\n\n` : '');
      setFile(null);
      setError(null);
      setSuccess(null);
    }
  }, [isOpen, jobTitle]);

  if (!isOpen) return null;

  const fileToBase64 = (file: File): Promise<{ content: string; mimeType: string; fileName: string }> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1] ?? '';
        resolve({ content: base64, mimeType: file.type, fileName: file.name });
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      let attachment = null;
      if (file) {
        const converted = await fileToBase64(file);
        attachment = converted;
      }

      const payload = {
        name,
        email,
        message,
        jobTitle,
        attachment, // may be null
      };

      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to send');
      }

      setSuccess('Application sent successfully.');
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      setError(err.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  // Handle text inputs and textarea
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'message') {
      // Preserve jobTitle prefix if present
      if (jobTitle && value.startsWith(`Applying for: ${jobTitle}`) ) {
        setMessage(value);
      } else if (jobTitle) {
        setMessage(`Applying for: ${jobTitle}\n\n${value}`);
      } else {
        setMessage(value);
      }
    }
  };

  // Handle file input change (narrow to HTMLInputElement to access files)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const picked = input.files?.[0] ?? null;
    setFile(picked);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] ?? null;
    setFile(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Send Resume {jobTitle ? `— ${jobTitle}` : ''}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              required
              value={name}
              onChange={handleFieldChange}
              className="mt-1 block w-full border rounded-md p-2"
              name="name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={handleFieldChange}
              className="mt-1 block w-full border rounded-md p-2"
              name="email"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              value={message}
              onChange={handleFieldChange}
              rows={4}
              className="mt-1 block w-full border rounded-md p-2"
              name="message"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium">Resume (PDF or DOCX)</label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ${
                file
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                name="file"
              />
              {file ? (
                <div className="space-y-2">
                  <FileText className="w-8 h-8 text-blue-600 mx-auto" />
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                  <p className="text-sm text-gray-600">
                    <span className="text-blue-600 font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                </div>
              )}
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}
          {success && <div className="text-sm text-green-600">{success}</div>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              {submitting ? 'Sending...' : 'Send Application'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
