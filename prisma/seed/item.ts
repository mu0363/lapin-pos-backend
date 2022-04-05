import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const item = async () => {
  await prisma.item.createMany({
    data: [
      {
        itemName: '鏡月',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/kyogetsu.jpg',
        categoryId: 1,
        price: 3000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: '鍛高譚(しそ)',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/tantakatan_shiso.jpg',
        categoryId: 1,
        price: 3000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: '黒霧島(芋)',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/kurokirishima.jpg',
        categoryId: 1,
        price: 4000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'いいちこ黒瓶(麦)',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/iichiko.jpg',
        categoryId: 1,
        price: 5000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: '吉四六(麦)',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/kichomu.jpg',
        categoryId: 1,
        price: 7000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: '鍛高譚 梅酒',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/tantakatan_umeshu.jpg',
        categoryId: 2,
        price: 3000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'CHOYA 梅酒',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/choya_umeshu.jpg',
        categoryId: 2,
        price: 5000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'I.W. ハーパーゴールドメダル',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/iw_harper_gold_medal.jpg',
        categoryId: 3,
        price: 6000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'ジャックダニエル',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/jack_daniels.jpg',
        categoryId: 3,
        price: 7000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'バランタイン 12年',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/ballantines_12years.jpg',
        categoryId: 3,
        price: 8000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: '竹鶴',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/taketsuru.jpg',
        categoryId: 3,
        price: 12000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'I.W.ハーパー 12年',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/iw_harper_12years.jpg',
        categoryId: 3,
        price: 18000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Café de Paris',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/cafe_de_paris.jpg',
        categoryId: 4,
        price: 10000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Moët & Chandon',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/moet_chandon.jpg',
        categoryId: 4,
        price: 22000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Moët & Chandon Rosé',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/moet_chandon_rose.jpg',
        categoryId: 4,
        price: 28000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Veuve Clicquot Yellow',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/veuve_clicquot_yellow.jpg',
        categoryId: 4,
        price: 30000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Veuve Clicquot Rosé',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/veuve_clicquot_rose.jpg',
        categoryId: 4,
        price: 40000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Domperignon Vintage',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/domperignon_vintage.jpg',
        categoryId: 4,
        price: 100000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'Domperignon Rosé',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/domperignon_rose.jpg',
        categoryId: 4,
        price: 180000,
        stock: 1,
        cost: 1500,
      },
      {
        itemName: 'エスプレッソ',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/espresso.jpg',
        categoryId: 5,
        price: 500,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'レギュラーコーヒー',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/regular_coffee.jpg',
        categoryId: 5,
        price: 550,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'カフェ・ジャポーネ',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/cafe_japones.jpg',
        categoryId: 5,
        price: 600,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'カプチーノ',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/cappuccino.jpg',
        categoryId: 5,
        price: 660,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'グラスビール',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/beer.jpg',
        categoryId: 5,
        price: 1000,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'オリジナルグラスビール',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/beer.jpg',
        categoryId: 6,
        price: 500,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'ソフトドリンク',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/soft_drink.jpg',
        categoryId: 6,
        price: 500,
        stock: 1,
        cost: 0,
      },
      {
        itemName: 'ジュース類',
        itemUrl:
          'https://storage.googleapis.com/lapin-pos-storage/item/juice.jpg',
        categoryId: 7,
        price: 1500,
        stock: 1,
        cost: 0,
      },
    ],
  });
};
