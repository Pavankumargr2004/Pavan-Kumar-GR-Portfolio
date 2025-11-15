import React, { useState, useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { SEND_ICON } from '../constants';
import Animated from './Animated';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({...prev, [name]: ''}));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            // In a real application, you would send the form data to a backend service.
            console.log('Form submitted:', formData);
            setSubmitted(true);
            // Optionally reset form after submission
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({ name: '', email: '', message: '' });
        }
    };
    
    if (submitted) {
        return (
            <section id="contact" className="scroll-mt-24">
                 <Animated animationType="fade-in-up">
                    <SectionHeader id="contact-header-submitted" title="Get in Touch" />
                    <div className="mt-8 text-center p-12 bg-light-bg dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-brand-purple/30">
                        <h3 className="text-2xl font-semibold text-brand-purple">Thank you!</h3>
                        <p className="mt-4 text-lg text-gray-700 dark:text-white/70">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="mt-8 inline-block bg-transparent border-2 border-brand-purple text-brand-purple font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg shadow-brand-purple/30 hover:bg-brand-pink hover:border-brand-pink hover:text-white dark:hover:text-dark-bg hover:shadow-xl hover:shadow-brand-pink/40 transform hover:-translate-y-1"
                        >
                            Send Another Message
                        </button>
                    </div>
                 </Animated>
            </section>
        );
    }

    return (
        <Animated as="section" id="contact" animationType="fade-in-up" className="scroll-mt-24">
            <SectionHeader id="contact-header" title="Get in Touch" />
            <div ref={cardRef} className="card-spotlight mt-8 bg-light-bg dark:bg-dark-bg rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-brand-purple/30 transition-all duration-300 hover:border-gray-300 dark:hover:border-brand-purple/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-brand-purple/20">
                <div className="card-spotlight-effect" />
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={`w-full bg-light-bg dark:bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-brand-purple/50'} rounded-md p-3 transition focus:border-brand-pink focus:ring-brand-pink`} placeholder="Your Name" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">Email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={`w-full bg-light-bg dark:bg-dark-bg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-brand-purple/50'} rounded-md p-3 transition focus:border-brand-pink focus:ring-brand-pink`} placeholder="Your Email"/>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">Subject</label>
                        <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-brand-purple/50 rounded-md p-3 transition focus:border-brand-pink focus:ring-brand-pink" placeholder="Message Subject" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">Message</label>
                        <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className={`w-full bg-light-bg dark:bg-dark-bg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-brand-purple/50'} rounded-md p-3 transition focus:border-brand-pink focus:ring-brand-pink`} placeholder="Your message here..."></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div>
                        <button type="submit" className="inline-flex items-center gap-3 bg-transparent border-2 border-brand-purple text-brand-purple font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg shadow-brand-purple/30 hover:bg-brand-pink hover:border-brand-pink hover:text-white dark:hover:text-dark-bg hover:shadow-xl hover:shadow-brand-pink/40 transform hover:-translate-y-1">
                            <span>Send Message</span>
                            {SEND_ICON}
                        </button>
                    </div>
                </form>
            </div>
        </Animated>
    );
};

export default Contact;
