import { Select, SelectProps } from 'antd';
import cn from 'classnames';

export function MySelect(props: SelectProps) {
  return (
    <Select {...props} className={cn(props.className, 'w-full')} />
  );
}