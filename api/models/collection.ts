export enum CollectionCategory {
  WEARABLES = 'WEARABLES',
  SPORTS = 'SPORTS',
  ART = 'ART',
  COLLECTIBLES = 'COLLECTIBLES',
  DOMAIN_NAMES = 'DOMAIN NAMES',
  MUSIC = 'MUSIC',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  FASHION = 'FASHION',
  GAMING = 'GAMING',
  UTILITY = 'UTILITY',
  REAL_ESTATE = 'REAL ESTATE',
  CARTOONS = 'CARTOONS',
  GIFT_CARDS = 'GIFT CARDS'
}

export const CollectionCategoryImages = {
  WEARABLES: '/images/Wearables.jpg',
  SPORTS: '/images/Sport.jpg',
  ART: '/images/Art.jpg',
  COLLECTIBLES: '/images/Collectibles.jpg',
  'DOMAIN NAMES': '/images/Domain.jpg',
  MUSIC: '/images/Music.png',
  PHOTOGRAPHY: '/images/photography.jpg',
  FASHION: '/images/Fashion.jpg',
  GAMING: '/images/Gaming.jpg',
  UTILITY: '/images/Utility.jpg',
  'REAL ESTATE': '/images/Real-Estate.jpg',
  CARTOONS: '/images/Cartoon.jpg',
  'GIFT CARDS': '/images/Gift_Card.jpg'
};

export type CollectionMetadata = {
  name: string;
  category: CollectionCategory;
  imageURI: string;
  bannerURI: string;
  symbol: string;
  owner: string;
  description: string;
  hasExplicitContent: boolean;
};

export interface CollectionModel {
  collectionName: string;
  collectionCategory: CollectionCategory;
  metadata: CollectionMetadata;
  collectionId: string;
  timeStamp: number;
  collectionSymbol: string;
  collectionOwner: string;
  collectionURI: string;
  network: string;
  id: number;
  floorPrice?: number;
}
