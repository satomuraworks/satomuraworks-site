import { WorksSection } from './WorksSection';
import { works } from '../data/works';

type WorksProps = {
  showHeading?: boolean;
};

export function Works({ showHeading = true }: WorksProps) {
  return (
    <WorksSection
      works={works}
      className={showHeading ? '' : 'gallery-list-section'}
      heading={
        showHeading
          ? {
              label: '',
              title: '作品一覧',
              description: '掲載作品の一覧です。',
            }
          : undefined
      }
    />
  );
}
