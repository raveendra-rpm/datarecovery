'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Trash2, Upload } from 'lucide-react';

export default function SettingsPage() {
  const { data: session } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Hero Images State
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [heroImageLoading, setHeroImageLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Fetch initial config
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/site-config');
        if (res.data && res.data.heroImages) {
          setHeroImages(res.data.heroImages);
        }
      } catch (error) {
        console.error('Failed to fetch site config', error);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchConfig();
  }, []);

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !password) {
      toast.error('Please enter at least an email or password to update.');
      return;
    }

    try {
      setLoading(true);
      await axios.put(
        'http://localhost:5000/api/users/profile',
        {
          ...(email && { email }),
          ...(password && { password }),
        },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );

      toast.success('Admin credentials updated successfully!');
      setEmail('');
      setPassword('');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to update credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setHeroImageLoading(true);
      const formData = new FormData();
      formData.append('image', file);

      // 1. Upload image
      const uploadRes = await axios.post(
        'http://localhost:5000/api/site-config/upload-image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );

      const newImageUrl = uploadRes.data.url;
      const updatedImages = [...heroImages, newImageUrl];

      // 2. Save config
      await axios.put(
        'http://localhost:5000/api/site-config',
        { heroImages: updatedImages },
        {
          headers: { Authorization: `Bearer ${session?.accessToken}` },
        }
      );

      setHeroImages(updatedImages);
      toast.success('Hero image added successfully!');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to upload hero image');
    } finally {
      setHeroImageLoading(false);
      // Reset input
      e.target.value = '';
    }
  };

  const handleHeroImageDelete = async (urlToDelete: string) => {
    try {
      setHeroImageLoading(true);
      const updatedImages = heroImages.filter(url => url !== urlToDelete);

      await axios.put(
        'http://localhost:5000/api/site-config',
        { heroImages: updatedImages },
        {
          headers: { Authorization: `Bearer ${session?.accessToken}` },
        }
      );

      setHeroImages(updatedImages);
      toast.success('Hero image removed!');
    } catch (error: any) {
      toast.error('Failed to remove hero image');
    } finally {
      setHeroImageLoading(false);
    }
  };

  if (initialLoading) {
    return <div className="text-gray-500">Loading settings...</div>;
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      {/* Admin Credentials Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">Admin Credentials</h3>
          <p className="text-sm text-gray-500 mt-1">Update your login ID (email) and password.</p>
        </div>

        <form onSubmit={handleCredentialsSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">New Email (Admin ID)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                placeholder="Leave blank to keep current"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                placeholder="Leave blank to keep current"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Credentials'}
            </button>
          </div>
        </form>
      </div>

      {/* Homepage Settings Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Hero Section Images</h3>
            <p className="text-sm text-gray-500 mt-1">
              Upload images for the homepage hero carousel. You can add multiple images. If no images are uploaded, the default static images will be used.
            </p>
          </div>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              onChange={handleHeroImageUpload}
              disabled={heroImageLoading}
            />
            <button
              type="button"
              disabled={heroImageLoading}
              className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm border border-indigo-600 hover:bg-indigo-50 focus:outline-none disabled:opacity-50"
            >
              <Upload className="w-4 h-4" />
              {heroImageLoading ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
        </div>

        {heroImages.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">No images uploaded yet. Using default static images on homepage.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {heroImages.map((imgUrl, index) => (
              <div key={index} className="relative group aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                <img
                  src={`http://localhost:5000${imgUrl}`}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleHeroImageDelete(imgUrl)}
                  disabled={heroImageLoading}
                  className="absolute top-2 right-2 p-1.5 bg-white/90 text-red-600 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 disabled:opacity-50"
                  title="Delete image"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
