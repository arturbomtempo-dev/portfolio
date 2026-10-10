import { Mail } from '@lucide/vue';
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandYoutube,
} from '@tabler/icons-vue';
import { PROFILE } from '~/data/profile';
import type { SocialLink } from '~/types/social';

export const SOCIAL_LINKS: SocialLink[] = [
    {
        labelKey: 'social.github',
        href: 'https://github.com/arturbomtempo-dev',
        icon: IconBrandGithub,
        hoverClass: 'hover:text-primary',
    },
    {
        labelKey: 'social.linkedin',
        href: 'https://www.linkedin.com/in/artur-bomtempo/',
        icon: IconBrandLinkedin,
        hoverClass: 'hover:text-blue-500',
    },
    {
        labelKey: 'social.email',
        href: `mailto:${PROFILE.email}`,
        icon: Mail,
        hoverClass: 'hover:text-red-500',
    },
    {
        labelKey: 'social.instagram',
        href: 'https://www.instagram.com/arturbomtempo.dev/',
        icon: IconBrandInstagram,
        hoverClass: 'hover:text-pink-500',
    },
    {
        labelKey: 'social.youtube',
        href: 'https://www.youtube.com/@ArturBomtempoDev',
        icon: IconBrandYoutube,
        hoverClass: 'hover:text-red-600',
    },
];
