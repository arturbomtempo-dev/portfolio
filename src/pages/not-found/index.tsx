import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NotFound() {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="container mx-auto max-w-2xl">
                <Card className="project-card static-card p-8 sm:p-12 text-center animate-fade-in">
                    <div className="mb-8">
                        <div className="mb-2">
                            <span className="text-8xl sm:text-9xl font-heading font-bold glow-text opacity-50">
                                {t.notFound.title}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                            {t.notFound.heading}
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                            {t.notFound.message}
                        </p>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {t.notFound.backButton}
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
}
