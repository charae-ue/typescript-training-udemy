import { ChildAsFc } from './Child';

export default function Parent() {
  return (
    <ChildAsFc name="Abu" onClick={() => console.log('Clicked')}>
      test
    </ChildAsFc>
  );
}
