import React from 'react'
import { Heading, Flex, Text, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
// import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
// import useSWRImmutable from 'swr/immutable'
// import IconCard, { IconCardData } from '../IconCard'
// import StatCardContent from './StatCardContent'
// import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  // const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  // const { data: txCount } = useSWRImmutable('totalTx30Days')
  // const { data: addressCount } = useSWRImmutable('addressCount30Days')
  // const trades = formatLocalisedCompactNumber(txCount)
  // const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over  in funds.')
  // const [entrusting, inFunds] = tvlText.split(tvlString)

  // const UsersCardData: IconCardData = {
  //   icon: <CommunityIcon color="secondary" width="36px" />,
  // }

  // const TradesCardData: IconCardData = {
  //   icon: <SwapIcon color="primary" width="36px" />,
  // }

  // const StakedCardData: IconCardData = {
  //   icon: <ChartIcon color="failure" width="36px" />,
  // }
  

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image src="https://swap.nowbanq.com/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png" width={100} height={100} />
      <Heading textAlign="center" scale="xl">
        {t('Used by millions.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Trusted with billions.')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('NowBanq has the most users of any decentralized platform, ever.')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
         
          <>{tvlText}</>
          
        </Text>
      </Flex>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text>

      {/* <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%users% users', { users })}
            bodyText={t('in the last 30 days')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%trades% trades', { trades })}
            bodyText={t('made in the last 30 days')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('$%tvl% staked', { tvl: tvlString })}
            bodyText={t('Total Value Locked')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex> */}
    </Flex>
  )
}

export default Stats
