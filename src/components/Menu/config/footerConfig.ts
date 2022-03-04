import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'http://nowbanq.com/contact',
      },
      {
        label: t('Brand'),
        href: 'http://nowbanq.com/brand',
      },
      {
        label: t('Blog'),
        href: 'http://nowbanq.com/blog',
      },
      {
        label: t('Community'),
        href: 'http://nowbanq.com/community',
      },
  
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'http://nowbanq.com/support',
      },
      {
        label: t('Troubleshooting'),
        href: 'http://nowbanq.com/troubleshoot',
      },
      {
        label: t('Guides'),
        href: 'http://nowbanq.com/guides',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'http://nowbanq.com/github',
      },
      {
        label: t('Documentation'),
        href: 'http://nowbanq.com/documentation',
      },
     
      {
        label: t('Careers'),
        href: 'http://nowbanq.com/career',
      },
    ],
  },
]
