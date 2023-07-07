import Link from 'next/link';
import Image  from 'next/image';
import { MenuService } from "@/shared/services/menu.service"
import { Fragment } from 'react';

export default async function Nav() {
  const service = new MenuService();
  const menu = await service.getMainMenu();
  return (

    <header id="header" className="header">
  <div className="container mx-auto px-4">
    <div className="wrapper">
      <div className="header-item-left">
        <h1>
          <Link href="/" className="brand"/>
        </h1>
      </div>

      <div className="header-item-center">
        <div id="overlay" className="overlay"></div>
        <nav className="menu" id="menu">
          <div className="menu-mobile-header">
            <button type="button" className="menu-mobile-arrow">
              {/* <ion-icon name="chevron-back-outline"></ion-icon> */}
            </button>
            <div className="menu-mobile-title"></div>
            <button type="button" className="menu-mobile-close">
              {/* <ion-icon name="close-outline"></ion-icon> */}
            </button>
          </div>

              <ul className="menu-section">
                {menu?.map(item => <li key={item.id}
                className={item.children && item.children.length > 0 ? 'menu-item-has-children' : ''}
                >
                  <Link href={item.type === 'link' ? item.state === 'home' ? '/' : `/${item.state}` : ''}>
                    {item.title}
                    {item.children?.length && item.children?.length > 0 && <span>%</span>}
                  </Link>
                  {item.children?.length && item.children?.length > 0 &&
                    <div className="menu-subs menu-column-1">
                      <div className="arrow"></div>
                      <ul>
                        {item.children.map(sub => <li key={sub.id}>
                          <Link href={`/${item.state}/${sub.state}`}>{sub.title}</Link>
                        </li>)}
                      </ul>
                  </div>
                  }
                  {item.children &&
                  item.children.length > 0 &&
                    item.type == 'mega' &&
                    <Fragment>
                    <div className='menu-subs menu-mega menu-column-4'></div>
                      <div className="arrow"></div>
                      {item.children.map(sub => <div key={sub.id} className='list-item'>
                        <h4 className='title'></h4>
                        <ul>
                          {sub.children?.map(m => <li key={m.id}><Link href={`${item.state}/${sub.state}/${m.state}`}>{ m.title}</Link></li>)}
                        </ul>
                     </div>)}
                      </Fragment>
                  }
                </li>)}
              </ul>
            </nav>
            </div>






      <div className="header-item-right">
        {/* <app-language-switcher></app-language-switcher> */}
        <Image src="/images/icons/icon_search.svg" width={20} height={20} alt='Search' className="mx-4" />
        <button type="button" id="menuMobileTrigger" className="menu-mobile-trigger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</header>

  );
}