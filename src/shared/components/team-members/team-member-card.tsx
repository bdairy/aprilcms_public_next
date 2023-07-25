
import { ITeamMember } from '@/shared/models/team-member.model';
import Image from 'next/image';

export default function TeamMemberCard(params: { member: ITeamMember; locale: string }) {
  const { member, locale } = params;
  return <div className="team-member-card">

    <Image className="image" src={member.image} width={300} height={300} alt={member.name} />
    <h2 className='name'>{member.name}</h2>
    <p className="position">{member.position}</p>

  </div>;
}
