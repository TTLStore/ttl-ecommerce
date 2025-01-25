import google_bg_img from './service_backgrounds/google_bg_img.png';
import icloud_bg_img from './service_backgrounds/icloud_bg_img.png';
import youtube_bg_img from './service_backgrounds/youtube_bg_img.png';
import google_logo from './google_logo.png';
import apple_cloud_logo from './apple_icloud_logo.png';
import youtube_logo from './yotube_logo.png';

import howitwork_bg_img from './howitwork_bg.png';

import brand_vn from './read_about_us/brand_vn.svg';
import cafe_biz from './read_about_us/cafe_biz.svg';
import genk_logo from './read_about_us/genk_logo.svg';

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

export const READ_ABOUT_US = [
  brand_vn,
  cafe_biz,
  genk_logo,
 ] as const;