import { LanguageObject } from '@/shared/models/languange-object.model';
import { ITeamMember } from '@/shared/models/team-member.model';
import Image from 'next/image';

export default function TeamMemberCard(params: { member: ITeamMember; locale: string }) {
  const { member, locale } = params;
  return <div className="team-member-card">

    <Image className="image" src={member.image} width={300} height={300} alt={LanguageObject.getValue(member.name, locale)} />
    <h2 className='name'>{LanguageObject.getValue(member.name, locale)}</h2>
    <p className="position">{LanguageObject.getValue(member.position, locale)}</p>

  </div>;
}
