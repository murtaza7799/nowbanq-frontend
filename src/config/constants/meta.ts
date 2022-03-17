import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NowBanq',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by NowBanq), NFTs, and more, on a platform you can trust.',
  image: 'https://NowBanq/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('NowBanq')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('NowBanq')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('NowBanq')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('NowBanq')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('NowBanq')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('NowBanq')}`,
      }

    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('NowBanq')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('NowBanq')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('NowBanq')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('NowBanq')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('NowBanq')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('NowBanq')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('NowBanq')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('NowBanq')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('NowBanq')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('NowBanq')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('NowBanq')}`,
      }

    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('NowBanq')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('NowBanq')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('NowBanq')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('NowBanq')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('NowBanq')}`,
      }
    default:
      return null
  }
}
