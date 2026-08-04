import { Button } from '@/components/ui/button';
import { TalkType } from '@/data/types';
import { useLanguage } from '@/hooks/use-language';
import {
    ArrowLeft,
    Calendar,
    ExternalLink,
    GraduationCap,
    LucideIcon,
    MapPin,
    Presentation,
    Users,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const typeIcons: Record<TalkType, LucideIcon> = {
    talk: Presentation,
    workshop: Users,
    course: GraduationCap,
};

export function TalkDetails() {
    const { id } = useParams<{ id: string }>();
    const { t, content } = useLanguage();
    const talk = content.talks.find((item) => item.id === id);

    if (!talk) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="container mx-auto max-w-2xl">
                    <div className="p-8 sm:p-12 text-center animate-fade-in">
                        <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                            {t.talkDetails.notFoundTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                            {t.talkDetails.notFoundMessage}
                        </p>
                        <Link
                            to="/talks"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {t.talkDetails.backButton}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const TypeIcon = typeIcons[talk.type];

    return (
        <div className="min-h-screen py-20 px-4 sm:px-8">
            <div className="container mx-auto max-w-4xl">
                <Link to="/talks" className="back-link mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    {t.talkDetails.backButton}
                </Link>

                <div className="animate-fade-in">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium text-primary-foreground">
                            <TypeIcon className="w-3.5 h-3.5" />
                            {t.talkBadges[talk.type]}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {talk.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {talk.location}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2 glow-text">
                        {talk.title}
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8">{talk.event}</p>

                    <div className="relative overflow-hidden rounded-xl aspect-video border border-border/50 mb-8">
                        <img
                            src={talk.image}
                            alt={talk.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {talk.url && (
                        <div className="mb-8">
                            <Button
                                onClick={() => window.open(talk.url, '_blank')}
                                className="gap-2 bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                            >
                                <ExternalLink className="w-4 h-4" />
                                {t.talkDetails.visitLink}
                            </Button>
                        </div>
                    )}

                    <div className="mb-8">
                        <h2 className="text-xl font-heading font-semibold mb-3">
                            {t.talkDetails.aboutTitle}
                        </h2>
                        <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                            {talk.fullDescription}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-heading font-semibold mb-3">
                            {t.talkDetails.topicsTitle}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {talk.topics.map((topic) => (
                                <span key={topic} className="tech-badge">
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>

                    {talk.gallery && talk.gallery.length > 0 && (
                        <div>
                            <h2 className="text-xl font-heading font-semibold mb-3">
                                {t.talkDetails.galleryTitle}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {talk.gallery.map((photo, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg aspect-video border border-border/50 group"
                                    >
                                        <img
                                            src={photo}
                                            alt={`${talk.title} ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
