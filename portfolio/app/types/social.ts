import type { Component } from 'vue';

export interface SocialLink {
    labelKey: string;
    href: string;
    icon: Component;
    hoverClass: string;
}
