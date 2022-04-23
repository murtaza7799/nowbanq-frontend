import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://nowbanq.com/contact',
      },
      {
        label: t('Brand'),
        href: 'https://nowbanq.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://nowbanq.com/blog',
      },
      {
        label: t('Community'),
        href: 'https://nowbanq.com/community',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://nowbanq.com/support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://nowbanq.com/troubleshoot',
      },
      {
        label: t('Guides'),
        href: 'https://nowbanq.com/guides',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://nowbanq.com/github',
      },
      {
        label: t('Documentation'),
        href: 'https://nowbanq.com/documentation',
      },

      {
        label: t('Careers'),
        href: 'https://nowbanq.com/career',
      },
    ],
  },
]
