import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TalkFilter, TalkType } from '@/data/types';
import { useLanguage } from '@/hooks/use-language';
import { ArrowRight, Calendar, GraduationCap, MapPin, Presentation, Users } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const typeIcons: Record<TalkType, LucideIcon> = {
    talk: Presentation,
    workshop: Users,
    course: GraduationCap,
};

export function Talks() {
    const [filter, setFilter] = useState<TalkFilter>('all');
    const { t, content } = useLanguage();
    const { talks } = content;

    const filteredTalks = talks.filter((talk) => filter === 'all' || talk.type === filter);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-8">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        {t.talks.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.talks.description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
                    <Button
                        variant={filter === 'all' ? 'default' : 'outline'}
                        onClick={() => setFilter('all')}
                        className={
                            filter === 'all'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        {t.talks.all}
                    </Button>
                    <Button
                        variant={filter === 'talk' ? 'default' : 'outline'}
                        onClick={() => setFilter('talk')}
                        className={
                            filter === 'talk'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        <Presentation className="mr-2 h-4 w-4" />
                        {t.talks.talk}
                    </Button>
                    <Button
                        variant={filter === 'workshop' ? 'default' : 'outline'}
                        onClick={() => setFilter('workshop')}
                        className={
                            filter === 'workshop'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        <Users className="mr-2 h-4 w-4" />
                        {t.talks.workshop}
                    </Button>
                    <Button
                        variant={filter === 'course' ? 'default' : 'outline'}
                        onClick={() => setFilter('course')}
                        className={
                            filter === 'course'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        <GraduationCap className="mr-2 h-4 w-4" />
                        {t.talks.course}
                    </Button>
                </div>

                <div className="space-y-8 animate-fade-in">
                    {filteredTalks.map((talk, index) => {
                        const TypeIcon = typeIcons[talk.type];

                        return (
                            <Link
                                key={talk.id}
                                to={`/talks/${talk.id}`}
                                className="relative block pl-8 sm:pl-10 group"
                            >
                                {index < filteredTalks.length - 1 && (
                                    <div className="absolute left-0 top-1 bottom-[-2rem] w-0.5 bg-primary/30 group-hover:bg-primary/60 transition-colors" />
                                )}
                                <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--accent-glow)/0.5)] group-hover:scale-125 transition-transform" />

                                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-3">
                                    <Calendar className="w-4 h-4 flex-shrink-0" />
                                    <span>{talk.date}</span>
                                </div>

                                <Card className="project-card overflow-hidden cursor-pointer">
                                    <div className="flex flex-col sm:flex-row gap-5">
                                        <div className="relative overflow-hidden rounded-lg aspect-video sm:aspect-square sm:w-48 flex-shrink-0">
                                            <img
                                                src={talk.image}
                                                alt={talk.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium text-primary-foreground">
                                                    <TypeIcon className="w-3.5 h-3.5" />
                                                    {t.talkBadges[talk.type]}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0 py-1">
                                            <h3 className="text-xl font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                                                {talk.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-2">
                                                {talk.event}
                                            </p>
                                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                                <span>{talk.location}</span>
                                            </div>
                                            <p className="text-foreground/80 text-sm line-clamp-2 mb-3">
                                                {talk.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {talk.topics.slice(0, 3).map((topic) => (
                                                    <span
                                                        key={topic}
                                                        className="tech-badge text-xs"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-4 pt-4 border-t border-border/50">
                                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            {t.talks.learnMore}
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
