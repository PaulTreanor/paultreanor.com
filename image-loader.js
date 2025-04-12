// Simple custom image loader that returns the provided src unchanged
// This helps with Next.js static export by bypassing image optimization
export default function myImageLoader({ src }) {
  return src;
}