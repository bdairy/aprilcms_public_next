import Nav from "@/shared/components/nav";
import { MenuService } from "@/shared/services/menu.service";
import Link from "next/link";

export default async function NotFound(params: { locale: string }) {
  const menuService = new MenuService();
  const menu = await menuService.getMainMenu(params.locale);
  return (
    <>
      <Nav menu={menu ?? []} locale={params.locale} />
      <div className="grid place-items-center text-center my-20">
        <div>
          <h2 className="text-2xl">Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/" className="text-primary-500 font-semibold">Return Home</Link>
        </div>
      </div>
    </>
  );
}
