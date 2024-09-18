import google_bg_img from './google_bg_img.png';
import icloud_bg_img from './icloud_bg_img.png';
import youtube_bg_img from './youtute_bg_img.png';
import google_logo from './google_logo.png';
import apple_cloud_logo from './apple_icloud_logo.png';
import youtube_logo from './yotube_logo.png';

import howitwork_bg_img from './howitwork_bg.png';

export const SERVICES_BG_IMAGES = {
  google: google_bg_img,
  icloud: icloud_bg_img,
  youtube: youtube_bg_img,
} as const;

export const SERVICES_LOGOS = {
  google: google_logo,
  icloud: apple_cloud_logo,
  youtube: youtube_logo,
} as const;

export {
  howitwork_bg_img,
  youtube_logo,
}