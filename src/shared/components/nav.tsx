'use client';
import Link from 'next-intl/link';
import Image from 'next/image';
import { Fragment, useEffect, useRef } from 'react';
import LanguageSwitcher from './language-switcher';
import { IMenuItem } from '../models/menu-item';
import { usePathname } from 'next/navigation';

export default function Nav(params: { menu: IMenuItem[]; locale: string }) {
  const path = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuMobileTriggerRef = useRef<HTMLButtonElement>(null);
  let subMenu: any;
  useEffect(() => {
    const header = headerRef.current;
    const overlay = overlayRef.current;
    const menuEl = menuRef.current;
    const menuMobileTrigger = menuMobileTriggerRef.current;
    let menuMobileHeader: any;
    let menuMobileTitle: any;
    if (menuEl) {
      menuMobileHeader = menuEl.querySelector('.menu-mobile-header');
      menuMobileTitle = menuEl.querySelector('.menu-mobile-title');
    }
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (header) {
        if (currentScroll > 100) {
          header.classList.add('scroll-down');
        } else {
          header.classList.remove('scroll-down');
        }
      }
    };

    const toggleMenu = () => {
      if (!menuEl || !overlay) {
        return;
      }
      menuEl.classList.toggle('active');
      overlay.classList.toggle('active');
    };

    const showSubMenu = (hasChildren: any) => {
      if (menuEl) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        subMenu = hasChildren.querySelector('.menu-subs');
        subMenu.classList.add('active');
        subMenu.style.animation = 'slideLeft 0.5s ease forwards';
        const anchor = hasChildren.querySelector('a');
        const menuTitle = anchor.textContent;
        // const menuTitle =
        //   hasChildren.querySelector('ion-icon').parentNode.childNodes[0].textContent;
        if (menuMobileTitle) {
          menuMobileTitle.innerHTML = menuTitle;
        }
        if (menuMobileHeader) {
          menuMobileHeader.classList.add('active');
        }
      }
    };

    const hideSubMenu = () => {
      if (subMenu) {
        subMenu.style.animation = 'slideRight 0.5s ease forwards';
        setTimeout(() => {
          subMenu.classList.remove('active');
        }, 300);
      }
      if (menuMobileTitle) {
        menuMobileTitle.innerHTML = '';
      }
      if (menuMobileHeader) {
        menuMobileHeader.classList.remove('active');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    if (menuEl) {
      const menuSection = menuEl.querySelector('.menu-section');
      const menuArrow = menuEl.querySelector('.menu-mobile-arrow');
      const menuClosed = menuEl.querySelector('.menu-mobile-close');
      if (menuSection) {
        menuSection.addEventListener('click', (e: { target: any }) => {
          if (!menuEl.classList.contains('active')) {
            return;
          }

          if (e.target.closest('.menu-item-has-children')) {
            const hasChildren = e.target.closest('.menu-item-has-children');
            showSubMenu(hasChildren);
          }
        });
      }
      if (menuArrow) {
        menuArrow.addEventListener('click', () => {
          hideSubMenu();
        });
      }
      if (menuMobileTrigger) {
        menuMobileTrigger.addEventListener('click', () => {
          toggleMenu();
        });
      }

      if (menuClosed) {
        menuClosed.addEventListener('click', () => {
          toggleMenu();
        });
      }
      if (overlay) {
        overlay.addEventListener('click', () => {
          toggleMenu();
        });
      }
    }
  }, [headerRef, overlayRef, menuRef, menuMobileTriggerRef, subMenu]);

  const activeClass = (state: string) => {
    return path.replaceAll('/ar/', '/') === `/${state}` ? 'active' : '';
  };

  const hasChildren = (item: IMenuItem) => {
    return item.children && item.children.length > 0;
  };


  return (
    <header ref={headerRef} className="header">
      <div className="container mx-auto px-4">
        <div className="wrapper">
          <div className="header-item-left">
            <h1>
              <Link href={"/"} className="brand" />
            </h1>
          </div>

          <div className="header-item-center">
            <div ref={overlayRef} className="overlay"></div>
            <nav className="menu" ref={menuRef}>
              <div className="menu-mobile-header">
                <button type="button" className="menu-mobile-arrow back">
                  {/* <ion-icon name="chevron-back-outline"></ion-icon> */}
                </button>
                <div className="menu-mobile-title"></div>
                <button type="button" className="menu-mobile-close">
                  {/* <ion-icon name="close-outline"></ion-icon> */}
                </button>
              </div>

              <ul className="menu-section">
                {params.menu?.map((item) => (
                  <li key={item.id} className={hasChildren(item) ? 'menu-item-has-children' : ''}>
                    <Link
                      className={activeClass(item.state === 'home' ? '' : item.state)}
                      href={
                        item.type === 'link' ? (item.state === 'home' ? '/' : `/${item.state}`) : ''
                      }>
                      {item.title}
                      {hasChildren(item) && <span className="down_arrow"></span>}
                    </Link>
                    {item.children?.length && item.children?.length > 0 && (
                      <div className="menu-subs menu-column-1">
                        <div className="arrow"></div>
                        <ul>
                          {item.children.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                className={activeClass(`${item.state}/${sub.state}`)}
                                href={`/${item.state}/${sub.state}`}>
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.children && item.children.length > 0 && item.type == 'mega' && (
                      <Fragment>
                        <div className="menu-subs menu-mega menu-column-4"></div>
                        <div className="arrow"></div>
                        {item.children.map((sub) => (
                          <div key={sub.id} className="list-item">
                            <h4 className="title"></h4>
                            <ul>
                              {sub.children?.map((m) => (
                                <li key={m.id}>
                                  <Link href={`${item.state}/${sub.state}/${m.state}`}>
                                    {m.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Fragment>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header-item-right">
            <LanguageSwitcher locale={params.locale} />
            <Image
              src="/images/icons/icon_search.svg"
              width={20}
              height={20}
              alt="Search"
              className="mx-4"
            />
            <button type="button" ref={menuMobileTriggerRef} className="menu-mobile-trigger">
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
