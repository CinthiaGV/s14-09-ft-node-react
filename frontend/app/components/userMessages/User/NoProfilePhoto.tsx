import { INoProfilePhoto } from '../interfaces';

export default function NoProfilePhoto({ name }: INoProfilePhoto) {
  return (
    <div className="avatar-pseudo">
      <span className="initial">{name[0]}</span>
    </div>
  );
}
