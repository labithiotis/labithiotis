import { Media, MediaTypes } from './GalleryGrid';

export enum Groups {
  websites = 'Websites',
  mobileApps = 'Mobile Apps',
  games = 'Games',
  fx = '3D',
}

export const media: Media[] = [
  {
    type: MediaTypes.image,
    group: Groups.mobileApps,
    caption: 'Star Citizen Field Guide Ships',
    source: { regular: './images/apps/star_citizen_app_ship.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.mobileApps,
    caption: 'Star Citizen Field Guide System',
    source: { regular: './images/apps/star_citizen_app_systems.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.mobileApps,
    caption: '',
    source: { regular: './images/apps/star_citizen_app_gallery.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.mobileApps,
    caption: 'Star Citizen Field Guide Comm Link',
    source: { regular: './images/apps/star_citizen_app_commlink.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.mobileApps,
    caption: 'Star Citizen Field Guide About Screen',
    source: { regular: './images/apps/star_citizen_app_about.jpg' },
  },

  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/triptease/tt_platform_home.png' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/triptease/tt_platform_messages.png' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/triptease/tt_platform_messages_builder.png' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/triptease/tt_messages.png' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/triptease/tt_platform_parity_dashboard.png' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/triptease/tt_platform_parity_disparities_2.png' },
  },


  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/boppl.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/boppl_admin_1.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/boppl_admin_2.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/boppl_admin_3.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/boppl_venues.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/prism_digital_1.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/prism_digital_2.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/prism_digital_3.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/simply_sleep_time.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.websites,
    caption: '',
    source: { regular: './images/websites/winops.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/princessandfrog.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/treasures.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/jubjub.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/g5.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/babyspencer.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/adrenalingames.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/donethat.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/scoobydoo.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/tangrams.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/wordcracker.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/hex.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/chowder.jpg' },
  },
  {
    type: MediaTypes.video,
    group: Groups.fx,
    caption: '',
    source: {
      regular: 'https://img.youtube.com/vi/vdPxVP7Mfec/0.jpg',
      url: 'https://youtu.be/vdPxVP7Mfec',
    },
  },
  {
    type: MediaTypes.image,
    group: Groups.fx,
    caption: '',
    source: { regular: './images/art/fyp_city.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.fx,
    caption: '',
    source: { regular: './images/art/lighting1.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.fx,
    caption: '',
    source: { regular: './images/art/lighting2.jpg' },
  },
  {
    type: MediaTypes.video,
    group: Groups.fx,
    caption: '',
    source: {
      regular: 'https://img.youtube.com/vi/BkMrVkC7JLU/0.jpg',
      url: 'https://youtu.be/BkMrVkC7JLU',
    },
  },
  {
    type: MediaTypes.image,
    group: Groups.fx,
    caption: '',
    source: { regular: './images/art/lowpolyseen2.jpg' },
  },
  {
    type: MediaTypes.video,
    group: Groups.fx,
    caption: '',
    source: {
      regular: 'https://img.youtube.com/vi/PuP9d-Sdt5w/0.jpg',
      url: 'https://youtu.be/PuP9d-Sdt5w',
    },
  },
  {
    type: MediaTypes.video,
    group: Groups.fx,
    caption: '',
    source: {
      regular: 'https://img.youtube.com/vi/Z_phgn1_MKQ/0.jpg',
      url: 'https://youtu.be/Z_phgn1_MKQ',
    },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/dawning.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/thestrip.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/quicksand.jpg' },
  },
  {
    type: MediaTypes.image,
    group: Groups.games,
    caption: '',
    source: { regular: './images/art/monstermunch.jpg' },
  },
];
