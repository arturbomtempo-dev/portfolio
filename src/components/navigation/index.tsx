import { LanguageSelect } from '@/components/language-select';
import { NavLink } from '@/components/nav-link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navItems = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.projects, path: '/projects' },
        // { name: t.nav.talks, path: '/talks' }, // TODO: reativar quando a página de palestras estiver pronta
        { name: t.nav.content, path: '/contents' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <NavLink
                        to="/"
                        className="text-xl font-heading font-bold text-foreground hover:text-primary transition-colors"
                    >
                        <span className="glow-text">
                            {t.nav.logo}
                            <span className="text-primary">.</span>
                        </span>
                    </NavLink>

                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className="nav-link text-sm font-medium"
                                activeClassName="nav-link-active"
                                end={item.path === '/'}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            <LanguageSelect />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <LanguageSelect />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in border-t border-border/50 max-w-xs mx-auto">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className="nav-link-mobile text-sm font-medium"
                                    activeClassName="nav-link-mobile-active"
                                    onClick={() => setIsMenuOpen(false)}
                                    end={item.path === '/'}
                                >
                                    <span className="nav-link-mobile-label">{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
