export type Work = {
  title: string;
  category: 'Illustration' | 'Design' | 'Web';
  description: string;
  image: string;
};

export const works: Work[] = [
  {
    title: 'Seasonal Illustration',
    category: 'Illustration',
    description: '季節の空気感を大切にしたイラスト制作。',
    image: '/assets/work-illustration.svg',
  },
  {
    title: 'Brand Visual Design',
    category: 'Design',
    description: '小さなブランド向けのビジュアル設計。',
    image: '/assets/work-design.svg',
  },
  {
    title: 'Portfolio Website',
    category: 'Web',
    description: 'シンプルで更新しやすいWebサイト制作。',
    image: '/assets/work-web.svg',
  },
];
