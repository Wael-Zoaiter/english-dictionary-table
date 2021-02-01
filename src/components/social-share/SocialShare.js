import React from 'react';
import {
  TelegramShareButton,
  WhatsappShareButton,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share';

import { SocialShareWrapper } from './social-share.style';


export const SocialShare = () => {
  return (
    <SocialShareWrapper>
      <TelegramShareButton url={window.location.href}>
        <TelegramIcon />
      </TelegramShareButton>
      <WhatsappShareButton url={window.location.href}>
        <WhatsappIcon />
      </WhatsappShareButton>
    </SocialShareWrapper>
  )
}
