import { TeamMemberssService } from "@/shared/services/team-members.service";
import TeamMemberCard from "./team-member-card";
import { ISection } from "@/shared/models/page/section.model";

export default async function TeamMembers(params: { section: ISection, locale: string }) {
  const { locale, section } = params;
  const membersService = new TeamMemberssService();
  const members = await membersService.getTeamMembers(parseInt(process.env.NEXT_PUBLIC_TEAM_MEMBERS_COUNT ?? '6') ?? 6, locale);
  return (
    <div className="team-members">
      <div className="bg"></div>
      <div className="wrapper container">
      <h2 className="title">{section.data?.title}</h2>
        <div className="cards">
          {members &&
            members.map((item) => (
              <TeamMemberCard key={item.id} member={item} locale={locale}></TeamMemberCard>
            ))}
        </div>
      </div>
    </div>
  );
}