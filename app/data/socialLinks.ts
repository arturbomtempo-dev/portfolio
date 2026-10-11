import { Mail } from '@lucide/vue';
import { IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-vue';
import { PROFILE } from '~/data/profile';
import type { SocialLink } from '~/types/social';
import { IconBrandLinkedinLetters } from '~/utils/brandIcons';

export const SOCIAL_LINKS: SocialLink[] = [
    {
        labelKey: 'social.github',
        href: GITHUB_PROFILE_URL,
        icon: IconBrandGithub,
        hoverClass: 'hover:text-primary',
    },
    {
        labelKey: 'social.linkedin',
        href: 'https://www.linkedin.com/in/artur-bomtempo/',
        icon: IconBrandLinkedinLetters,
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
