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
    window.location.href = `mailto:hank.linder1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
      <SectionHeader
        title="Get in Touch"
        subtitle="Interested in discussing credit, financial analytics, or professional opportunities? I'd love to connect."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Card hover={false}>
          <h2 className="text-xl font-bold font-serif text-navy-900 mb-6">Send a Message</h2>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-gray-700 mb-4">Your email client should open with a pre-filled message.</p>
              <p className="text-gray-400 text-sm mb-6">If it doesn&apos;t, email me directly at hank.linder1@gmail.com</p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-navy-700 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-navy-700 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-navy-700 focus:border-transparent resize-none transition-colors"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </Card>

        <div className="space-y-6">
          <Card hover={false}>
            <h2 className="text-xl font-bold font-serif text-navy-900 mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-1">Email</h3>
                <a href="mailto:hank.linder1@gmail.com" className="text-gray-700 hover:text-navy-800 transition-colors">
                  hank.linder1@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/hanklinder" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-navy-800 transition-colors">
                  linkedin.com/in/hanklinder
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-1">Location</h3>
                <p className="text-gray-700">Greenville, SC</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-1">Phone</h3>
                <p className="text-gray-700">(619) 701-2551</p>
              </div>
            </div>
          </Card>

          <Card hover={false}>
            <p className="text-gray-500 text-sm leading-relaxed">
              Open to discussing roles in credit analysis, financial analytics, risk assessment, and business operations. Currently based in Greenville, SC.
            </p>
            <div className="flex gap-3 mt-4">
              <Button href="mailto:hank.linder1@gmail.com" variant="primary" className="text-sm py-2 px-4">
                Email
              </Button>
              <Button href="https://www.linkedin.com/in/hanklinder" external variant="outline" className="text-sm py-2 px-4">
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
