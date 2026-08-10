import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/hooks/use-language';
import { zodResolver } from '@hookform/resolvers/zod';
import { Github, Instagram, Linkedin, Mail, Send, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const { t } = useLanguage();

    const contactSchema = z.object({
        name: z.string().min(1, t.validation.nameRequired).min(5, t.validation.nameMinLength),
        email: z.string().min(1, t.validation.emailRequired).email(t.validation.emailInvalid),
        message: z
            .string()
            .min(1, t.validation.messageRequired)
            .min(50, t.validation.messageMinLength),
    });
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);

        try {
            const response = await fetch('https://formsubmit.co/ajax/arturbcolen@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _captcha: 'false',
                    _template: 'table',
                    _subject: 'Nova mensagem do portfólio!',
                }),
            });

            if (response.ok) {
                toast.success(t.toast.messageSent, {
                    description: t.toast.thankYou,
                });
                reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast.error(t.toast.errorSending, {
                description: t.toast.errorDescription,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/arturbomtempo-dev',
            label: 'GitHub',
            color: 'hover:text-primary',
        },
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/artur-bomtempo/',
            label: 'LinkedIn',
            color: 'hover:text-blue-500',
        },
        {
            icon: Mail,
            href: 'mailto:arturbcolen@gmail.com',
            label: 'Email',
            color: 'hover:text-red-500',
        },
        {
            icon: Instagram,
            href: 'https://www.instagram.com/arturbomtempo.dev/',
            label: 'Instagram',
            color: 'hover:text-pink-500',
        },
        {
            icon: Youtube,
            href: 'https://www.youtube.com/@ArturBomtempoDev',
            label: 'YouTube',
            color: 'hover:text-red-600',
        },
    ];

    return (
        <div className="min-h-screen py-20 px-6 sm:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        {t.contact.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.contact.description}
                    </p>
                </div>

                <div className="flex justify-center gap-6 mb-12 animate-fade-in">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-muted-foreground transition-all duration-300 ${link.color} hover:scale-110`}
                            aria-label={link.label}
                        >
                            <link.icon size={28} />
                        </a>
                    ))}
                </div>

                <Card className="project-card static-card p-6 sm:p-8 animate-fade-in max-w-full sm:max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {t.contact.name}
                            </label>
                            <Input
                                id="name"
                                {...register('name')}
                                placeholder={t.contact.namePlaceholder}
                                className={`bg-muted/30 transition-colors ${
                                    errors.name
                                        ? 'border-red-500 border-2 focus-visible:ring-0 focus-visible:border-red-600'
                                        : 'border-border/50 focus-visible:ring-primary'
                                }`}
                                aria-invalid={errors.name ? 'true' : 'false'}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1" role="alert">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {t.contact.email}
                            </label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                placeholder={t.contact.emailPlaceholder}
                                className={`bg-muted/30 transition-colors ${
                                    errors.email
                                        ? 'border-red-500 border-2 focus-visible:ring-0 focus-visible:border-red-600'
                                        : 'border-border/50 focus-visible:ring-primary'
                                }`}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1" role="alert">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {t.contact.message}
                            </label>
                            <Textarea
                                id="message"
                                {...register('message')}
                                placeholder={t.contact.messagePlaceholder}
                                rows={6}
                                className={`bg-muted/30 resize-none transition-colors ${
                                    errors.message
                                        ? 'border-red-500 border-2 focus-visible:ring-0 focus-visible:border-red-600'
                                        : 'border-border/50 focus-visible:ring-primary'
                                }`}
                                aria-invalid={errors.message ? 'true' : 'false'}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1" role="alert">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary-glow group"
                            size="lg"
                        >
                            {isLoading ? (
                                t.toast.sending
                            ) : (
                                <>
                                    {t.contact.sendMessage}
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
