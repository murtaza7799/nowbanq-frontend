import React from 'react'
import { Image, Svg, SvgProps } from '@pancakeswap/uikit'


const GradientLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <Image src="./../../../../public/images/help.png" width={30} height={30} />
    </Svg>
  )
}

export default GradientLogo
