'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:hanklinder@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader 
        title="Get in Touch"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="grid md:grid-cols-2 gap-12">
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600 mb-4">Thank you for your message!</p>
              <p className="text-gray-500 mb-6">Your email client should open with a pre-filled message. If it doesn&apos;t, please email me directly.</p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </Card>

        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a
                  href="mailto:hanklinder@example.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  hanklinder@example.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/hanklinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  linkedin.com/in/hanklinder
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                <a
                  href="https://github.com/hanklinder1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  github.com/hanklinder1
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Let&apos;s Connect</h2>
            <p className="text-gray-600 mb-4">
              I&apos;m always open to discussing new projects, opportunities, or just having a conversation about economics, data, and product development.
            </p>
            <div className="flex gap-3">
              <Button href="mailto:hanklinder@example.com" variant="primary">
                Email Me
              </Button>
              <Button href="https://www.linkedin.com/in/hanklinder" external variant="outline">
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
