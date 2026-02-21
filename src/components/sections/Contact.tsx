// components/sections/Contact.tsx
import { useState } from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface ContactProps {
    onDownloadResume: () => void;
}

export const Contact = ({ onDownloadResume }: ContactProps) => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    return (
        <section id="contact" className="py-24 scroll-mt-20" aria-label="Contact information">
            <div
                className="flex flex-col bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center space-y-6">

                <h2 className="text-4xl font-bold text-white">
                    Let's Build Something Amazing
                </h2>
                <p className="text-xl text-gray-300">
                    Based in Germany • Open to remote roles and relocation opportunities
                </p>
                <ul className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Email */}
                    <li className="relative group inline-flex items-center">
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
                            aria-label={`Send email to ${SOCIAL_LINKS.email}`}
                        >
                            <Icon name="Mail" className="w-5 h-5" aria-hidden="true"/>
                            {SOCIAL_LINKS.email}
                        </a>

                        {/* Copy icon */}
                        <button
                            type="button"
                            onClick={async () => {
                                await navigator.clipboard.writeText(SOCIAL_LINKS.email);
                                setCopiedEmail(true);
                                setTimeout(() => setCopiedEmail(false), 1500);
                            }}
                            className={`
                                          absolute right-3 top-1/2 -translate-y-1/2
                                          items-center gap-1
                                          p-2 rounded-md bg-black/80 backdrop-blur-sm
                                          text-purple-200 text-sm
                                          opacity-0 group-hover:opacity-100
                                          transition-all duration-200
                                          hidden sm:flex cursor-pointer
                                          `}
                            aria-label="Copy email"
                        >
                            {copiedEmail ? (
                                <span className="text-purple-200 font-medium">Copied</span>
                            ) : (
                                <Icon
                                    name="Copy"
                                    className="w-4 h-4 text-purple-200 hover:text-purple-400 transition-all duration-200"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </li>
                    {/* Phone */}
                    <li className="relative group inline-flex items-center">
                        <a
                            href={`tel:${SOCIAL_LINKS.phone}`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                            aria-label={`Call ${SOCIAL_LINKS.phone}`}
                        >
                            <Icon name="Smartphone" className="w-5 h-5" aria-hidden="true"/>
                            {SOCIAL_LINKS.phone}
                        </a>

                        {/* Copy icon */}
                        <button
                            type="button"
                            onClick={async () => {
                                await navigator.clipboard.writeText(SOCIAL_LINKS.phone);
                                setCopiedPhone(true);
                                setTimeout(() => setCopiedPhone(false), 1500);
                            }}
                            className={`
                                          absolute right-3 top-1/2 -translate-y-1/2
                                          items-center gap-1
                                          p-2 rounded-md bg-black/80 backdrop-blur-sm
                                          text-purple-200 text-sm
                                          opacity-0 group-hover:opacity-100
                                          transition-all duration-200
                                          hidden sm:flex cursor-pointer
                                        `}
                            aria-label="Copy phone"
                        >
                            {copiedPhone ? (
                                <span className="text-purple-200 font-medium">Copied</span>
                            ) : (
                                <Icon
                                    name="Copy"
                                    className="w-4 h-4 text-purple-200 hover:text-purple-400 transition-all duration-200"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </li>
                </ul>

                <Button
                    type="button"
                    className="mx-auto"
                    variant="outline"
                    size="lg"
                    icon="FileText"
                    iconPosition="left"
                    onClick={onDownloadResume}
                    aria-label="Download full resume in PDF format"
                >
                    Download Full Resume (PDF)
                    <Icon
                        name="Download"
                        className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                        aria-hidden="true"
                    />
                </Button>

            </div>
        </section>
    );
};
